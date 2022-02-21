import * as React from "react"
import { graphql } from "gatsby"
import Link from "../components/Link"
import styled from "styled-components"

import Bio from "../components/Bio"
import Layout from "../wrappers/Layout"
import Seo from "../wrappers/Seo"

const ArticleWrapper = styled.div`
  @media (min-width: 1024px) {
    width: 75%;
    padding: 4em;
  }

  @media (max-width: 1023px) {
    width: 90%;
    padding: 2em;
  }
  margin: var(--spacing-0) auto;
  box-shadow: 3px 8px 20px 1px rgb(138 77 15 / 55%);
  background: rgba(229, 215, 188, 30%);
  filter: url(#wavy2);
`

const ArticleContent = styled.article`
  @media (min-width: 768px) {
    max-width: 550px;
    margin-left: 5%;
  }

  @media (max-width: 767px) {
    max-width: 550px;
  }
`

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <ArticleWrapper>
        <ArticleContent
          className="blog-post"
          itemScope
          itemType="http://schema.org/Article"
        >
          <header>
            <h1 itemProp="headline">{post.frontmatter.title}</h1>
            <p>{post.frontmatter.date}</p>
          </header>
          <section
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
          />
          <hr />
          <footer>
            <Bio subject={`"${post.frontmatter.title}" - My Thoughts`} />
          </footer>
        </ArticleContent>
        <nav className="blog-post-nav">
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </ArticleWrapper>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`

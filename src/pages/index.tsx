import * as React from "react"
import { graphql } from "gatsby"
import Link from "../components/Link"

import Layout from "../wrappers/Layout"
import Seo from "../wrappers/Seo"

import styled from "styled-components"

import { StaticImage } from "gatsby-plugin-image"

const Intro = styled.div`
  margin-bottom: 0px;
  padding: 50px;
  padding-top: 150px;
  display: flex;
  align-items: center;
  background-color: #d1dce5;
  gap: 30px;
`

const IntroTitle = styled.div`
  max-width: 65%;
`

const ArticlesContainer = styled.div`
  padding: 50px;
`

const Articles = styled.ol`
  list-style: none;
  display: flex;
  gap: 30px;
`

const Article = styled.li`
  width: 25%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding: 25px;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`

const AboutMe = styled.div`
  padding: 50px;
  display: flex;
  align-items: center;
  background-color: #d1dce5;
  gap: 30px;
`

const IntroSubtitle = styled.h2`
  font-size: var(--fontSize-3);
`

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <Intro>
        <IntroTitle>
          <h1>Welcome to my space</h1>
          <IntroSubtitle>
            here with this blog, people who love playing music – no matter what
            instrument or style – are free to engage in deep and thoughtful
            conversations about it, without ever having to worry that they’ll be
            asked to perform or ‘show’ others what they can do.
          </IntroSubtitle>
          <Link inverted={true} href={``} className="it">
            What I want for music
          </Link>
        </IntroTitle>
        <StaticImage
          //className="bio-avatar"
          //layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../images/logo.png"
          //width={50}
          //height={50}
          quality={95}
          alt="Profile picture"
        />
      </Intro>
      <ArticlesContainer>
        <h2>Discover my writing</h2>
        <Articles style={{ listStyle: `none`, display: "flex" }}>
          {posts.length > 0 &&
            posts.slice(0, 2).map(post => {
              const title = post.frontmatter.title || post.fields.slug

              return (
                <Article key={post.fields.slug}>
                  <article itemScope itemType="http://schema.org/Article">
                    <header>
                      <h3 style={{ margin: "0px" }}>
                        <Link to={post.fields.slug} itemProp="url">
                          <span itemProp="headline">{title}</span>
                        </Link>
                      </h3>
                      <small>{post.frontmatter.date}</small>
                    </header>
                    <section>
                      <p>{post.frontmatter.description || post.excerpt}</p>
                    </section>
                  </article>
                </Article>
              )
            })}
        </Articles>
      </ArticlesContainer>

      <AboutMe>
        <StaticImage
          //className="bio-avatar"
          //layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../images/logo.png"
          //width={50}
          //height={50}
          quality={95}
          alt="Profile picture"
        />
        <h2>About Me</h2>
      </AboutMe>

      <footer>© {new Date().getFullYear()}, Illanor Music Blog</footer>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`

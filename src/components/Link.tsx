import * as React from "react"
import { Link as GLink } from "gatsby"
import styled from "styled-components"

interface ILinkProps {
  href?: string
  onClick?: () => void
  to?: string
  itemProp?: string
  rel?: string
  className?: string
}

const Link: React.FC<ILinkProps> = ({
  href,
  onClick,
  to,
  itemProp,
  rel,
  className,
  children,
}) => {
  if (to) {
    return (
      <GLink className={className} to={to} itemProp={itemProp} rel={rel}>
        {children}
      </GLink>
    )
  }
  return (
    <a href={href} onClick={onClick} className={className}>
      {children}
    </a>
  )
}

export default Link

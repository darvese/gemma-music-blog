import { createGlobalStyle } from "styled-components"
import { colors } from "../styles"

interface Props {
  theme: string
}

const GlobalStyle = createGlobalStyle<Props>`
*,
:after,
:before {
  box-sizing: border-box;
}

html {
  line-height: var(--lineHeight-normal);
  font-size: var(--fontSize-root);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: var(--font-body);
  font-size: var(--fontSize-1);
  color: ${props => colors[props.theme].text.default};
  background: ${props => colors[props.theme].background};
}

footer {
  padding: var(--spacing-6) var(--spacing-0);
}

hr {
  background: ${props => colors[props.theme].accent};
  height: 1px;
  border: 0;
}

/* Heading */

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--font-heading);
  //margin-top: var(--spacing-12);
  margin-bottom: var(--spacing-6);
  line-height: var(--lineHeight-tight);
  letter-spacing: -0.025em;
}

h2,
h3,
h4,
h5,
h6 {
  font-weight: var(--fontWeight-bold);
  color:  ${props => colors[props.theme].heading};
}

h1 {
  font-weight: var(--fontWeight-black);
  font-size: var(--fontSize-6);
  color:  ${props => colors[props.theme].heading};
}

h2 {
  font-size: var(--fontSize-5);
}

h3 {
  font-size: var(--fontSize-4);
}

h4 {
  font-size: var(--fontSize-3);
}

h5 {
  font-size: var(--fontSize-2);
}

h6 {
  font-size: var(--fontSize-1);
}

h1 > a {
  color: inherit;
  text-decoration: none;
}

h2 > a,
h3 > a,
h4 > a,
h5 > a,
h6 > a {
  text-decoration: none;
  color: inherit;
}


a:not(.animationless) {
cursor: pointer;
  font-size: 18px;
  position: relative;
  white-space: nowrap;
  color: ${props => colors[props.theme].primary};
  font-weight: var(--fontWeight-bold);
  text-decoration: none;

  &:before,
  &:after {
    position: absolute;
    width: 100%;
    height: 1px;
    background: currentColor;
    top: 100%;
    left: 0;
    pointer-events: none;
  }

  &:before {
    content: "";
    /* show by default */
  }

  &:before {
    transform-origin: 100% 50%;
    transform: scale3d(0, 1, 1);
    transition: transform 0.3s;
  }

  &:hover:before {
    transform-origin: 0% 50%;
    transform: scale3d(1, 1, 1);
  }
}
`

export default GlobalStyle

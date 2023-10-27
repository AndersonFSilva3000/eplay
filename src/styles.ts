import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#eee',
  black: '#111',
  gray: '#333',
  green: '#10AC84',
  whiteGray: '#A3A3A3'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px',
  mobile: '425px'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${colors.black};
    color: ${colors.white};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    margin-top: 40px;

    @media (max-width: ${breakpoints.desktop}){
      width: 80%;
    }
  }
`
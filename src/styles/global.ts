import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body {
        background: #1A1D1E;
        color: #F0F0F5;
        -webkit-font-smoothing: antialiased;
        font-family: Arial,sans-serif;
        font-size: 16px;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 500;
    }

    button {
        cursor: pointer;
    }
`
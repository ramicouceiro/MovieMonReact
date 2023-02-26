import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
  --bg-color: linear-gradient( 90deg, rgba(40, 52, 75, 1) 0%, rgba(34, 40, 61, 1) 100%);
  --nav-color: #22283d;
  --card-color: #2a334d;
  --white-main: #ffffff;
  --btn-color: #52a9cc;
  --btn-hover: #72b8d4;
  --page-btn-color: #6d7286;
  --thin: 100;
  --light: 300;
  --regular: 400;
  --medium: 500;
  --bold: 700;
}
::-webkit-scrollbar {
height: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: var(--page-btn-color); 
  margin: 0 1rem;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--btn-color);
  border-radius: 10px;
  
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: var(--btn-hover);
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}
    html{
    scroll-behavior: smooth;
  }
    body {
    margin: 0;
    padding: 0;
    background: var(--bg-color);
    font-family: 'Poppins', sans-serif;
    color: white;
    -webkit-tap-highlight-color: transparent;
    overflow-x: hidden;
    }
    body::-webkit-scrollbar {
      display: none;
    }
    a {
    text-decoration: none;
    }
    a:visited {
    color: white;
    }
    li {
    list-style: none;
    }
`;

import { createGlobalStyle } from 'styled-components';
export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap');
    
    * {
    font-family: 'Oxygen', sans-serif;
      box-sizing: border-box;
    }

    html, body {
    display: flex;
    margin:0;
    padding:0;
    flex-direction: column;
    background-color: #eeeeee52;
  }
  #root {
    min-height: 100vh;
    overflow: hidden;
  }
  a, a:hover {
    text-decoration: none;
  }
  h1, h2, h3, h4, h5, h6 {
    padding: 0;
    margin: 0;
  }
  ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  main{
      margin: 30px;
      display: flex;
      flex-direction: column;
  }
  article{
    height:60vh
  }
`;

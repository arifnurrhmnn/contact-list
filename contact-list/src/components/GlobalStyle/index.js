import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@400;500;700&family=Poppins:wght@400;500;700&display=swap");
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
}
body {
   background-color: #DED9C4;
   color: #6B4F4F;
   line-height: 1.5;
   font-size: 1.1rem;
   font-family: 'Poppins', sans-serif;
   font-weight:300;
 }
 p {
   color: #6B4F4F;
 }
h1 {
  font-size: calc(1.775rem + 1.5vw);
  font-weight:300;
}
h2 {
  font-size: calc(1.325rem + 0.9vw);
}
strong {
  font-weight:800
}
a,h1,h2,h3,h4,h5,h6 {
  color: #483434;
  font-family: 'Kanit', serif;
}
`;

// export const InfoSec = styled.div`
//   color: black;
//   padding: 5px 0;
// `;

export const Container = styled.div`
  /* z-index: 1; */
  width: 100%;
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  transition: all 1s;

  /* ============ Mobile Max 576 */
  @media screen and (max-width: 576px) {
    max-width: 100%;
  }

  /* ============ Mobile Min 576  */
  @media screen and (min-width: 576px) {
    max-width: 540px;
  }

  /* ============ Tablet Min 768 */
  @media screen and (min-width: 768px) {
    max-width: 720px;
  }

  /* ============ Laptop Min 992 */
  @media screen and (min-width: 992px) {
    max-width: 960px;
  }

  /* ============ Laptop Min 1200 */
  @media screen and (min-width: 1200px) {
    max-width: 1140px;
  }
`;

export default GlobalStyle;

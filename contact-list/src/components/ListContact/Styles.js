import styled from "styled-components";
import { Container } from "../GlobalStyle";

// export const Button = styled.button`
//   background-color: green;
//   color: white;
// `;

export const ListContactSection = styled(Container)`
  ${Container}
`;

export const ListContactRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  gap: 2rem;
  margin-top: 3rem;
  @media screen and (max-width: 575px) {
    justify-content: center;
  }
`;

export const ListContactCol = styled.div`
  background: #d0cab2;
  border-radius: 1rem;
  width: calc((100% / 4) - 1.5rem);
  min-height: 250px;
  padding: 10px;
  position: relative;
  cursor: pointer;
  /* box-shadow: 0px 5px 20px -10px rgba(102, 102, 102, 1); */
  @media screen and (max-width: 575px) {
    min-width: 80%;
  }
  @media screen and (max-width: 767px) {
    width: calc((100% / 2) - 1rem) !important;
  }
  @media screen and (max-width: 991px) {
    width: calc((100% / 3) - 1.5rem);
  }
  &:hover {
    /* box-shadow: 0px 10px 15px -7px #000000; */
  }
`;
export const CardContact = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const CardImage = styled.div`
  background-color: #96c7c1;
  padding: 2rem;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

export const CardTitle = styled.h2`
  font-size: 1.25rem;
`;

export const CardSubtitle = styled.h4`
  font-size: 0.85rem;
  font-weight: 200;
`;
export const CardBtnAction = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  margin-top: 0.5rem;
`;
export const CardBtn = styled.button`
  background-color: #ded9c4;
  border: none;
  height: 24px;
  width: 24px;
`;

import styled from "styled-components";
import { Container } from "../GlobalStyle";

export const Title = styled.h2`
  text-align: center;
  color: #483434;
  margin-top: 3rem;
  margin-bottom: 1rem;
`;

export const InfoSection = styled(Container)`
  ${Container};
  display: flex;
  justify-content: center;
`;

export const Form = styled.form`
  /* background-color: blue; */
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const InputForm = styled.input`
  background-color: #d0cab2;
  border: none;
  border-radius: 10px;
  padding: 14px;
  /* box-shadow: 0px 5px 20px -10px rgba(102, 102, 102, 1); */
  /* margin: 1rem; */
`;

export const BtnForm = styled.button`
  border: none;
  border-radius: 10px;
  padding: 14px;
  background-color: #96c7c1;
  cursor: pointer;
  color: white;
  /* margin: 1rem; */
  &:hover {
    background-color: #89b5af;
  }
`;

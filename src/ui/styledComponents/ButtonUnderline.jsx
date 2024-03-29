import styled from "styled-components";
const ButtonUnderline = styled.button`
  border: none;
  background: none;
  color: var(--color-blue-500);
  cursor: pointer;
  font-size: 1.6rem;
  transition: background 1s;
  /* border-bottom: 1px solid var(--color-blue-500); */
  text-decoration: underline;
  text-underline-offset: 0.4rem;
  margin-bottom: 3rem;

  &:hover {
    text-decoration: none;
  }

  &:active,
  &:focus {
    text-underline-offset: 0.4rem;
    text-decoration: underline;
  }

  /* &:hover {
    border-bottom: none;
    margin-bottom: 3.1rem;
  } */
`;

export default ButtonUnderline;

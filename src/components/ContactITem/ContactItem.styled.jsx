import styled from "styled-components";

export const ContactItems = styled.li`
  width: 480px;
  min-height: 60px;
  background-color: #f2f2f2;
  opacity: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 15px;
  align-items: center;
  border-radius: 20px;
  padding: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

export const DeleteBtn = styled.button`
  background-color: #fae3e3;
  color: black;
  border: 2px solid #f44336;
  border-radius: 20px;

  &:hover,
  &:focus {
    background-color: #f44336;
    color: white;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
    outline: none;
  }
`;

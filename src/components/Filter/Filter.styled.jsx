import styled from 'styled-components';

export const Input = styled.input`
  width: 300px;
  height: 30px;
  margin-left: 20px;
  border-radius: 10px;

  &:hover,
  &:focus {
    border: 2px solid #4caf50;
    outline: none;
  }
`;

export const Label = styled.label`
  font-size: 15;
  padding: 20px;

  &:hover,
  &:focus-within {
    color: #4caf50;
  }
`;

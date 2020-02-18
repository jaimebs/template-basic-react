import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: radial-gradient(#cc00cc, #9900cc);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  background-color: white;
  padding: 25px 15px;
  border-radius: 5px;
`;

export const Input = styled.input`
  outline-color: transparent;
  margin-bottom: 12px;
  padding: 8px;
  border: 2px solid #e8e8f0;
`;

export const Button = styled.button`
  border: none;
  border-radius: 4px;
  background-color: orange;
  font-size: 14px;
  padding: 8px;
  font-weight: bold;

  :hover {
    background-color: #f5b814;
  }
`;

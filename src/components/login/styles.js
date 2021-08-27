import styled from 'styled-components';

export const FormConteiner = styled.div`
  height: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 600px) {
   
   form button {
      width: 270px;
    }

    form input {
      width: 250px;
    }
  }
`;

export const FormLogin = styled.form`
  height: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const InptuLogin = styled.input`
  width: 336px;
  height: 50px;
  border-radius: 10px;
  font-size: 1.10rem;
  padding: 0 10px;
  background: #FFFFFF;
  border: none;
`;

export const ButtonLogin = styled.button`
  align-items: center;
  width: 356px;
  height: 50px;
  border-radius: 10px;
  background: #FFCE00;
  border: none;
  font-weight: bold;
  font-size: 18px;

  &:hover {
    cursor: pointer;
  }
`;

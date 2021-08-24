import styled from 'styled-components';

const FormConteiner = styled.div`
  height: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
 
  form {
    height: 130px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  form input {
    width: 336px;
    height: 50px;
    border-radius: 10px;
    font-size: 1.10rem;
    padding: 0 10px;
    background: #FFFFFF;
    border: none;
  }

  form button {
    width: 356px;
    height: 50px;
    border-radius: 10px;
    background: #FFCE00;
    border: none;

    &:hover {
      cursor: pointer;
    }
  }
`;

export default FormConteiner;

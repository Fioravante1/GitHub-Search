import styled from 'styled-components';

const HeaderContainer = styled.header`
  width: 100%;
  height: 150px;
  align-items: baseline;
  color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background: #1F1F1F;

  a {
    text-decoration: none;
    color: #ffffff;
    font-size: 1rem;
  }

  p {
    font-size: 1.5rem;
  }

  .conteiner__exit {
    width: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export default HeaderContainer;

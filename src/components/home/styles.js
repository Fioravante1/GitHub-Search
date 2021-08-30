import styled from 'styled-components';

export const AvatarContainner = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 92px;
`;

export const ImageAvatar = styled.img`
    height: 115px;
    width: 115px;
    border-radius: 100px;
    border: 3px solid #FFFFFF;
`;

export const HeaderContainer = styled.header`
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
`;

export const ContainerExitSave = styled.div`
  width: 80px;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;


  img {
      width: 20px;
      right: 20px;
    }
`;

export const InfoContainer = styled.div`
  height: 210px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 0 0 0 30px;
  justify-content: flex-end;
    
  p {
    color: #FFFFFF;
    font-size: 1rem;
  }
`;

export const ContainerName = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const NameUser = styled.h1`
  font-weight: bold;
  font-size: 1rem;
  margin-left: 10px;
  text-transform: uppercase;
  color: #FFFFFF;
`;

export const DataContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background: #5252525D;
`;

export const ContainerDataUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    color: #ffffff;
    font-weight: bold;
    margin-bottom: 0;
    margin-top: 0;
    font-size: 3rem;
  }

  p {
    color: #ffffff;
    margin-top: 2px;
  }
`;

export const BioContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 0 0 0 30px;
    justify-content: flex-end;

    h1 {
      color: #ffffff;
      margin-left: 10px;
      font-size: 1.25rem;
    }

    p {
      color: #ffffff;
      font-size: 1rem;
    }
  `;

export const ContainerInfoBio = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const FooterContainer = styled.footer`
  height: 9vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  bottom: 0;
  border-radius: 15px 15px 0 0; 
  background: #ffffff;
  position: fixed;
  border: none;
`;

import styled from 'styled-components';

export const ContainerRepo = styled.div`
  width: 100%;
  height: 300px;
  border-top: 1px solid #ffffff;
`;

export const ContainerName = styled.div`
  width: 100%;
  display: flex;
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const NameRepo = styled.h3`
  color: #ffffff;
  padding: 10px;
  margin-left: 2px;
`;

export const DescriptionRepo = styled.p`
  width: 90%;
  color: #ffffff;
  margin-left: 20px;
`;

export const ConteinerStar = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
`;

export const CountStar = styled.p`
  margin-left: 10px;
  color: #ffffff;
`;

export const ImageIcon = styled.img`
  width: 18px;
  height: 18px;
  margin-left: 20px;
`;

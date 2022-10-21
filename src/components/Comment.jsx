import React from 'react';
import styled from 'styled-components';
import logo from '../img/dc_logo.png';

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Username = styled.span`
  font-size: 13px;
  font-weight: 500;
`;

const Date = styled.span`
  font-size: 13px;
  font-weight: 400;
  color: ${({theme}) => theme.textSoft};
  margin-left: 5px; 
`;

const Text = styled.span`
  font-size: 14px;
  color: ${({theme}) => theme.text};
`;

const Comment = () => {
  return (
    <Container>
      <Avatar src={logo} />
      <Details>
        <Username>Jane Doe <Date>1 day ago</Date></Username>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis reiciendis corrupti eligendi veniam est ut laudantium maxime inventore! Maiores ducimus esse labore quidem quo quia? Tenetur ea perspiciatis voluptatum similique.</Text>
      </Details>
    </Container>
  );
}

export default Comment

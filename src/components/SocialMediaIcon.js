import React from 'react'
import styled from 'styled-components'
import { Col, Nav } from 'react-bootstrap'

const Container = styled.div`

width: 64px;
height: 64px;

background-image: ${props => `url(${props.image})`};
background-blend-mode: multiply;
background-repeat: no-repeat;
`

export const SocialMediaIcon = (props) => {
  const { image, link } = props;
  return (
      <Col xs={1} style={{
          borderRadius: 20, 
          width: 70, 
          height: 70, 
          display:'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          marginTop: 50
          }}>
          <Nav.Item><Nav.Link href={link}>
              <Container image={image}>

              </Container>
          </Nav.Link></Nav.Item>
      </Col>
  );
}
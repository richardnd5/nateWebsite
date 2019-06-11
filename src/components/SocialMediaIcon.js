import React from 'react'
import styled from 'styled-components'

const Image = styled.a`

width: 64px;
height: 64px;

background-image: ${props => `url(${props.image})`};
background-blend-mode: multiply;
background-repeat: no-repeat;
`

export const SocialMediaIcon = (props) => {
  const { image, link } = props;
  return (
    <Image href={link} image={image}/>
  );
}
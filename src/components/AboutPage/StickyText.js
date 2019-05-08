import React from 'react'
// import { UserContext } from '../UserContext'
import styled from 'styled-components'
import Sticky from 'react-stickynode';

const Text = styled.div`
color: #eee;
font-family: 'Avenir';
font-weight: bold;

height: ${props => props.divHeight || 100};

display: flex;
justify-content: center;
align-items: center;
font-size: 1.0em;

@media (min-width: 700px) {
  font-size: 2.0em;
  }

@media (min-width: 1100px) {
  font-size: 3.0em;
}
`

export const StickyText = (props) => {
  const {text, stickyTop, divHeight } = props;
  return(
    <Sticky enabled={true} top={stickyTop}>
        <Text divHeight={divHeight}>{text}</Text>
    </Sticky>
  );
}
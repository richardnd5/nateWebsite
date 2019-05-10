import React, { Component} from 'react'
import styled from 'styled-components'
import { UserContext } from '../UserContext'

const Text = styled.div`
color: #eee;
font-family: 'Avenir';
font-weight: bold;
font-size: 2em;
`

export default class TextCell extends Component {
  render() {
    const {style, text, distance} = this.props
    return (
      <UserContext.Consumer>
        {(value) => (
          <Text style={style}>
            {text} {distance}
          </Text>
        )}
      </UserContext.Consumer>
    )
  }
}

// How to use 'useContext' on a stateless functional component

// export const TextCell = (props) => {
//   const value = useContext(UserContext);
//   const { style } = props;


//   return(

//     <Text style={style}>
//       {props.text}
//     </Text>
//   );
// }
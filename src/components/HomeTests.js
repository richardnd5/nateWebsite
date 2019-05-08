import React, {Component} from 'react'
import styled from 'styled-components'
import Sticky from 'react-stickynode';
import { UserContext } from '../UserContext'
import downArrow from '../assets/downArrow.svg'
import posed from 'react-pose';



const divHeight = 150
const divHeightPixel = `${divHeight}px`

const Container = styled.div`
text-align: center;
overflow: 'hidden';
`

const Padding = styled.div`
height: 30vh;
`

const Text = styled.div`
color: #eee;
font-family: 'Avenir';
font-weight: bold;
height: ${divHeightPixel};
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
const SubTitle = styled.div`
  margin-top: -55px;
  color: #eee;
  font-family: 'Avenir';
  font-weight: bold;  
  opacity: 0.0;
`

const Arrow = posed.img({
  hidden: { 
    opacity: 0.2,  
    transition: {
      duration: 1000,
      ease: 'easeInOut'
  }
 },
  visible: { 
    opacity: 0.9,  
    transition: {
      duration: 1000,
      ease: 'easeInOut'
  }
 },
})

const Styles = styled.div`
.arrow{
  margin-top: -20px;
}
`

export default class HomeTests extends Component {

  state = { 
    isVisible: true
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ isVisible: !this.state.isVisible });
    }, 1000);
  }

  render() {

    const { isVisible } = this.state
    return (
      <Container>

        <Sticky enabled={true} top={divHeight*0} className='woohoo'>
          <Text>N. Richard</Text>
      
          <UserContext.Consumer>
            {(value) => (
              <SubTitle style={{'opacity':value.scrollPos/1000}}>Developer, Musician, Educator</SubTitle>
            )}
          </UserContext.Consumer>
        </Sticky>

        <Styles>
          <Arrow className='arrow' src={downArrow} height= '100' width='100' alt="image" pose={isVisible ? 'visible' : 'hidden'}/>
        </Styles>

        <Padding/>
        <Padding/>
        <Padding/>

        <Sticky enabled={true} top={divHeight*1} className='text1'>
          <Text style={{'float': 'left', 'width':'50%', 'backgroundColor':'#ffb619'}}>About</Text>
        </Sticky>


        <Padding/>
        <Padding/>
        <Padding/>

        <Sticky enabled={true} top={divHeight*1} className='text2'>
          <Text style={{'float': 'right', 'width':'50%', 'backgroundColor':'#e67e22'}}>Apps</Text>
        </Sticky>


        <Padding/>
        <Padding/>
        <Padding/>

        <Sticky enabled={true} top={divHeight*2} className='text2'>
          <Text style={{'float': 'right', 'width':'50%', 'backgroundColor':'#1B9CFC'}}>Arrangements</Text>
        </Sticky>


        <Padding/>
        <Padding/>
        <Padding/>

        <Sticky enabled={true} top={divHeight*2} className='text2'>
          <Text style={{'float': 'left', 'width':'50%', 'backgroundColor':'#182C61'}}>Compositions</Text>
        </Sticky>

        <Padding/>
        <Padding/>
        <Padding/>

        {/* 
        background-color: #ffb619;
        /* #0618a8 */
        /* #51833a */
        /* #a9d775 */}


    </Container>    
    )
  }  
}  






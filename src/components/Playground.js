import React, {Component} from 'react'
import styled from 'styled-components'
import Sticky from 'react-stickynode';
import posed from 'react-pose';
import { tween, easing } from 'popmotion';
import { interpolate } from 'flubber';
import { UserContext } from '../UserContext'
import { pathIds, paths } from './paths.js'

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
font-size: 20px;
padding: 8px;
`

const morphTransition = ({ from, to }) =>
  tween({
    from: 0,
    to: 1,
    duration: 500,
    ease: easing.easeOut,

  }).pipe(interpolate(from, to))

const Icon = posed.path(
  pathIds.reduce((config, id) => {
    config[id] = {
      d: paths[id],
      transition: morphTransition
    }
    return config;
  }, {})
)

const Box = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
});

const Styles = styled.div`
.box {
  width: 100px;
  height: 100px;
  background: #ff1c68;
  transform-origin: 50% 50%;
}
`

export default class Playground extends Component {

  state = { 
    pathIndex: 0,
    isVisible: true
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ isVisible: !this.state.isVisible });
    }, 1000);
  }

  gotoNext = () => {
    const { pathIndex } = this.state;
    const nextIndex = pathIndex + 1;
    this.setState({
      pathIndex: nextIndex > pathIds.length - 1 ? 0 : nextIndex
    });
  }

  toggleBox = () => {
    this.setState({ isVisible: !this.state.isVisible });
  }

  render() {
    const { isVisible } = this.state;

    return (
      <Container>
        <Styles>
        <Box className="box" pose={isVisible ? 'visible' : 'hidden'} />
        </Styles>
      <Padding/>

        <Sticky enabled={true} top={0} className='woohoo'>
          <Text onClick={this.gotoNext}>Hello!</Text>
        </Sticky>

        <UserContext.Consumer>
          {(value) => (
            <svg width="400" height="400" viewBox="0 0 520 500">
              <Icon pose={pathIds[this.state.pathIndex]} />
            </svg>
          )}
        </UserContext.Consumer>

        <Padding/>
        <Padding/>
        <Padding/>

        <Sticky enabled={true} top={60} className='text1'>
          <Text style={{'backgroundColor': '#222'}}>Here is the text</Text>
        </Sticky>

        <Padding/>
        <Padding/>
        <Padding/>

        <Sticky enabled={true} top={120} className='text2'>
          <Text style={{'backgroundColor': '#222'}}>Welcome To My Website</Text>
        </Sticky>

        <Padding/>
        <Padding/>
        <Padding/>

        <Sticky enabled={true} top={180} className='text2'>
          <Text style={{'backgroundColor': '#222'}}>Welcome To My Website</Text>
        </Sticky>

        <Padding/>
        <Padding/>
        <Padding/>

        <Sticky enabled={true} top={240} className='text2'>
          <Text style={{'backgroundColor': '#222'}}>Welcome To My Website</Text>
        </Sticky>

        <Padding/>
        <Padding/>
        <Padding/>

    </Container>
    )
  }
}






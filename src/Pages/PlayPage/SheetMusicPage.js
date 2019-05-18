import React, { Component } from 'react';
import OpenSheetMusicDisplay from '../../lib/OpenSheetMusicDisplay'
import styled from 'styled-components'
import { generateXML } from '../../backendJS/MusicXML'

const Container = styled.div`
  background-color: #eee;
`

class SheetMusicPage extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { file: generateXML() };
  }

  handleClick(event) {
    const file = event.target.value;
    this.setState(state => state.file = file);
  }

  render() {
    return (
      <Container>
        <OpenSheetMusicDisplay file={this.state.file} />
      </Container>
    );
  }
}

export default SheetMusicPage;

import React, { Component } from 'react'
import styled from 'styled-components'
import { Modes, Key } from './MusicConstants'
import { playAllNotes, stopSequencer } from './WebAudio' //has to be imported before sampler

const Containerr = styled.div`
    justify-content: center;
    -moz-align-items: center;
    -webkit-align-items: center;
    -ms-align-items: center;
    align-items: center;
    flex-direction: column;
    text-align: center;

    display: -moz-flex;
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    flex-direction: column;
    font-size: 1.5em;

    color: #ccc;
    font-family: 'Avenir';
    padding-top: 200px;

`

const Title = styled.div`
    font-size:1.5em;
`

const CustomSlider = styled.input``

const BigButton = styled.div`
    background-image: linear-gradient(0deg, #000, #555);
    border: none;
    color: #ccc;
    font-family: 'Avenir';
    letter-spacing: 0.3vw;
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: center;
    text-decoration: none;
    width: 5em;
    height: 3em;
    border-radius: 10px;
    cursor: pointer;

    justify-content: center;
    -moz-align-items: center;
    -webkit-align-items: center;
    -ms-align-items: center;
    align-items: center;

    display: -moz-flex;
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    flex-direction: column;
    font-size: 1em;
`

export default class SequencerPage extends Component {

    state = {
        toggleOn: true,
        noteString: '5;;;5;;34.32;;..4.4.3.2.32.1;;..',
        key: Key["F#"],
        mode: Modes.lydian,
        tempo: 110
    };


    turnOffButton = () => {
        this.setState({ toggleOn: !this.state.toggleOn })
    }


    handlePlayToggle = () => {

        let {noteString, key, mode, tempo, toggleOn} = this.state

        this.setState({ toggleOn: !this.state.toggleOn }, () => {
            toggleOn ? playAllNotes(noteString, key, mode, tempo, this.turnOffButton) : stopSequencer()
        })
    }

    handleTextAreaChange = (event) => {
        this.setState({ noteString: event.target.value });
    }

    handleSliderChange = (e) => {
        this.setState({ tempo: e.target.value });
    }

    handleSubmit = (event) => {
        if (event.which === 13 /* Enter */) {
            event.preventDefault();
        }
    }

    render() {
        return (
            <Containerr>
                <Title>Simple Melody Maker</Title>
                <br /><br />
                <div style={{ textAlign: "center" }}>
                    <p>Every character is a "tick" in time. </p><br />
                    <p>number = scale degree</p><br />
                    <p>, = make previous note an octave down</p><br />
                    <p>'' = make previous note an octave up</p><br />
                    <p>b = flat the following note</p><br />
                    <p># = sharp the following note</p><br />
                    <p>; = hold previous note for one tick</p><br />
                    <p>, = rest for one tick</p><br />
                    
                </div>
                <form onSubmit={this.handleSubmit} >
                    <label>Type in a Melody</label><br />
                    <br />
                    <input type="text" onChange={this.handleTextAreaChange} onKeyPress={this.handleSubmit} placeholder={this.state.noteString} name="q" spellCheck="off" style={{ color: "black", width: "50vw", height: 100, textAlign: "center" }} />
                </form>
                <br />
                <h5>Tempo: {this.state.tempo}</h5>
                <CustomSlider
                    id="typeinp"
                    type="range"
                    min="20" max="300"
                    value={this.state.tempo}
                    onChange={this.handleSliderChange}
                    step="1" />
                <BigButton onClick={this.handlePlayToggle} >
                    {this.state.toggleOn ? 'Play' : 'Stop'}
                </BigButton>
            </Containerr>
        )
    }
}
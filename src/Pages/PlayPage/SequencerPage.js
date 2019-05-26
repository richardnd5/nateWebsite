import React, { Component } from 'react'
import styled from 'styled-components'
import { Modes, Key } from '../../backendJS/MusicConstants'
import { playAllNotes, stopSequencer } from './WebAudio' //has to be imported before sampler
// import {SheetMusicPage} from './SheetMusicPage'
import { generateXMLFromNoteObject } from '../../backendJS/MusicXMLTypes'
// import {add} from '../../backendJS/MusicXMLTypes'
// import {testing} from '../../backendJS/MusicConstantTypes'
import {makeStepwiseMelody} from './MelodyGenerator'

// import {NoteScroll} from './NoteScroll'

const Container = styled.div`
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
        key: Key["C"],
        keyString: "C",
        mode: Modes.ionian,
        modeString: "Ionian",
        tempo: 110,
        harmonyChecked: false,
        xml: ''
    };

    turnOffButton = () => {
        this.setState({ toggleOn: !this.state.toggleOn })
    }

    handlePlayToggle = () => {

        let {noteString, key, mode, tempo, toggleOn, harmonyChecked} = this.state

        this.setState({ toggleOn: !this.state.toggleOn }, () => {
            toggleOn ? playAllNotes(noteString, key, mode, tempo, this.turnOffButton, harmonyChecked) : stopSequencer()
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

    handleKeySelect = (e) =>{
        this.setState({
            key: Key[e.target.value],
            keyString: e.target.value
        });

      }
    handleModeSelect = (e) =>{
        const newMode = Modes[`${e.target.value}`]
        this.setState({
            mode: newMode,
            modeString: e.target.value
        });

      }

    handleHarmonyChecked = () => {
    this.setState({ harmonyChecked: !this.state.harmonyChecked })
    }

    createNoteObjectsFromString = () =>{ 
        
        
        const {noteString,key,mode} = this.state
        const newXML = generateXMLFromNoteObject(noteString,key,mode)

        this.setState({
            xml: newXML
        })
    }

    setMelody = () =>{
        // const string = makeRandomMelody()
        const string = makeStepwiseMelody()
        this.setState({
            noteString: string
        })
    }

    render() {

        // const {xml} = this.state
        return (
            <div>


            <Container>


                <Title>Simple Melody Maker</Title>
                <form onSubmit={this.handleSubmit} >
                    <label>Type in a Melody</label><br />
                    <br />
                    <input type="text" onChange={this.handleTextAreaChange} onKeyPress={this.handleSubmit} placeholder={this.state.noteString} name="q" spellCheck="off" style={{ color: "black", width: "50vw", height: 100, textAlign: "center" }} />
                </form>
                <br />

                <button onClick={this.setMelody}>Or Generate a Stepwise Melody</button>
                
                <h5>Key</h5>
                <select value={this.state.keyString} onChange={this.handleKeySelect}>
                <option value="C">C</option>
                <option value="C#">C#/Db</option>
                <option value="D">D</option>
                <option value="D#">D#/Eb</option>
                <option value="E">E</option>
                <option value="F">F</option>
                <option value="F#">F#/Gb</option>
                <option value="G">G</option>
                <option value="G#">G#/Ab</option>
                <option value="A">A</option>
                <option value="A#">A#/Bb</option>
                <option value="B">B</option>
                </select>

                <br/>

                <h5>Mode</h5>
                <select value={this.state.modeString} onChange={this.handleModeSelect}>
                <option value='ionian'>Ionian</option>
                <option value='dorian'>Dorian</option>
                <option value= 'phrygian'>Phrygian</option>
                <option value='lydian'>Lydian</option>
                <option value= 'mixolydian'>Mixolydian</option>
                <option value='aeolian'>Aeolian</option>
                <option value='locrian'>Locrian</option>
                </select>

                <br/>
                <h5>Harmonized? (no ^7)</h5>
                <input type="checkbox" value={this.state.harmonyChecked} onChange={this.handleHarmonyChecked} />                <br/>
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

            </Container>

                <br/><br/><br/><br/>
                {/* <div>This part under construction</div>
                <SheetMusicPage xml={xml}/>
            <button onClick={this.createNoteObjectsFromString}>Create Sheet Music</button> */}
                </div>

                
        )
    }
}
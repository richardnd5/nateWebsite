import React, { Component } from 'react'
import styled from 'styled-components'
// import {VimeoView} from './VimeoView'
import Tone from 'tone'
import * as MusicConstants from '../../backendJS/MusicConstants'

const Container = styled.main`

    font-size: 1.5em;

    color: #ccc;
    font-family: 'Poor Story';
    background: linear-gradient(#0a1c25 0, #0a1c77 100%);

    height: 100vh;
    display: flex;
    align-items: center;
    align-content: center;
    flex-direction: column;

    /* padding-top: 150px; */
    

`

// const Title = styled.div`
//     font-size:1.5em;
//     padding: 30px;
    
// `

const TextArea = styled.input`
    margin: 30px;
    resize: none;
    height: 100px;
    width: 80vw;
    /* background-color: #3ba; */
    background: linear-gradient(#eee 0, #0a1c25 90%);
    color: #eee;
    text-align: center;
    border-radius: 32px;

    outline: none;
    border-width:0px;
    border:none;
    box-shadow: 4px 4px 4px #111;

    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Indie Flower', cursive;



    
`

const Button = styled.button`
display: flex;
justify-content: center;
margin: 20px;
border-radius: 32px;
width: 120px;
height: 50px;
font-family: 'Indie Flower', cursive;



outline: none;
border-width:0px;
border:0px;

box-shadow: 4px 4px 4px #111;

background: radial-gradient(#eee 0, #0a1c25 90%);


`

const Question = styled.h1`
    font-size: 1em;
    font-family: 'Indie Flower', cursive;

`

const Form = styled.form`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

const storyLine = [
    'Hello',
    'I have had so many experiences',
    'Do you want to hear about any of them?',
    'Well, I was gunna tell you anways',
    'What would you like to know?'
]

export default class TextBasedAdventure extends Component {

    state = {
        storyPosition: 0,
        toggleOn: true,
        answer: '',
        question: `${storyLine[0]}`
    };


    handleTextAreaChange = (event) => {
        this.setState({ answer: event.target.value });

    }

    handleSubmit = (event) => {
        event.preventDefault();

        // if (event.which === 13 /* Enter */) {
        //     event.preventDefault();
        // }
        // alert('You hit enter!')
        this.setState({answer:''})
    }

    handleNext = (event) => {
        event.preventDefault();
        let { storyPosition } = this.state
        storyPosition++

        this.setState({
            storyPosition
        }, ()=>{
            this.setState({question: storyLine[storyPosition]})
        })


        var reverb = new Tone.Reverb({
            "wet": '1'
        }).toMaster();
        reverb.generate()

        //pass in some initial values for the filter and filter envelope
        var synth = new Tone.Synth({
            "oscillator" : {
                "type" : "triangle",
                "modulationFrequency" : 0.8
            },
            "envelope" : {
                "attack" : 0.001,
                "decay" : 0.0,
                "sustain" : 0.0,
                "release" : 0.9,
            }
        }).connect(reverb);;
        

        let randomNoteName = MusicConstants.noteLetters[Math.floor(Math.random() * MusicConstants.noteLetters.length)]
        randomNoteName+= "4"
        //start the note "D3" one second from now
        synth.triggerAttackRelease(randomNoteName, "0.51");







    }

    render() {


        return (
            <Container>
                {/* <VimeoView vimeoID='342190245'/> */}

                <Question>{this.state.question}</Question>
                <Button onTouchStart={this.handleNext}>Next</Button>
                <Form onSubmit={this.handleSubmit} >
                    <TextArea onChange={this.handleTextAreaChange} value={this.state.answer} placeholder={this.state.answer} spellCheck="off" wrap="hard"/>
                </Form>
                    
                    <Button onClick={this.handleSubmit}>Submit</Button>
            </Container>         
        )
    }
}
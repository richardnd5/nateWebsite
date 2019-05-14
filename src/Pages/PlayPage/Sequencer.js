import { createNoteObjectArray } from './StringToNoteObject'
import { pitches, Modes, Key } from './MusicConstants'

import WAAClock from 'waaclock'
import webAudioTouchUnlock from 'web-audio-touch-unlock'
import Tone from 'tone'
import { sampler } from './Sampler'


    // export function loadSequencer  (noteString, key, mode, tempo)  {

        

    //     let array = createNoteObjectArray(noteString, key, mode )

        

    //     for (let i = 0; i < array.length; i++) {
    //         const noteObject = array[i];

    //         placeNoteInFuture(noteObject, tempo)

    //         if (i === array.length - 1) {
    //             const currentTime = context.currentTime
    //             let appropriateEndTimeDivision = ((noteObject.endPosition) / 4 + 0.4) * (60 / tempo)
    //             sequencer.callbackAtTime(() => {
    //                 this.turnOffButton()
    //             }, (appropriateEndTimeDivision) + currentTime);

    //         }
    //     };
    // }

    // export function placeNoteInFuture (noteObject, tempo)  {

    //     const currentTime = context.currentTime
    //     let appropriateStartTimeDivision = (noteObject.startPosition / 4 + 0.4) * (60 / tempo)
    //     let appropriateEndTimeDivision = ((noteObject.endPosition) / 4 + 0.4) * (60 / tempo)

    //     sequencer.callbackAtTime(() => {
    //         sampler.triggerAttack(`${pitches[noteObject.note]}`);
    //     }, (appropriateStartTimeDivision) + currentTime);

    //     sequencer.callbackAtTime(() => {
    //         sampler.triggerRelease(`${pitches[noteObject.note]}`);
    //     }, (appropriateEndTimeDivision) + currentTime);
    // }

    // export function play (noteString, key, mode, tempo) {
    //     // Start the sequencer running
    //     sequencer.start()
    //     loadSequencer(noteString, key, mode, tempo)

    //     console.log("trying to play")

    //     // You need to create a buffer source and connect the context to it in order to hear the audio on mobile. That's the 3 lines of code below.
    //     var source = context.createBufferSource();
    //     source.connect(context.destination);
    //     source.start();
    // }

    // export function stop () {
    //     sequencer.stop()
    //     sampler.releaseAll()
    // }

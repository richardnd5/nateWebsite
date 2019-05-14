import WAAClock from 'waaclock'
import webAudioTouchUnlock from 'web-audio-touch-unlock'
import Tone from 'tone'

import { pitches} from './MusicConstants'
import { createNoteObjectArray } from './StringToNoteObject'

if (!window.AudioContext) alert('you browser doesnt support Web Audio API')

// To start Web Audio
const context = new (window.AudioContext || window.webkitAudioContext)();
webAudioTouchUnlock(context)

let clock = new WAAClock(context, { toleranceEarly: 0.01 })
Tone.setContext(context);

const sampler = new Tone.Sampler({
    'A0': 'A0.[mp3|ogg]',
    'C1': 'C1.[mp3|ogg]',
    'D#1': 'Ds1.[mp3|ogg]',
    'F#1': 'Fs1.[mp3|ogg]',
    'A1': 'A1.[mp3|ogg]',
    'C2': 'C2.[mp3|ogg]',
    'D#2': 'Ds2.[mp3|ogg]',
    'F#2': 'Fs2.[mp3|ogg]',
    'A2': 'A2.[mp3|ogg]',
    'C3': 'C3.[mp3|ogg]',
    'D#3': 'Ds3.[mp3|ogg]',
    'F#3': 'Fs3.[mp3|ogg]',
    'A3': 'A3.[mp3|ogg]',
    'C4': 'C4.[mp3|ogg]',
    'D#4': 'Ds4.[mp3|ogg]',
    'F#4': 'Fs4.[mp3|ogg]',
    'A4': 'A4.[mp3|ogg]',
    'C5': 'C5.[mp3|ogg]',
    'D#5': 'Ds5.[mp3|ogg]',
    'F#5': 'Fs5.[mp3|ogg]',
    'A5': 'A5.[mp3|ogg]',
    'C6': 'C6.[mp3|ogg]',
    'D#6': 'Ds6.[mp3|ogg]',
    'F#6': 'Fs6.[mp3|ogg]',
    'A6': 'A6.[mp3|ogg]',
    'C7': 'C7.[mp3|ogg]',
    'D#7': 'Ds7.[mp3|ogg]',
    'F#7': 'Fs7.[mp3|ogg]',
    'A7': 'A7.[mp3|ogg]',
    'C8': 'C8.[mp3|ogg]',
    'C14': 'BackgroundD.mp3'
}, {
        'release': 1,
        'baseUrl': '../salamander/'
    }).toMaster();


    function loadSequencer(noteString, key, mode, tempo, callback) {

        let array = createNoteObjectArray(noteString, key, mode)

        clock.start()

        for (let i = 0; i < array.length; i++) {
            const noteObject = array[i];

            placeNoteInFuture(noteObject, tempo)

            if (i === array.length - 1) {
                const currentTime = context.currentTime
                let endTime = ((noteObject.endPosition) / 4 + 0.4) * (60 / tempo)
                clock.callbackAtTime(() => {
                    callback()
                }, (endTime) + currentTime)
            }
        };
    }

    function placeNoteInFuture(noteObject, tempo) {


        const currentTime = context.currentTime
        let startTime = (noteObject.startPosition / 4 + 0.4) * (60 / tempo)
        let endTime = ((noteObject.endPosition) / 4 + 0.4) * (60 / tempo)

        clock.callbackAtTime(() => {
            sampler.triggerAttack(`${pitches[noteObject.note]}`);
        }, (startTime) + currentTime)

        clock.callbackAtTime(() => {
            sampler.triggerRelease(`${pitches[noteObject.note]}`);
        }, (endTime) + currentTime)
    }



    export function playAllNotes(noteString, key, mode, tempo, callback){
                
        loadSequencer(noteString, key, mode, tempo, callback)

        // You need to create a buffer source and connect the context to it in order to hear the audio on mobile. That's the 3 lines of code below.
        var source = context.createBufferSource();
        source.connect(context.destination);
        source.start();
    }

    export function stopSequencer(){
        clock.stop()
        sampler.releaseAll()
    }


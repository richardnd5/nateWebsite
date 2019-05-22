import WAAClock from 'waaclock'
import webAudioTouchUnlock from 'web-audio-touch-unlock'
import Tone from 'tone'

import { pitches, allPossibleTriadicHarmonyNotes } from '../../backendJS/MusicConstants'
import { createNoteObjectArray} from '../../backendJS/StringToNoteObject'

if (!window.AudioContext) alert('you browser doesnt support Web Audio API')

// To start Web Audio
const context = new (window.AudioContext || window.webkitAudioContext)();
const clock = new WAAClock(context, { toleranceEarly: 0.01 })
const scheduleDivisor = 150

webAudioTouchUnlock(context)
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


    export function playAllNotes(noteString, key, mode, tempo, callback, harmonyChecked){
                
        loadSequencer(noteString, key, mode, tempo, callback, harmonyChecked)

        // You need to create a buffer source and connect the context to it in order to hear the audio on mobile. That's the 3 lines of code below.
        var source = context.createBufferSource();
        source.connect(context.destination);
        source.start();
    }

    export function stopSequencer(){
        clock.stop()
        sampler.releaseAll()
    }

    // HELPER FUNCTIONS
    function loadSequencer(noteString, key, mode, tempo, callback, harmonyChecked) {

        let array = createNoteObjectArray(noteString, key, mode)
        clock.start()
        
        for (let i = 0; i < array.length; i++) {
            const noteObject = array[i];
            const schedulingPadding = tempo/scheduleDivisor

            placeNoteInFuture(noteObject, tempo)

            if (harmonyChecked){
                placeHarmonyInFuture(noteObject, tempo, key, mode, -9)
                placeHarmonyInFuture(noteObject, tempo, key, mode, -5)
            }


            if (i === array.length - 1) {
                const currentTime = context.currentTime
                let noteEndTime = ((noteObject.endPosition) / 4 + schedulingPadding) * (60 / tempo)
                clock.callbackAtTime(() => {
                    callback()
                }, (noteEndTime) + currentTime)
            }
        };
        clock.start()
    }

    function placeNoteInFuture(noteObject, tempo) {

        const {note, startPosition, endPosition} = noteObject

        const schedulingPadding = tempo/scheduleDivisor


        const currentTime = context.currentTime
        let noteStartTime = (startPosition / 4 + schedulingPadding) * (60 / tempo)
        let noteEndTime = ((endPosition) / 4 + schedulingPadding) * (60 / tempo)

        clock.callbackAtTime(() => {

            sampler.triggerAttack(`${pitches[note]}`);
        }, (noteStartTime) + currentTime)

        clock.callbackAtTime(() => {
            sampler.triggerRelease(`${pitches[note]}`);
            
        }, (noteEndTime) + currentTime)
    }

    function placeHarmonyInFuture(noteObject, tempo, key, mode, semitones){
        const {note, startPosition, endPosition} = noteObject
        let noteToInsert = note+semitones
        const schedulingPadding = tempo/scheduleDivisor

        
        // const allNotes = allPossibleDiatonicNotes(key,mode)
        // console.log(key,mode)
        const allNotes = allPossibleTriadicHarmonyNotes(key,mode)
        if (!allNotes.includes(noteToInsert)){
            noteToInsert = noteToInsert+1

        }

        const currentTime = context.currentTime
        let noteStartTime = (startPosition / 4 + schedulingPadding) * (60 / tempo)
        let noteEndTime = ((endPosition) / 4 + schedulingPadding) * (60 / tempo)

        clock.callbackAtTime(() => {
            sampler.triggerAttack(`${pitches[noteToInsert]}`)
        }, (noteStartTime) + currentTime)

        clock.callbackAtTime(() => {
            sampler.triggerRelease(`${pitches[noteToInsert]}`)
            
        }, (noteEndTime) + currentTime)
    }
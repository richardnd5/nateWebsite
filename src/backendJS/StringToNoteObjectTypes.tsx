import { pitchesWithOctaves } from './MusicConstants'

interface NoteObject {
    noteNumber: number,
    letterName: string,
    octave: number,
    startPosition: number,
    endPosition: number
}

interface Key {
    name: string
    number: number
}

const acceptableCharacters: string[] = [":", ";", "'", ",", ".", "b", "#", "-", "||", "=", "(", ")"]

export function createNoteObjectArray(melodyString:string, key:number, mode: number[]) {
    let stringNoWhiteSpace : string = removeWhiteSpaceFromString(melodyString)
    let initialArray : string[] = createInitialArray(stringNoWhiteSpace)
    let midiNoteArray : string[] = convertArrayToMIDINumbers(initialArray, key, mode)
    let noteObjectArray : NoteObject[] = createNoteObjectArrayFromMIDIArray(midiNoteArray)

    return noteObjectArray
}

function removeWhiteSpaceFromString(string: string){
    return string
        .replace(/\s/g, '')
        .replace(/\s{2,10}/g, '')
        .trim()
}

// Splits the melody string into individual character array, 
function createInitialArray(string: string){
    let array = string
        .split("")
        array.push("||") // put a "double bar" at the end.

        /* if the first character is a note lengthen 
        or octave displacement symbol remove it 
        (a character that needs a note before it to be of use*/
        while (array[0] === ";" || array[0] === "'" || array[0] === ","){
            array.splice(0,1)
        }
    return array
}

function convertArrayToMIDINumbers(array: string[], key:number, mode: number[]){
    let convertedArray : string[] = array
    let nonPermissibleChars : string[] = []
    let bCounter : number= 0
    let sharpCounter : number = 0
    let upOctCounter : number = 0
    let downOctCounter : number = 0

    for (let i = 0; i < convertedArray.length; i++) {

        // Remove non convertable characters
        if (!acceptableCharacters.includes(convertedArray[i]) && !isInteger(convertedArray[i])) {
            nonPermissibleChars.push(convertedArray[i])
            convertedArray.splice(i, 1)
            i -= 1
        }

        // If it is an accidental, add 1 to the appropriate accidental counter (to be calculated later)
        if (convertedArray[i] === "b") {
            bCounter += 1
        } else if (convertedArray[i] === "#") {
            sharpCounter += 1
        }

        if (isInteger(convertedArray[i])) {

            // Change current note to MIDI note value
            let indexForScaleconvertedArray = parseInt(convertedArray[i], 10) - 1
            convertedArray[i] = `${(mode[indexForScaleconvertedArray] + key - bCounter + sharpCounter)}`

            // Take out all sharps and flats before the current note
            convertedArray.splice(i - (bCounter + sharpCounter), bCounter + sharpCounter)
            i = i - (bCounter + sharpCounter)
            bCounter = 0
            sharpCounter = 0

            // Count all the octave displacement, adjust MIDI note value and remove octave character from convertedArray
            if (convertedArray[i + 1] === "'" || convertedArray[i + 1] === "," || convertedArray[i + 1] === "’") {
                let temp;
                for (temp = i + 1; temp < convertedArray.length; temp++) {
                    if (convertedArray[temp] === ",") {
                        downOctCounter += 1
                    } else if (convertedArray[temp] === "'" || convertedArray[temp] === "’") {

                        upOctCounter += 1
                    } else {
                        convertedArray[i] = `${parseInt(convertedArray[i], 10) + (upOctCounter * 12) - (downOctCounter * 12)}`
                        break
                    }
                }
                if (convertedArray[temp] !== "," || convertedArray[temp] !== "'" || convertedArray[temp] !== "’") {
                    convertedArray.splice(temp - (upOctCounter + downOctCounter), upOctCounter + downOctCounter)
                    upOctCounter = 0
                    downOctCounter = 0
                }
            }
        }
    }

    return convertedArray
}

// Creates NoteObject array that the sequencer needs to schedule sampler to play in rhythm.
function createNoteObjectArrayFromMIDIArray(array: string[]){

    let noteObjects : NoteObject[] = []

    for (let i = 0; i < array.length; i++) {

        // If it is a number, add a note object to the array.
        if (isInteger(array[i])) {
            const noteNumber : number = parseInt(array[i], 10)
            const noteObject : NoteObject = makeNoteObject(noteNumber, i)
            noteObjects.push(noteObject)
        }

        /* If the next it is a sustain character, 
        count ahead and increment the sustain counter, 
        then convert all sustain counters in the character array to a '.' 
        (moment in sequence with no sound). */

        if (array[i] === ";" || array[i] === ":") {
            let temp : number;
            for (temp = i; temp < array.length; temp++) {
                if (array[temp] === ":" || array[temp] === ";") {
                    array[temp] = "."
                } else {
                    noteObjects[noteObjects.length - 1].endPosition = temp
                    break
                }
            }
        }
    }
    return noteObjects
}

function makeNoteObject(midiNumber: number, arraySlot: number){

    const letterNameWithOctave : string = pitchesWithOctaves[midiNumber]
    const letterName : string = letterNameWithOctave.slice(0, -1);
    const octave : number = parseInt(letterNameWithOctave.slice(letterNameWithOctave.length-1, letterNameWithOctave.length))
    const noteNumber : number = midiNumber
    const startPosition : number = arraySlot
    const endPosition : number = arraySlot+1

    const noteObject : NoteObject = {
        noteNumber: noteNumber,
        letterName: letterName,
        octave: octave,
        startPosition: startPosition,
        endPosition: endPosition
    }

    return noteObject

}

const isInteger = (char: string) => {
    if (!isNaN(parseInt(char, 10))) {
        return true
    } else {
        return false
    }
}
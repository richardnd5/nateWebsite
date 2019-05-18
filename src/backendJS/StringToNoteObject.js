// import { scaleModes, Key } from './MusicConstants'

const acceptableCharacters = [":", ";", "'", ",", ".", "b", "#", "-", "||", "=", "(", ")"]

// let key = Key.Ab
// let scale = scaleModes.ionian

export function createNoteObjectArray(theString, key, mode) {
    let cleanedString = removeWhiteSpaceFromString(theString)
    let initialArray = createInitialArray(cleanedString)
    let midiNoteArray = convertArrayToMIDINumbers(initialArray, key, mode)
    return createNoteObjectArrayFromMIDIArray(midiNoteArray)
}

// Cleans up string of spaces and carriage returns. 
function removeWhiteSpaceFromString(string){
    return string
        .replace(/\s/g, '')
        .replace(/\s{2,10}/g, '')
        .trim()
}

// Splits the melody string into individual character array, 
function createInitialArray(string){
    let array = string
        .split("")
        array.push("||") // put a "double bar" at the end.

        // if the first character is an ; remove it
        while (array[0] === ";" || array[0] === "'" || array[0] === ","){
            array.splice(0,1)
        }
    return array
}

/* replaces the given number with the scale degree number in MIDI 
(while keeping a log of how many sharps and flats it has seen until the next number), 
adjusts the MIDI note according to accidentals. 
Then checks for lower or upper octaves and does appropriate calculation. 
All only iterating once over the array */
function convertArrayToMIDINumbers(array, key, mode){
    let convertedArray = array
    let nonPermissibleChars = []
    let bCounter = 0
    let sharpCounter = 0
    let upOctCounter = 0
    let downOctCounter = 0

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
            convertedArray[i] = [(mode[indexForScaleconvertedArray] + key - bCounter + sharpCounter)]

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
                        convertedArray[i] = parseInt(convertedArray[i], 10) + (upOctCounter * 12) - (downOctCounter * 12)
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
function createNoteObjectArrayFromMIDIArray(array){
    let noteObjects = []
    // let sustainCounter

    for (let i = 0; i < array.length; i++) {

        // If it is a number, add a note object to the array.
        if (isInteger(array[i])) {
            noteObjects.push({
                name: array[i],
                note: parseInt(array[i], 10),
                startPosition: i,
                endPosition: i + 1
            })
        }

        // If the next it is a sustain character, count ahead and increment the sustain counter, then convert all sustain counters in the character array to a '.' (moment in sequence with no sound).
        if (array[i] === ";" || array[i] === ":") {
            let temp;
            for (temp = i; temp < array.length; temp++) {
                if (array[temp] === ":" || array[temp] === ";") {
                    // sustainCounter += 1
                    array[temp] = "."
                } else {
                    noteObjects[noteObjects.length - 1].endPosition = temp
                    // sustainCounter = 0
                    break
                }
            }
        }
    }
    return noteObjects
}

function isInteger(char) {
    if (!isNaN(parseInt(char, 10))) {
        return true
    } else {
        return false
    }
}
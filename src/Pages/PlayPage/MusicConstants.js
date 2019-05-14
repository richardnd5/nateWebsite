// export const majorScale = [0, 2, 4, 5, 7, 9, 11, 12];
// // Fill majorScale with a second octave
// for (let i = 1; i < 8; i++) {
//     majorScale.push(majorScale[i] + 12)
// }

export const pitches = [];

// export const noteNames = {
//  C:"C",
//  Cs:"C#",
//  D:"D",
//  Ds:"D#",
//  E:"E",
//  F:"F",
//  Fs:"F#",
//  G:"G",
//  Gs:"G#",
//  A:"A",
//  As:"A#",
//  B: "B"
// }

// beadgcf

export const accidental = {
    SHARP: {name:'sharp', alter: 1},
    FLAT: {name:'flat', alter: -1},
    NATURAL: {name:'natural', alter: 0}
}

export const keySignatures = {
    "C": 0,
    "Cs": 7,
    "D": 2,
    "E": 4,
    "F": -1,
    "Fs": 6,
    "G": 1,
    "A": 3,
    "B": 5,
    "Db": -5,
    "Eb": -3,
    "Gb": -6,
    "Ab": -4,
    "Bb": -2,
    "C#": 7,
    "F#": 6,
}



const noteLetters = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]



export const noteTypes = {
    WHOLE: {name:'whole', duration: 16},
    HALF: {name:'half', duration: 8},
    QUARTER: {name: 'quarter', duration: 4},
    EIGHTH: {name: 'eighth', duration: 2},
    SIXTEENTH: {name: '16th', duration: 1}
}

for (let j = 0; j < 9; j++) {
    for (let i = 0; i < noteLetters.length; i++) {
        pitches.push(`${noteLetters[i]}${j - 1}`)
        console.log(`${noteLetters[i]}${j - 1}`)
    }
}

export const Modes = {
    ionian: [0, 2, 4, 5, 7, 9, 11, 12, 14],
    dorian: [0, 2, 3, 5, 7, 9, 10, 12, 14],
    phrygian: [0, 1, 3, 5, 7, 8, 10, 12, 13],
    lydian: [0, 2, 4, 6, 7, 9, 11, 12, 14],
    mixolydian: [0, 2, 4, 5, 7, 9, 10, 12, 14],
    aeolian: [0, 2, 3, 5, 7, 8, 10, 12, 14],
    locrian: [0, 1, 3, 5, 6, 8, 10, 12, 13]
}

export const Key = {
     "C": 60,
     "Cs": 61,
     "D": 62,
     "Ds": 63,
     "E": 64,
     "F": 65,
     "Fs": 66,
     "G": 67,
     "Gs": 68,
     "A": 69,
     "As": 70,
     "B": 71,
     "Db": 61,
     "Eb": 63,
     "Gb": 66,
     "Ab": 68,
     "Bb": 70,
     "C#": 61,
     "D#": 63,
     "F#": 66,
     "G#": 68,
     "A#": 70,
}
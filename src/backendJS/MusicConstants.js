const noteLetters = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]

export const pitches = []

for (let j = 0; j < 9; j++) {
    for (let i = 0; i < noteLetters.length; i++) {
        pitches.push(`${noteLetters[i]}${j - 1}`)
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



export const KeySignatures = {
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

export const KeySignaturesFromMidiNote = {
    60: 0,
    61: -5,
    62: 2,
    63: -3,
    64: 4,
    65: -1,
    66: -6,
    67: 1,
    68: -4,
    69: 3,
    70: -2,
    71: 5,
}

export function allPossibleDiatonicNotes(key, mode){
    let array = []

    let moduloCounter = 0
    for (let i = 0; i < 300; i++) {

        let modulo = i % 7

        if (modulo === 0) {
            moduloCounter++
        }

        const octaveAdder = moduloCounter*12
        const keyCloseToMIDINoteZero = key-60
        const noteToAdd = mode[modulo]+octaveAdder+keyCloseToMIDINoteZero
        array.push(noteToAdd)
    }
    return array
}

export function allPossibleTriadicHarmonyNotes(key, mode){
    let array = []
    let moduloCounter = 0
    for (let i = 0; i < 300; i++) {

        let modulo = i % 7

        if (modulo === 0) {
            moduloCounter++
        }

        const octaveAdder = moduloCounter*12
        const keyCloseToMIDINoteZero = key-60
        let noteToAdd = mode[modulo]+octaveAdder+keyCloseToMIDINoteZero
        if (modulo === 6) {
            noteToAdd = mode[modulo+1]+octaveAdder+keyCloseToMIDINoteZero
        }
        array.push(noteToAdd)
    }
    return array
}


export const NoteTypes = {
    WHOLE: {name:'whole', duration: 16},
    HALF: {name:'half', duration: 8},
    QUARTER: {name: 'quarter', duration: 4},
    EIGHTH: {name: 'eighth', duration: 2},
    SIXTEENTH: {name: '16th', duration: 1},
    THIRTYSECOND: {name: '32nd', duration: 1},
    SIXTYFOURTH: {name: '64th', duration: 1},
    ONETWENTYEIGHTH: {name: '128th', duration: 1}
}

export const slurType = {
    START: 'start',
    STOP: 'stop'
}

export const SyllabicType = {
    BEGIN: 'begin',
    CONTINUE: '',
    END: 'end'
}

export const accidental = {
    SHARP: {name:'sharp', alter: 1},
    FLAT: {name:'flat', alter: -1},
    NATURAL: {name:'natural', alter: 0},
    NONE: {name: '', alter: 0}
}


export function Lyric(text, syllabic) {
    this.text = text;
    this.syllabic = syllabic;
}
import {NoteTypes, KeySignatures, accidental} from './MusicConstants'
import { createNoteObjectArray} from './StringToNoteObjectTypes'
import { pitchesWithOctaves, allPossibleTriadicHarmonyNotes, KeySignaturesFromMidiNote, slurType, Lyric, SyllabicType } from './MusicConstants'
// import { Note } from 'opensheetmusicdisplay/build/dist/src';

interface Note {
    letterName: string,
    octave: number,
    type: string,
    duration: number,
    dot: Boolean,
    syllable: string,


}

// letterName: string = 'C', octave: number = 4, type: string = 'quarter', duration: number = 4, alter: number = 0, accidental:string ='none', voice:number = 1, slurType: string = 'none', lyric: string = 'none'


let mainXML = ``

const getNoteType = (startPosition:number, endPosition:number) => {

    const length = endPosition-startPosition

    switch (length) {
        case 1:
            return NoteTypes.SIXTEENTH.name
            break;
        case 2:
            return NoteTypes.EIGHTH.name
            break;
        case 3:
            return NoteTypes.QUARTER.name
             break;
        case 4:
            return NoteTypes.QUARTER.name
        case 8:
            return NoteTypes.HALF.name
        case 8:
            return NoteTypes.WHOLE.name
        break;
    
        default:
            return NoteTypes.WHOLE.name
            break;
    }
}

export const makeNewXML = (syllableArray: Array<any>) => {

    mainXML = ''

    startXML()
    startPartList()
    addPart('Noodle', 1)
    endPartList()
    startPart(1)
    startMeasure(1)

    syllableArray.forEach(syllable => {



        for (let i = 0; i < syllable.notes.length; i++) {

            let note = syllable.notes[i]
            // console.log(`${note.letterName}${note.octave}`)
            if (note !== undefined){

                // const noteType : string = getNoteType(note.startPosition,note.endPosition)

                const noteType : string = NoteTypes.QUARTER.name




                if (i === 0) {



                    
                    addNote(note.letterName,note.octave,noteType, NoteTypes.QUARTER.duration, 0,'none',0,'none', syllable.syllable)

                } else {
                    addNote(note.letterName,note.octave,noteType, NoteTypes.QUARTER.duration, 0,'none',0,'none')
                }
            }

        }
    })

    endMeasure()
    endPart()
    endXML()
    return mainXML
}

export const generateXML = () => {
    mainXML = ''
    startXML()
    startPartList()
    addPart('Noodle', 1)
    endPartList()
    startPart(1)
    startMeasure(1)

    // makeAllNotesInOneMeasure()

    endMeasure()
    endPart()
    endXML()
    return mainXML
}

export const generateXMLFromNoteObject = (noteString: string, key: number, mode: Array<number>) => {

    mainXML = ''

    let array = createNoteObjectArray(noteString, key, mode)

    array.forEach(element => {
        // console.log(`${element.letterName}`)
    });
    
    startXML()
    startPartList()
    addPart('Part', 1)
    endPartList()
    startPart(1)
    startMeasure(1, KeySignatures.C)

    createNotes(array)

    endMeasure()
    endPart()
    endXML()
    return mainXML
}


// HELPER FUNCTIONS

const createNotes = (array: Array<any>) => {

    array.forEach(element => {
        const noteName = element.letterName
        addNote(noteName,4,NoteTypes.QUARTER.name, NoteTypes.QUARTER.duration )
    });
    
    // addNote("E",4,NoteTypes.EIGHTH.name, NoteTypes.EIGHTH.duration, accidental.SHARP)
}

const startXML = () => {
    mainXML += `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <!DOCTYPE score-partwise PUBLIC
        "-//Recordare//DTD MusicXML 3.1 Partwise//EN"
        "http://www.musicxml.org/dtds/partwise.dtd">
        <score-partwise version="3.1">`
}

const startPartList = () =>{
    mainXML += `<part-list>`
}

const addPart = (name = '', IDnumber = 1) => {
    mainXML += `<score-part id="P${IDnumber}">
    <part-name>${name}</part-name>
    </score-part>`
}

const endPartList = () => {
    mainXML += `</part-list>`
}

const startPart = (IDnumber = 1) => {
    mainXML += `
    <part id="P${IDnumber}">
    `
}

const startMeasure = (number = 1, keySig = KeySignatures.C) => {
    mainXML += `
        <measure number="${number}">
    `
    if (number === 1) {
        mainXML += `
        <attributes>
            <divisions>1</divisions>
            <key>
            <fifths>${keySig}</fifths>
            </key>
            <time>
            <beats>4</beats>
            <beat-type>4</beat-type>
            </time>
            <clef>
            <sign>G</sign>
            <line>2</line>
            </clef>
        </attributes>
        `
    }
}

const addNote = (letterName: string = 'C', octave: number = 4, type: string = 'quarter', duration: number = 4, alter: number = 0, accidental:string ='none', voice:number = 1, slurType: string = 'none', lyric: string = 'none') => {
    mainXML += `
    <note>
    <pitch>
      <step>${letterName}</step>`
      if (alter !== null) {
          mainXML += `<alter>${alter}</alter>`
      }

      mainXML += `
      <octave>${octave}</octave>
    </pitch>
    <duration>${duration}</duration>
    <voice>${voice}</voice>
    <type>${type}</type>`


    // if slur
    if (slurType !== 'none') {
        mainXML += `
        <notations>
          <slur number="1" type="${slurType}"/>
        </notations>`
    }

    if (accidental !== 'none'){
        mainXML += `<accidental>${accidental}</accidental>`
    }


    // if lyric
    if (lyric !== 'none') {

        if (lyric[lyric.length -1] === '-'){

            const removeHyphen = lyric.slice(0, -1);

            mainXML += `
            <lyric number="1">
              <syllabic>begin</syllabic>
              <text>${removeHyphen}</text>
            </lyric>
            `
        } else {
            mainXML += `
            <lyric number="1">
              <syllabic>end</syllabic>
              <text>${lyric}</text>
            </lyric>
            `
        }
    }
    

  mainXML +=  `</note>`
}

const endMeasure = () => {
    mainXML += `</measure>`
}

const endPart = () => {
    mainXML += `
    </part>`
}

const endXML = () => {
    mainXML += `</score-partwise>`
}

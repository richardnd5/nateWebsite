import {NoteTypes, KeySignatures, accidental} from './MusicConstants'
import { createNoteObjectArray} from './StringToNoteObjectTypes'
import { pitches, allPossibleTriadicHarmonyNotes, KeySignaturesFromMidiNote, slurType, Lyric, SyllabicType } from './MusicConstants'

let mainXML = ``

export const generateXML = () => {
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

const addNote = (letterName:string = 'C', octave: number = 4, type: string = 'quarter', duration: number = 4, accidental: number = 0, voice:number = 1, slurType: string = 'none', lyric: string = 'none') => {
    mainXML += `
    <note>
    <pitch>
      <step>${letterName}</step>`
      if (accidental !== null) {
          mainXML += `<alter>${accidental}</alter>`
      }

      mainXML += `
      <alter>0</alter>
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


    // if lyric
    if (lyric !== 'none') {
        mainXML += `
        <lyric number="1">
          <syllabic>begin</syllabic>
          <text>lyr</text>
        </lyric>
        `
    }
    
    mainXML += `<accidental>${accidental}</accidental>`

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

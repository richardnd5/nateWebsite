import {noteTypes, keySignatures, accidental} from './MusicConstants'


let mainXML = ``



export const generateXML = () => {
    startXML()
    startPartList()
    addPart('Noodle', 1)
    endPartList()
    startPart(1)
    startMeasure(1)

    makeAllNotesInOneMeasure()

    endMeasure()
    endPart()
    endXML()
    return mainXML
}

const makeAllNotesInOneMeasure = (noteObject) => {
    addNote("D",4,noteTypes.QUARTER.name,noteTypes.QUARTER.duration)
    addNote("C",4,noteTypes.QUARTER.name,noteTypes.QUARTER.duration, accidental.SHARP)
    addNote("E",4,noteTypes.QUARTER.name,noteTypes.QUARTER.duration)
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

const startMeasure = (number = 1, keySig = keySignatures.C) => {
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

const addNote = (letterName = 'C', octave = 4, type = 'quarter', duration = '4', accidental) => {
    mainXML += `
    <note>
    <pitch>
      <step>${letterName}</step>`
      if (accidental !== null) {
          mainXML += `<alter>${accidental}</alter>`
      }

      mainXML += `<alter>-1</alter>
      <octave>${octave}</octave>
    </pitch>
    <duration>${duration}</duration>
    <type>${type}</type>
    <accidental>flat</accidental>    
    `



    
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

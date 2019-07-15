import {generateXMLFromNoteObject, makeNewXML} from '../../backendJS/MusicXMLTypes'
import {NoteTypes, KeySignatures, accidental, Modes} from '../../backendJS/MusicConstants'


export function createXML(syllableArray) {

const xml = makeNewXML(syllableArray)

return xml
}
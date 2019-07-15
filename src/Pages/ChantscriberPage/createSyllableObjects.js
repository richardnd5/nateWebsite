export const createSyllableObjectArray = (melodyObjectArray, lyricObjectArray) => {
    // const melodyObjectArray = createNoteObjectArray(melodyString, Key.C, Modes.ionian)
    // setMelodyObjects(melodyObjectArray)

    const syllableArray = []
    lyricObjectArray.forEach((e,i) => {

        let syllable = {
            syllable: e.syllable,
            noteCount: e.noteCount,
            position: e.position,
            notes: []
        }
        syllableArray.push(syllable)
    });

    let tempArrayPosition = 0
    syllableArray.forEach((syllable,i) => {

      

      for (let i = 0; i < syllable.noteCount; i++) {

        if (tempArrayPosition <= melodyObjectArray.length) {

          syllable.notes.push(melodyObjectArray[tempArrayPosition])
          tempArrayPosition++
        } 
      }
    })

    // setSyllableObjects(syllableArray)
    return syllableArray


  }
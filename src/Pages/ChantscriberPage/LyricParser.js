
export function createLyricObjects(string){

    const lyricArray = splitStringToArrayByWhiteSpace(string)
    let lyricObjects = []

    lyricArray.forEach((e,i) => {
        let lyricObject = {
            syllable: e,
            noteCount: 1,
            position: i
        }
        lyricObjects.push(lyricObject)
    });

    return lyricObjects
}

// HELPER FUNCTIONS

function splitStringToArrayByWhiteSpace(string){
    let cleanedString = removeWhiteSpaceFromString(string)
    let array = cleanedString.split(" ")
    return array
}

function removeWhiteSpaceFromString(string){
    return string
    .replace(/-/g, '- ') // replace hyphens with hyphen space
    .replace(/\s{2,}/g, ' ') // replace multiple whitespaces with single space
    .replace(/(\r\n|\n|\r)/gm," ") // replace carriage returns with space
    .trim() // removes whitespace at beginning and end
}
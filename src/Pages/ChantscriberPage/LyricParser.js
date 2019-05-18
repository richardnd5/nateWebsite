function removeWhiteSpaceFromString(string){
    return string
    .replace(/-/g, '- ') // replace hyphens with hyphen space
    .replace(/\s{2,10}/g, ' ') // replace carriage returns with space
    .replace(/\s{2,}/g, ' ') // replace multiple whitespaces with single space
    .trim() // removes whitespace at beginning and end
}

function splitStringToArrayByWhiteSpace(string){
    let cleanedString = removeWhiteSpaceFromString(string)
    let array = cleanedString.split(" ")
    return array
}

export function createLyricObjects(string){

    const lyricArray = splitStringToArrayByWhiteSpace(string)
    let lyricObjects = []

    lyricArray.forEach((e,i) => {
        let lyricObject = {
            syllable: e,
            noteCount: 7,
            position: i
        }
        lyricObjects.push(lyricObject)
    });

    return lyricObjects
}
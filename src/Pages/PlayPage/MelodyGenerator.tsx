export const makeRandomMelody = () => {
    let melodyString = ''
    for (let i = 1; i <= 32; i++) {
        const randomNum = Math.floor(Math.random() * 8) + 1 
        if (i % 8 === 0 && i !== 0){
            melodyString += `${inputCadenceNote(randomNum)}`
        } else {
            melodyString += `${inputMelodyNote(randomNum)}`
        }
    }
    return melodyString
}

export const makeStepwiseMelody = () => {

    let melodyLength : number = 33
    let melodyArray : number[] = []

    for (let i= 0; i< melodyLength; i++) {
        if (i === 0){
            let randomNum : number = Math.floor(Math.random() * 8) + 1 
            melodyArray.push(randomNum)
        } else {
            let randomNum = Math.floor(Math.random() * 8) + 1 
            while (Math.abs(randomNum - melodyArray[i-1]) > 1 || randomNum - melodyArray[i-1] === 0) {
                randomNum = Math.floor(Math.random() * 8) + 1 
            }
            melodyArray.push(randomNum)
        }
    }

    let melodyString : string = ''
    
    for (let i = 1; i <= melodyArray.length; i++) {
        const note : number = melodyArray[i]
        if (i % 8 === 0 && i !== 0){
            melodyString += `${inputCadenceNote(note)}`
        } else {
            melodyString += `${inputMelodyNote(note)}`
        }
    }
    return melodyString
}


// HELPERS
const inputMelodyNote = (num : number) => {
    return `${num};`
}

const inputCadenceNote = (num: number) => {
    return `${num};;;;;;;..`
}
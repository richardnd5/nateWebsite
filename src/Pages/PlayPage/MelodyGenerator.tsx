import { array } from "prop-types";

export const makeRandomMelody = () : string => {
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

export const makeStepwiseMelody = () :string =>  {

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


export const makingMelodyAgain = () : string => {
    let melodyString : string = ''

    const line1NoteChoices = ['7,','1','2','3','4']
    const line2NoteChoices = ['2','3','4','5']
    const line3NoteChoices = ['5','6','7','8',"2'"]
    const line4NoteChoices = ['1','2','3','4']

    let line1 : string[] = []
    let line2 : string[] = []
    let line3 : string[] = []
    let line4 : string[] = []

    for (let i = 0; i < 8; i++) {
        let rand1 : number = Math.floor(Math.random() * line1NoteChoices.length)
        let rand2 : number = Math.floor(Math.random() * line2NoteChoices.length) 
        let rand3 : number = Math.floor(Math.random() * line3NoteChoices.length) 
        let rand4 : number = Math.floor(Math.random() * line4NoteChoices.length) 

        const randomLine1 = line1NoteChoices[rand1]
        const randomLine2 = line2NoteChoices[rand2]
        const randomLine3 = line3NoteChoices[rand3]
        const randomLine4 = line4NoteChoices[rand4]

        line1.push(randomLine1)
        line2.push(randomLine2)
        line3.push(randomLine3)
        line4.push(randomLine4)
    }

    line1[0] = '1'
    line1[line1.length-2] = '2'
    line1[line1.length-1] = '3'

    line2[0] = '2'
    line2[line2.length-1] = '5'

    line3[0] = '7'
    line3[line3.length-1] = '5'

    line4[0] = '5'
    line4[line4.length-2] = '2'
    line4[line4.length-1] = '1'

    
    line1.unshift('0') // inserting a 0 as the first slot so modulo works best.
    
    const melodyArray : string[] = line1.concat(line2,line3,line4)


    // To look for same note in sequence (accept at cadences)
    melodyArray.forEach((e,i) => {
        if (e == melodyArray[i-1] && 
            i !== 0 &&  
            i !== melodyArray.length-1 && 
            i !== 25 &&
            i !== 8 &&
            i !== 16 &&
            i !== 24 &&
            i !== 32
        ){
            melodyArray[i] = `${parseInt(melodyArray[i])+1}` // gotta be a better way. haha
        }
    });

    if (melodyArray[7] === melodyArray[8]){
        melodyArray[7] = melodyArray[8]+1
    }

    for (let i = 1; i <= melodyArray.length-1; i++) {
        const note : string = melodyArray[i]
        if (i % 8 === 0 && i !== 0){
            melodyString += `${inputCadenceNote(note)}`
        } else {
            melodyString += `${inputMelodyNote(note)}`
        }
    }
    return melodyString
}

const randomIntInRange = (x:number, y: number) : number => {
    return Math.floor(Math.random() * y) + x 
}

//HELPERS
const percentChance = (number: number) : boolean => {
    let randomNum : number = Math.floor(Math.random() * 100) + 1;
    if (randomNum <= number) {
         return true
     } else {
         return false
     }
}

const inputMelodyNote = (num : number|string) : string => {
    return `${num};`
}

const inputCadenceNote = (num: number|string) : string => {
    return `${num};;;;;;;..`
}
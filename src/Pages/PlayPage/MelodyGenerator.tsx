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

// export const writeANiceMelody = () : string => {

//     const line1 = [1,2,3,4,5,6,5,4]
//     const line2 = [1,2,3,4,5,6,5,4]
//     const line3 = [1,2,3,4,5,6,5,4]
//     const line4 = [1,2,3,4,5,6,5,4]


//     // fill the melody slots with random numbers
//     for (let i = 0; i < 8; i++) {
//         let rand1 : number = Math.floor(Math.random() * 8) + 1 
//         let rand2 : number = Math.floor(Math.random() * 8) + 1 
//         let rand3 : number = Math.floor(Math.random() * 8) + 1 
//         let rand4 : number = Math.floor(Math.random() * 8) + 1 

//         line1[i] = rand1
//         line2[i] = rand2
//         line3[i] = rand3
//         line4[i] = rand4
//     }

//     // last note must be tonic
//     line4[line4.length-1] = 1

//     // highest note must be here
//     line3[3] = 8

//     // line2 highest note must be lower than line3
//     if (line2[3] >= line3[3]){
//         const randomAmountLower = randomIntInRange(1,2)
//         // console.log(randomAmountLower)
//         const newNumber = line3[3] - randomAmountLower

//         if (newNumber <= 0) {
//             line2[3] = 1 
//         } else {
//             line2[3] = newNumber
//         }

//     }

//     // line1 highest note must be lower than line2
//     if (line1[3] >= line2[3]){
//         const randomAmountLower = randomIntInRange(1,2)
//         const newNumber = line2[3] - randomAmountLower

        
        
//         if (newNumber <= 0) {
//             line1[3] = 1
//         } else {
//             line1[3] = newNumber
//         }
//         console.log(line1[3])

//     }

//     // line4 highest note must be lower than line3
//     if (line4[3] >= line3[3]){
//         const randomAmountLower = randomIntInRange(1,2)
//         const newNumber = line3[3]- randomAmountLower

//         if (newNumber <= 0) {
//             newNumber == 1
//             line4[3] = 1
//         } else {
//             line4[3] = newNumber
//         }

//     }

//     const melodyArray : number[] = line1.concat(0,line2,line3,line4)

//     // console.log(line1.concat(line2,line3,line4))
//     melodyArray.forEach((e,i) => {

//         /* if interval between the 
//         current and previous note is more than a 2nd

//         */
//             if ((e - melodyArray[i-1]) > 1 && i > 0){

//                 melodyArray[i] = melodyArray[i-1]+1

//             } else if ((e - melodyArray[i-1]) < 1 && i > 0){
//                 melodyArray[i] = melodyArray[i-1]-1

//             }
//     });

//     let melodyString : string = ''

//     for (let i = 1; i <= melodyArray.length; i++) {
//         const note : number = melodyArray[i]
//         if (i % 8 === 0 && i !== 0){
//             melodyString += `${inputCadenceNote(note)}`
//         } else {
//             melodyString += `${inputMelodyNote(note)}`
//         }
//     }
//     return melodyString

//     //TODO
//     // each line's highest note must be either 2nd, 4th or 6th note must be highest note. (33% chance)

//     // skip can be generated 25% of the time

//     // if skip is generated, the following note must be in the 
//     // opposite direction than the previous skip (lower or higher).

//     // if 3rd, next note should be step.

//     // if 4th or 5th, next note should be skip or step


// }


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
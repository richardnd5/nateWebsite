import React from "react"
import {Syllable} from './Syllable'


export const  SyllableView = ({ lyricObjectArray, incrementSyllableCount }) =>{
    return (
        <div className="todo-list">
        {lyricObjectArray.map((lyricObject, index) => (
          <Syllable
            key={index}
            index={index}
            lyricObject={lyricObject}
            incrementSyllableCount={incrementSyllableCount}
          />
        ))}
      </div>
    );
  }


// import React, {useContext, useState} from 'react'
// import { Container, Row } from 'react-bootstrap'
// import {Syllable} from './Syllable'

// import { ChantscriberContext } from './ChantscriberContext'

// const SyllableCells = () => {

// const value = useContext(ChantscriberContext)
// const [lyricObjectArray, updateNoteCount] = useState(value.lyricObjectArray)

//   return(
//     <>
//       { value.lyricObjectArray.map((object,i) => (
//           <Syllable 
//             syllable={object.syllable} 
//             key={i} 
//             noteCount={object.noteCount}
//             position={object.position}
//           />
//       ))}
//     </>
//   )}; 

// export const SyllableView = (props) => {
  

//   return(
//         <Container>
//             <Row>
//                 {/* <SyllableCells/>  */}
//             </Row>
//         </Container>        

// )}
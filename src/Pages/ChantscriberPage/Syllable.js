import React from "react"

export const Syllable = ({ lyricObject, index, incrementSyllableCount }) => {
    return (
      <div>

          <div>
            {lyricObject.syllable}
          </div>
          <div>
              {lyricObject.noteCount}
          </div>
        <div>
          <button onClick={() => incrementSyllableCount(index)}>Add</button>
        </div>
      </div>
    );
  }



// import React, {useContext, useState} from 'react'
// import styled from 'styled-components'
// import { ChantscriberContext } from './ChantscriberContext'


// const Container = styled.div`
//     background-color: #a1c9d1;
//     margin: 4px;
//     padding: 4px 15px 4px 15px;
//     cursor: pointer;
// `
// export const Syllable = (props) => {
    
//     const {syllable, position, noteCount} = props
//     const value = useContext(ChantscriberContext)
//     const [count, setCount] = useState(value.lyricObjectArray[position].noteCount)

//     console.log(value.lyricObjectArray[position])

//     return(  
//     <Container onClick={() => setCount(count + 1)}>
//         <div>{noteCount}</div>
//         <div>{syllable}</div>
//     </Container>
// )}
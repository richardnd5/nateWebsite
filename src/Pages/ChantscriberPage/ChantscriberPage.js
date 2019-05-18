
import React, { useState } from "react";
import styled from 'styled-components'
import {TodoForm} from './TodoForm'
import {Todo} from './Todo'
import {TodoList} from './TodoList'


import {TextInputView} from './TextInputView'
import {SyllableView} from './SyllableView'
import {createLyricObjects} from './LyricParser'

const Container = styled.div`

  color: black;
  font-family: 'Avenir';
  display: flex;
  flex-direction: column;
  align-items: center;

`

const NextStepButton = styled.button`
  background-color: #4a9b45;
  padding: 10px;
  margin-top: 50px;
  margin-bottom: 50px;

`


function ChantscriberPage() {

  const [lyricString, setLyrics] = useState("")
  const [melodyString, setMelody] = useState("")

  const [lyricObjectArray, setLyricObjectArray] = useState([])

  const [melodyObjectArray, setMelodyObjects] = useState([])

  const [number, setNumber] = useState(0)

  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      isCompleted: false
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false
    },
    {
      text: "Build really cool todo app",
      isCompleted: false
    }
  ]);

  const addToNumber = () => {
    const newNumber = number + 1
    setNumber(newNumber)
  }

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const incrementSyllableCount = index => {
    const newLyricObjectArray = [...lyricObjectArray]
    newLyricObjectArray[index].noteCount ++
    setTodos(newLyricObjectArray);
  };



  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

    const handleLyricChange = (event) => {
        const newLyricString = event.target.value
        setLyrics(newLyricString)

    }
    const handleMelodyChange = (event) => {

      const newMelody = event.target.value
        setMelody(newMelody)
    }
    

    const handleSubmit = (event) => {
        if (event.which === 13 /* Enter */) {
            event.preventDefault();
        }
    }

    const handleNextStepButtonPressed = () => {

      const arrayOfLyricObjects = createLyricObjects(lyricString)

      setLyricObjectArray(arrayOfLyricObjects)
      console.log(arrayOfLyricObjects)

      // this.setState({2
      //   lyricObjectArray: arrayOfLyricObjects
      // })
    }

    const handleSyllableClick = () => {
      console.log('howdy!')
    }

  return (
    <Container>

    <TextInputView title='Lyrics' onChange={handleLyricChange} onSubmit={handleSubmit} inputText={"howhow"}/>
    <NextStepButton onClick={handleNextStepButtonPressed}>Go to Next Step!</NextStepButton>
    <SyllableView lyricObjectArray={lyricObjectArray} incrementSyllableCount={incrementSyllableCount}/>
    <TextInputView title='Melody' onChange={handleMelodyChange} onSubmit={handleSubmit} inputText={"should be melody string"}/>


    <div>{number}</div>
    <button onClick={addToNumber}></button>
      <TodoList todos={todos} completeTodo={completeTodo} removeTodo={removeTodo}/>
        <TodoForm addTodo={addTodo} />
    </Container>
  );
}

export default ChantscriberPage;




// import React, { Component, useContext, useState } from 'react'
// import styled from 'styled-components'
// import {TextInputView} from './TextInputView'
// import {SyllableView} from './SyllableView'
// import {createLyricObjects} from './LyricParser'

// import { ChantscriberContext } from './ChantscriberContext'


// const Container = styled.div`

//   color: black;
//   font-family: 'Avenir';
//   display: flex;
//   flex-direction: column;
//   align-items: center;

// `

// const NextStepButton = styled.button`
//   background-color: #4a9b45;
//   padding: 10px;
//   margin-top: 50px;
//   margin-bottom: 50px;

// `

// export default class ChantscriberPage extends Component {

//     state = {
//         lyrics: "",
//         noteObjectArray: {},
//         melodyString: "Type Melody Here!",
//         lyricString: "Type Lyrics Here!",
//         lyricObjectArray: [],
//         testNumber: 0
//     }

    

//     handleLyricChange = (event) => {
//         this.setState({ lyricString: event.target.value });
//     }
//     handleMelodyChange = (event) => {
//         this.setState({ melodyString: event.target.value });
//     }
    

//     handleSubmit = (event) => {
//         if (event.which === 13 /* Enter */) {
//             event.preventDefault();
//         }
//     }

//     handleNextStepButtonPressed = () => {

//       const arrayOfLyricObjects = createLyricObjects(this.state.lyricString)

//       this.setState({
//         lyricObjectArray: arrayOfLyricObjects
//       })
//     }

//     handleSyllableClick = () => {
//       console.log('howdy!')
//     }

//   render() {
//     return (
//       <Container>
//         <ChantscriberContext.Provider value={this.state}>

//           <TextInputView title='Lyrics' onChange={this.handleLyricChange} onSubmit={this.handleSubmit} inputText={this.state.lyricString}/>
//           <NextStepButton onClick={this.handleNextStepButtonPressed}>Go to Next Step!</NextStepButton>
//           <SyllableView lyricObjects={this.state.lyricObjectArray}/>
//           <TextInputView title='Melody' onChange={this.handleMelodyChange} onSubmit={this.handleSubmit} inputText={this.state.melodyString}/>
//         </ChantscriberContext.Provider>

//       </Container>
//     )
//   }
// }


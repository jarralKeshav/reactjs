import { useState } from "react"

const Display =({counter})=> <div>{counter}</div>
const Button =({handleClick,text}) => <button onClick={handleClick}>{text}</button>


const App = () => {
  const [counter, setCounter] = useState(0)
  console.log('rendering with counter value', counter)
  const addByOne = () => {
    setCounter(counter+1)
    console.log('addByOne>>>',counter)
  }
  const minusByOne = () => {
    setCounter(counter-1)
    console.log('minusByOne>>>',counter)
  }
  const setToZero = () => {
    setCounter(0)
    console.log('setToZero>>>',counter)
  }
  console.log("rendering counter,....", counter)
  


  return (
    <div>
     <Display counter ={counter}/>
      <Button handleClick = {addByOne}
      text = "Add"/>


      <Button handleClick ={minusByOne}
        text='minus'
      />

      <Button handleClick = {setToZero}
      text='Reset'/>

    </div>


  )
}
export default App
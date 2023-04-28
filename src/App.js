
const Hello = (props) =>{

  const bornYear =() =>{
    const yearNow = new Date().getFullYear()
    return yearNow-props.age
  }

  return(
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old. 
      </p>  
      <p>So You were probably born in the year {bornYear()}</p>
    </div>
  )
}

// keshav jrall

const App = () => {
  
  const name = "keshav"
  const age = 21


  return(
    <div>
    <h1>Greetings</h1>
    <Hello name = {name} age = {age} />
  </div>
  )
  }

export default App
import {useState} from "react"

const App =() =>{
  
  const [left,setLeft] = useState(0)
  const [right,setRight] = useState(0)
  const [allClicks,setAll] = useState([])
  const [total,setTotal] = useState(0)

  const handleLeftClick = () =>{
    setAll(allClicks.concat('L'))
    // setLeft(left+1)
    const updatedLeft = left+1
    setLeft(updatedLeft)
    
    setTotal(updatedLeft+right)
    
    }
    
  
  const handleRightClick = () =>{
    setAll(allClicks.concat('R'))
    setRight(right+1)
    setTotal(right+left)
    }

    const History = (props)=> {
      if(props.allClicks.length ===0){
        return(
          <div>
            the app is used by clicking
          </div>
        )
      }
      return(
        <div>
          button pressed history: {props.allClicks.join(' ')}
        </div>
      )
      
    }

    const Button =({handleClick,text}) =>(      
      <button onClick={handleClick}>
        {text}
      </button>
    )
      
    
    
  

  return(
    <div>
        {left}
        <Button handleClick={handleLeftClick} text ='left'/>
        
        <Button handleClick={handleRightClick} text='right'/>
        {right}


        {/* <p>{allClicks.join(' ')}</p> */}
        <p>Total {total}</p>
        <History allClicks = {allClicks}/>
    </div>
  )
}

export default App
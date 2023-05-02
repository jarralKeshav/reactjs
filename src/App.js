import {useState} from "react"

const App =() =>{
  
  const [clicks,setclicks] =useState({left:0,right:0})

  const handleLeftClick = () =>{
    const newClicks ={
      ...clicks,
      left: clicks.left+1
    }
    console.log('left clicked...',clicks)
    setclicks(newClicks)
  }

  const handleRightClick = () =>{
    const newClicks ={
      ...clicks,
      right: clicks.right+1
    }
    console.log('right clicked... ',clicks)
    setclicks(newClicks)
  }

  return(
    <div>
        {clicks.left}
        <button onClick={handleLeftClick}>Left</button>
        {clicks.right}
        <button onClick={handleRightClick}>Right</button>
    </div>
  )
}

export default App
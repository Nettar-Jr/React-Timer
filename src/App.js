import {React, useState, useEffect} from 'react';
import './App.css';
import DisplayTimer from './components/DisplayTimer';
import TimerBtn from './components/TimerBtn';


function App() {

  const [time, setTime] = useState(0)
  const [displayActive, setdisplayActive] = useState(false)
  const [displayPaused, setdisplayPaused] = useState(false)
  
  useEffect(() => {
    let interval = null;

    if (displayActive && displayPaused === false){
      interval = setInterval(()=> {
        setTime ((time) => time + 10);
      }, 10)
    } else{
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    }
  }, [displayActive, displayPaused])

  const start = ()=> {
    setdisplayActive(true);
    setdisplayPaused(false);
    console.log('start');
  };

  const pause = ()=> {
    setdisplayPaused(!displayPaused);
  };

  const reset = ()=> {
    setdisplayPaused(false);
    setdisplayActive(false)

    setTime(0);
  }

  let titleStyle = { color: "#301934", fontSize: "inherit", fontFamily:"cursive" };

  return (
    <div className="App">
      <h2 style={titleStyle}>React Timer</h2>
      <div className="app-container">
        <DisplayTimer time={time}/>
        <hr />
        <TimerBtn 
          start={start}
          pause = {pause}
          reset ={reset}
          displayActive={displayActive}
          displayPaused={displayPaused}
          />
      </div>
    </div>
  );
}

export default App;

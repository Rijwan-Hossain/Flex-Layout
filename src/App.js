import React, {useState} from 'react' 
import Header from './components/Header/Header' 
import Body from './components/Body/Body.jsx'

function App() { 
  let [navState, setNavState] = useState(true) 

  const navStateHandler = () => { 
    setNavState(!navState) 
  } 
  
  return ( 
    <div > 
      <Header navStateChanger={navStateHandler} /> 
      <Body iconState={navState} /> 
    </div> 
  ); 
} 

export default App; 

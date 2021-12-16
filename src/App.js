import React, {useState} from "react";
import Card from "./components/Card";
import './App.css'

const App = () =>{
  
  const [name, setName] = useState('Your Name');
  const [job, setJob] = useState('Job Title');
  const [about, setAbout] = useState('Hey, this is my homepage, so I have to say something about myself. Sometimes it is hard to introduce yourself because you know yourself so well that you do not know where to start with. Let me give a try to see what kind of image you have about me through my self-description.');

  return(
    <>
    <div className="App">
      <Card name={'Abdurashid Nabijonov'} job={'Frontend Developer'} about={about} />
    </div>
    </>
  )
}

export default App; 

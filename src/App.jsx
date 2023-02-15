import { useState } from 'react'
import Competitors from './components/competitors/Competitors';
import Header from './components/header/Header';
import Vote from './components/modal/Vote';
import Timer from './components/timer/Timer';




function App() {
 

  return (
    <div>
   <Header/>
   <Timer/>
   <Competitors/>
   <Vote/>
   </div>
  )
}

export default App

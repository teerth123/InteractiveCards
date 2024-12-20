import { useState } from 'react'
import './App.css'
import Card from './component/Card'
import Pikachu from "./assets/pikachu.png"
import jiggly from "./assets/jiggly.png"
import mario from "./assets/mario.png"
import bulb from "./assets/bulb.png"
import sonic from "./assets/sonic.png"

function App() {
  const [enter, setEnter]= useState(0);
  return (
    <>
      <div className='mainDiv bg-black min-h-screen min-w-full flex justify-center items-center fixed'>
        <div className='flex py-20 px-40 justify-center items-center md:flex-row flex-col' onMouseEnter={()=>setEnter(1)} onMouseLeave={()=>setEnter(0)} >
          <Card title={"Jigglypuff"} desc="Pokemon" points={3.8} color={"#50B6EE"} pic={jiggly} enter={enter} z={-2}/>
          <Card title={"Mario"} desc="Mario Bros" points={4.8} color={"#EA4F5D"} pic={mario} enter={enter} z={-1}/>
          <Card title={"Bulbasaur"} desc="Pokemon" points={4.5} color={"#20D3AE"} pic={bulb} enter={enter} z={0}/>
          <Card title={"Sonic"} desc="Sonic Universe" points={4.7} color={"#693ADF"} pic={sonic} enter={enter} z={1}/>
          <Card title={"Pikachu"} desc="Pokemon" points={5.0} color={"#ECCB2C"} pic={Pikachu} enter={enter} z={2}/>
        </div>
      </div>
    </>
  )
}

export default App

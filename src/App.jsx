
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import LineChart from './components/Linechart/Linechart'

import Navbar from './components/Navbar/Navbar'
import PriceOptions from './components/PriceOptions/PriceOptions'

function App() {


  return (
    <>
    <Navbar></Navbar>
    <DaisyNav></DaisyNav>
    <PriceOptions></PriceOptions>
    <LineChart></LineChart>
    </>
  )
}

export default App

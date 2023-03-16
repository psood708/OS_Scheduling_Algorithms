import { HomePage } from './Pages/HomePage';
import { BrowserRouter,Routes, Route } from "react-router-dom"
import {RoundRobin} from './Pages/RoundRobin';
import {ScanCscan} from "./Pages/ScanCscan";
import {Bankers} from "./Pages/Bankers";
import {MRU} from "./Pages/MRU";
import './App.css';
import { BankersAlgo } from './Algorithms/BankersAlgo';
import { AboutUs } from './Pages/AboutUs';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/roundrobin" element={<RoundRobin/>}/>
        <Route exact path="/scan-cscan" element={<ScanCscan/>}/>
        <Route exact path="/bankersAlgorithm" element = {<Bankers/>}/>
        <Route exact path="/MRU" element ={<MRU/>}/>
        <Route exact path="/about" element={<AboutUs/>}/>
        <Route  path="/simulation_bankers" element={<BankersAlgo/>}/>


      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;

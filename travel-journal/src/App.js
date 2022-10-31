import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import Traveldetails from "./components/Traveldetails"
import data from "./data.js";

export default function App() {
  var placeDetails=data.map((item)=>{
    return <Traveldetails item={item}/>;
  });

  return (
    <div className="App">
      <Navbar/>
      {placeDetails}
      
    </div>
  );
}


import { useState } from "react";
import "./App.css";
import AllGun from "./Components/AllGun/AllGun";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const [count, setCount] = useState(0);
  const countIncrease = () => setCount(count + 1);
  return (
    <div>
      <Navbar count={count}></Navbar>
      <AllGun countIncrease={countIncrease}></AllGun>
    </div>
  );
}
export default App;

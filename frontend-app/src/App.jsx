import React from "react";
// import Nav from "./components/Nav";
// import {Counter} from "./components/Counter";
// import CounterFBC from "./components/CounterFBC";
//import DisplayMyDetails from "./components/DisplayMyDetails";
import ProductCard from "./components/ProductCard";
import Products from "./components/Products";
const App = () => {
  //let details=["Ravi","Hu205"];
  //let Role="Developer";
  // let Name = "pravallika"
  // let RollNo = "5i8"
  //let Role = "dev"
  // let Course = "cse"
  // let College = "BITS"
  return (
    <p>
      <Nav />
      {/* <Counter />
      <CounterFBC fullDetails={details} role={Role} />
      <DisplayMyDetails Name={Name} RollNo={RollNo} Role={Role} Course={Course} College={College} />  */}
      <Products />
    </p>
  );
};
export default App;
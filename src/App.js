import {Component} from "react";
import './App.css';
import Timer from "./Component/timer/Timer"
import Timerbtn from "./Component/timerbtn/timerbtn"

class App extends Component{
  render() {
      return (
          <div className="App">

              <div className="container ">

                  <Timer hour={0} minute={0} second={1} ></Timer>
                  <Timerbtn></Timerbtn>

              </div>
          </div>
      );
  }
}

export default App;

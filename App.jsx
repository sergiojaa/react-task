import react, { Component } from "react"
import './App.css'
import imagess from './images/sergi.jpg'


class App extends Component{
  render(){
    return(
      <div className="users">
        <div className="user-item">
          {/* <input type="text" /> */}
          <h1>sergi qaliashvili</h1>
          <p>I am future web developer.I am studying in skillwill.</p>
          <img classname="poto" src={imagess} alt="" />
          <h1>dreams without goals are <br /> just dreams</h1>
          <h2>let's make all our dreams come true</h2>
          <h3>not portfolio but fot the first time of writing  <br />in jsx file I will be satisfied.for the next  time I will <br /> write long code.I promise</h3>
        </div>
      </div>
    )
  }
}
export default App
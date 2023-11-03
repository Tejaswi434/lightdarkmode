import {Component} from 'react'

class LightDarkMode extends Component {
state={back:"light"}
changetodark=()=>{
    this.setState((prevState)=>({prevState.back:"dark"}))
}
changetolight=()={
    this.setState((prevState)=>({prevState.back:"light"}))
}
  render() {
      
      const{back}=this.state

      return(
          if(back==="light"){
     <div className="dark">
         <h1>Click to Change Mode</h1>
         <button onClick={this.changetodark}>Light Mode</button>
     </div>
      }
      else{
          <div className="light">
         <h1>Click to Change Mode</h1>
         <button onClick={this.changetolight}>Dark Mode</button>
     </div>
      }
      )
}

export default LightDarkMode

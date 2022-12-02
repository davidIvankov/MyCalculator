
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ReactDOM from 'react-dom'
import './style.css';
class DisplayScreen extends React.Component {
  render() {
    return(
    <div id ="display">
        <h1 id="form" >{this.props.output}</h1>
        </div>
    )
  }
}
class MyCalculator extends
 React.Component{
  constructor(props){
    super(props);
    this.state = {
      formula: [],
      result: "0",
      solved: false,
      ops: [],
    }
   this.handleClear=this.handleClear.bind(this);
      this.numClick=this.numClick.bind(this);
    this.calculate = this.calculate.bind(this);
    this.operations=this.operations.bind(this);
  }

   
  operations(e){
    if (this.state.ops[2] ==="-") {
  let ses = this.state.ops.slice(0, 1)
      this.setState({
      formula: [ses, e.target.value],
      result: "0",
        solved: false,
         ops:[ses, e.target.value],
      })
    }
  else  if (this.state.solved === true) {
      this.setState({
      formula: [...this.state.result, e.target.value],
      result: "0",
        solved: false,
         ops:[...this.state.ops, this.state.result, e.target.value],
      })
    }

  else {
    if (this.state.ops.length < 2) {
      this.setState({
      formula: [...this.state.formula,this.state.result, e.target.value],
      result: "",
         ops:[...this.state.ops,this.state.result, e.target.value],
      })
    } 
    else {
      // plus operator added on formula
      if (e.target.value === "+") {
        // if formula contained multiply
        if ((/[*]$/).test(this.state.ops)) {
          let num =Number(this.state.ops[0]) * Number(this.state.result);
   this.setState({
      formula: [...this.state.formula, this.state.result,  e.target.value],
     result: "0",
     ops: [ num.toString(), e.target.value]
   })
        } else if ((/[/]$/).test(this.state.ops)) {
          let num =Number(this.state.ops[0]) / Number(this.state.result);
   this.setState({
      formula: [...this.state.formula, this.state.result,  e.target.value],
     result: "0",
     ops: [ num.toString(), e.target.value]
   })
        } else if ((/[+]$/).test(this.state.ops)) {
          let num =Number(this.state.ops[0]) + Number(this.state.result);
   this.setState({
      formula: [...this.state.formula, this.state.result,  e.target.value],
     result: "0",
     ops: [ num.toString(), e.target.value]
   })
        } else if ((/[-]$/).test(this.state.ops)) {
          let num =Number(this.state.ops[0]) - Number(this.state.result);
   this.setState({
      formula: [...this.state.formula, this.state.result,  e.target.value],
     result: "0",
     ops: [ num.toString(), e.target.value]
   })
        } 
        }
      //minus operator was added
      if (e.target.value === "-") {
    if (this.state.result === "" && e.target.value === "-") {
   this.setState({
      formula: [...this.state.formula,],
     result: e.target.value , 
     ops: [...this.state.ops, e.target.value]
     
   })
    }
       else if ((/[*]$/).test(this.state.ops)) {
       
          let num =Number(this.state.ops[0]) * Number(this.state.result);
   this.setState({
      formula: [...this.state.formula, this.state.result,  e.target.value],
     result: "0",
     ops: [ num.toString(), e.target.value]
   })
        } else if ((/[/]$/).test(this.state.ops)) {
          let num =Number(this.state.ops[0]) / Number(this.state.result);
   this.setState({
      formula: [...this.state.formula, this.state.result,  e.target.value],
     result: "0",
     ops: [ num.toString(), e.target.value]
   })
        } else if ((/[+]$/).test(this.state.ops)) {
          let num =Number(this.state.ops[0]) + Number(this.state.result);
   this.setState({
      formula: [...this.state.formula, this.state.result,  e.target.value],
     result: "0",
     ops: [ num.toString(), e.target.value]
   })
        } else if ((/[-]$/).test(this.state.ops)) {
          let num =Number(this.state.ops[0]) - Number(this.state.result);
   this.setState({
      formula: [ ...this.state.formula, this.state.result,  e.target.value],
     result: "0",
     ops: [ num.toString(), e.target.value]
   })
        } 
        }
      // devide operator was added
    else  if (e.target.value === "/") {
      
        if ((/[*]$/).test(this.state.ops)) {
          let num =Number(this.state.ops[0]) * Number(this.state.result);
   this.setState({
      formula: [ ...this.state.formula, this.state.result,  e.target.value],
     result: "0",
     ops: [ num.toString(), e.target.value]
   })
 
        } else if ((/[/]$/).test(this.state.ops)) {
          let num =Number(this.state.ops[0]) / Number(this.state.result);
   this.setState({
      formula: [...this.state.formula, this.state.result,  e.target.value],
     result: "0",
     ops: [ num.toString(), e.target.value]
   })
        } else if ((/[+]$/).test(this.state.ops)) {
          let num =Number(this.state.ops[0]) + Number(this.state.result);
   this.setState({
      formula: [ ...this.state.formula, this.state.result,  e.target.value],
     result: "0",
     ops: [ num.toString(), e.target.value]
   })
        } else if ((/[-]$/).test(this.state.ops)) {
          let num =Number(this.state.ops[0]) - Number(this.state.result);
   this.setState({
      formula: [ ...this.state.formula, this.state.result,  e.target.value],
     result: "0",
     ops: [ num.toString(), e.target.value]
   })
        } 
        }
      // multiply was added
      if (e.target.value === "*") {
        // if formula contained multiply
        if ((/[*]$/).test(this.state.ops)) {
          let num =Number(this.state.ops[0]) * Number(this.state.result);
   this.setState({
      formula: [ ...this.state.formula, this.state.result,  e.target.value],
     result: "0",
     ops: [ num.toString(), e.target.value]
   })
  // if formula contained devide
        } else if ((/[/]$/).test(this.state.ops)) {
          let num =Number(this.state.ops[0]) / Number(this.state.result);
   this.setState({
      formula: [...this.state.formula, this.state.result,  e.target.value],
     result: "0",
     ops: [ num.toString(), e.target.value]
   })
        } else if ((/[+]$/).test(this.state.ops)) {
          let num =Number(this.state.ops[0]) + Number(this.state.result);
   this.setState({
      formula: [...this.state.formula, this.state.result,  e.target.value],
     result: "0",
     ops: [ num.toString(), e.target.value]
   })
        } else if ((/[-]$/).test(this.state.ops)) {
          let num =Number(this.state.ops[0]) - Number(this.state.result);
   this.setState({
      formula: [...this.state.formula, this.state.result,  e.target.value],
     result: "0",
     ops: [ num.toString(), e.target.value]
   })
        } 
        }
      }
    }
  
  }
   calculate(e) {
     if (this.state.solved === false) {
     if ((/[*]/).test(this.state.ops)) {
       let num =Number(this.state.ops[0]) * Number(this.state.result)
     this.setState({
       formula: [...this.state.formula, this.state.result, e.target.value, num],
       result: num.toString(),
       solved: true,
       ops: []
     })
     } else if ((/[/]/).test(this.state.ops)) {
       let num =Number(this.state.ops[0]) / Number(this.state.result)
     this.setState({
       formula: [...this.state.formula, this.state.result, e.target.value, num],
       result: num.toString(),
       solved: true,
       ops: []
     })
     } else if ((/[+]$/).test(this.state.ops)) {
       let num =Number(this.state.ops[0]) + Number(this.state.result)
     this.setState({
       formula: [...this.state.formula, this.state.result, e.target.value, num],
       result: num.toString(),
       solved: true,
       ops: []
     })
     }else if ((/[-]/).test(this.state.ops)) {
       let num =Number(this.state.ops[0]) - Number(this.state.result)
     this.setState({
       formula: [...this.state.formula,this.state.result, e.target.value, num],
       result: num.toString(),
       solved: true,
       ops: []
     })
     }
     }
   }
  
   numClick(e) {
     if (e.target.value === "." && this.state.result === "0") {
       this.setState({
         result: this.state.result + e.target.value,
       })
     }
     else if (e.target.value === "." && (/[.]/g).test(this.state.result)) {
       this.setState(this.state)
     }
   else if (this.state.result === "0") {
       this.setState({
         result: e.target.value
       })
     } else if (this.state.solved){
       this.setState({
         formula: [],
          result: e.target.value,
         solved: false,  
       })
     } else {
      this.setState({
        result: this.state.result + e.target.value,
        solved: false
      })
     } 
   }
  handleClear() {
    this.setState((state)=>{
      return {
      formula: [],
      result: "0",
      solved: false,
  ops: [],
      }
    })
  }
  render() {
   
    return(
      <div id="calculator">
        <div className= "screene">
        <h3 id ="form">{this.state.formula}</h3>
        <DisplayScreen id ="form" output={this.state.result}/>
           </div>
        <div>
      <button id="clear" className=" btn-danger " onClick ={this.handleClear} >CLEAR</button>
           <button id="equals" className=" btn-info " onClick={this.calculate} value ="=">=</button>
          <div className="roW">
            <div>
      <button id="divide" className=" btn-primary "onClick={this.operations} value="/">/</button>
      <button id="multiply" className=" btn-primary "onClick={this.operations} value="*">*</button>
              </div>
            <div>
      <button id="subtract" className=" btn-primary "onClick={this.operations} value="-">-</button>
      <button id="add" className=" btn-primary "onClick={this.operations} value="+">+</button>
            </div>
            </div>
      </div>
        <div>
          <div id="first-three">
      <button id="zero" onClick={this.numClick} value="0">0</button>
      <button id="one" onClick ={this.numClick} value ="1">1</button>
      <button id="two" onClick={this.numClick} value ="2">2</button>
          </div>
          <div id="second-three">
      <button id="three" onClick ={this.numClick} value ="3" >3</button>
      <button id="four"onClick={this.numClick} value ="4">4</button>
      <button id="five"onClick={this.numClick} value ="5">5</button>
          </div>
          <div id="last-three">
      <button id="six"onClick={this.numClick} value ="6">6</button>
      <button id="seven"onClick={this.numClick} value ="7">7</button>
      <button id="eight"onClick={this.numClick} value ="8">8</button>
            </div>
      <button id="nine"onClick={this.numClick} value ="9">9</button>
      <button id="decimal"onClick={this.numClick} value ="." >.</button>
        </div>
      </div>

    )
  }
}

ReactDOM.render(<MyCalculator/>, document.getElementById("root"))
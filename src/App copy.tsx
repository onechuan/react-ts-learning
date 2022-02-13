import React, { Component } from 'react';
import styles from './App.module.css';
import robots from "./mock/robots.json"
import Robot from './components/Robots/index';
import { ShoppingCart } from './components/ShoppingCart/index';
import logo from "./assets/images/logo.svg"

interface IProps{}
interface IState{
  count: number;
}

// 之所以在html中不能直接使用class，是因为为了避免与es6语法中的类冲突
class App extends Component<IProps, IState>{

  state = {
    count: 0
  }

  handlClick = ()=>{
    this.setState((preState, preProps)=>{
      console.log("pre-count1",preState.count);
      return {count: preState.count+1}
    },()=>{
      console.log("count1",this.state.count);
    })
    
    this.setState((preState, preProps)=>{
      console.log("pre-count2",preState.count);
      return {count: preState.count+1}
    },()=>{
      console.log("count2",this.state.count);
    })
    
  }
  render(){
    return  <div className={styles.app}>
    <div className={styles.appHeader}>
      <img src={logo} className={styles.appLogo} alt="" />
      <h1>超酷的机器人平台</h1>
    </div>
    <button onClick={this.handlClick}>新增+{this.state.count}</button>
    <br/>
    <ShoppingCart/>
    <div  className={styles.robotList}>
      {
        robots.map(r=><Robot  id={r.id} email={r.email} name={r.name} key={r.id}/>)
      }
    </div>
  </div>
  }
}

export default App;

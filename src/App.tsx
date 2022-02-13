import React, { Component, useEffect, useState } from 'react';
import styles from './App.module.css';
import robots from "./mock/robots.json"
import Robots from './components/Robots/index';
import { ShoppingCart } from './components/ShoppingCart/index';
import logo from "./assets/images/logo.svg"
import RobotsDiscount from './components/RobotsDiscount';

interface IProps{
}
interface IState{
  count: number;
}

// 之所以在html中不能直接使用class，是因为为了避免与es6语法中的类冲突
const App: React.FC<IProps> = ()=>{
 const [count, setCount] =  useState(0)

 function handleClick(){
   setCount(count+1)
 }

//  监督count的值变化而改变DOM
//  useEffect(()=>{
//    document.title = `点击${count}次`
//   },[count])

  // useEffect(()=>{
  //   document.title = `点击${count}次`
  //  },[])

 return  <div className={styles.app}>
    <div className={styles.appHeader}>
      <img src={logo} className={styles.appLogo} alt="" />
      <h1>超酷的机器人平台</h1>
    </div>
    <button onClick={handleClick}>新增+{count}</button>
    <br/>
    <ShoppingCart/>
    <div  className={styles.robotList}>
      {
        robots.map((r,index)=>index % 2 === 0 ?<RobotsDiscount id={r.id} email={r.email} name={r.name} key={r.id}/> : <Robots   id={r.id} email={r.email} name={r.name} key={r.id}/>)
      }
    </div>
  </div>
}

export default App;

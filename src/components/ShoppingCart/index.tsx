import React,{Component} from "react"
import styles from "./ShoppingCart.module.css"
interface IProps {}

interface IState {
  isOpen: boolean
}

export class ShoppingCart extends Component<IProps,IState>{
  constructor(props:IProps){
    super(props)
    this.state = {
      isOpen: false
    }
  }
  render(){
    const {isOpen} = this.state
    return <div className={styles.cartContainer}>
      <button className={styles.button}  onClick={()=>this.setState({isOpen:!isOpen})}>购物车：(2) 件</button>
      <div className={styles.cartDropDown} style={{
        display: isOpen ? "block" :"none"
      }}>
        <ul >
          <li>robot 1</li>
          <li>robot 2</li>
        </ul>
      </div>
    </div>
  }
}
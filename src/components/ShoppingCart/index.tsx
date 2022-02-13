import React,{Component} from "react"
import styles from "./ShoppingCart.module.css"
import {FiShoppingCart} from "react-icons/fi"
import {appContext, AppStateProvider} from "../../AppState"
interface IProps {
  
}

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

  // 直接进行写在方法中的this指向的是函数本身
  handleClick=(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    console.log("e.target",e.target);
    console.log("e.currentTarget",e.currentTarget);
    if((e.target as HTMLElement).nodeName === "SPAN"){
      this.setState({isOpen:!this.state.isOpen})
    }
    
    
  }

  render(){
    const {isOpen} = this.state
    return <appContext.Consumer>
      {
        value=>{
          return <div className={styles.cartContainer}>

          <button className={styles.button}  onClick={this.handleClick}><FiShoppingCart/><span>购物车：({value.shoppingCart.items.length}) 件</span></button>
          <div className={styles.cartDropDown} style={{
            display: isOpen ? "block" :"none"
          }}>
            <ul >
              {
                value.shoppingCart.items.map(item=><li key={item.id}>{item.name}</li>)
              }
            </ul>
          </div>
        </div>
        }
      }
    </appContext.Consumer>
  }
}
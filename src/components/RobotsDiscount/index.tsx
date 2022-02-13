import React, { useContext } from "react";
import styles from './RobotsDiscount.module.css'
import {appContext,appSetStateContext} from "../../AppState"
import {useAddToCart} from "../AddToCart"
interface IRobotProps {
  id: number;
  name: string;
  email: string;
}

const RobotsDiscount: React.FC<IRobotProps> = ({ id, name, email}) => {

  const value = useContext(appContext)
  const addToCart = useAddToCart()

  return (
    <div className={styles.cardContainer}>
      <img alt="robot" src={`https://robohash.org/${id}`} />
      <h1>折扣商品</h1>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>作者：{value.username}</p>
      <button   onClick={()=>addToCart(id,name)}>加入购物车</button>
    </div>
  );
};

export default RobotsDiscount;

import React, { useContext } from "react";
import styles from './Robots.module.css'
import {appContext,appSetStateContext} from "../../AppState"
import { withAddToCart } from "../AddToCart";

export interface IRobotProps {
  id: number;
  name: string;
  email: string;
  addToCart:(id,name)=>void
}

const Robots: React.FC<IRobotProps> = ({ id, name, email,addToCart}) => {

  const value = useContext(appContext)

  return (
    <div className={styles.cardContainer}>
      <img alt="robot" src={`https://robohash.org/${id}`} />
      <h2>{name}</h2>
      <p>{email}</p>
      <p>作者：{value.username}</p>
      <button  onClick={()=>addToCart(id,name)}>加入购物车</button>
    </div>
  );
};

export default withAddToCart(Robots);

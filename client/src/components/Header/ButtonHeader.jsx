import React from 'react'
import Arrow from "../../assets/arrow.svg";
import { Link } from "react-router-dom";


export function ButtonHeader(props) {
    return (
      <Link to={props.to}>
        <button className={props.className}>
          <img src={Arrow} alt="" className={props.imgClassName} />
          <p>{props.text}</p>
        </button>
      </Link>
    );
  }
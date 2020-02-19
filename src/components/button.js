import React from "react"
import buttonStyles from "./buttonStyles.module.css"
import { Link } from "gatsby"

const Button = props => {
  return (
    <Link to={props.link} className={buttonStyles.button}>
      {props.innerText}
    </Link>
  )
}

export default Button

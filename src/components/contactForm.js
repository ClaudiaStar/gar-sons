import React from "react"
import classes from "./contactFormStyles.module.css"

const ContactForm = () => {
  return (
    <React.Fragment>
      <div className={classes.ContactForm}>
        <h2>GET A FREE QUOTE!</h2>
        <div className={classes.FirstName}>
          <input
            type="text"
            name=""
            required="required"
            placeholder="First name"
          />
        </div>
        <div className={classes.LastName}>
          <input
            type="text"
            name=""
            required="required"
            placeholder="Last name"
          />
        </div>
        <div className={classes.Email}>
          <input type="email" name="" required="required" placeholder="Email" />
        </div>
        <div className={classes.Phone}>
          <input type="tel" name="" required="required" placeholder="Phone" />
        </div>
        <div className={classes.Message}>
          <textarea
            type="text"
            name=""
            required="required"
            placeholder="Please leave us a brief description here..."
          />
        </div>
        <div className={classes.Submit}>
          <button type="submit">Submit</button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ContactForm

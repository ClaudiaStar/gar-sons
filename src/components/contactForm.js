import React from "react"
import { navigate } from "gatsby-link"
import classes from "./contactFormStyles.module.css"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const ContactForm = () => {
  const [state, setState] = React.useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  return (
    <React.Fragment>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className={classes.ContactForm}
        onSubmit={handleSubmit}
        action="/thanks/"
      >
        <input type="hidden" name="form-name" value="contact" />
        <h2>GET A FREE QUOTE!</h2>
        <div className={classes.FirstName}>
          <input
            type="text"
            name="first-name"
            required="required"
            placeholder="First name"
            onChange={handleChange}
          />
        </div>
        <div className={classes.LastName}>
          <input
            type="text"
            name="last-name"
            placeholder="Last name"
            onChange={handleChange}
          />
        </div>
        <div className={classes.Email}>
          <input
            type="email"
            name="email"
            required="required"
            placeholder="Email"
            onChange={handleChange}
          />
        </div>
        <div className={classes.Phone}>
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            onChange={handleChange}
          />
        </div>
        <div className={classes.Message}>
          <textarea
            type="text"
            name="message"
            placeholder="Please leave us a brief description here..."
            onChange={handleChange}
          />
        </div>
        <div className={classes.Submit}>
          <button type="submit">Send</button>
        </div>
      </form>
    </React.Fragment>
  )
}

export default ContactForm

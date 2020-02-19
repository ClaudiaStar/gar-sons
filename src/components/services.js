import React from "react"
import serviceStyles from "./serviceStyles.module.css"

const Services = () => {
  return (
    <div>
      <div className={serviceStyles.serviceHeading}>
        <h2>OUR SERVICES</h2>
        <p>We offer a wide range of services to meet every type of need!</p>
      </div>
      <div className={serviceStyles.serviceCards}>
        <div>
          <i className="fas fa-home fa-2x" alt="home"></i>
          <h3>Remodels</h3>
          <p>Turn a Pinterest idea into reality!</p>
        </div>
        <div>
          <i className="fas fa-tree fa-2x" alt="tree"></i>
          <h3>Landscaping</h3>
          <p>Don't have a green thumb? We can help!</p>
        </div>
        <div>
          <i className="fas fa-hammer fa-2x" alt="hammer"></i>
          <h3>Decks and Fences</h3>
          <p>From wood, brick or steel, we can build it!</p>
        </div>
        <div>
          <i className="fas fa-toolbox fa-2x" alt="toolbox"></i>
          <h3>Emergency Repairs</h3>
          <p>No job too small!</p>
        </div>
      </div>
    </div>
  )
}

export default Services

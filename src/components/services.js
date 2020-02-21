import React from "react"
import serviceStyles from "./serviceStyles.module.css"
import { motion } from "framer-motion"

import { GiHouse } from "react-icons/gi"
import { GiFruitTree } from "react-icons/gi"
import { GiSpikedFence } from "react-icons/gi"
import { GiBrokenWall } from "react-icons/gi"
import { IconContext } from "react-icons"

const Services = () => {
  return (
    <div>
      <div className={serviceStyles.serviceHeading}>
        <h2>OUR SERVICES</h2>
        <p>We offer a wide range of services to meet every type of need!</p>
      </div>
      <div className={serviceStyles.serviceCards}>
        <motion.div
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 1.1,
          }}
        >
          <IconContext.Provider
            value={{
              color: "green",
              size: "3em",
            }}
          >
            <GiHouse />
          </IconContext.Provider>

          <h3>Remodels</h3>
          <p>Turn a Pinterest idea into reality!</p>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 1.1,
          }}
        >
          <IconContext.Provider
            value={{
              color: "green",
              size: "3em",
            }}
          >
            <GiFruitTree />
          </IconContext.Provider>
          <h3>Landscaping</h3>
          <p>Don't have a green thumb? We can help!</p>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 1.1,
          }}
        >
          <IconContext.Provider
            value={{
              color: "green",
              size: "3em",
            }}
          >
            <GiSpikedFence />
          </IconContext.Provider>
          <h3>Decks and Fences</h3>
          <p>From wood, brick or steel, we can build it!</p>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 1.1,
          }}
        >
          <IconContext.Provider
            value={{
              color: "green",
              size: "3em",
            }}
          >
            <GiBrokenWall />
          </IconContext.Provider>
          <h3>Emergency Repairs</h3>
          <p>No job too small!</p>
        </motion.div>
      </div>
    </div>
  )
}

export default Services

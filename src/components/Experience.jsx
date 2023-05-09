import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'

import 'react-vertical-timeline-component/style.min.css'
import { styles } from '../styles'
import { textVariant } from '../utils/motion'

import { experiences } from '../constants'
import { SectionWrapper } from '../hoc'

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What did I done</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>
    </>
  )
}

export default SectionWrapper(Experience, 'work')
import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({ index, title, skills }) => {
  const cardHeight = skills.length * 1; // Estimate height based on number of skills (80px per skill)

  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className="bg-black-200 p-6 rounded-3xl w-full max-w-[520px] min-h-[400px] flex flex-col justify-between overflow-hidden relative"
      style={{ minHeight: cardHeight }} // Dynamic height based on the number of skills
    >
      {/* Background Circle Effects */}
      <div className="absolute inset-0 flex justify-center items-center z-0">
        <div className="absolute w-[28rem] h-[28rem] bg-[#7c5fe6] rounded-full blur-[200px] z-[-1]" />
      </div>

      <div className="mt-1 flex justify-between items-center z-10">
        <h6 className="text-white  font-bold tracking-wider text-[18px]">{title}</h6>
      </div>

      <div className="skills-info-content mt-5 overflow-auto z-10">
        {skills.map((item, index) => (
          <React.Fragment key={`skills_${index}`}>
            <div className="skill-info flex justify-between items-center mb-2">
              <p className="text-white mt-2">{item.skill}</p> {/* Removed unnecessary margin */}
              <p className="percentage text-white">{item.percentage}</p>
            </div>
            <div className="skill-progress-bg w-full h-2 bg-gray-700 rounded-full">
              {/* Animated Progress Bar */}
              <motion.div
                className="skill-progress h-full bg-blue-500 rounded-full"
                initial={{ width: 0 }} // Start at 0
                animate={{ width: item.percentage }} // Animate to the percentage value
                transition={{ duration: 1 }} // Adjust duration as needed
              />
            </div>
          </React.Fragment>
        ))}
      </div>
    </motion.div>
  );
};

const Feedbacks = () => {
  return (
    
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Skills</p>
          <h2 className={styles.sectionHeadText}>Technical Proficiency</h2>
        </motion.div>
      </div>

      <div className={`-mt-20 pb-14 ${styles.paddingX} grid grid-cols-1 sm:grid-cols-2 gap-7 justify-center`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard
            title={testimonial.title}
            key={testimonial.title}
            index={index}
            skills={testimonial.skills}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "skills");
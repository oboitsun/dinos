import React from 'react';
import Heading from './Heading';
import SubHeading from './SubHeading';
import '../styles/contact-us.scss';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ContactUs() {
  const cont = {
    show: { opacity: 1, transition: { delay: 0.5, duration: 0.5 } },
    hidden: { opacity: 0 },
  };

  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });
  return (
    <div id="contact-us">
      <div className="relative ">
        {/* <img
          className=" absolute top-3/4 right-full ml-10 w-1/12"
          src="/imgs/turf4.png"
          alt="turf"
        />
        <img
          className=" absolute top-1/2 left-full ml-10 w-1/12"
          src="/imgs/turf1.png"
          alt="turf"
        /> */}
        <Heading>
          <div className="flex justify-center">
            <span
              ref={ref}
              className={`relative  block ${
                inView ? 'shadow-show' : 'shadow-none'
              }`}
            >
              Contact us
              <span className="map absolute right-0 bottom-0">US</span>
            </span>
          </div>
        </Heading>

        <SubHeading>
          If you want to get in touch with us about any partnerships or
          potential collaborations, please fill out the below form and one of
          our team will be back in touch as soon as we can.
        </SubHeading>
        <form className="contact-form z-10 relative">
          <motion.div
            variants={cont}
            // initial="hidden"
            // animate={inView ? 'show' : 'hidden'}
            className="contact-grid"
          >
            <input
              className="form-input"
              required
              type="text"
              placeholder="Name"
            />
            <input
              className="form-input"
              required
              type="text"
              placeholder="Email /Phone"
            />

            <textarea
              placeholder="Comment"
              className="form-input comment"
              rows={4}
            ></textarea>
          </motion.div>
          <div className="ml-auto flex  ">
            <input className="submit" type="submit" value="Get in touch now" />
          </div>
        </form>
      </div>
    </div>
  );
}

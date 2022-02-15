import { useState } from 'react';
import Heading from './Heading';
import SubHeading from './SubHeading';
import '../styles/contact-us.scss';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import axios from 'axios';

export default function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [disabled, setDisabled] = useState(false);
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
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const whereTo = 'hello@icdinos.io';
            const from = 'Dinos Contact Form';

            const data = {
              service_id: 'service_y7qkatu',
              template_id: 'contact_form',
              user_id: 'user_PQixmJFMiYDwIysZfiwbD',
              template_params: {
                whereTo,
                from,
                name,
                email,
                comment,
              },
            };
            console.log(data);
            await axios
              .post('https://api.emailjs.com/api/v1.0/email/send', data)
              .then((res) => {
                if (res.status === 200) {
                  setDisabled(true);
                  setName('');
                  setEmail('');
                  setComment('');
                }
                console.log('sent successful');
              })
              .catch((err) => console.log(err.message));
          }}
          className="contact-form z-10 relative"
        >
          <motion.div variants={cont} className="contact-grid">
            <input
              className="form-input"
              required
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Name"
            />
            <input
              className="form-input"
              required
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Email /Phone"
            />

            <textarea
              placeholder="Comment"
              value={comment}
              onChange={(e) => {
                setComment(e.target.value);
              }}
              className="form-input comment"
              rows={4}
            ></textarea>
          </motion.div>
          <div className="ml-auto flex  ">
            <input
              disabled={disabled}
              className="submit"
              type="submit"
              value={disabled ? 'Thank You' : 'Get in touch now'}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

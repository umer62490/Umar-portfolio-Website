// Contact.jsx
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const form = useRef();
  const [showForm, setShowForm] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef();


  React.useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            toggleActions: 'restart none none none',
          },
        }
      );
    }
  
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  


  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
  
    emailjs
      .sendForm(
        "service_dci82k5",
        "template_4bnne1t",
        form.current,
        "A9laCeYiBBGKZ377M"
      )
      .then(() => {
        setLoading(false);
        toast.success("Message sent successfully! ✅");
        form.current.reset();
      })
      .catch((error) => {
        setLoading(false);
        toast.error("Failed to send message. ❌");
        console.error(error.text);
      });
  };

  return (
    <section ref={containerRef} className="min-h-screen flex items-center justify-center  mt-16 px-4">
        <ToastContainer />
      <div className="relative w-full max-w-5xl h-[500px] bg-white shadow-2xl rounded-3xl overflow-hidden flex">
        {/* Toggle Button */}
        <button
          onClick={() => setShowForm(!showForm)}
          className="absolute top-4 right-4  px-4 py-1 bg-gradient-to-r from-sky-400 to-blue-500 text-white font-semibold rounded-lg shadow hover:shadow-lg transition z-50"
        >
          {showForm ? "Back" : "Say Hello"}
        </button>

        {/* AnimatePresence wrapper */}
        <AnimatePresence mode="wait">
          {/* Panel 1 - Intro with Image Slide In */}
          {!showForm && (
            <motion.div
              key="intro"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="flex w-full"
            >
              {/* Animated Image Slide */}
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="w-1/2 bg-slate-800 text-white p-10 flex flex-col justify-center items-center"
              >
                <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
                <p className="bg-slate-800 mb-6 text-center">
                  Want to build something together? Click below and drop me a message.
                </p>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4208/4208418.png"
                  alt="contact"
                  className="w-3/4"
                />
              </motion.div>

              <div className="w-1/2 p-10 flex flex-col justify-center">
                <h3 className="text-3xl font-semibold text-gray-700 mb-4">
                  Hi there! 👋
                </h3>
                <p className="text-gray-600 text-lg">
                  I'm Umar, a frontend developer. Hit "Say Hello" to send me a message.
                </p>
              </div>
            </motion.div>
          )}

          {/* Panel 2 - Contact Form */}
          {showForm && (
            <motion.div
              key="form"
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 300, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="flex w-full"
            >
              {/* Re-animated Image on Right */}
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="w-1/2 bg-slate-800 text-white p-10 flex flex-col justify-center items-center"
              >
                <h2 className="text-3xl bg-slate-800 font-bold mb-4">Send a Message</h2>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4208/4208418.png"
                  alt="message"
                  className="w-3/4"
                />
              </motion.div>

              {/* Contact Form */}
              <div className="w-1/2 p-10 flex flex-col justify-center">
                <form
                  ref={form}
                  onSubmit={sendEmail}
                  className="space-y-5 w-full max-w-md"
                >
                  <h3 className="text-3xl font-bold text-gray-700 mb-4 text-center">
                    Contact Form
                  </h3>

                  <div>
                    <label className="block text-sm font-medium text-gray-600">
                      Name
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      required
                      className="mt-1 w-full p-3 border text-white border-gray-300 rounded-md focus:ring-2 focus:bg-slate-800 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-600">
                      Email
                    </label>
                    <input
                      type="email"
                      name="user_email"
                      required
                      className="mt-1 w-full p-3 border text-white border-gray-300 rounded-md focus:ring-2 focus:bg-slate-800 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-600">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      required
                      className="mt-1 w-full p-3 border text-white border-gray-300 rounded-md focus:ring-2 focus:bg-slate-800 focus:outline-none"
                    ></textarea>
                  </div>

                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.03 }}
                    type="submit"
                    className=" px-6 py-3 w-full bg-gradient-to-r from-sky-400 to-blue-500 text-white font-semibold rounded-lg shadow hover:shadow-lg transition"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </motion.button>

                  {success && (
                    <p className="text-green-600 text-center mt-3">
                      🎉 Message sent successfully!
                    </p>
                  )}
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Contact;

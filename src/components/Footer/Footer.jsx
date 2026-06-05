import { motion } from "framer-motion";

function Footer() {
  const fadeIn = {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        transition: { duration: 1.2 },
    }; 

  return (
  <section id="FAQs" className="bg-[#D7EEDD]">
    <motion.div {...fadeIn} className=" flex flex-col items-center">
      <div className="border-t border-[#000000] lg:w-[1300px]" />
      <div className=" flex justify-between mt-15 lg:w-[1300px]">
        <div className="flex flex-col gap-7">
          <h3>Company</h3>
          <ul className="flex flex-col font-['Satoshi'] gap-5">
            <li>Home</li>
            <li>Studio</li>
            <li>Service</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="flex flex-col gap-7">
          <h3>Term & Policies</h3>
          <ul className="flex flex-col font-['Satoshi'] gap-5">
            <li>Privacy Policy</li>
            <li>Term & Conditions</li>
            <li>Explore</li>
            <li>Accessibility</li>
          </ul>
        </div>
        <div className="flex flex-col gap-7">
          <h3>Follow Us</h3>
          <ul className="flex flex-col font-['Satoshi'] gap-5">
            <li>Instagram</li>
            <li>LinkedIn</li>
            <li>Youtube</li>
            <li>Twitter</li>
          </ul>
        </div>
        <div className="flex flex-col gap-7">
          <h3>Contact</h3>
          <ul className="flex flex-col font-['Satoshi'] gap-5 lg:w-[160px]">
            <li>1498w Fluton ste, STE 2D Chicago, IL 63867.</li>
            <li>(123) 456789000</li>
            <li>info@elementum.com</li>
          </ul>
        </div>
      </div>
      <div className="pt-25 pb-10">
        <p className="font-['Satoshi'] lg:text-[13px]">
          ©2023 Elementum. All rights reserved
        </p>
      </div>
    </motion.div>
  </section>
  );
}

export default Footer;
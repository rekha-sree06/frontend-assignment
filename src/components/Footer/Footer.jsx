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
      <div className="border-t border-[#000000] w-[500px] sm:w-[645px] lg:w-[1300px]" />
      <div className=" flex justify-between w-[500px] sm:w-[645px] lg:w-[1300px] p-6">
        <div className="flex flex-col gap-4 lg:gap-7">
          <h3 className=" text-[10px] sm:text-[12px] lg:text-[25px]">Company</h3>
          <ul className="text-[8px] sm:text-[10px] lg:text-[20px] flex flex-col font-['Satoshi'] gap-3 lg:gap-5">
            <li>Home</li>
            <li>Studio</li>
            <li>Service</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 lg:gap-7">
          <h3 className=" text-[10px] sm:text-[12px] lg:text-[25px]">Term & Policies</h3>
          <ul className="text-[8px] sm:text-[10px] lg:text-[20px] flex flex-col font-['Satoshi'] gap-3 lg:gap-5">
            <li>Privacy Policy</li>
            <li>Term & Conditions</li>
            <li>Explore</li>
            <li>Accessibility</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 lg:gap-7">
          <h3 className=" text-[10px] sm:text-[12px] lg:text-[25px]">Follow Us</h3>
          <ul className="text-[8px] sm:text-[10px] lg:text-[20px] flex flex-col font-['Satoshi'] gap-3 lg:gap-5">
            <li>Instagram</li>
            <li>LinkedIn</li>
            <li>Youtube</li>
            <li>Twitter</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 lg:gap-7">
          <h3 className=" text-[10px] sm:text-[12px] lg:text-[20px]">Contact</h3>
          <ul className="text-[8px] sm:text-[10px] lg:text-[20px] flex flex-col font-['Satoshi'] gap-3 lg:gap-5 w-[130px] lg:w-[260px]">
            <li>1498w Fluton ste, STE 2D Chicago, IL 63867.</li>
            <li>(123) 456789000</li>
            <li>info@elementum.com</li>
          </ul>
        </div>
      </div>
      <div className="pt-10 lg:pt-25 pb-10">
        <p className="font-['Satoshi'] text-[7px] sm:text-[9px] lg:text-[13px]">
          ©2023 Elementum. All rights reserved
        </p>
      </div>
    </motion.div>
  </section>
  );
}

export default Footer;
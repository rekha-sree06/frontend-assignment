import { motion } from "framer-motion";
import doodle1 from "../../assets/doodles/Ellipse 739.png";
import doodle2 from "../../assets/doodles/Vector 2519.png";
import doodle3 from "../../assets/doodles/Vector 2518.png";

function Newsletter() {
    const fadeIn = {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        transition: { duration: 1.2 },
    }; 

  return (
    <section id="Contact" className="
    pt-20">
        <motion.div {...fadeIn}
                className="
                    relative
                    w-full
                    mx-auto
                    bg-[#D7EEDD]
                    flex
                    flex-col
                    items-center

                    min-h-[450px]
                ">
                    <img src={doodle1} alt="" className="
                        absolute
                        lg:top-45
                        lg:left-325
                        lg:w-[140px]
                        lg:h-[145px]" />
                    <img src={doodle2} alt="" className="
                        absolute
                        lg:left-137
                        lg:w-[125px]
                        lg:h-[75px]" />
                    <img src={doodle3} alt="" className="
                        absolute
                        lg:left-155
                        lg:w-[125px]
                        lg:h-[75px]" />
                    <h1
                    className="
                        w-full
                        lg:w-[640px]
                        mx-auto

                        text-center

                        text-[42px]
                        sm:text-[64px]
                        lg:text-[70px]
                        pt-20
                        leading-[1.2]
                    "
                    >
                        Subscribe to our newsletter
                    </h1>
                    <p className="
                        mx-auto
                        text-center
                        pt-4

                        lg:w-[530px]

                        text-[16px]
                        sm:text-[20px]
                        lg:text-[17px]

                        leading-[1.5]
                        font-['Satoshi']
                    ">
                        To make your stay special and even more memorable
                    </p>
                    <button 
                    className="
                    lg:w-[157px]
                    lg:h-[55px]
                    bg-[#000000]
                    p-1
                    text-[#FFFFFF]
                    mt-10
                    rounded-full
                    font-['Satoshi']
                    lg:text-[15px]
                    hover:scale-105
                    transition-all
                    duration-300">
                        Subscribe Now
                    </button>
        </motion.div>
    </section>);
}

export default Newsletter;
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
    lg:pt-20">
        <motion.div {...fadeIn}
                className="
                    relative
                    mx-auto
                    bg-[#D7EEDD]
                    flex
                    flex-col
                    items-center


                    min-h-[250px]
                    lg:min-h-[450px]
                ">
                    <img src={doodle1} alt="" className="
                        absolute
                        top-20
                        lg:top-45
                        left-110
                        lg:left-325
                        w-[40px]
                        h-[50px]
                        lg:w-[140px]
                        lg:h-[145px]" />
                    <img src={doodle2} alt="" className="
                        absolute
                        left-40
                        lg:left-137
                        w-[55px]
                        h-[35px]
                        lg:w-[125px]
                        lg:h-[75px]" />
                    <img src={doodle3} alt="" className="
                        absolute
                        left-48
                        lg:left-155
                        w-[55px]
                        h-[35px]
                        lg:w-[125px]
                        lg:h-[75px]" />
                    <h1
                    className="
                        w-[300px]
                        lg:w-[640px]

                        text-center

                        text-[30px]
                        lg:text-[70px]
                        pt-10
                        lg:pt-20
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

                        text-[10px]
                        lg:text-[17px]

                        leading-[1.5]
                        font-['Satoshi']
                    ">
                        To make your stay special and even more memorable
                    </p>
                    <button 
                    className="
                    w-[100px]
                    h-[30px]
                    lg:w-[157px]
                    lg:h-[55px]
                    bg-[#000000]
                    p-1
                    text-[#FFFFFF]
                    mt-6
                    lg:mt-10
                    rounded-full
                    font-['Satoshi']
                    text-[10px]
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
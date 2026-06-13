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
                    md:min-h-[300px]
                    lg:min-h-[450px]
                ">
                    <img src={doodle1} alt="" className="
                        absolute
                        top-20
                        sm:top-23
                        md:top-29
                        lg:top-45
                        left-110
                        sm:left-140
                        md:left-164
                        lg:left-325
                        w-[40px]
                        h-[50px]
                        sm:w-[65px]
                        sm:h-[80px]
                        md:w-[90px]
                        md:h-[105px]
                        lg:w-[140px]
                        lg:h-[145px]" />
                    <img src={doodle2} alt="" className="
                        absolute
                        left-40
                        sm:left-61
                        md:left-75
                        lg:left-137
                        w-[55px]
                        h-[35px]
                        sm:w-[70px]
                        sm:h-[40px]
                        md:w-[85px]
                        md:h-[56px]
                        lg:w-[125px]
                        lg:h-[75px]" />
                    <img src={doodle3} alt="" className="
                        absolute
                        left-48
                        sm:left-50
                        md:left-61.5
                        lg:left-155
                        w-[55px]
                        h-[35px]
                        sm:w-[70px]
                        sm:w-[40px]
                        md:w-[85px]
                        md:h-[56px]
                        lg:w-[125px]
                        lg:h-[75px]" />
                    <h1
                    className="
                        w-[300px]
                        sm:w-[400px]
                        md:w-[460px]
                        lg:w-[640px]

                        text-center

                        text-[30px]
                        sm:text-[40px]
                        md:text-[45px]
                        lg:text-[70px]
                        pt-10
                        md:pt-15
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
                        sm:pt-3
                        sm:w-[530px]
                        lg:w-[530px]

                        text-[10px]
                        md:text-[11px]
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
                    md:w-[105px]
                    md:h-[33px]
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
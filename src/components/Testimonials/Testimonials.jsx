import { motion } from "framer-motion";
import person7 from "../../assets/images/hero/Ellipse 258.png";
import person6 from "../../assets/images/hero/Ellipse 260.png";
import person3 from "../../assets/images/testimonials/Ellipse 268.png";
import person5 from "../../assets/images/testimonials/Ellipse 270.png";
import person8 from "../../assets/images/testimonials/Ellipse 269.png";
import person1 from "../../assets/images/testimonials/Ellipse 263.png";
import person2 from "../../assets/images/testimonials/Ellipse 266.png";
import person4 from "../../assets/images/testimonials/Ellipse 267.png";
import doodle1 from "../../assets/doodles/Vector 5.png";
import doodle2 from "../../assets/doodles/Rectangle 658.png";
import doodle3 from "../../assets/doodles/inverted comma 1.png";
import doodle4 from "../../assets/doodles/inverted comma 3.png";

function Testimonials() {
    const fadeIn = {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        transition: { duration: 1.2 },
    }; 

  return (
        <section className="
        pt-40">
            <motion.div {...fadeIn}
                className="
                    relative
                    w-full
                    mx-auto

                    flex
                    flex-col
                    items-center

                    min-h-[650px]
                ">
                <img src={doodle1} alt="" 
                    className="
                    absolute
                    lg:top-26.5
                    lg:left-172
                    lg:w-[300px]
                    lg:h-[20px]" />
                <img src={doodle2} alt="" className="                            absolute
                    lg:top-2                       lg:left-127
                    lg:w-[145px]
                    lg:h-[50px]" />
                <p className="
                lg:text-[40px]
                lg:w-[500px]
                text-center
                relative
                z-10">
                    What our customer says About Us
                </p>
                <img src={doodle3} alt="" className="                            absolute
                    lg:top-53                      lg:left-125
                    lg:w-[20px]
                    lg:h-[30px]" />
                <img src={doodle3} alt="" className="                            absolute
                    lg:top-53                      lg:left-119
                    lg:w-[20px]
                    lg:h-[30px]" />
                <img src={doodle4} alt="" className="                            absolute
                    lg:top-100                     lg:left-230
                    lg:w-[20px]
                    lg:h-[30px]" />
                <img src={doodle4} alt="" className="                            absolute
                    lg:top-100                     lg:left-224
                    lg:w-[20px]
                    lg:h-[30px]" />
                <div
                    className="
                        mt-13
                        bg-[#D7EEDD]/30
                        rounded-[40px]
                        w-[650px]
                        h-[300px]

                        flex
                        items-center
                        justify-center

                        px-19
                    "
                    >
                    <p
                        className="
                        font-['Satoshi']
                        text-center
                        text-[21px]
                        leading-relaxed
                        "
                    >
                        Elementum  delivered the site with inthe timeline as they requested. Inthe end, the client found a 50%  increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn`t used, which have also proved to be easy to use and reliable      
                    </p>
                </div>
                <img src={person3} alt="customer3" className="
                absolute
                lg:w-[170px]
                lg:h-[170px]
                lg:left-45
                lg:top-60"/>
                <img src={person8} alt="customer3" className="
                absolute
                lg:w-[220px]
                lg:h-[220px]
                lg:left-315
                lg:top-85"/>
                <img src={person7} alt="customer3" className="
                absolute
                lg:w-[100px]
                lg:h-[100px]
                lg:left-290
                lg:top-55"/>
                <img src={person6} alt="customer3" className="
                absolute
                lg:w-[70px]
                lg:h-[70px]
                lg:left-285
                lg:top-25"/>
                <img src={person5} alt="customer3" className="
                absolute
                lg:w-[110px]
                lg:h-[110px]
                lg:left-320
                lg:top-10"/>
                <img src={person1} alt="customer3" className="
                absolute
                lg:w-[100px]
                lg:h-[100px]
                lg:left-35
                lg:top-5"/>
                <img src={person2} alt="customer3" className="
                absolute
                lg:w-[60px]
                lg:h-[60px]
                lg:left-18
                lg:top-50"/>
                <img src={person4} alt="customer3" className="
                absolute
                lg:w-[100px]
                lg:h-[100px]
                lg:left-10
                lg:top-100"/>
            </motion.div>
        </section>
    );
}

export default Testimonials;
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
                    top-13
                    sm:top-15
                    md:top-18
                    lg:top-26.5
                    left-53
                    sm:left-70.5
                    md:left-85
                    lg:left-172
                    w-[140px]
                    h-[10px]
                    sm:w-[154px]
                    sm:h-[15px]
                    md:w-[180px]
                    md:h-[18px]
                    lg:w-[300px]
                    lg:h-[20px]" />
                <img src={doodle2} alt="" className="                            
                absolute
                top-0
                sm:top-1
                    lg:top-2  
                    left-30    
                    sm:left-43  
                    md:left-53     
                    lg:left-127
                    w-[80px]
                    h-[30px]
                    sm:w-[89px]
                    md:w-[100px]
                    md:h-[32px]
                    lg:w-[145px]
                    lg:h-[50px]" />
                <p className="
                text-[20px]
                sm:text-[23px]
                md:text-[27px]
                lg:text-[40px]
                w-[300px]
                sm:w-[320px]
                md:w-[340px]
                lg:w-[500px]
                text-center
                relative
                z-10">
                    What our customer says About Us
                </p>
                <img src={doodle3} alt="" className="                            
                absolute
                top-24 
                sm:top-33 
                md:top-34
                    lg:top-53    
                    left-39    
                    sm:left-46  
                    md:left-57.5            
                    lg:left-125
                    w-[10px]
                    h-[20px]
                    sm:w-[12px]
                    sm:h-[20px]
                    md:w-[15px]
                    md:h-[21px]
                    lg:w-[20px]
                    lg:h-[30px]" />
                <img src={doodle3} alt="" className="                            
                absolute
                top-24 
                sm:top-33 
                md:top-34
                    lg:top-53
                    left-36 
                    sm:left-42.5                     
                    lg:left-119
                    w-[10px]
                    h-[20px]
                    sm:w-[12px]
                    sm:h-[20px]
                    md:left-53  
                    md:w-[15px]
                    md:h-[21px]
                    lg:w-[20px]
                    lg:h-[30px]" />
                <img src={doodle4} alt="" className="                            
                absolute
                top-48
                sm:top-57
                md:top-62
                    lg:top-100
                    left-73   
                    sm:left-96  
                    md:left-135.5              
                    lg:left-230
                    w-[10px]
                    h-[20px]
                    sm:w-[12px]
                    sm:h-[20px]
                    md:w-[15px]
                    md:h-[21px]
                    lg:w-[20px]
                    lg:h-[30px]" />
                <img src={doodle4} alt="" className="                            
                absolute
                top-48
                sm:top-57
                md:top-62
                    lg:top-100                     
                    lg:left-224
                    left-76
                    sm:left-99.5
                    md:left-131
                    w-[10px]
                    h-[20px]
                    sm:w-[12px]
                    sm:h-[20px]
                    md:w-[15px]
                    md:h-[21px]
                    lg:w-[20px]
                    lg:h-[30px]" />
                <div
                    className="
                    mt-7
                    sm:mt-8
                        lg:mt-13
                        bg-[#D7EEDD]/30
                        rounded-[40px]
                        w-[250px]
                        h-[135px]
                        sm:w-[345px]
                        sm:h-[180px]
                        md:w-[380px]
                        md:h-[180px]
                        lg:w-[650px]
                        lg:h-[300px]

                        flex
                        items-center
                        justify-center

                        px-8
                        sm:px-10
                        md:px-12
                        lg:px-19
                    "
                    >
                    <p
                        className="
                        font-['Satoshi']
                        text-center
                        text-[9px]
                        sm:text-[11px]
                        md:text-[13px]
                        lg:text-[21px]
                        leading-relaxed
                        "
                    >
                        Elementum  delivered the site with inthe timeline as they requested. Inthe end, the client found a 50%  increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn`t used, which have also proved to be easy to use and reliable      
                    </p>
                </div>
                <img src={person3} alt="customer3" className="
                absolute
                w-[80px]
                h-[80px]
                sm:w-[90px]
                sm:h-[90px]
                md:w-[110px]
                md:h-[110px]
                lg:w-[170px]
                lg:h-[170px]
                left-10
                sm:left-12
                md:left-15
                lg:left-45
                top-35
                sm:top-35
                md:top-37
                lg:top-60"/>
                <img src={person8} alt="customer3" className="
                absolute
                w-[90px]
                h-[90px]
                sm:w-[100px]
                sm:h-[100px]
                md:w-[130px]
                md:h-[130px]
                lg:w-[220px]
                lg:h-[220px]
                left-100
                sm:left-135
                md:left-159
                lg:left-315
                top-50
                sm:top-53
                md:top-53
                lg:top-85"/>
                <img src={person7} alt="customer3" className="
                absolute
                w-[50px]
                h-[50px]
                sm:w-[60px]
                sm:h-[60px]
                md:w-[70px]
                md:h-[70px]
                lg:w-[100px]
                lg:h-[100px]
                left-95
                sm:left-127
                md:left-147
                lg:left-290
                top-35
                sm:top-35
                md:top-31
                lg:top-55"/>
                <img src={person6} alt="customer3" className="
                absolute
                w-[25px]
                h-[25px]
                sm:w-[44px]
                sm:h-[44px]
                md:w-[50px]
                md:h-[50px]
                lg:w-[70px]
                lg:h-[70px]
                left-96
                sm:left-126
                md:left-145
                lg:left-285
                top-25
                sm:top-20
                md:top-12
                lg:top-25"/>
                <img src={person5} alt="customer3" className="
                absolute
                w-[50px]
                h-[50px]
                sm:w-[65px]
                sm:h-[65px]
                md:w-[80px]
                md:h-[80px]
                lg:w-[110px]
                lg:h-[110px]
                left-105
                sm:left-140
                md:left-165
                lg:left-320
                top-17
                sm:top-10
                md:top-2
                lg:top-10"/>
                <img src={person1} alt="customer3" className="
                absolute
                w-[45px]
                h-[45px]
                sm:w-[55px]
                sm:h-[55px]
                md:w-[65px]
                md:h-[65px]
                lg:w-[100px]
                lg:h-[100px]
                left-7
                sm:left-10
                md:left-13
                lg:left-35
                top-17
                sm:top-12
                md:top-6
                lg:top-5"/>
                <img src={person2} alt="customer3" className="
                absolute
                w-[25px]
                h-[25px]
                sm:w-[35px]
                sm:h-[35px]
                md:w-[45px]
                md:h-[45px]
                lg:w-[60px]
                lg:h-[60px]
                left-3
                sm:left-2
                md:left-4
                lg:left-18
                top-33
                sm:top-31
                md:top-30
                lg:top-50"/>
                <img src={person4} alt="customer3" className="
                absolute
                w-[40px]
                h-[40px]
                sm:w-[50px]
                sm:h-[50px]
                md:w-[60px]
                md:h-[60px]
                lg:w-[100px]
                lg:h-[100px]
                left-2
                lg:left-10
                top-55
                sm:top-58
                md:top-60
                lg:top-100"/>
            </motion.div>
        </section>
    );
}

export default Testimonials;
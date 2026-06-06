import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import underline from "../../assets/doodles/Vector 5.png";
import doodle1 from "../../assets/doodles/Rectangle 657.png";
import doodle2 from "../../assets/doodles/Rectangle 658.png";
import doodle3 from "../../assets/doodles/Ellipse 736.png";
import doodle4 from "../../assets/doodles/Vector 2510.png";
import doodle5 from "../../assets/doodles/Vector 2511.png";
import person1 from "../../assets/images/hero/Ellipse 262.png";
import person2 from "../../assets/images/hero/Ellipse 261.png";
import person3 from "../../assets/images/hero/Ellipse 255.png";
import person4 from "../../assets/images/hero/Ellipse 256.png";
import person5 from "../../assets/images/hero/Ellipse 257.png";
import person6 from "../../assets/images/hero/Ellipse 258.png";
import person7 from "../../assets/images/hero/Ellipse 259.png";
import person8 from "../../assets/images/hero/Ellipse 260.png";

function Hero() {
    const fadeIn = {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        transition: { duration: 1.2 },
    };    

    const profileImage ="w-[60px] h:[60px] sm:w-[90px] sm:h-[90px] md:w-[130px] md:w-[130px] lg:w-[150px] lg:h-[150px] rounded-full object-cover";

    return (
        <section
            id="Home"
            className="
                pt-35
                w-full
                px-4
                sm:px-8
                lg:px-12
            "
        >
            <motion.div {...fadeIn}
                className="
                    relative
                    w-full
                    max-w-[1600px]
                    mx-auto

                    flex
                    flex-col
                    items-center

                "
            >
                <img src={underline} alt="" className="
                absolute
                top-6
                sm:top-8.5
                lg:top-13
                w-[145px]
                sm:w-[180px]
                lg:w-[300px]
                h-[15px]
                sm:h-[18px]
                lg:h-[30px]" />
                <img src={doodle1} alt="" className="
                absolute
                top-9
                sm:top-12
                lg:top-17
                left-76
                sm:left-96
                lg:left-213
                w-[100px]
                h-[33px]
                sm:w-[125px]
                sm:h-[38px]
                lg:w-[210px]
                lg:h-[70px]" />
                <img src={doodle2} alt="" className="
                absolute
                top-17
                sm:top-22
                lg:top-35
                left-34
                sm:left-42.5
                lg:left-130
                w-[110px]
                h-[30px]
                sm:w-[137px]
                sm:h-[37px]
                lg:w-[210px]
                lg:h-[60px]" />
                <img src={doodle3} alt="" className="
                absolute
                top-12
                sm:top-17
                lg:top-23
                left-101
                sm:left-133
                lg:left-300
                w-[40px]
                h-[40px]
                lg:w-[80px]
                lg:h-[85px]
                -rotate-8" />
                <img src={doodle4} alt="" className="
                absolute
                top-22
                -left-4
                sm:top-28
                lg:top-47
                sm:-left-8
                lg:-left-12
                w-[15px]
                h-[110px]
                sm:w-[17px]
                sm:h-[140px]
                lg:w-[50px]
                lg:h-[250px]" />
                <img src={doodle5} alt="" className="
                absolute
                top-22
                sm:top-28
                lg:top-47
                sm:-left-2
                lg:left-0
                left-0
                w-[15px]
                h-[110px]
                sm:w-[17px]
                sm:h-[140px]
                lg:w-[50px]
                lg:h-[250px]" />
                <h1
                className="
                    w-[350px]
                    sm:w-[450px]
                    md:w-[700px]
                    lg:w-[900px]max-w-[1000px]
                    mx-auto

                    text-center

                    text-[25px]
                    sm:text-[32px]
                    md:text-[45px]
                    lg:text-[50px]
                    relative
                    leading-[1.3]
                    z-10
                "
                >
                    The thinkers and
                    doers were changing
                    the status Quo with
                </h1>
                <TypeAnimation
                    sequence={[
                        "We are a team of strategists, designers communicators, researchers. Together, we believe that progress only happens when you refuse to play things safe.",
                    ]}
                    wrapper="p"
                    cursor={true}
                    repeat={0}
                    speed={50}
                    className="
                        mx-auto
                        text-center
                        pt-4

                        w-[280px]
                        sm:w-[350px]
                        md:w-[410px]
                        lg:w-[530px]

                        text-[8px]
                        sm:text-[10px]
                        md:w-[14px]
                        lg:text-[15px]

                        leading-[1.5]
                        font-['Satoshi']
                    "
                />
                <div className="relative w-full h-[500px] pt-20">
                    <img
                    src={person1}
                    alt="member1"
                    className={`
                        absolute 
                        left-0 
                        sm:-left-5
                        top-[75px]
                        sm:top-[110px]
                        md:top-[160px]
                        lg:top-[190px] 
                        ${profileImage}
                    `}
                    />
                    <img
                    src={person2}
                    alt="member2"
                    className={`
                        absolute
                        left-11
                        md:left-23
                        lg:left-29
                        top-[55px]
                        sm:top-[81px]
                        md:top-[115px]
                        lg:top-[145px]
                        outline-[1.5px]
                        outline-white
                        ${profileImage}
                    `}
                    />
                    <img
                    src={person3}
                    alt="member3"
                    className={`
                        absolute
                        left-30
                        sm:left-35
                        lg:left-106
                        top-[15px]
                        sm:top-[13px]
                        md:top-[40px]
                        lg:top-[60px]
                        ${profileImage}
                    `}
                    />
                    <img
                    src={person4}
                    alt="member4"
                    className={`
                        absolute
                        left-38
                        sm:left-45
                        lg:left-132
                        top-[81px]
                        sm:top-[120px]
                        lg:top-[215px]
                        ${profileImage}
                    `}
                    />
                    <img
                    src={person5}
                    alt="member5"
                    className={`
                        absolute
                        left-57
                        sm:left-71
                        lg:left-192
                        top-[30px]
                        sm:top-[40px]
                        lg:top-[90px]
                        ${profileImage}
                    `}
                    />
                    <img
                    src={person6}
                    alt="member6"
                    className={`
                        absolute
                        left-68
                        sm:left-87
                        lg:left-223
                        top-[53px]
                        sm:top-[80px]
                        lg:top-[160px]
                        ${profileImage}
                        outline-[1.5px]
                        outline-white
                    `}
                    />
                    <img
                    src={person7}
                    alt="member7"
                    className={`
                        absolute
                        left-85
                        sm:left-112
                        lg:left-274
                        top-[20px]
                        lg:top-[60px]
                        ${profileImage}
                    `}
                    />
                    <img
                    src={person8}
                    alt="member8"
                    className={`
                        absolute
                        left-97
                        sm:left-127
                        lg:left-315
                        top-[80px]
                        sm:top-[113px]
                        lg:top-[180px]
                        ${profileImage}
                    `}
                    />
                </div>
            </motion.div>
        </section >
        
    );
}

export default Hero;
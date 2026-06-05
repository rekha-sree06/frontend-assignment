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

    const profileImage ="w-[150px] h-[150px] rounded-full object-cover";

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

                    min-h-[1011px]

                "
            >
                <img src={underline} alt="" className="
                absolute
                lg:top-17
                lg:w-[380px]
                lg:h-[40px]" />
                <img src={doodle1} alt="" className="
                absolute
                lg:top-23
                lg:left-223
                lg:w-[260px]
                lg:h-[90px]" />
                <img src={doodle2} alt="" className="
                absolute
                lg:top-45
                lg:left-115
                lg:w-[280px]
                lg:h-[70px]" />
                <img src={doodle3} alt="" className="
                absolute
                lg:top-35
                lg:left-305
                lg:w-[80px]
                lg:h-[85px]
                -rotate-8" />
                <img src={doodle4} alt="" className="
                absolute
                lg:top-58
                lg:-left-12
                lg:w-[50px]
                lg:h-[250px]" />
                <img src={doodle5} alt="" className="
                absolute
                lg:top-58
                lg:left-0
                lg:w-[50px]
                lg:h-[250px]" />
                <h1
                className="
                    w-full
                    max-w-[900px]
                    mx-auto

                    text-center

                    text-[42px]
                    sm:text-[64px]
                    lg:text-[65px]
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

                        lg:w-[530px]

                        text-[16px]
                        sm:text-[20px]
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
                        top-[190px] 
                        ${profileImage}
                    `}
                    />
                    <img
                    src={person2}
                    alt="member2"
                    className={`
                        absolute
                        left-29
                        top-[145px]
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
                        left-106
                        top-[60px]
                        ${profileImage}
                    `}
                    />
                    <img
                    src={person4}
                    alt="member4"
                    className={`
                        absolute
                        left-132
                        top-[215px]
                        ${profileImage}
                    `}
                    />
                    <img
                    src={person5}
                    alt="member5"
                    className={`
                        absolute
                        left-192
                        top-[90px]
                        ${profileImage}
                    `}
                    />
                    <img
                    src={person6}
                    alt="member6"
                    className={`
                        absolute
                        left-223
                        top-[160px]
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
                        left-274
                        top-[60px]
                        ${profileImage}
                    `}
                    />
                    <img
                    src={person8}
                    alt="member8"
                    className={`
                        absolute
                        left-315
                        top-[180px]
                        ${profileImage}
                    `}
                    />
                </div>
            </motion.div>
        </section >
        
    );
}

export default Hero;
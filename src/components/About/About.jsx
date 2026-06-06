import { motion } from "framer-motion";
import person1 from "../../assets/images/about/image 348.png";
import person2 from "../../assets/images/about/image 349.png";
import doodle1 from "../../assets/doodles/Ellipse 734.png";
import doodle2 from "../../assets/doodles/Polygon 3.png";
import doodle3 from "../../assets/doodles/Vector 5.png";
import doodle4 from "../../assets/doodles/Rectangle 658.png";
import doodle5 from "../../assets/doodles/Arrow 4.png";
import doodle6 from "../../assets/doodles/Vector 2517.png";
import doodle7 from "../../assets/doodles/Polygon 2.png";
import doodle8 from "../../assets/doodles/Polygon 1.png";

function About() {
    const fadeIn = {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        transition: { duration: 1.2 },
    }; 

  return (
  <section id="Studio"  className="mt-10 scroll-mt-15 lg:scroll-mt-24">
    <motion.img {...fadeIn} src={doodle6} alt="" 
        className="
        absolute
        mt-18
        lg:mt-70
        left-12
        lg:left-80
        w-[450px]
        h-[250px]
        lg:w-[1150px]
        lg:h-[400px]" />
    <motion.img src={doodle7} alt="" 
        className="
        absolute
        mt-52
        lg:mt-110
        left-2
        lg:left-42
        w-[60px]
        lg:w-[170px]
        h-[50px]
        lg:h-[150px]" />
    <motion.div {...fadeIn} className="flex justify-between items-center">
        <img src={doodle1} alt="" 
        className="
        absolute
        pb-30
        sm:pb-35
        lg:pb-40
        left-25
        sm:left-26
        lg:left-100
        w-[400px]
        sm:w-[410px]
        lg:w-[700px]
        h-[400px]
        sm:h-[420px]
        lg:h-[700px]" />
        <img src={doodle2} alt="" 
        className="
        absolute
        mb-18
        sm:mb-26
        lg:mb-47
        left-105
        sm:left-141
        lg:left-312
        w-[65px]
        h-[65px]
        sm:w-[80px]
        sm:h-[80px]
        lg:w-[150px]
        lg:h-[150px]" />
        <img src={doodle3} alt="" 
        className="
        absolute
        mb-17
        sm:mb-17
        lg:mb-28
        left-9
        sm:left-10
        lg:left-50
        w-[105px]
        sm:w-[110px]
        lg:w-[200px]
        h-[10px]
        sm:h-[14px]
        lg:h-[20px]" />
        <img src={doodle4} alt="" 
        className="
        absolute
        mb-10
        lg:mb-16
        left-44.5
        lg:left-120
        w-[60px]
        lg:w-[116px]
        h-[20px]
        lg:h-[40px]" />
        <div className="
        relative
        left-10
        lg:left-50
        flex
        flex-col
        z-20">
            <p className="
            text-[15px]
            sm:text-[17px]
            lg:text-[30px]
            w-[200px]
            sm:w-[240px]
            lg:w-[500px]">
                Tomorrow should <br />be better than today
            </p>
            <p className="
            font-[Satoshi]
            text-[10px]
            lg:text-[14px]
            w-[275px]
            sm:w-[300px]
            lg:w-[449px]
            pt-1
            lg:pt-4">
                We are a team of strategists, designers communicators, researchers. 
                Together, we believe that progress only happens when you refuse to play things safe.
            </p>
            <div className="
            relative
            font-[Satoshi]
            text-[7px]
            sm:text-[8px]
            lg:text-[12px]
            pt-2
            lg:pt-4
            font-semibold
            flex
            gap-2
            lg:gap-4">
                <p>Read more</p>
                <img src={doodle5} alt="" 
                className="
                relative
                mt-1.5
                lg:mt-2
                w-[30px]
                h-[2px]
                sm:w-[35px]
                sm:h-[3px]
                lg:w-[60px]
                lg:h-[5px]
                hover:w-[70px]" />
            </div>
        </div>
        <img src={person1} 
        alt="" 
        className="
            w-[120px]
            h-[120px]
            sm:w-[220px]
            sm:h-[220px]
            lg:w-[420px]
            lg:h-[420px]
            rounded-full
            right-10
            lg:right-45
            relative
        "/>
    </motion.div>
    <motion.div{...fadeIn} className="flex justify-between items-center pt-24">
        <img src={person2} 
        alt="" 
        className="
            w-[120px]
            h-[120px]
            sm:w-[220px]
            sm:h-[220px]
            lg:w-[420px]
            lg:h-[420px]
            rounded-full
            left-5
            lg:left-50
            relative
        "/>
        <img src={doodle4} alt="" 
            className="
            absolute
            mb-22
            lg:mb-39.5
            left-54.5
            lg:left-207.5
            w-[48px]
            lg:w-[95px]
            h-[20px]
            lg:h-[40px]" />
            <img src={doodle3} alt="" 
            className="
            absolute
            mb-5
            lg:mb-6.5
            left-75
            lg:left-250
            w-[100px]
            lg:w-[200px]
            h-[10px]
            lg:h-[20px]" />
        <div className="
        relative
        lg:right-45
        flex
        flex-col">
            <p className="
            relative
            text-[15px]
            sm:text-[17px]
            lg:text-[30px]
            sm:right-3
            sm:w-[240px]
            lg:w-[500px]">
                See how we can <br />help you progress 
            </p>
            <p className="
            relative
            z-10
            font-[Satoshi]
            sm:right-3
            text-[10px]
            lg:text-[14px]
            w-[275px]
            sm:w-[300px]
            lg:w-[449px]
            pt-1
            lg:pt-4">
                We add a layer of fearless insights and action that allows change makers to accelerate their progress in areas such as brand, design digital, comms and social research.
            </p>
            <div className="
            relative
            sm:right-3
            font-[Satoshi]
            text-[7px]
            sm:text-[8px]
            lg:text-[12px]
            pt-2
            lg:pt-4
            font-semibold
            flex
            gap-2
            lg:gap-4">
                <p>Read more</p>
                <img src={doodle5} alt="" 
                className="
                relative
                mt-1.5
                lg:mt-2
                w-[30px]
                h-[2px]
                sm:w-[35px]
                sm:h-[3px]
                lg:w-[60px]
                lg:h-[5px]
                hover:w-[70px]" />
            </div>
            <img src={doodle8} alt="" 
            className="
            absolute
            -left-32
            lg:-left-100
            mt-20
            lg:mt-42
            w-[50px]
            h-[40px]
            lg:w-[140px]
            lg:h-[120px]" />
        </div>
    </motion.div>
  </section>);
}

export default About;
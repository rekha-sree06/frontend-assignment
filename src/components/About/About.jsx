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
  <section id="Studio"  className="scroll-mt-24">
    <img src={doodle6} alt="" 
        className="
        absolute
        mt-70
        lg:left-80
        lg:w-[1150px]
        lg:h-[400px]" />
    <img src={doodle7} alt="" 
        className="
        absolute
        mt-110
        lg:left-42
        lg:w-[170px]
        lg:h-[150px]" />
    <motion.div {...fadeIn} className="flex justify-between items-center">
        <img src={doodle1} alt="" 
        className="
        absolute
        pb-40
        lg:left-100
        lg:w-[700px]
        lg:h-[700px]" />
        <img src={doodle2} alt="" 
        className="
        absolute
        mb-47
        lg:left-312
        lg:w-[150px]
        lg:h-[150px]" />
        <img src={doodle3} alt="" 
        className="
        absolute
        mb-28
        lg:left-50
        lg:w-[200px]
        lg:h-[20px]" />
        <img src={doodle4} alt="" 
        className="
        absolute
        mb-16
        lg:left-120
        lg:w-[116px]
        lg:h-[40px]" />
        <div className="
        relative
        lg:left-50
        flex
        flex-col
        z-20">
            <p className="
            lg:text-[30px]
            lg:w-[500px]">
                Tomorrow should <br />be better than today
            </p>
            <p className="
            font-[Satoshi]
            lg:text-[14px]
            lg:w-[449px]
            pt-4">
                We are a team of strategists, designers communicators, researchers. 
                Together, we believe that progress only happens when you refuse to play things safe.
            </p>
            <div className="
            font-[Satoshi]
            lg:text-[12px]
            pt-4
            font-semibold
            flex
            gap-4">
                <p>Read more</p>
                <img src={doodle5} alt="" 
                className="
                relative
                mt-2
                lg:w-[60px]
                lg:h-[5px]
                hover:w-[70px]" />
            </div>
        </div>
        <img src={person1} 
        alt="" 
        className="
            w-[350px]
            h-[350px]
            rounded-full
            lg:right-45
            relative
        "/>
    </motion.div>
    <motion.div{...fadeIn} className="flex justify-between items-center pt-24">
        <img src={person2} 
        alt="" 
        className="
            w-[350px]
            h-[350px]
            rounded-full
            lg:left-50
            relative
        "/>
        <img src={doodle4} alt="" 
            className="
            absolute
            mb-39.5
            lg:left-207.5
            lg:w-[95px]
            lg:h-[40px]" />
            <img src={doodle3} alt="" 
        className="
        absolute
        mb-6.5
        lg:left-250
        lg:w-[200px]
        lg:h-[20px]" />
        <div className="
        relative
        lg:right-45
        flex
        flex-col">
            <p className="
            lg:text-[30px]
            lg:w-[500px]">
                See how we can <br />help you progress 
            </p>
            <p className="
            relative
            z-10
            font-[Satoshi]
            lg:text-[14px]
            lg:w-[449px]
            pt-4">
                We add a layer of fearless insights and action that allows change makers to accelerate their progress in areas such as brand, design digital, comms and social research.
            </p>
            <div className="
            font-[Satoshi]
            lg:text-[12px]
            pt-4
            font-semibold
            flex
            gap-4">
                <p>Read more</p>
                <img src={doodle5} alt="" 
                className="
                relative
                mt-2
                lg:w-[60px]
                lg:h-[5px]
                hover:w-[70px]" />
            </div>
            <img src={doodle8} alt="" 
            className="
            absolute
            lg:-left-100
            mt-42
            lg:w-[140px]
            lg:h-[120px]" />
        </div>
    </motion.div>
  </section>);
}

export default About;
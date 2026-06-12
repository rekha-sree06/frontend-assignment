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
        mt-26
        sm:mt-44
        md:mt-51
        lg:mt-70
        left-15
        sm:left-23
        md:left-45
        lg:left-80
        w-[460px]
        h-[250px]
        sm:w-[555px]
        sm:h-[310px]
        md:w-[590px]
        lg:w-[1150px]
        lg:h-[400px]" />
    <motion.img src={doodle7} alt="" 
        className="
        absolute
        mt-58
        sm:mt-79
        md:mt-84
        lg:mt-110
        left-2
        lg:left-42
        w-[60px]
        sm:w-[90px]
        md:w-[105px]
        lg:w-[170px]
        h-[50px]
        sm:h-[70px]
        md:h-[85px]
        lg:h-[150px]" />
    <motion.div {...fadeIn} className="flex justify-between items-center">
        <img src={doodle1} alt="" 
        className="
        absolute
        z-10
        pb-30
        sm:pb-37
        md:pb-40
        lg:pb-40
        left-27
        sm:left-35
        md:left-43
        lg:left-100
        w-[350px]
        sm:w-[410px]
        md:w-[450px]
        lg:w-[700px]
        h-[350px]
        sm:h-[420px]
        md:h-[450px]
        lg:h-[700px]" />
        <img src={doodle2} alt="" 
        className="
        absolute
        mb-19
        sm:mb-27
        md:mb-32
        lg:mb-47
        left-104
        sm:left-138
        md:left-160
        lg:left-312
        w-[65px]
        h-[65px]
        sm:w-[80px]
        sm:h-[80px]
        md:w-[100px]
        md:h-[100px]
        lg:w-[150px]
        lg:h-[150px]" />
        <img src={doodle3} alt="" 
        className="
        absolute
        mb-14.5
        sm:mb-16.5
        md:mb-20.5
        lg:mb-28
        left-9
        sm:left-10
        md:left-10
        lg:left-50
        w-[128px]
        sm:w-[152px]
        md:w-[165px]
        lg:w-[200px]
        h-[15px]
        sm:h-[17px]
        md:h-[18px]
        lg:h-[20px]" />
        <img src={doodle4} alt="" 
        className="
        absolute
        mb-7
        sm:mb-7
        md:mb-9.5
        lg:mb-16
        left-54
        sm:left-65
        md:left-68
        lg:left-120
        w-[75px]
        sm:w-[88px]
        md:w-[97px]
        lg:w-[116px]
        h-[25px]
        sm:h-[30px]
        md:h-[35px]
        lg:h-[40px]" />
        <div className="
        relative
        left-10
        lg:left-50
        flex
        flex-col
        z-20">
            <p className="
            text-[19px]
            sm:text-[23.5px]
            md:text-[25px]
            lg:text-[30px]
            w-[250px]
            sm:w-[330px]
            md:w-[400px]
            lg:w-[500px]">
                Tomorrow should <br />be better than today
            </p>
            <p className="
            font-[Satoshi]
            text-[8px]
            sm:text-[10px]
            md:text-[10.5px]
            lg:text-[14px]
            w-[260px]
            sm:w-[300px]
            md:w-[315px]
            lg:w-[449px]
            pt-1
            sm:pt-2
            md:pt-3
            lg:pt-4">
                We are a team of strategists, designers communicators, researchers. 
                Together, we believe that progress only happens when you refuse to play things safe.
            </p>
            <div className="
            relative
            font-[Satoshi]
            text-[6px]
            sm:text-[8px]
            md:text-[9px]
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
                mt-1
                md:mt-1.5
                lg:mt-2
                w-[25px]
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
            w-[140px]
            h-[140px]
            sm:w-[220px]
            sm:h-[220px]
            md:w-[260px]
            md:h-[260px]
            lg:w-[420px]
            lg:h-[420px]
            rounded-full
            right-10
            md:right-16
            lg:right-45
            relative
        "/>
    </motion.div>
    <motion.div{...fadeIn} className="flex justify-between items-center pt-24">
        <img src={person2} 
        alt="" 
        className="
            w-[140px]
            h-[140px]
            sm:w-[220px]
            sm:h-[220px]
            lg:w-[420px]
            lg:h-[420px]
            rounded-full
            left-5
            md:left-9
            lg:left-50
            relative
        "/>
        <img src={doodle4} alt="" 
            className="
            absolute
            mb-22
            sm:mb-25
            md:mb-30
            lg:mb-39.5
            left-60
            sm:left-78
            md:left-103
            lg:left-207.5
            w-[56px]
            sm:w-[70px]
            md:w-[75px]
            lg:w-[95px]
            h-[24px]
            sm:h-[27px]
            md:h-[30px]
            lg:h-[40px]" />
            <img src={doodle3} alt="" 
            className="
            absolute
            mb-1
            sm:mb-0
            md:mb-2
            lg:mb-6.5
            left-87
            sm:left-110
            md:left-137
            lg:left-250
            w-[120px]
            sm:w-[150px]
            md:w-[160px]
            lg:w-[200px]
            h-[12px]
            md:h-[16px]
            lg:h-[20px]" />
        <div className="
        relative
        md:-right-12
        lg:right-45
        flex
        flex-col">
            <p className="
            text-[19px]
            sm:text-[23.5px]
            md:text-[25px]
            lg:text-[30px]
            w-[250px]
            sm:w-[330px]
            md:w-[400px]
            lg:w-[500px]">
                See how we can <br />help you progress 
            </p>
            <p className="
            relative
            z-10
            font-[Satoshi]
            text-[8px]
            sm:text-[10px]
            md:text-[10.5px]
            lg:text-[14px]
            w-[250px]
            sm:w-[300px]
            md:w-[315px]
            lg:w-[449px]
            pt-1
            sm:pt-2
            md:pt-3
            lg:pt-4">
                We add a layer of fearless insights and action that allows change makers to accelerate their progress in areas such as brand, design digital, comms and social research.
            </p>
            <div className="
            relative
            font-[Satoshi]
            text-[6px]
            sm:text-[8px]
            md:text-[9px]
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
                mt-1
                md:mt-1.5
                lg:mt-2
                w-[25px]
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
            -left-33
            sm:-left-39
            md:-left-60
            lg:-left-100
            mt-21
            sm:mt-28
            md:mt-30
            lg:mt-42
            w-[50px]
            h-[45px]
            sm:w-[90px]
            sm:h-[70px]
            md:w-[91px]
            md:h-[80px]
            lg:w-[140px]
            lg:h-[120px]" />
        </div>
    </motion.div>
  </section>);
}

export default About;
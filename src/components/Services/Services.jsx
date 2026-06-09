import { motion } from "framer-motion";
import person1 from "../../assets/images/services/Rectangle 661.png";
import doodle1 from "../../assets/doodles/Vector 5.png";
import doodle2 from "../../assets/doodles/Rectangle 658.png";
import doodle3 from "../../assets/doodles/Arrow 4.png";
import doodle4 from "../../assets/doodles/Vector 2516.png";

function Services() {
    const fadeIn = {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        transition: { duration: 1.2 },
    }; 

  return (
    <section id="Services"
    className="
    mt-30
    lg:mt-40
    scroll-mt-24
    relative">
        <img
            src={doodle4}
            alt=""
            className="
                absolute
                bottom-53
                -right-5
                sm:bottom-52
                lg:bottom-105
                lg:-right-10

                w-[250px]
                h-[200px]
                sm:w-[350px]
                sm:h-[300px]
                lg:w-[600px]
                lg:h-[400px]

                z-0
                pointer-events-none
            "
        />
        <motion.div {...fadeIn}
            className="
                relative
                left-4
                lg:left-45

                flex
                flex-col

            ">
            <img src={doodle1} alt="" 
                    className="
                    absolute
                    top-18
                    sm:top-23
                    lg:top-38
                    -left-1
                    sm:-left-1
                    lg:-left-3
                    w-[95px]
                    sm:w-[126px]
                    lg:w-[220px]
                    h-[10px]
                    sm:h-[12px]
                    lg:h-[20px]" />
            <img src={doodle2} alt="" className="
                            absolute
                            top-2.5
                            sm:top-3.5
                            lg:top-6
                            left-40
                            sm:left-51.5
                            lg:left-85
                            w-[71px]
                            sm:w-[94px]
                            lg:w-[145px]
                            h-[28px]
                            sm:h-[31px]
                            lg:h-[50px]" />
            <div>
                <h1 className="
                w-[250px]
                sm:w-[340px]
                    lg:w-[650px]

                    text-[27px]
                    sm:text-[35px]
                    lg:text-[57px]
                    relative
                    z-10
                ">
                    What we can offer you!
                </h1>
            </div>
            <div className="border-t border-gray-300 mt-5 lg:mt-15 w-[470px] sm:w-[620px] lg:w-[1180px]" />
            <div className="
            flex
            flex-col
            pt-4
            sm:pt-5
            lg:pt-8
            w-[470px]
            sm:w-[620px]
            lg:w-[1180px]">
                <div className="
                flex
                justify-between
                items-center">
                    <p className="
                    font-['Satoshi']
                    w-[90px]
                    sm:w-[100px]
                    lg:w-[150px]
                    text-[10px]
                    lg:text-[18px]">
                        Office of multiple interest content
                    </p>
                    <p className="
                    relative
                    -right-5
                    sm:right-2
                    lg:right-0
                    text-[15px]
                    sm:text-[20px]
                    lg:text-[30px]">
                        Collaborative & partnership
                    </p>
                    <img src={doodle3} alt="" 
                        className="
                        relative
                        mt-2
                        w-[40px]
                        sm:w-[45px]
                        lg:w-[60px]
                        h-[5px]
                        lg:h-[8px]" />
                </div>
                <div className="border-t border-gray-300 mt-4 lg:mt-8 lg:w-[1180px]" />
                <div className="
                flex
                justify-between
                items-center
                pt-4
                lg:pt-8">
                    <p className="
                    font-['Satoshi']
                    w-[110px]
                    lg:w-[200px]
                    text-[10px]
                    lg:text-[18px]">
                        The hanger US Air force digital experimental
                    </p>
                    <p className="
                    relative
                    sm:right-5
                    lg:right-9
                    text-[15px]
                    sm:text-[20px]
                    lg:text-[30px]">
                        We talk about our weight
                    </p>
                    <img src={doodle3} alt="" 
                        className="
                        relative
                        mt-2
                        w-[40px]
                        sm:w-[45px]
                        lg:w-[60px]
                        h-[5px]
                        lg:h-[8px]" />
                </div>
                <div className="border-t border-gray-300 mt-4 lg:mt-8 lg:w-[1180px]" />
                <div className="relative">
                    <img src={person1} alt="img" className="
                    absolute
                    w-[56px]
                    h-[56px]
                    lg:w-[90px]
                    lg:h-[90px]
                    rounded-full
                    object-cover

                    left-[378px]
                    top-[3px]
                    lg:left-[720px]
                    lg:top-[10px]

                    z-0
                    " />
                    <div className="
                    flex
                    justify-between
                    items-center
                    pt-4
                    lg:pt-8
                    relative
                    z-10">
                        <p className="
                        font-['Satoshi']
                        w-[95px]
                        lg:w-[180px]
                        text-[10px]
                        lg:text-[18px]">
                            Delta faucet content, social, digital
                        </p>
                        <p className="
                        relative
                        -right-2
                        sm:right-3
                        lg:right-6
                        text-[15px]
                        sm:text-[20px]
                        lg:text-[30px]">
                            Piloting digital confidence
                        </p>
                        <img src={doodle3} alt="" 
                        className="
                        relative
                        mt-2
                        w-[40px]
                        sm:w-[45px]
                        lg:w-[60px]
                        h-[5px]
                        lg:h-[8px]" />
                    </div>
                </div>
                <div className="border-t border-gray-300 mt-4 lg:mt-8 lg:w-[1180px]" />
            </div>
        </motion.div>
    </section>
    );
}

export default Services;
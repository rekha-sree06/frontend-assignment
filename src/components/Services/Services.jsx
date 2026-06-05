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
    pt-25
    relative">
        <img
            src={doodle4}
            alt=""
            className="
                absolute
                -top-32
                -right-10

                w-[600px]
                h-[400px]


                z-0
                pointer-events-none
            "
        />
        <motion.div {...fadeIn}
            className="
                relative
                lg:left-45

                flex
                flex-col

            ">
            <img src={doodle1} alt="" 
                    className="
                    absolute
                    lg:top-38
                    lg:-left-3
                    lg:w-[220px]
                    lg:h-[20px]" />
            <img src={doodle2} alt="" className="
                            absolute
                            lg:top-6
                            lg:left-85
                            lg:w-[145px]
                            lg:h-[50px]" />
            <div>
                <h1 className="
                    lg:w-[650px]

                    text-[42px]
                    sm:text-[64px]
                    lg:text-[57px]
                    relative
                    z-10
                ">
                    What we can offer you!
                </h1>
            </div>
            <div className="border-t border-gray-300 mt-15 lg:w-[1180px]" />
            <div className="
            flex
            flex-col
            pt-8
            lg:w-[1180px]">
                <div className="
                flex
                justify-between
                items-center">
                    <p className="
                    font-['Satoshi']
                    lg:w-[150px]
                    lg:text-[18px]">
                        Office of multiple interest content
                    </p>
                    <p className="
                    relative
                    lg:right
                    lg:text-[30px]">
                        Collaborative & partnership
                    </p>
                    <img src={doodle3} alt="" 
                        className="
                        relative
                        mt-2
                        lg:w-[60px]
                        lg:h-[8px]" />
                </div>
                <div className="border-t border-gray-300 mt-8 lg:w-[1180px]" />
                <div className="
                flex
                justify-between
                items-center
                pt-8">
                    <p className="
                    font-['Satoshi']
                    lg:w-[200px]
                    lg:text-[18px]">
                        The hanger US Air force digital experimental
                    </p>
                    <p className="
                    relative
                    lg:right-9
                    lg:text-[30px]">
                        We talk about our weight
                    </p>
                    <img src={doodle3} alt="" 
                        className="
                        relative
                        mt-2
                        lg:w-[60px]
                        lg:h-[8px]" />
                </div>
                <div className="border-t border-gray-300 mt-8 lg:w-[1180px]" />
                <div className="relative">
                    <img src={person1} alt="img" className="
                    absolute
                    w-[90px]
                    h-[90px]
                    rounded-full
                    object-cover

                    left-[720px]
                    top-[10px]

                    z-0
                    " />
                    <div className="
                    flex
                    justify-between
                    items-center
                    pt-8
                    relative
                    z-10">
                        <p className="
                        font-['Satoshi']
                        lg:w-[180px]
                        lg:text-[18px]">
                            Delta faucet content, social, digital
                        </p>
                        <p className="
                        relative
                        lg:right-6
                        lg:text-[30px]">
                            Piloting digital confidence
                        </p>
                        <img src={doodle3} alt="" 
                        className="
                        relative
                        mt-2
                        lg:w-[60px]
                        lg:h-[8px]" />
                    </div>
                </div>
                <div className="border-t border-gray-300 mt-8 lg:w-[1180px]" />
            </div>
        </motion.div>
    </section>
    );
}

export default Services;
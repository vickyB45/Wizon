import { motion } from "framer-motion";

export default function MissionSection() {
    return (
        <section className="w-full py-12 text-center  overflow-hidden">
            {/* Mission Header */}
            <div className="relative mb-6">
                {/* OUR MISSION box */}
                <div className="w-full flex justify-start items-center ">
                    <div className="w-[70%] border-2" />
                    <div className="w-[30%]">
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="bg-black text text-white sm:px-6 py-2 font-semibold text-sm md:text-3xl whitespace-nowrap"
                        >
                            OUR MISSION
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Mission Text */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                className="max-w-4xl ml-auto text mb-8 text-end w-full text-gray-800 text-lg md:text-[22px] leading-7 px-4"
            >
                To make profitable, consistent growth simple for fashion brands. <br />
                We’re here to remove the guesswork from scaling — by replacing hacks with
                strategy, vague advice with data, and outsourcing with in-house execution.
            </motion.p>

            {/* Meet the Founders */}
            <div className="w-full flex justify-end items-center">
                <div className="w-[40%]">
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="bg-black text text-white sm:px-6 py-2 font-semibold text-sm md:text-3xl whitespace-nowrap"
                    >
                        MEET THE FOUNDER
                    </motion.div>
                </div>
                <div className="w-[60%] border-2" />
            </div>
        </section>
    );
}

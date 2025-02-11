import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Banner from "./Banner";
import Banner2 from "./Banner2";
import RecentCars from "./cars/RecentCars";
import ClientReview from "./cars/ClientReview";
import SpecialOffers from "./cars/SpecialOffers";
import Contact from "./Company/Contact";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Rent A Car || Home</title>
      </Helmet>

      {/* Full Width Banner */}
      <div className="w-full">
        <Banner />
        <Banner2 />
      </div>
      <div className="w-[85%] md:w-[90%] mx-auto">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <RecentCars />
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <ClientReview />
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SpecialOffers />
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Contact />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;

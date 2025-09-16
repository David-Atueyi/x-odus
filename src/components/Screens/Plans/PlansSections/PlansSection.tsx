import { plans } from "@/base/dummyData/plans";
import { PlanCard } from "@/components/Global/PlanCard";
import { motion } from "motion/react";

export const PlansSection = ({
  title,
  planList,
  delay = 0,
}: {
  title: string;
  planList: typeof plans;
  delay?: number;
}) => {
  return (
    <motion.section
      className="mb-12"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
    >
      <motion.h2
        className="text-2xl font-bold text-[#184b8c] mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: delay / 1000 + 0.2 }}
      >
        {title} Plans
      </motion.h2>
      <motion.div
        className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              delayChildren: delay / 1000 + 0.3,
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {planList.map((plan, index) => (
          <motion.div
            key={plan.id}
            className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] min-w-[280px] max-w-[400px]"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <PlanCard plan={plan} />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

import { plans } from "@/base/dummyData/plans";
import { PlanCard } from "@/components/Global/PlanCard";

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
    <section className="mb-12" style={{ animationDelay: `${delay}ms` }}>
      <h2 className="text-2xl font-bold text-[#184b8c] mb-6 text-center animate-fadeInDown">
        {title} Plans
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {planList.map((plan, index) => (
          <div
            key={plan.id}
            style={{ animationDelay: `${delay + index * 100}ms` }}
          >
            <PlanCard plan={plan} />
          </div>
        ))}
      </div>
    </section>
  );
};

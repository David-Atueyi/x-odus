import { LoadingInterface } from "@/components/Global/LoadingInterface";
import { Suspense } from "react";
import { PaymentForm } from "./PaymentSections/PaymentForm";
import { PaymentHeaderSection } from "./PaymentSections/PaymentHeaderSection";
import { PlanSummarySection } from "./PaymentSections/PlanSummarySection";

export const PaymentScreenIndex = () => {
  return (
    <Suspense fallback={<LoadingInterface />}>
      <div className="min-h-screen py-12">
        <div className="max-w-2xl mx-auto p-8">
          {/* Header */}
          <PaymentHeaderSection />

          <div className="grid md:grid-cols-2 gap-8">
            {/* Plan Summary */}
            <PlanSummarySection />

            {/* Payment Form */}
            <PaymentForm />
            <div
              className="animate-slideInLeft rounded-2xl"
              style={{ animationDelay: "200ms" }}
            >
              <div className="mt-6 p-4 bg-[#184b8c]/5 rounded-xl">
                <p className="text-xs text-[#184b8c]/60 text-center">
                  🔒 Secure payment • Your voucher will be sent instantly to the
                  email address above
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

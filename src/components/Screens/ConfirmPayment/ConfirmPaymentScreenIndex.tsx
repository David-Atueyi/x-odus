"use client";
import { LoadingInterface } from "@/components/Global/LoadingInterface";
import { Suspense, useEffect, useState } from "react";
import { ActionButtonsSection } from "./ConfirmPaymentSections/ActionButtonsSection";
import { DetailsCard } from "./ConfirmPaymentSections/DetailsCard";
import { InfoBoxSection } from "./ConfirmPaymentSections/InfoBoxSection";
import { SuccessIconSection } from "./ConfirmPaymentSections/SuccessIconSection";
import { SupportNoteSection } from "./ConfirmPaymentSections/SupportNoteSection";

export const ConfirmPaymentIndex = () => {
  const [mounted, setMounted] = useState(false);

  const data = {
    planName: "monthly",
    planId: "3h445xtpyl64",
    email: "hello@gmail.com",
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <LoadingInterface />;
  }
  return (
    <Suspense fallback={<LoadingInterface />}>
      <div className="min-h-screen flex items-center justify-center py-12">
        <div className="max-w-md w-full p-8">
          {/* Success Icon */}
          <SuccessIconSection />
          {/* Details Card */}
          <DetailsCard
            planName={data.planName}
            planId={data.planId}
            email={data.email}
          />
          {/* Info Box */}
          <InfoBoxSection email={data.email} />
          {/* Action Buttons */}
          <ActionButtonsSection />
          {/* Support Note */}
          <SupportNoteSection />
        </div>
      </div>
    </Suspense>
  );
};

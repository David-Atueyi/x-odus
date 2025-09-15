"use client";
import { getCardGradient } from "@/base/dummyData/getCardGradient";
import { getTypeIcon } from "@/base/dummyData/getTypeIcon";
import { PlanCardProps } from "@/interface/IPlan";
import Link from "next/link";

export const PlanCard = ({ plan }: PlanCardProps) => {
  return (
    <div className="group relative">
      <div
        className={`
 relative p-6 rounded-2xl border border-gray-200/50
 bg-gradient-to-br ${getCardGradient(plan.type)}
 backdrop-blur-sm
 `}
      >
        {/* Plan Type Badge */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg">{getTypeIcon(plan.type)}</span>
          <span className="text-xs font-semibold text-[#184b8c]/70 uppercase tracking-wide">
            {plan.type}
          </span>
        </div>

        {/* Plan Name */}
        <h3 className="text-xl font-bold text-[#184b8c] mb-2 group-hover:text-[#184b8c]/80">
          {plan.name}
        </h3>

        {/* Price */}
        <div className="mb-4">
          <span className="text-3xl font-extrabold text-[#184b8c]">
            {plan.price}
          </span>
          <span className="text-sm text-[#184b8c]/60 ml-1">
            /{plan.type.toLowerCase()}
          </span>
        </div>

        {/* Description */}
        <p className="text-[#184b8c]/70 mb-6 text-sm leading-relaxed">
          {plan.desc}
        </p>

        {/* Buy Button */}
        <Link
          href={`/payment?planId=${plan.id}`}
          className={`
 block w-full py-3 px-4 rounded-xl text-center font-semibold
 bg-[#184b8c] text-white
 hover:bg-[#184b8c]/90
 
 `}
        >
          Buy Now
        </Link>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#184b8c]/5 to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

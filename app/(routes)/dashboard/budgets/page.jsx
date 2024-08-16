"use client";
import React from "react";
import BudgetList from "./_components/BudgetList";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const Budget = () => {
  const route = useRouter();
  return (
    <div className="p-10">
      <h2 className="font-bold text-3xl flex gap-2 items-center">
        <ArrowLeft
          onClick={() => route.replace("/dashboard")}
          className="cursor-pointer"
        />{" "}
        My Budgets
      </h2>
      <BudgetList />
    </div>
  );
};

export default Budget;

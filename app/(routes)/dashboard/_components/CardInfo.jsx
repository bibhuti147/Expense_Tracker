"use client";
import {
  ArrowRight,
  Landmark,
  PiggyBank,
  ReceiptIndianRupee,
  Wallet,
} from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const CardInfo = ({ budgetList }) => {
  const [totalBudget, setTotalBudget] = useState(0);
  const [totalSpend, setTotalSpend] = useState(0);
  const route = useRouter();
  useEffect(() => {
    budgetList && CalculateCardInfo();
  }, [budgetList]);

  const CalculateCardInfo = () => {
    let totalBudget_ = 0;
    let totalSpend_ = 0;
    budgetList.forEach((element) => {
      totalBudget_ += Number(element.amount);
      totalSpend_ += element.totalSpend;
    });
    setTotalBudget(totalBudget_);
    setTotalSpend(totalSpend_);
  };

  return (
    <div>
      {budgetList?.length > 0 ? (
        <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="md:hidden p-7 rounded-lg border-2 border-slate-200 flex items-center justify-between bg-primary hover:shadow-md cursor-pointer">
            <div className="flex gap-1 items-center text-white">
              <h2 className="font-bold text-2xl">
                <h2 className="text-sm flex gap-1 items-center">
                  Create Budgets <ArrowRight size={15} />
                </h2>
                My Budgets
              </h2>
            </div>
            <PiggyBank className="bg-white p-3 h-12 w-12 rounded-full text-primary" />
          </div>
          <div className="p-7 border rounded-lg flex items-center justify-between">
            <div>
              <h2 className="text-sm">Total Budget</h2>
              <h2 className="font-bold text-2xl">₹{totalBudget}</h2>
            </div>
            <Landmark className="bg-primary p-3 h-12 w-12 rounded-full text-white" />
          </div>
          <div className="p-7 border rounded-lg flex items-center justify-between">
            <div>
              <h2 className="text-sm">Total Spend</h2>
              <h2 className="font-bold text-2xl">₹{totalSpend}</h2>
            </div>
            <ReceiptIndianRupee className="bg-primary p-3 h-12 w-12 rounded-full text-white" />
          </div>
          <div className="p-7 border rounded-lg flex items-center justify-between">
            <div>
              <h2 className="text-sm">No. of Budget</h2>
              <h2 className="font-bold text-2xl">{budgetList?.length}</h2>
            </div>
            <Wallet className="bg-primary p-3 h-12 w-12 rounded-full text-white" />
          </div>
        </div>
      ) : (
        <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[1, 2, 3].map((item, index) => (
            <div className="h-[110px] w-full bg-slate-200 animate-pulse round-lg"></div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CardInfo;

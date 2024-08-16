"use client";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  const { user } = useUser();
  return (
    <div>
      <section className="bg-gray-50 flex items-center flex-col">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Manage Your Expense
              <strong className="font-extrabold text-primary sm:block">
                {" "}
                Control Your Money{" "}
              </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              Start creating your budget and save money.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href={`${user ? "/dashboard" : "/sign-in"}`}>
                {user ? (
                  <div className="block w-full rounded bg-slate-50 border-2 border-gray-400 px-12 py-3 text-sm font-medium text-primary shadow hover:bg-gray-500 hover:text-white focus:outline-none focus:ring active:bg-red-500 sm:w-auto">
                    Dashboard
                  </div>
                ) : (
                  <div className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-800 focus:outline-none focus:ring active:bg-red-500 sm:w-auto">
                    Get Started
                  </div>
                )}
              </Link>
            </div>
          </div>
        </div>
        <div className="px-3">
          <Image
            src={"/dashboard.png"}
            alt="dashboard"
            width={1000}
            height={700}
            className="-mt-7 mb-5 rounded-xl border-2 "
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;

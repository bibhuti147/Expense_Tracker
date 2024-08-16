import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

const DashboardHeader = () => {
  return (
    <div className="p-5 shadow-sm border-b flex justify-between items-center">
      <div>
        <Image
          className="block md:hidden"
          src={"./logo.svg"}
          alt="logo"
          width={160}
          height={100}
        />
      </div>
      <div>
        <UserButton />
      </div>
    </div>
  );
};

export default DashboardHeader;

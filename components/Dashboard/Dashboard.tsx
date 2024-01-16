"use client";
import React from "react";
import ChartOne from "../Charts/ChartOne";
import ChartTwo from "../Charts/ChartTwo";
import CardDataStats from "../CardDataStats";

import { PiStudent } from "react-icons/pi";
import { BsPerson } from "react-icons/bs";

// import Map from "../Maps/TestMap";

// without this the component renders on server and throws an error
import dynamic from "next/dynamic";
import TableThree from "../Tables/TableThree";
import TableTwo from "../Tables/TableTwo";

const Dashboard: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardDataStats titles="Total Students" total="90">
          <PiStudent className="fill-primary dark:fill-white text-2xl" />
        </CardDataStats>

        <CardDataStats total="40" titles="Teachers">
          <BsPerson className="fill-primary dark:fill-white text-2xl" />
        </CardDataStats>
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
      </div>
      <div className="col-span-12 xl:col-span-8">
        <TableTwo />
      </div>
    </>
  );
};

export default Dashboard;

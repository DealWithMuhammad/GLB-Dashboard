import React, { ReactNode } from "react";

interface CardDataStatsProps {
  total: string;
  titles: string;

  children: ReactNode;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
  total,
  titles,

  children,
}) => {
  return (
    <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
        {children}
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-lg font-bold  dark:text-white">{titles}</h4>
          <span className="text-title-md text-black dark:text-white font-medium">
            {total}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardDataStats;

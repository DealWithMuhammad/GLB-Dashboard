import Image from "next/image";
import { Student } from "@/types/studentData";

const studentData: Student[] = [
  {
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Elish",
    grade: "Form 5",
    marks: 98,
    percentage: 98,
  },
  {
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Ahmad",
    grade: "Form 6",
    marks: 99,
    percentage: 99,
  },
  {
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Farasat",
    grade: "Form 8",
    marks: 80,
    percentage: 89,
  },
  {
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Tahir",
    grade: "Form 10",
    marks: 98,
    percentage: 99,
  },
];

const TableTwo = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default mt-7 dark:border-strokedark dark:bg-boxdark">
      <div className="py-6 px-4 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Exam Toppers
        </h4>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <p className="font-medium">Student Name</p>
        </div>

        <div className="col-span-1 flex items-center">
          <p className="font-medium">Marks</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">%Age</p>
        </div>
      </div>

      {studentData.map((student, key) => (
        <div
          className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
          key={key}
        >
          <div className="col-span-3 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="h-12.5 w-15 rounded-md">
                <Image
                  src={student.image}
                  width={60}
                  height={50}
                  alt="person"
                />
              </div>
              <p className="text-sm text-black dark:text-white">
                {student.name}
              </p>
            </div>
          </div>

          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">
              {student.marks}
            </p>
          </div>

          <div className="col-span-1 flex items-center">
            <p className="text-sm text-meta-3">{student.percentage}%</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TableTwo;

"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@radix-ui/themes";
import { IoMdAddCircle } from "react-icons/io";
import Link from "next/link";
import axios from "axios";

type BugType = {
  id: number;
  title: string;
  description: string;
  status: string;
};

const BugPage = () => {
  const [bugs, setBugs] = useState<BugType[]>([]);

  async function getBugs() {
    try {
      const response = await axios.get("/api/bugs");
      setBugs(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getBugs();
  }, []);

  const handleClick = async (
    ev: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number
  ) => {
    // ev.preventDefault();
    // try {
    //   console.log(id);
    //   const response = await axios.get("/api/bugs/" + id);
    // } catch (err) {}
  };

  return (
    <div>
      <Button>
        <Link className="flex items-center gap-2" href={"/bugs/new"}>
          <h2 className="text-white">New Bug</h2> <IoMdAddCircle />
        </Link>
      </Button>

      <div className="flex items-center justify-between">
        <div>
          {bugs.length > 0 &&
            bugs.map((bug) => (
              <div
                key={bug.id}
                className="flex justify-between w-full items-center border-2 rounded-lg drop-shadow-md px-8 py-4 mt-4 my-4 max-w-xl"
              >
                <div className="flex-wrap pr-2">
                  <h2 className="text-lg">
                    {bug.title}
                    {" - "}
                    <span className="text-xs font-semibold italic px-2 py-[1px] flex-col items-center text-white bg-green-700 rounded">
                      {bug.status}
                    </span>
                  </h2>
                  <p className="text-sm text-gray-600">{bug.description}</p>
                </div>
                <button
                  onClick={(ev) => handleClick(ev, bug.id)}
                  className="bg-gray-600 cursor-pointer flex rounded text-md font-bold text-white px-3 py-1"
                >
                  Show
                </button>
              </div>
            ))}
        </div>
        <div className="p-8 bg-gray-200 w-1/2 h-auto mx-8 rounded-lg">
          Single Bug Report
        </div>
      </div>
    </div>
  );
};

export default BugPage;

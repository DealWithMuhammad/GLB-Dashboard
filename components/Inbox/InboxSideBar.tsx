"use client";

// import Link from "next/link";
import React from "react";
import { Tabs, Tab } from "@nextui-org/react";
import { CiInboxIn } from "react-icons/ci";
import { BsTrash3 } from "react-icons/bs";
import { VscSend } from "react-icons/vsc";
import TableThree from "../Tables/TableThree";

export default function InboxSideBar() {
  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="Options" color="primary" variant="bordered">
        <Tab
          key="inbox"
          title={
            <div className="flex items-center space-x-2 ">
              <CiInboxIn />
              <span>Inbox</span>
            </div>
          }
        >
          <TableThree />
        </Tab>
        <Tab
          key="videos"
          title={
            <div className="flex items-center space-x-2">
              <VscSend />
              <span>Sent</span>
            </div>
          }
        />
        <Tab
          key="Trash"
          title={
            <div className="flex items-center text-danger space-x-2">
              <BsTrash3 />
              <span>Trash</span>
            </div>
          }
        />
      </Tabs>
    </div>
  );
}

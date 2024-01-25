"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Image from "next/image";
import { Radio, RadioGroup, Stack } from "@chakra-ui/react";

import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Profile Page",
  description: "This is Profile page for Glbridge Next.js",
  // other metadata
};

const Profile = () => {
  const [value, setValue] = React.useState("1");

  return (
    <>
      <Breadcrumb pageName="Profile" />
      <div>Profile of person</div>

      <RadioGroup onChange={setValue} value={value}>
        <Stack direction="row">
          <Radio value="1">First</Radio>
          <Radio value="2">Second</Radio>
          <Radio value="3">Third</Radio>
        </Stack>
      </RadioGroup>
    </>
  );
};

export default Profile;

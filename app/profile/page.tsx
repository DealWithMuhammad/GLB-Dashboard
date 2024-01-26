"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Image from "next/image";

import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Profile Page",
  description: "This is Profile page for Glbridge Next.js",
  // other metadata
};

const Profile = () => {
  return (
    <>
      <Breadcrumb pageName="Profile" />
      <div>Profile of person</div>
    </>
  );
};

export default Profile;

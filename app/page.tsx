import Dashboard from "@/components/Dashboard/Dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GLB | Dashboard",
  description: "Home page of School Portal",
  // other metadata
};

export default function Home() {
  return (
    <>
      <Dashboard />
    </>
  );
}

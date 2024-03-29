import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import InboxSideBar from "@/components/Inbox/InboxSideBar";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Inbox | Glbridge",
  description: "This is Inbox page for Glbridge Next.js",
  // other metadata
};

export default function Inbox() {
  return (
    <>
      <Breadcrumb pageName="Inbox" />
      <InboxSideBar />
    </>
  );
}

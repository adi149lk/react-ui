import React from "react";
import LeftContent from "./LeftContent";
import Rightcontent from "./rightcontent";

export default function Page1content({ users }) {
  return (
    <div className="py-10  flex items-center gap-10 h-[90vh] px-18">
      <LeftContent />
      <Rightcontent users={users} />
    </div>
  );
}

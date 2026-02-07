import React from "react";
import Navbar from "./Navbar";
import Page1content from "./Page1content";

export default function Section({ users }) {
  return (
    <div className="h-screen w-full">
      <Navbar />
      <Page1content users={users} />
    </div>
  );
}

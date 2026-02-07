import React from "react";
import { Rightcard } from "./Rightcard";

export default function Rightcontent({ users }) {
  return (
    <div
      className="flex flex-nowrap overflow-x-auto  h-full w-2/3 p-6 gap-10 "
      id="right"
    >
      {users.map((user, i) => (
        <Rightcard key={i} id={i} user={user} />
      ))}
    </div>
  );
}

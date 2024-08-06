import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="p-6 flex">
      <Link href={"/"}>
        <h1 className="text-3xl font-bold ">Kanchana</h1>
      </Link>

      <Link href={"/add-topic"} className="ml-auto">
        <Button>Add topic</Button>
      </Link>
    </div>
  );
};

export default Navbar;

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const page = () => {
  return (
    <div className="p-6">
      <div className="flex justify-center items-center">
        <Input className="w-3/4" placeholder="Title" />
      </div>
      <div className="flex justify-center items-center mt-3">
        <div className="flex-col w-2/3">
          <Textarea placeholder="Type your message here." />
          <div className="flex justify-center mt-4">
            <Button>Send message</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

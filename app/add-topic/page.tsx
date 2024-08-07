"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Router from "next/router";
import React, { useState } from "react";

const Page = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async () => {
    if (!title || !description) {
      return alert("Please fill in all fields.");
    }
    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description
        }),
      });

      if (res.ok) {
        Router.push("/");
      } else {
        throw new Error("Failed to add topic");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="p-6 w-full max-w-lg">
        <div className="flex justify-center items-center">
          <Input 
            className="w-3/4" 
            placeholder="Title" 
            onChange={(e) => setTitle(e.target.value)} 
          />
        </div>
        <div className="flex justify-center items-center mt-3">
          <div className="flex-col w-2/3">
            <Textarea 
              placeholder="Type your message here." 
              onChange={(e) => setDescription(e.target.value)} 
            />
            <div className="flex justify-center mt-4">
              <Button onClick={handleSubmit}>Add Topic</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import Swal from "sweetalert2";

interface EditTopicProps {
  id: string;
  title: string;
  description: string;
}

const EditTopic = ({ id, title, description }: EditTopicProps) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  async function updateTopic() {
    try {
      const res = await fetch(`https://crud.kaidenz.me//api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          newTitle,
          newDescription,
        }),
      });

      if (res.ok) {
        Swal.fire("Topic updated successfully").then(() => {
          window.location.href = "/";
        });
      } else {
        console.log("Failed to update the topic");
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
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
        </div>
        <div className="flex justify-center items-center mt-3">
          <div className="flex-col w-2/3">
            <Textarea
              placeholder="Type your message here."
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
            />
            <div className="flex justify-center mt-4">
              <Button onClick={updateTopic}>Edit Topic</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTopic;

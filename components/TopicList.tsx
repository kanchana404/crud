"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import DeleteButton from "./DeleteButton";

// Define the Topic type
type Topic = {
  _id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

const getTopics = async (): Promise<Topic[]> => {
  try {
    const res = await fetch("https://crud.kaidenz.me/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
};

const TopicList: React.FC = () => {
  const [topics, setTopics] = useState<Topic[]>([]);

  useEffect(() => {
    const fetchTopics = async () => {
      const topicsData = await getTopics();
      setTopics(topicsData);
    };

    fetchTopics();
  }, []);

  const handleDelete = (id: string) => {
    setTopics(topics.filter(topic => topic._id !== id));
  };

  return (
    <div className="flex justify-center items-center flex-col">
      {topics.map((t) => (
        <div key={t._id} className="p-8 flex w-2/3 border border-black mb-4">
          <div className="flex-col">
            <p className="font-bold">{t.title}</p>
            <p>{t.description}</p>
          </div>
          <div className="ml-auto flex space-x-2">
            <Link href={`/edit-topic/${t._id}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
            </Link>
            <DeleteButton id={t._id} onDelete={handleDelete} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopicList;

import EditTopic from '@/components/EditTopic';
import React from 'react';

interface ParamsProps {
  params: {
    id: string;
  }
}

interface Topic {
  _id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const getTopic = async (id: string) => {
  try {
    const res = await fetch(`https://crud.kaidenz.me//api/topics/${id}`, {
      cache: 'no-cache',
    });
    const data = await res.json();
    return data; // Return the fetched data
  } catch (error) {
    console.log(error);
    return null; // Return null in case of an error
  }
};

const Page = async ({ params }: ParamsProps) => {
  const gotTopic = await getTopic(params.id);
  


  return (
    <div>
      <EditTopic 
      
      id={gotTopic.topic._id}
      title={gotTopic.topic.title}
      description={gotTopic.topic.description}
      
      />
    </div>
  );
};

export default Page;

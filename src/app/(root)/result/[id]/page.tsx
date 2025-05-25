"use client";

import useStore from "@/store/zustandStore";
import { notFound, useParams } from "next/navigation";
import React from "react";
import ReactMarkdown from "react-markdown";

export default function CardDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { generatedContents } = useStore((state) => state);

  const content = generatedContents.find((item) => item.id === id);

  if (!content) {
    notFound();
  }

  return (
    <div className='py-14'>
      <p className='text-sm text-gray-400 mb-2'>
        {new Date(content.createdAt).toLocaleString()}
      </p>
      <h1 className='text-2xl font-bold mb-4'>Prompt : {content.prompt}</h1>
      <div className='prose prose-invert w-full'>
        <ReactMarkdown>{content.content}</ReactMarkdown>
      </div>
    </div>
  );
}

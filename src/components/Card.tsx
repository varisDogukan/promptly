import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { GeneratedContent } from "@/types/content";
import { formatDate } from "@/lib/utils";

export default function Card({
  content,
  createdAt,
  prompt,
  id,
}: GeneratedContent) {
  return (
    <li className='custom-shadow-md px-4 py-6 rounded-lg'>
      <Link href={`/result/${id}`}>
        <p className='text-xs text-gray-500 mb-4 text-right'>
          {formatDate(createdAt)}
        </p>
        <h3 className='font-semibold line-clamp-2 text-2xl mb-6'>{prompt}</h3>
        <div className='px-3 line-clamp-5'>
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </Link>
    </li>
  );
}

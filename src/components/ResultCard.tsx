"use client";

import useStore from "@/store/zustandStore";
import Card from "./Card";

export default function ResultCard() {
  const { generatedContents } = useStore((state) => state);

  return (
    <div>
      <h2 className='text-4xl font-semibold mb-5'>Önceki İçerikler</h2>
      <ul className='responsive-grid-container'>
        {generatedContents
          .sort(
            (a, b) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          )
          .map((item) => (
            <Card key={item.id} {...item} />
          ))}
      </ul>
    </div>
  );
}

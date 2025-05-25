"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center text-center px-4 py-12 bg-slate-900 text-slate-400'>
      <h1 className='text-4xl font-bold text-red-500 mb-4'>
        404 - İçerik Bulunamadı
      </h1>
      <p className='text-gray-400 mb-6 max-w-md'>
        Aradığınız sayfa bulunamadı. Belki içerik silinmiş olabilir ya da URL
        yanlış girilmiş olabilir.
      </p>
      <Link
        href='/'
        className='px-4 py-2 bg-slate-600 text-white rounded-md hover:bg-slate-700 transition'
      >
        Ana Sayfaya Dön
      </Link>
    </div>
  );
}

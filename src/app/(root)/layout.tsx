import Header from "@/components/Header";
import { Metadata } from "next";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Promptly | AI Destekli İçerik Üretici",
  description:
    "Yalnızca bir cümleyle içerik üretin. Markdown destekli profesyonel sonuçlar alın.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className='min-h-screen bg-slate-900 text-slate-400'>
      <Header />
      <div className='container'>{children}</div>
      <Toaster />
    </main>
  );
}

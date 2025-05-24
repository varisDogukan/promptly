import { Toaster } from "sonner";
import PromptForm from "@/components/PromptForm";
import ResultCard from "@/components/ResultCard";

export default function HomePage() {
  return (
    <main className='min-h-screen bg-slate-900 text-slate-400'>
      <div className='max-w-7xl mx-auto '>
        <div className='text-center pt-8 h-screen flex flex-col items-center justify-center'>
          <h1 className='text-9xl font-bold mb-6'>Promptly</h1>
          <p className='text-3xl text-slate-600 mb-20'>
            AI destekli içerik üretici – fikirlerini birkaç saniyede yazıya dök.
          </p>

          <PromptForm />
        </div>

        <ResultCard />
      </div>
      <Toaster />
    </main>
  );
}

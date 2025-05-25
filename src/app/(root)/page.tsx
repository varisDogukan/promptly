import PromptForm from "@/components/PromptForm";
import ResultCard from "@/components/ResultCard";

export default function HomePage() {
  return (
    <>
      <div className='text-center h-[calc(100vh-100px-50px)] flex flex-col items-center justify-center'>
        <h1 className='title text-5xl font-bold mb-6'>Promptly</h1>
        <p className='description text-slate-600 mb-20'>
          AI destekli içerik üretici – fikirlerini birkaç saniyede yazıya dök.
        </p>

        <PromptForm />
      </div>

      <ResultCard />
    </>
  );
}

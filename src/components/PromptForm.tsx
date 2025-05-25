"use client";

import { useActionState, useEffect, useTransition } from "react";
import { generatePrompt } from "@/lib/actions";
import { toast } from "sonner";

export default function PromptForm() {
  const [isPending, startTransition] = useTransition();
  const [state, formAction] = useActionState(generatePrompt, {
    success: false,
    message: "",
  });

  const handleSubmit = (formData: FormData) => {
    startTransition(() => {
      formAction(formData);
    });
  };

  useEffect(() => {
    if (state.message) {
      toast(state.message as string, {
        style: {
          background: state.success ? "#08551d" : "#550808",
          color: "#94a3b8",
        },
      });
    }
  }, [state]);

  return (
    <form className='max-w-[400] w-full' action={handleSubmit}>
      <input
        type='text'
        name='prompt'
        placeholder='Ne hakkında yazmamı istersin?'
        className='p-4 bg-slate-950 rounded-lg w-full  border border-slate-800 placeholder:opacity-50 mb-6 '
      />

      <button
        type='submit'
        disabled={isPending}
        className='px-4 py-2 rounded-lg duration-200 hover:text-slate-500'
      >
        {isPending ? (
          <span className='flex items-center gap-2'>
            <svg
              className='animate-spin w-4 h-4 text-slate-500'
              viewBox='0 0 24 24'
            >
              <circle
                className='opacity-25'
                cx='12'
                cy='12'
                r='10'
                stroke='currentColor'
                strokeWidth='4'
              />
              <path
                className='opacity-75'
                fill='currentColor'
                d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z'
              />
            </svg>
            Oluşturuluyor...
          </span>
        ) : (
          "Oluştur"
        )}
      </button>
    </form>
  );
}

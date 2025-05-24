export default function PromptForm() {
  return (
    <form className='max-w-[400] w-full'>
      <input
        type='text'
        id='inputPrompt'
        name='inputPrompt'
        placeholder='Ne hakkında yazmamı istersin?'
        className='p-4 bg-slate-950 rounded-lg w-full  border border-slate-800 placeholder:opacity-50 mb-6 '
      />
      <button
        type='submit'
        className='text-slate-500 hover:text-slate-400 px-4 py-2 rounded-lg font-medium duration-200 ease-linear'
      >
        Oluştur
      </button>
    </form>
  );
}

import Link from "next/link";

export default function Header() {
  return (
    <header className='h-14 flex items-center bg-slate-950'>
      <nav className='container'>
        <Link
          href='/'
          className='text-xl font-bold text-slate-500 hover:text-slate-300 duration-200 ease-linear'
        >
          Promptly
        </Link>
      </nav>
    </header>
  );
}

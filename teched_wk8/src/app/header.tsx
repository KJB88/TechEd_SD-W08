import Link from 'next/link'

export default function Header () {
  return (
    <div className="bg-nuke bg-bottom bg-no-repeat pb-10">
    <header className="flex flex-col items-center">
      <a href="/">
      <h1 className="drop-shadow font-bold text-2xl -mb-2">Zone PDA Network</h1>
      </a>
      <h2 className="drop-shadow text-lg mb-2">&quot;Good hunting, Stalker!&quot;</h2>
      <nav>
      <a className="drop-shadow text-blue-300 hover:text-blue-600"  target="_blank" href="https://linktr.ee/kjb88">Linktree</a>
      </nav>
    </header>
    </div>
  )
}


/*
        <Link className="drop-shadow"  href='/'>Home</Link>
        <Link className="drop-shadow"  href='/posts'>Posts</Link>
*/
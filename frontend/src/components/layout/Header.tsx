import Link from 'next/link'

export default function Header() {
  return (
    <header className=''>
        <nav className='flex justify-between items-center py-5 px-16 bg-white text-black'>
            <div className="">
                <Link href="/">Dylan Thomas</Link>
            </div>
            <div className="flex gap-16">
                <Link href="/">Accueil</Link>
                <Link href="/about">A propos</Link>
                <Link href="/projects">Projets</Link>
                <Link href="/skills">Competences</Link>
                <Link href="/contact">Contact</Link>
            </div>
        </nav>
    </header>
  )
}
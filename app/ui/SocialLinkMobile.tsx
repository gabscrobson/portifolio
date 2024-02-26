import Link from 'next/link'

interface SocialLinkProps {
  children: React.ReactNode
  link: string
  text: string
  className?: string
}

export function SocialLinkMobile({
  children,
  link,
  text,
  className = '',
}: SocialLinkProps) {
  const target = link.startsWith('/') ? '_self' : '_blank'

  return (
    <Link href={link} target={target} className={className}>
      <div className="transition-all ease-linear bg-white bg-opacity-10 hover:bg-opacity-20 shadow-custom hover:shadow-custom-white text-white text-lg font-medium w-full h-20 flex items-center px-3 rounded-2xl gap-3">
        {children} {text}
      </div>
    </Link>
  )
}

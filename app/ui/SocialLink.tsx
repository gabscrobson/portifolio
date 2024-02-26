import Link from 'next/link'
import { RiExternalLinkLine } from 'react-icons/ri'

interface SocialLinkProps {
  children: React.ReactNode
  link: string
  tooltip: string
  className?: string
}

export function SocialLink({
  children,
  link,
  tooltip,
  className = '',
}: SocialLinkProps) {
  const target = link.startsWith('/') ? '_self' : '_blank'

  return (
    <Link href={link} target={target} className={className}>
      <div className="group relative transition-all ease-linear bg-white bg-opacity-10 hover:bg-opacity-20 shadow-custom hover:shadow-custom-white text-white w-20 h-20 flex items-center justify-center rounded-2xl">
        {children}
        <span className="bg-white text-gray-800 p-2 rounded-2xl w-28 absolute top-20 mt-3 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center gap-1">
          {tooltip}
          <RiExternalLinkLine />
        </span>
      </div>
    </Link>
  )
}

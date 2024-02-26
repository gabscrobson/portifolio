import {
  FaGithub,
  FaLinkedinIn,
  FaPaperclip,
  FaPaperPlane,
} from 'react-icons/fa6'
import { SocialLink } from './ui/SocialLink'
import { SocialLinkMobile } from './ui/SocialLinkMobile'
// import { FaPencilRuler } from 'react-icons/fa'

const iconsSize = 30

const socialLinks = [
  {
    link: 'mailto:gmta1410@gmail.com',
    text: 'Reach out',
    icon: <FaPaperPlane size={iconsSize - 2} />,
    className: '-rotate-6 mt-5',
  },
  {
    link: 'https://gabrielaccetta.com/resume',
    text: 'Resume',
    icon: <FaPaperclip size={iconsSize} />,
    className: '-rotate-3 mt-1',
  },
  // {
  //   link: '/projects',
  //   text: 'Projects',
  //   icon: <FaPencilRuler size={iconsSize - 2} />,
  // },
  {
    link: 'https://www.linkedin.com/in/gabriel-accetta',
    text: 'LinkedIn',
    icon: <FaLinkedinIn size={iconsSize} />,
    className: 'rotate-3 mt-1',
  },
  {
    link: 'https://github.com/gabscrobson',
    text: 'GitHub',
    icon: <FaGithub size={iconsSize + 4} />,
    className: 'rotate-6 mt-5',
  },
]

export default function Home() {
  return (
    <main className="flex flex-col gap-10 m-auto mt-10 sm:mt-20 w-11/12 max-w-screen-md sm:text-center">
      <div className="">
        <h1 className="text-3xl sm:text-6xl font-medium">Gabriel Accetta</h1>
        <h2 className="text-2xl sm:text-4xl font-light text-gray-300">
          Software Developer
        </h2>
      </div>

      <section className="hidden sm:flex items-center justify-center gap-7">
        {socialLinks.map((link, index) => (
          <SocialLink
            key={index}
            link={link.link}
            tooltip={link.text}
            className={link.className}
          >
            {link.icon}
          </SocialLink>
        ))}
      </section>

      <section className="flex flex-col gap-5 sm:hidden">
        {socialLinks.map((link, index) => (
          <SocialLinkMobile key={index} link={link.link} text={link.text}>
            {link.icon}
          </SocialLinkMobile>
        ))}
      </section>
    </main>
  )
}

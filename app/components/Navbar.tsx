import Link from "next/link"

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
]
const Navbar = () => {
  return (
    <nav>
      <ul>
        {links.map(({ href, label }) => (
          <li key={`${href}${label}`}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar

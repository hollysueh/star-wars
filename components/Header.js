import Link from 'next/link'

// Header placement
const linkStyle = {
  marginRight: 'auto',
  marginLeft: 'auto'
}

//Display Header with link to each page
const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
    
    <style jsx>{`
      a {
        padding: 20px;
        padding-right: 50px;

        text-transform: uppercase;
        font-weight: 100;
        font-size: large;
        color: white;
      }
    `}</style>
  </div>
)

export default Header

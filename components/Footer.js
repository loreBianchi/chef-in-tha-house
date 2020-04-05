import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Footer = (footerClassName) => (
  <footer className={footerClassName}>
    <div className="footer-nav">
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/about">
        <a style={linkStyle}>About</a>
      </Link>
    </div>
    Made with 🖤 in quarantine
</footer>
);

export default Footer

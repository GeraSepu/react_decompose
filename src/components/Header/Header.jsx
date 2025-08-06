export default function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Site Name</h1>
      <nav className="navigation">
        <a className="navigation__link" href="#about">
          Acerca
        </a>
        <a className="navigation__link" href="#services">
          Servicios
        </a>
        <a className="navigation__link" href="#contact">
          Contacto
        </a>
      </nav>
    </header>
  );
}

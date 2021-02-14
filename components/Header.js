export default function Header() {
  return (
    <header className="header navbar navbar-expand-lg fixed-top" id="header" role="navigation">
      <div className="container">
        <div className="navbar-brand undefined"><a className="text-decoration-none" href="#"><span className="header__logo">87LUX</span></a></div>
        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation"><i className="fa fa-bars hamburger" /><i className="fa fa-times close" /></button>
        <div className="collapse navbar-collapse" id="navigation">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><a className="text-dark nav-link" href="#platforms"><span className="navbar__span">Themes</span></a></li>
            <li className="nav-item"><a className="text-dark nav-link" href="#projects"><span className="navbar__span">Apps</span></a></li>
            <li className="nav-item"><a className="text-dark nav-link" href="#custom"><span className="navbar__span">Assets</span></a></li>
            <li className="nav-item"><a className="text-dark nav-link" href="#footer"><span className="navbar__span">Contact Us</span></a></li>
          </ul>
        </div>
      </div>
    </header>
  );
}
import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";

import './header.css'

const Header = () => (
  <header className="app-header">
    <picture className="app-logo">
      <source src={logoDark} media="(prefers-color-scheme: dark)" />
      <img src={logoLight} alt="New Relic Labs logo" />
    </picture>
    <h1 style={{ marginLeft: '-24px' }}>New Relic Labs Open Source Catalog</h1>
  </header>
);

export default Header
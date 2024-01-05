import "./nav.css";

const Nav = (props) => {
  return (
    <div className="nav-list">
      <NavItem value='catalog' label='Catalog' {...props} />
      <NavItem value='faq' label='FAQ' {...props} />
      <NavItem value='about' label='About Labs' {...props} />
    </div>
  );
};

const NavItem = ({ value, label, click, selected }) => {
  const isSelected = value === selected ? "selected" : "";
  return (
    <span className={`nav-item ${isSelected}`} onClick={() => click(value)} >
      <span className={`nav-item-label ${isSelected}`}>{label}</span>
    </span>
  );
};

export default Nav;

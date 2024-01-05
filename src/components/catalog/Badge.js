import './badge.css'

const Badge = ({ type, children }) => (
  <span className={`badge ${type ? type : "neutral"}`}>{children}</span>
);

export default Badge;

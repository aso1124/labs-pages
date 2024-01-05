import Badge from "./Badge";

const CatalogItem = ({ title, description, topics, team, type, url }) => {
  return (
    <div className="catalog-item card" onClick={() => {window.open(url, '_blank')}}>
      <div className="catalog-item-main">
        <div>
          <div className="catalog-item-header">
            <h4>{title}</h4>
            {team && <Badge type={team}>{team}</Badge>}
            {type && <Badge type={type}>{type}</Badge>}
          </div>
          <div className="catalog-item-desc">{description}</div>
        </div>
        <div className="catalog-item-topics">
          {topics.map((t, idx) => (
            <div key={idx} className="topic-item">
              <Badge>{t}</Badge>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatalogItem;

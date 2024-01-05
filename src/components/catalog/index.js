import CatalogItem from "./CatalogItem";

import "./catalog.css";

const Catalog = ({ loading, total, searchMatches, changeSearchTerm }) => {
  return (
    <div className="catalog">
      <div className="catalog-search card">
        <label className="inline-label">Search Catalog:</label>
        <span className="text-field">
          <input
            onChange={(e) => changeSearchTerm(e.target.value)}
            placeholder="Search by keyword (e.g. java, database, aws, xamarin)"
          />
        </span>
      </div>

      <div className="section card">
        {loading ? (
          <div className="loading">
            <h3 className="loading-header">
              Hold tight, we're loading the repositories
            </h3>
            <div className="dot-pulse"></div>
          </div>
        ) : (
          <>
            <h3 className="section-header">
              Search Results {!loading && `(${total})`}
            </h3>
            {searchMatches.map((r, idx) => <CatalogItem key={idx} {...r} />)}
          </>
        )}
      </div>
    </div>
  );
};

export default Catalog;

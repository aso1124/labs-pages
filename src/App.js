import React, { useEffect, useState } from "react";
import Fuse from "fuse.js";
import Header from "./components/header";
import Nav from "./components/nav";
import Catalog from "./components/catalog";
import FAQ from "./components/faq";
import About from "./components/about";
import getRepositories from "./data/rest-client";
import "./App.css";

const App = () => {
  const [view, setView] = useState("catalog");
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [repos, setRepos] = useState([]);
  const [searchMatches, setSearchMatches] = useState([]);
  let searchIndex;

  useEffect(() => {
    const fetchRepos = async () => {
      const { total, repos: fetchedRepos } = await getRepositories();
      setTotal(total);
      setRepos(fetchedRepos);
      setSearchMatches([].concat(fetchedRepos));
      setLoading(false);
    };
    loading && fetchRepos();
  }, [loading, repos]);

  const changeSearchTerm = (searchTerm) => {
    if (!searchTerm) {
      setSearchMatches(repos);
      setTotal(repos.length);
    } else {
      const matches = searchIndex.search(searchTerm).reduce((acc, m) => {
        acc.push(m.item);
        return acc;
      }, []);
      setSearchMatches(matches);
      setTotal(matches.length);
    }
  };

  if (!loading && !searchIndex) {
    const options = {
      ignoreLocation: true,
      threshold: 0.0,
      keys: ["title", "description", "topics", "type"],
    };
    searchIndex = new Fuse(repos, options);
  }

  return (
    <div className="app-main">
      <Header />
      <div className="app-body">
        <Nav click={setView} selected={view} />
        <div className="app-section">
          {view === "catalog" && <Catalog loading={loading} total={total} searchMatches={searchMatches} changeSearchTerm={changeSearchTerm} />}
          {view === "faq" && <FAQ />}
          {view === "about" && <About />}
        </div>
      </div>
    </div>
  );
};

export default App;

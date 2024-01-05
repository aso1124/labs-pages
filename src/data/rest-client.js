// the search result doesn't including a link for pagination, so we do it the hacky way
const RESULTS_PER_PAGE = 30
const BASE_URL = `https://api.github.com/search/repositories?q=topic:nrlabs`

const searchGitHub = async (pageNum) => {

  const url = pageNum && pageNum > 1 ? BASE_URL + `&page=${pageNum}` : BASE_URL

  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    } 
  };

  try {
    const response = await fetch(url, options);

    if (response.status !== 200) {
      const bodyText = await response.text();
      throw new Error(
        `Error code ${response.status} when connecting to Github. Response: ${bodyText}`
      );
    }

    try {
      const bodyJson = await response.json();
      return bodyJson;
    } catch (e) {
      return new Error("Error parsing JSON from Github server");
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    console.debug(e);
    return e;
  }
};

const loadAllRepositories = async () => {
  const data = await searchGitHub();
  const repos = data.items
  
  // get the total number of results and figure out the total number of pages
  const numPages = Math.ceil(data.total_count / RESULTS_PER_PAGE)
  if (numPages > 1) {
    // we start at 2 because we've already loaded page 1
    for (let i = 2; i <= numPages; i++) {
      console.info('loading page', i)
      const pageData = await searchGitHub(i)
      if (pageData) repos.push(...pageData.items)
    }
  }

  return { total: data.total_count, repos }
}

const parseRepositories =(repos) => {
  return repos.reduce((acc, repo) => {
    const includeRepo = (repo.name && repo.name !== 'nri-flex') && repo.topics.find(t => t === 'emeafet')

    if (includeRepo) {
    acc.push({
      title: repo.name,
      description: repo.description,
      topics: repo.topics,
      url: repo.html_url,
      team: repo.topics.find(r => r === 'nrlabs-viz') ? 'viz' : 'data',
      type: repo.url.includes(`/newrelic/`) ? 'community' : ''
    })
    }
    return acc
  }, [])
}

const getRepositories = async() => {
  const { total, repos: raw } = await loadAllRepositories()
  const repos = parseRepositories(raw)
  return {total, repos}
}

export default getRepositories;

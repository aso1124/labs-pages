export const faq = [
  {
    id: 1,
    question: "What do the viz and data badges mean?",
    answer: [
      "Generically speaking, New Relic Labs creates extensions within two broad categories: UI customizations and data collection.",
      "UI customizations are either standalone Apps that can be deployed to and directly accessed within the New Relic platform, or custom visualizations (aka widgets) that can be included in New Relic dashboards.",
      "Data collection largely focuses on pulling data in from sources not supported OOB by New Relic. This is accomplished through the extension of our language agents and infrastrcuture agents, or through the creation of custom data collectors.",
      "The badge on each repository should help you understand the purpose of the asset according to these broad categories.",
    ],
    links: [
      {
        to: `https://developer.newrelic.com/build-apps`,
        label: "New Relic Apps",
      },
      {
        to: `https://developer.newrelic.com/explore-docs/custom-viz/build-visualization`,
        label: "New Relic Custom Visualizations",
      },
    ],
  },
  {
    id: 2,
    question: "What does the community badge mean?",
    answer: [
      "A subset of New Relic Labs assets are released to our public marketplaces. You can find community viz assets in the Apps and Visualizations section of Add Data, identified by the blue verified checkmark. Apps enabled via the Global Catalog benefit from a one-click deployment process, and automatically receive updates.",
      "You can find community data assets in our Quickstarts Catalog. Data assets released via Quickstarts include installation paths whenever possible.",
      "In addition, the community badge indicates that these receive active maintenance from the Labs team. This means we ensure they are patched, respond to issues and PRs opened in the repository, and continue to add features.",
      "Please note that Labs assets represent only a subset of assets available in these marketplaces."
    ],
    links: [
      {
        to: `https://one.newrelic.com/marketplace?state=5d617d6b-b906-5ee8-8b20-409bac695989`,
        label: "New Relic App Catalog",
      },
      {
        to: `https://newrelic.com/instant-observability`,
        label: "New Relic Quickstarts",
      },
    ],
  },
];

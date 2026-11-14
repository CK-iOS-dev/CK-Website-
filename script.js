  // Edit this list to add, remove or update the articles.
const articles = [
  {
    title: "The Takae Kun",
    category: "Conceptual",
    date: "30 Aug 2026",
    description: "A doctrine for modern masculinity.",
    url: "the-takae-kun.html"
  },
  {
  title: "Predictive History — Jiang Xueqin",
  category: "Critical Commentary",
  date: "2026-08-29",
  description: "A critical examination of Jiang Xueqin's predictions, political analysis, and intellectual framework.",
  url: "predictive-history.html"
  },
  {
    title: "1956-Suez-Crisis",
    category: "History-Politics",
    date: "2026-08-20",
    description: "Debunking the narrative, bringing out the truth.",
    url: "1956-Suez-Crisis.html"
  }, 
  {
  title: "Apple falls, it tastes worse...",
  category: "Conceptual",
  date: "2026-08-17",
  description: "Debunking superstition.",
  url: "apple-falls.html"
  }, 
   {
  title: "A Consensus of Truth",
  category: "Conceptual",
  date: "2026-08-10",
  description: "Debunking narrative.",
  url: "truth-consensus.html"
  }, 
  {
  title: "Buddha as WW2 PM",
  category: "Historical Hypothetical",
  date: "2026-11-14",
  description: "World War 2 reimagined.",
  url: "buddha-ww2-pm.html"
},
  {
  title: "A Friendship like none",
  category: "Conceptual",
  date: "2026-11-14",
  description: "Rare friends",
  url: "a-friendship-like-none.html"
},
  {
  title: "Different levels of Freedom",
  category: "Political Commentary",
  date: "2026-11-14",
  description: "Exposing Freedom",
  url: "different-levels-of-freedom.html"
},
  {
  title: "He benefitted less, He left more.",
  category: "Reflections",
  date: "2026-11-14",
  description: "A truth deeper than realised.",
  url: "he-benefitted-less-he-left-more.html"
},
  {
  title: "Wise people.",
  category: "Reflections",
  date: "2026-11-14",
  description: "Method of figuring out wisdom.",
  url: "wise-people.html"
},
  {
  title: "Blessing, Curse, and Absurdity.",
  category: "Reflections",
  date: "2026-11-14",
  description: "Real orr unreal.",
  url: "blessing-curse-and-absurdity.html"
},
  {
  title: "A child who protested...",
  category: "Reflections",
  date: "2026-11-14",
  description: "",
  url: "his-story-is-about-ideas.html"
},
];

function articleCard(article) {
  const card = document.createElement("article");
  card.className = "article-card";

  const category = document.createElement("span");
  category.className = "category";
  category.textContent = article.category;

  const heading = document.createElement("h3");
  heading.textContent = article.title;

  const description = document.createElement("p");
  description.textContent = article.description;

  const date = document.createElement("span");
  date.className = "date";

  const parsed = new Date(article.date + "T12:00:00");
  date.textContent = Number.isNaN(parsed.getTime())
    ? article.date
    : parsed.toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric"
      });

  card.append(category, heading, description, date);

  if (article.url && article.url !== "#") {
    const link = document.createElement("a");
    link.className = "read-link";
    link.href = article.url;
    link.textContent = "Read article →";
    card.append(link);
  }

  return card;
}

function renderArticles(target, items) {
  if (!target) return;

  target.replaceChildren();

  if (!items.length) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "No articles match your search.";
    target.append(empty);
    return;
  }

  items.forEach(item => target.append(articleCard(item)));
}

// Show the three latest articles on the home page.
renderArticles(
  document.querySelector("#latest-articles"),
  articles.slice(0, 3)
);

// Show and filter all articles on the blog page.
const allTarget = document.querySelector("#all-articles");

if (allTarget) {
  const search = document.querySelector("#article-search");
  const count = document.querySelector("#results-count");

  const update = () => {
    const term = search ? search.value.trim().toLowerCase() : "";

    const filtered = articles.filter(article =>
      [article.title, article.category, article.description]
        .join(" ")
        .toLowerCase()
        .includes(term)
    );

    renderArticles(allTarget, filtered);

    if (count) {
      count.textContent =
        `${filtered.length} article${filtered.length === 1 ? "" : "s"}`;
    }
  };

  if (search) {
    search.addEventListener("input", update);
  }

  update();
}

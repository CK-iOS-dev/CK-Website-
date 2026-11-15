  // Edit this list to add, remove or update the articles.
const articles = [
  {
    title: "The Takae Kun",
    category: "Conceptual",
    date: "30 August 2026",
    description: "A doctrine for modern masculinity.",
    url: "the-takae-kun.html"
  },
  {
  title: "Predictive History — Jiang Xueqin",
  category: "Critical Commentary",
  date: "29 August 2026",
  description: "A critical examination of Jiang Xueqin's predictions, political analysis, and intellectual framework.",
  url: "predictive-history.html"
  },
  {
    title: "1956-Suez-Crisis",
    category: "History-Politics",
    date: "20 August 2026",
    description: "Debunking the narrative, bringing out the truth.",
    url: "1956-Suez-Crisis.html"
  }, 
  {
  title: "Apple falls, it tastes worse...",
  category: "Conceptual",
  date: "17 August 2026",
  description: "Debunking superstition.",
  url: "apple-falls.html"
  }, 
   {
  title: "A Consensus of Truth",
  category: "Conceptual",
  date: "10 August 2026",
  description: "Debunking narrative.",
  url: "truth-consensus.html"
  }, 
  {
  title: "Buddha as WW2 PM",
  category: "Historical Hypothetical",
  date: "10 August 2026",
  description: "World War 2 reimagined.",
  url: "buddha-ww2-pm.html"
},
  {
  title: "A Friendship like none",
  category: "Conceptual",
  date: "06 August 2026",
  description: "Rare friends",
  url: "a-friendship-like-none.html"
},
  {
  title: "Different levels of Freedom",
  category: "Political Commentary",
  date: "30 July 2026",
  description: "Exposing Freedom",
  url: "different-levels-of-freedom.html"
},
  {
  title: "He benefitted less, He left more.",
  category: "Reflections",
  date: "28 July 2026",
  description: "A truth deeper than realised.",
  url: "he-benefitted-less-he-left-more.html"
},
  {
  title: "Wise people.",
  category: "Reflections",
  date: "27 July 2026",
  description: "Method of figuring out wisdom.",
  url: "wise-people.html"
},
  {
  title: "Blessing, Curse, and Absurdity.",
  category: "Reflections",
  date: "24 July 2026",
  description: "Real or unreal.",
  url: "blessing-curse-and-absurdity.html"
},
  {
  title: "A child who protested...",
  category: "Reflections",
  date: "22 July 2026",
  description: "Reality of being a child.",
  url: "his-story-is-about-ideas.html"
}, 
  {
  title: "Not the only theory.",
  category: "Reflections",
  date: "2026-11-15",
  description: "The problem of multiple perspectives.",
  url: "not-the-only-theory.html"
},
  {
  title: "Confusion.",
  category: "Reflections",
  date: "2026-11-15",
  description: "Truth or marketplace?",
  url: "confusion.html"
},
  {
  title: "Those who hunger strike",
  category: "Political Commentary",
  date: "2026-11-15",
  description: "The cost of the benefit.",
  url: "those-who-hunger-strike.html"
},
  {
  title: "Happy Birthday!! Or another ruined day?",
  category: "Reflections",
  date: "2026-11-15",
  description: "Your day or others'?",
  url: "happy-birthday-or-another-ruined-day.html"
},
  {
  title: "The fear of failure.",
  category: "Reflections",
  date: "2026-11-15",
  description: "The cost for success.",
  url: "fear-of-failure.html"
},
  {
  title: "The art of giving up",
  category: "Reflections",
  date: "2026-11-15",
  description: "A challenge to 'Never give up'",
  url: "the-art-of-giving-up.html"
},
  {
  title: "Predictability vs Lies",
  category: "Political Commentary",
  date: "2026-11-15",
  description: "Meet the expectations or lie",
  url: "predictability-vs-lies.html"
},
  {
  title: "A Prince",
  category: "Political Commentary",
  date: "2026-11-15",
  description: "Consent or Coercion?",
  url: "a-prince.html"
},
  {
  title: "Promise vs Delivery",
  category: "Political Commentary",
  date: "2026-11-15",
  description: "Honesty",
  url: "promise-vs-delivery.html"
},
  {
  title: "Lord Mountbatten's role in the independence of India and its unification.",
  category: "Historical Hypothetical",
  date: "2026-11-15",
  description: "The truth of the Steel",
  url: "lord-mountbatten-role-independence-india.html"
},
  {
  title: "Rabindranath Tagore, and the controversy.",
  category: "Historical Evaluation",
  date: "2026-11-15",
  description: "For the Emperor or the Republic?",
  url: "rabindranath-tagore-and-the-controversy.html"
},
  {
  title: "Was Gandhi a mahatma?",
  category: "Historical Hypothetical",
  date: "2026-11-15",
  description: "The truth behind the honorfic",
  url: "was-gandhi-a-mahatma.html"
},
  {
  title: "What happened with Bhagat Singh?",
  category: "Historical Evaluation",
  date: "2026-11-15",
  description: "Beyond the narrative",
  url: "what-happened-with-bhagat-singh.html"
},
  {
  title: "Subhash Chandra Bose evaluated like never before...",
  category: "Historical Hypothetical",
  date: "2026-11-15",
  description: "Netaji or Narrative Ji?",
  url: "subhash-chandra-bose-evaluated.html"
},
  {
  title: "Minimal Clutter",
  category: "Reflections",
  date: "2026-11-15",
  description: "Necessary above unnecessary",
  url: "minimal-clutter.html"
},
  {
  title: "Binary Ethical Evaluation",
  category: "Political Commentary",
  date: "2026-11-15",
  description: "BEE criterion",
  url: "binary-ethical-evaluation.html"
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

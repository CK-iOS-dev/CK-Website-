// Edit this list to add, remove or update the sample articles.
const articles = [
  {title:"The Takae Kun",category:"Conceptual",date:"30 Aug 2026",description:"A doctrine for modern masculinity.",url:"#"},
  {title:"Lessons From Trying Something New",category:"Experiences",date:"2026-11-10",description:"Notes on curiosity, learning and making progress one step at a time.",url:"#"},
  {title:"Useful Resources I Keep Coming Back To",category:"Resources",date:"2026-11-10",description:"A growing collection of tools, ideas and references worth sharing.",url:"#"}
];

function articleCard(article){
  const card=document.createElement("article");
  card.className="article-card";
  const category=document.createElement("span"); category.className="category"; category.textContent=article.category;
  const heading=document.createElement("h3"); heading.textContent=article.title;
  const description=document.createElement("p"); description.textContent=article.description;
  const date=document.createElement("span"); date.className="date";
  const parsed=new Date(article.date+"T12:00:00");
  date.textContent=Number.isNaN(parsed.getTime())?article.date:parsed.toLocaleDateString(undefined,{year:"numeric",month:"short",day:"numeric"});
  card.append(category,heading,description,date);
  if(article.url && article.url!=="#"){
    const link=document.createElement("a"); link.className="read-link"; link.href=article.url; link.textContent="Read article →"; card.append(link);
  }
  return card;
}
function renderArticles(target,items){
  if(!target)return;
  target.replaceChildren();
  if(!items.length){const empty=document.createElement("p");empty.className="empty-state";empty.textContent="No articles match your search.";target.append(empty);return;}
  items.forEach(item=>target.append(articleCard(item)));
}
renderArticles(document.querySelector("#latest-articles"),articles.slice(0,3));
const allTarget=document.querySelector("#all-articles");
if(allTarget){
  const search=document.querySelector("#article-search");
  const count=document.querySelector("#results-count");
  const update=()=>{
    const term=search.value.trim().toLowerCase();
    const filtered=articles.filter(a=>[a.title,a.category,a.description].join(" ").toLowerCase().includes(term));
    renderArticles(allTarget,filtered);
    count.textContent=`${filtered.length} article${filtered.length===1?"":"s"}`;
  };
  search.addEventListener("input",update);update();
}
document.querySelectorAll("[data-year]").forEach(el=>el.textContent=new Date().getFullYear());
const toggle=document.querySelector(".menu-toggle"),nav=document.querySelector(".nav");
if(toggle&&nav){toggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));toggle.setAttribute("aria-label",open?"Close navigation":"Open navigation");});}

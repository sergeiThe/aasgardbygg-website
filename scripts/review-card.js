const reviewsBox = document.querySelector("#reviews-box");

const createReviewCard = ({ author, date, icon, starN, content }) => {
  const card = document.createElement("article");
  card.classList.add("review-card");
  card.innerHTML = `
              <div class="review-header">
                <div>
                  <h4>${author}</h4>
                  <span>${date}</span>
                </div>
                <div class="review-icon">
                  <i class="fa-brands ${icon}"></i>
                </div>
              </div>
              <div class="review-stars">
                 ${Array.from({ length: starN })
                   .map((_) => {
                     return '<i class="fa-solid fa-star"></i>';
                   })
                   .join("")}
              </div>
              <p class="review-content">
                 ${content}
              </p>
`;
  return card;
};

const reviewCards = [
  createReviewCard({
    author: "Kristian S Nordhaug",
    content: `Aasgard Bygg har etterisolert boligen min, inkludert skifte av alle vinduer, ny kledning osv. Godt utført arbeid til avtalt pris. Høy kvalitet på arbeidet, vi er godt fornøyd`,
    date: "Desember 22, 2024",
    icon: "fa-facebook",
    starN: 5,
  }),
  createReviewCard({
    author: "Erlend Strømsvik",
    content: `Vi benyttet oss av Aasgard Bygg AS for både riving av gammelt, endring på vegger og montering av nytt kjøkken. 
Gode på kommunikasjon og oppmøte. Resultatet ble flott!
Det jeg vil legge ekstra vekt på er evnen de hadde til å selv ta initiativ til både foreslå og utføre tilpasninger utover det som vi hadde beskrevet, men som ga et mye bedre utførelse/finish. Der hvor en slik endring ville medføre noe ekstra arbeid, ble dette varslet om og avklart før igangsettelse. `,
    date: "Januar 20, 2020",
    icon: "fa-facebook",
    starN: 5,
  }),
  createReviewCard({
    author: "Beata Beatas",
    content: `Oppussing av 2 etg. Jobben ble utført raskt og effektivt over
                all forventning. God dialog med arbeidsleder under hele
                arbeidsperioden, han er svært kvalitetsbevisst og vil ikke gjøre
                en jobb kunden ikke er fornøyd med. God pris og høy kvalitet!!
                Anbefales 100%.`,
    date: "September 19, 2018",
    icon: "fa-google",
    starN: 5,
  }),
  createReviewCard({
    author: "elisabeth skrondal",
    content: `Nøye og effektiv med arbeidet. Tar alltid telefonen dersom det er noen spørsmål. De utførte renovering på bad og kjøkken og er svært fornøyd med arbeidet deres.`,
    date: "Januar 19, 2021",
    icon: "fa-google",
    starN: 5,
  }),
  createReviewCard({
    author: "Bjørg Bugge Lysø",
    content: `Meget dyktige snekkere, nøyaktige og raske...Sluntrer ikke..anbefales på det sterkeste...og trivelige "gutter"....
`,
    date: "Juni 14, 2018",
    icon: "fa-google",
    starN: 5,
  }),
  createReviewCard({
    author: "Hege Killingberg",
    content: `Veldig fornøyd etter totalrenovering av bad! Anbefales på det sterkeste. Leverer høy kvalitet til en fin pris, er punktlige og ryddige. Veldig lett å kommunisere med!`,
    date: "April 27, 2021",
    icon: "fa-google",
    starN: 5,
  }),
  ,
];

reviewCards.forEach((card) => {
  reviewsBox.appendChild(card);
});

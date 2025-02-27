const grid = document.querySelector("#service-grid");

const createCard = ({ title, img1, img2, icon, content, btnAction }) => {
  const card = document.createElement("article");
  card.classList.add("service-card");
  card.innerHTML = `
              <div class="service-card-fg">
                <img class="service-card-img" src="img/${img1}" />
                <div class="overlay"></div>
                <div class="service-card-content">
                  <div class="service-card-icon">
                    <i class="fa-solid ${icon}"></i>
                  </div>
                  <h3>${title}</h3>
                </div>
              </div>

              <div class="service-card-bg">
                <img class="service-card-img" src="img/${img2}" />
                <div class="overlay"></div>
                <div class="service-card-content">
                  <div class="service-card-icon">
                    <i class="fa-solid ${icon}"></i>
                  </div>
                  <p>${content}</p>
                  ${
                    btnAction
                      ? '<button class="service-card-btn">Mer info</button>'
                      : ""
                  }
                </div>
              </div>
`;
  const btn = card.querySelector(".service-card-btn");
  if (btn) {
    btn.onclick = () => {
      btnAction();
    };
  }
  return card;
};

const cards = [
  createCard({
    title: "Bad",
    img1: "bath1.jpg",
    img2: "bath2.jpg",
    icon: "fa-sink",
    content: "Ønsker du et nytt bad som varer lenge?",
    // btnAction: () => console.log("Bath clicked!"),
  }),
  createCard({
    title: "Kjøkken",
    img1: "kitchen1.jpg",
    img2: "kitchen2.jpg",
    icon: "fa-utensils",
    content: "Det å være på kjøkkenet må være tilfredsdstillende",
    // btnAction: () => console.log("Kitchen clicked!"),
  }),
  createCard({
    title: "Rehabilitering",
    img1: "rehabilitering1.jpg",
    img2: "rehabilitering2.jpg",
    icon: "fa-rotate-right",
    content: "På tide å bygge om lokalene?",
    // btnAction: () => console.log("Kitchen clicked!"),
  }),
  createCard({
    title: "Tak",
    img1: "roof1.jpg",
    img2: "roof2.jpg",
    icon: "fa-house",
    content: "Ønsker du å skifte tak?",
    // btnAction: () => console.log("Kitchen clicked!"),
  }),
  createCard({
    title: "Tilbygg & påbygg",
    img1: "tilbygg1.jpg",
    img2: "tilbygg2.jpg",
    icon: "fa-warehouse",
    content: "Vil du bygge oppover, nedover eller bortover?",
    // btnAction: () => console.log("Kitchen clicked!"),
  }),
  createCard({
    title: "Små prosjekter",
    img1: "proj1.jpg",
    img2: "proj2.jpg",
    icon: "fa-down-left-and-up-right-to-center",
    content: "Ingen prosjekter er for små til oss",
    // btnAction: () => console.log("Kitchen clicked!"),
  }),
];

cards.forEach((card) => {
  grid.appendChild(card);
});

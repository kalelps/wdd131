const temples = [
  {
    templeName: "Arequipa Peru Temple",
    location: "Arequipa, Peru",
    dedicated: "2019, December, 15",
    area: 26969,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/arequipa-peru-temple/arequipa-peru-temple-7186-main.jpg"
  },
  {
    templeName: "Lima Peru Temple",
    location: "Lima, Peru",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/b800f5245ce311fb987aabd6ee6b2230b7c8b04f/full/640%2C/0/default"
  },
  {
    templeName: "Trujillo Peru Temple",
    location: "Trujillo, Peru",
    dedicated: "2015, June, 21",
    area: 34224,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/9943a99ff243f011c0533e3633cf9ecee0829628/full/640%2C/0/default"
  },
  {
    templeName: "Lima Peru Los Olivos Temple",
    location: "Lima, Peru",
    dedicated: "2024, January, 14",
    area: 47123,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/3f3327a93b9f11eeb2f0eeeeac1e45f6554046d6/full/640%2C/0/default"
  },
  {
    templeName: "San Diego California Temple",
    location: "San Diego, California, United States",
    dedicated: "1993, April, 25",
    area: 72000,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/9fc6d53550ed3243fb8eca9ebceb284d4865e7db/full/640%2C/0/default"
  },
  {
    templeName: "Santiago Chile Temple",
    location: "Santiago, Chile",
    dedicated: "1983, September, 15",
    area: 20831,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/b6becb4ca0c60a52ad5dc57a90ec69fe5fe7ec63/full/640%2C/0/default"
  },
  {
    templeName: "Bogotá Colombia Temple",
    location: "Bogotá, Colombia",
    dedicated: "1999, April, 24",
    area: 53500,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/89b209718a7ed41649a497893e240972b7cfd036/full/640%2C/0/default"
  },
  {
    templeName: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41010,
    imageUrl: "images/italia-roma-temple.webp"
  },
  {
    templeName: "La Paz Bolivia Temple",
    location: "La Paz, Bolivia",
    dedicated: "2024, June, 16",
    area: 33000,
    imageUrl: "images/colombia-bogota-temple.webp"
  }
];

const gallery = document.getElementById("gallery");

function displayTemples(templesArray) {
  gallery.innerHTML = "";
  templesArray.forEach(temple => {
    const figure = document.createElement("figure");

    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.templeName;

    const caption = document.createElement("figcaption");
    caption.innerHTML = `
      <strong>${temple.templeName}</strong><br>
      Location: ${temple.location}<br>
      Dedicated: ${temple.dedicated}<br>
      Area: ${temple.area.toLocaleString()} sq ft
    `;

    figure.appendChild(img);
    figure.appendChild(caption);
    gallery.appendChild(figure);
  });
}

displayTemples(temples);

// ==========================

document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

const menuButton = document.getElementById("menu");
const nav = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
  menuButton.textContent = menuButton.textContent === "☰" ? "✖" : "☰";
});

const menuItems = 4;


const header = document.querySelector("header");

const logo = document.createElement("div");
logo.classList.add("logo");
header.appendChild(logo);


const logoMedium = document.createElement("div");
logoMedium.classList.add("logoMedium");
logo.appendChild(logoMedium);

const companyName = document.createElement("div");
companyName.classList.add("companyName");
logo.appendChild(companyName);
companyName.innerHTML = "lumo ventilasjon";

const menu = document.createElement("div");
menu.classList.add("menu");
header.appendChild(menu);

const menuLi = document.createElement("li");
menu.appendChild(menuLi);


for (let i=0;i<menuItems;i++)
{
    const menuUl = document.createElement("ul");
    menuLi.appendChild(menuUl);
}
const ul = document.querySelectorAll("ul");

for (let i=0;i<menuItems-1;i++)
{
    ul[i].classList.add("lr");
}

for (let i=0;i<menuItems;i++)
{
    const anch = document.createElement("a");
    ul[i].appendChild(anch)
}
const anchor = document.querySelectorAll("a");
anchor[0].innerHTML = "hjem";
anchor[0].href = "./index.html";
ul[0].appendChild(anchor[0]);

anchor[1].innerHTML = "ventilasjon";
anchor[1].href = "./ventilasjon.html";
ul[1].appendChild(anchor[1]);

anchor[2].innerHTML = "isolation";
anchor[2].href = "./isolation.html";
ul[2].appendChild(anchor[2]);

anchor[3].innerHTML = "kontakt";
anchor[3].href = "./kontakt.html";
ul[3].appendChild(anchor[3]);

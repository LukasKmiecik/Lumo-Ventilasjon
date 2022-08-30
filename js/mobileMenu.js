const mobile = document.querySelector(".mobile");

const op = document.createElement("div");
op.classList.add("openMenu");
mobile.appendChild(op);

const comN = document.createElement("div");
comN.classList.add("comN");
op.appendChild(comN);
comN.innerHTML = "lumo ventilasjon";

const x = document.createElement("div");
x.classList.add("bx", "bx-x", "bx-sm")
op.appendChild(x);

const bur = document.createElement("div");
bur.classList.add("bx", "bx-menu", "bx-sm");
op.appendChild(bur);

const mu = document.createElement("div");
mu.classList.add("mobMu");
mobile.appendChild(mu);


for (let i=0;i<4;i++)
{
    const mmb = document.createElement("div");
    mmb.classList.add("mmb");
    mu.appendChild(mmb);
}
const mb = document.querySelectorAll(".mmb");

for (let i=0;i<mb.length;i++)
{
    const aa = document.createElement("a");
    aa.classList.add("aa");
    mb[i].appendChild(aa);
}
const anc = document.querySelectorAll(".aa");
anc[0].href = "./index.html";
anc[0].innerHTML = "hjem";
anc[1].href = "./ventilasjon.html";
anc[1].innerHTML = "ventilasjon";
anc[2].href = "./isolation.html";
anc[2].innerHTML = "isolation";
anc[3].href = "./kontakt.html";
anc[3].innerHTML = "kontakt";


bur.addEventListener("click", ()=>{
    bur.style.display = "none";
    x.style.display = "block";
    mu.style.display = "flex";
})


x.addEventListener("click", ()=>{
    bur.style.display = "block";
    x.style.display = "none";
    mu.style.display = "none";
})

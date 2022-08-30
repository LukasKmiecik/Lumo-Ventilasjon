const foot = document.querySelector("footer");

    const footFooter = document.createElement("div");
    footFooter.classList.add("footFooter");
    foot.append(footFooter);
    
    const des = document.createElement("div");
    des.classList.add("des");
    footFooter.appendChild(des);
    des.innerHTML = "© 2021 Lumo Ventilation. All rights reserved. Design by ";

    const nameCom = document.createElement("a");
    nameCom.href = "../index.html";
    nameCom.innerHTML = "lumo nor as";
    des.appendChild(nameCom);
    
    const linkpp = document.createElement("a");
    linkpp.href = "../pp.html";
    linkpp.innerHTML = "Polityka Prywatnosci";
    footFooter.appendChild(linkpp);
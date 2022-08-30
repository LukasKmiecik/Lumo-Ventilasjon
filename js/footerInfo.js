const footer = document.querySelector("footer");

    const infoFooter = document.createElement("div");
    infoFooter.classList.add("infoFooter");
    footer.appendChild(infoFooter);

        const footLogo = document.createElement("div");
        footLogo.classList.add("footLogo");
        infoFooter.appendChild(footLogo);

            const img1 = document.createElement("img");
            img1.src = "./media/picture/ventilation-points-diagram.png";
            footLogo.appendChild(img1);

            const logoAdres = document.createElement("div");
            logoAdres.classList.add("logoAdres");
            footLogo.appendChild(logoAdres);
            
                const lumo = document.createElement("span");
                lumo.classList.add("lumo");
                lumo.innerHTML = "lumo ventilasjon<br>";
                logoAdres.appendChild(lumo);

                const span1 = document.createElement("span");
                span1.innerHTML = "Sjoveien 2D<br>";
                logoAdres.appendChild(span1);

                const span2 = document.createElement("span");
                span2.innerHTML = "4150 Rennesoy";
                logoAdres.appendChild(span2);

        for (let i=0;i<2;i++)
        {
            const as = document.createElement("div");
            as.classList.add("footBox");
            infoFooter.appendChild(as);
        }
        const footBox = document.querySelectorAll(".footBox");
        footBox[1].classList.add("fbe");

            const fbcontact = document.createElement("div");
            fbcontact.classList.add(".fbcontact");
            footBox[0].appendChild(fbcontact);

                const fbti = document.createElement("div");
                fbti.classList.add("fbti");
                fbcontact.appendChild(fbti);
                fbti.innerHTML = "kontakt oss ";

                for (let i=0;i<5;i++)
                {
                    const xx = document.createElement("div");
                    xx.classList.add("fbtxx");
                    fbcontact.appendChild(xx);
                }
                const fbtxx = document.querySelectorAll(".fbtxx");
                
                    const i0 = document.createElement("i");
                    i0.classList.add("bx","bx-buildings","bx-sm");
                    fbtxx[0].appendChild(i0);
                    const s0 = document.createElement("span");
                    fbtxx[0].appendChild(s0);
                    s0.innerHTML = "kontor";

                    const i1 = document.createElement("i");
                    i1.classList.add("bx","bx-phone","bx-sm");
                    fbtxx[1].appendChild(i1);
                    const s1 = document.createElement("span");
                    fbtxx[1].appendChild(s1);
                    s1.innerHTML = "+47 46835651";

                    const i2 = document.createElement("i");
                    i2.classList.add("bx","bx-car","bx-sm");
                    fbtxx[2].appendChild(i2);
                    const s2 = document.createElement("span");
                    fbtxx[2].appendChild(s2);
                    s2.innerHTML = "byggeplase";

                    const i3 = document.createElement("i");
                    i3.classList.add("bx","bx-phone","bx-sm");
                    fbtxx[3].appendChild(i3);
                    const s3 = document.createElement("span");
                    fbtxx[3].appendChild(s3);
                    s3.innerHTML = "+47 92513192";
                    
                    const i4 = document.createElement("i");
                    i4.classList.add("bx","bx-mail-send","bx-sm");
                    const s4 = document.createElement("span");
                    fbtxx[4].appendChild(i4);
                    fbtxx[4].style.textTransform = "none";

                        const ahref = document.createElement("a");
                        ahref.href = "mailto:lumonor.as@gmail.com";
                        ahref.innerHTML = "Lumonor.as@gmail.com";
                        fbtxx[4].appendChild(ahref);

            const fbti1 = document.createElement("div");
            fbti1.classList.add("fbti");
            footBox[1].appendChild(fbti1);
            fbti1.innerHTML = "velkommen";  
            
            for (let i=0;i<7;i++)
                {
                    const xx = document.createElement("div");
                    xx.classList.add("fbtx");
                    footBox[1].appendChild(xx);

                    const d =document.createElement("div");
                    d.classList.add("day");
                    xx.appendChild(d);

                    const h = document.createElement("div");
                    h.classList.add("hou");
                    xx.appendChild(h);
                }
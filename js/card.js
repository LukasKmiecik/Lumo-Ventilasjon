const card = document.querySelectorAll(".materialCards");
const cardBt = document.querySelectorAll(".cardMore");
const cardBack = document.querySelectorAll(".cardBack");
const more = document.querySelectorAll(".cardInfoMore");
const info = document.querySelectorAll(".cardInfo");
const cardSpec = document.querySelectorAll(".cardSpec");
const moreSpec = document.querySelectorAll(".more");


console.log(window.innerWidth);
// open info more
for (let i=0;i<card.length;i++)
{
    cardBt[i].addEventListener("click",()=>{
        card[i].style.width = "300%";
        card[i].style.maxWidth = "300%";
        cardBt[i].style.display = "none";
        cardBack[i].style.display = "block";
        more[i].style.display = "block";
        info[i].style.display = "none";

    
    for (let j=0;j<card.length;j++)
    {
        if(i!=j)
        {
            card[j].style.display = "none";
        }
    }
})
}


//close info more
for (let i=0;i<card.length;i++)
{
    cardBack[i].addEventListener("click",()=>{
        if(window.innerWidth<870)card[i].style.width = "40%";
        else card[i].style.width = "25%";
        card[i].style.maxWidth = "250px";
        cardBt[i].style.display = "block";
        cardBack[i].style.display = "none";
        more[i].style.display = "none";
        info[i].style.display = "block";
    
    for (let j=0;j<card.length;j++)
    {
        if(i!=j)
        {
            card[j].style.display = "flex";
        }
    }
})
}


// open cardSpec
for (let i=0;i<cardSpec.length;i++)
{
    cardSpec[i].addEventListener("click",()=>{
    moreSpec[i].style.display = "block";

    for (let j=0;j<cardSpec.length;j++)
    {
        if(i!=j)
        {
            moreSpec[j].style.display = "none";
        }
    }
})
}

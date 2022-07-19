// Portfolio Item Filter
const filterContainer = document.querySelector(".event-filter"),
      filterBtns = filterContainer.children,
      totalFilterBtn = filterBtns.length,
      portfolioItems = document.querySelectorAll(".event-item"),
      totalPortfolioItem = portfolioItems.length,
      lightboxClose = document.querySelector(".lighbox-close")
      for(let i=0; i < totalFilterBtn; i++){
          filterBtns[i].addEventListener("click",function(){
              filterContainer.querySelector(".active").classList.remove("active");
              this.classList.add("active");
              const filterValue = this.getAttribute("data-filter");
              for ( let k=0; k < totalPortfolioItem; k++ ){
                if(filterValue === portfolioItems[k].getAttribute("data-category")){
                    portfolioItems[k].classList.remove("hide");
                    portfolioItems[k].classList.add("show");
                }
                else{
                    portfolioItems[k].classList.remove("show");
                    portfolioItems[k].classList.add("hide");
                }
                if(filterValue ==="all"){
                    portfolioItems[k].classList.remove("hide");
                    portfolioItems[k].classList.add("show");
                }
              }
            })
        }

// Portfolio Lightbox
const lightbox = document.querySelector(".lightbox"),
      lightboxImg = lightbox.querySelector(".lightbox-img img"),
      lightboxText = lightbox.querySelector(".caption-text"),
      lightboxCounter = lightbox.querySelector(".caption-counter");
let itemIndex=0;

for(let i=0; i < totalPortfolioItem;i++){
    portfolioItems[i].addEventListener("click",function(){
        itemIndex=i;
        changeItem();
        toggleLightbox();
    })
}

function toggleLightbox(){
    lightbox.classList.toggle("open");
}

function nextItem(){

    if(itemIndex === totalPortfolioItem-1){
        itemIndex=0;
   }
    else{
        itemIndex ++
    }
    changeItem();
}

function prevItem(){

    if(itemIndex === 0){
        itemIndex = totalPortfolioItem-1;
   }
    else{
        itemIndex --
    }
    changeItem();
}

function changeItem(){
    imgSrc = portfolioItems[itemIndex].querySelector(".event-img img").getAttribute("src");
    lightboxImg.src = imgSrc;
    lightboxText.innerHTML = portfolioItems[itemIndex].querySelector("h4").innerHTML;
    lightboxCounter.innerHTML = (itemIndex+1) + " of " + totalPortfolioItem;

}

// close lightbox

lightbox.addEventListener("click", function(event){
    if( event.target === lightboxClose || event.target === lightbox ){
       toggleLightbox();
   }
 })

// aside navbar 

const nav = document.querySelector(".nav"),
      navList = document.querySelectorAll("li"),
      totalNavList = navList.length,
      allSection = document.querySelectorAll(".section"),
      TotalSection = allSection.length;

for (let i =0; i < totalNavList; i++){
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function(){
        for(let i =0; i < TotalSection; i++){
            allSection[i].classList.remove("back-section");
        }
        for (let j =0; j < totalNavList; j++){
            if(navList[j].querySelector("a").classList.contains("active")){
                allSection[j].classList.add("back-section");
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);

        if(window.innerWidth < 1200){
            asideSectionTogglerBtn();
        }
    })
}

function showSection(element){
    for(let i =0; i < TotalSection; i++){
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    // console.log(target);
    document.querySelector("#"+target).classList.add("active");
}

/* Navbar Toggle */

const navTogglerBtn = document.querySelector(".nav-toggler"),
      aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", function(){
    asideSectionTogglerBtn();
})

function asideSectionTogglerBtn(){
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for(let i =0; i < TotalSection; i++){
        allSection[i].classList.toggle("open");
    }
}
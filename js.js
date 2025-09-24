window.showNavList = function () {
  let sidebar = document.querySelector(".sideBar");
  if (sidebar) sidebar.classList.add("show");
};

window.hideBar = function () {
  let sidebar = document.querySelector(".sideBar");
  if (sidebar) sidebar.classList.remove("show");
};








let backToTop = document.querySelector(".backToTop");

window.addEventListener("scroll", () =>{
    if(window.scrollY > 400){
        backToTop.classList.add("show");
    }else{
        backToTop.classList.remove("show");
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: "smooth"});
});
let profilemenu =document.getElementById("profilemenu");

function toggleMenu() {
    profilemenu.classList.toggle("open-menu");
}

let sideActivity = document.getElementById("sidebarActivity");
let moreLink = document.getElementById("showMoreLink");

function toggleActivity(){
    sideActivity.classList.toggle("open-activity");

    if(sideActivity.classList.contains("open-activity")){
        moreLink.innerHTML="Show less <b>-</b>";
    }
    else{
        moreLink.innerHTML="Show more <b>+</b>";
    }
}
window.onload=function(){
    var arrow=document.getElementById("arr1");
    arrow.addEventListener("click",seeMore);
    localStorage.clickCounter = 0;

    if(localStorage.clickCounter > 0 ) {

    // document.getElementById("clickable")
    //
    // onclick="document.getElementById('clickable').style.display"

    var page1 =   document.getElementsByClassName("page1");
    var page2 =   document.getElementsByClassName("page2");

    for (var i =0; i < page1.length; i++) {
        page1[i].style.display = "none";
    }
    for (var j =0; j < page2.length; j++) {
        page2[j].style.display = "block";
    }

    }

    function seeMore(){
        var moreVideo=document.getElementById("more_videos");
        moreVideo.style.display="block";
        // var pictures=document.getElementById("pictures");
        // pictures.style.display="block";
        arrow.style.display="none";

    }
    var arrowup=document.getElementById("arr2");
    arrowup.addEventListener("click",seeLess);

    function seeLess(){
        var lessVideo=document.getElementById("more_videos");
        lessVideo.style.display="none";
        // var pictures=document.getElementById("pictures");
        // pictures.style.display="none";
        arrow.style.display="block";
    }

    var arrowDownArticles=document.getElementById("arrDownArticles");
    arrowDownArticles.addEventListener("click",seeMoreArticles);

    function seeMoreArticles(){
        var moreArticles=document.getElementById("third");
        moreArticles.style.display="block";

        arrowDownArticles.style.display="none";
    }
    var arrowUpArticles=document.getElementById("arrUpArticles");
    arrowUpArticles.addEventListener("click",seeLessArticles);

    function seeLessArticles(){
        var lessArticles=document.getElementById("third");
        lessArticles.style.display="none";
        arrowDownArticles.style.display="block";
    }


    function markStar(e){
        var stars = document.getElementsByClassName("star");
        for (var i = 0; i < stars.length ; i++){
            var star = stars[i];
            star.classList.remove("selected");
        }
        this.classList.add("selected");


        console.log("the rating is "+ this.getAttribute("data-rating"))
    }

    var stars = document.getElementsByClassName("star");
    for (var i = 0; i < stars.length ; i++){
        var star = stars[i];
        star.addEventListener("click",markStar);
    }

    var button= document.getElementById("btn");
    button.addEventListener("click",sendStars);

    function sendStars(){
        var grade=document.getElementById("grade");
        grade.style.display="none";
        var thanks=document.getElementById("thanks");
        thanks.style.display="block";

    }

    var heart=document.getElementsByClassName("heart");
    for(var j=0;j<heart.length;j++){
        heart[j].addEventListener("click",like);
    }
    var bookmark=document.getElementsByClassName("bookmark");
    for(var k=0;k<bookmark.length;k++){
        bookmark[k].addEventListener("click",like);
    }


    function like(e){
            this.classList.add("coral");

    }
    function firstclick(){
        localStorage.clickCounter = Number(localStorage.clickCounter)+1;
    }
    // var click1=document.getElementById("clickable");
    document.getElementById("clickable").addEventListener("onclick",firstclick);



};


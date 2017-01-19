window.onload=function(){
    var arrow=document.getElementById("arr1");
    arrow.addEventListener("click",seeMore);

    function seeMore(){
        var moreVideo=document.getElementById("more_videos");
        moreVideo.style.display="block";
        var pictures=document.getElementById("pictures");
        pictures.style.display="block";
        arrow.style.display="none";

    }
    var arrowup=document.getElementById("arr2");
    arrowup.addEventListener("click",seeLess);

    function seeLess(){
        var lessVideo=document.getElementById("more_videos");
        lessVideo.style.display="none";
        var pictures=document.getElementById("pictures");
        pictures.style.display="none";
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
        // for(var i=0;i<stars.length;i++){
        //     stars[i].classList.remove("selected");
        // }
        var grade=document.getElementById("grade");
        grade.style.display="none";
        var thanks=document.getElementById("thanks");
        thanks.style.display="block";

    }



};


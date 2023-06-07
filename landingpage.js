function fun(){
    m=document.getElementsByClassName("first");
    s=document.getElementsByClassName("second");
    m[0].style.transform="translateX(-1600px)"
    m[1].style.transform="translateX(-1600px)"
    m[2].style.transform="translateX(-1600px)"
    m[3].style.transform="translateX(-1600px)"
    s[0].style.transform="translateX(-1600px)"
    s[1].style.transform="translateX(-1600px)"
    s[2].style.transform="translateX(-1600px)"
    s[3].style.transform="translateX(-1600px)"
    m[0].style.transition="3s";
    m[1].style.transition="3s";
    m[2].style.transition="3s";
    m[3].style.transition="3s";
    s[0].style.transition="3s";
    s[1].style.transition="3s";
    s[2].style.transition="3s";
    s[3].style.transition="3s";

}

function rev(){
    m[0].style.transform="translateX(0px)"
    m[1].style.transform="translateX(0px)"
    m[2].style.transform="translateX(0px)"
    m[3].style.transform="translateX(0px)"
    s[0].style.transform="translateX(0px)"
    s[1].style.transform="translateX(0px)"
    s[2].style.transform="translateX(0px)"
    s[3].style.transform="translateX(0px)"
    m[0].style.transition="3s";
    m[1].style.transition="3s";
    m[2].style.transition="3s";
    m[3].style.transition="3s";
    s[0].style.transition="3s";
    s[1].style.transition="3s";
    s[2].style.transition="3s";
    s[3].style.transition="3s";
}

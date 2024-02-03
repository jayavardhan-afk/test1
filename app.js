let btn= document.querySelector(".button");
let body=document.querySelector("body")
let pop1=document.querySelector(".plx")
btn.addEventListener("click",getcolor);

function getcolor(){
    let abc =Math.floor(Math.random() * 16777215);
    let abcd= "#" + abc.toString(16);
    changecolor(abcd);
    pop1.innerText=abcd;
    abcd.onclick = function() {
        document.execCommand("copy");
      }
}

function changecolor(abcd){
    document.querySelector("body").style.backgroundColor=abcd
}


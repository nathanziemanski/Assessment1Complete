 document.getElementById("openbut").addEventListener("click", function(){
    
    document.getElementById("menu").style.left = "0px";
    
});

document.getElementById("closebut").addEventListener("click", function(){
    
    document.getElementById("menu").style.left = "-110px";
    
});


document.getElementById("makeBg").addEventListener("click", function(){
   document.getElementById("bg").style.backgroundImage = document.getElementById("zoom").style.backgroundImage;
    
});

document.getElementById("reset").addEventListener("click", function(){
   document.getElementById("bg").style.backgroundImage = "none";
    
});

document.getElementById("show").addEventListener("click", function(){
   document.getElementById("app1").style.display = "block";
    
});

document.getElementById("hide").addEventListener("click", function(){
   document.getElementById("app1").style.display = "none";
    
});
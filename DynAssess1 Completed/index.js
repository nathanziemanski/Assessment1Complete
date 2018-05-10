var numwidth = 100; 
var numheight = 70;
var numInp = document.getElementById("numInp");
var bg = document.getElementById("bg");
document.getElementById("bg1").addEventListener("click", function(){
    document.getElementById("ch1").style.backgroundImage = "url(imgs/i1.jpg)";
     
     document.getElementById("ch2").style.backgroundImage = "url(imgs/i2.jpg)";
     
     document.getElementById("ch3").style.backgroundImage = "url(imgs/i3.jpg)";
 
});


document.getElementById("bg2").addEventListener("click", function(){
    document.getElementById("ch1").style.backgroundImage = "url(imgs/i4.jpg)";
     
     document.getElementById("ch2").style.backgroundImage = "url(imgs/i5.jpg)";
     
     document.getElementById("ch3").style.backgroundImage = "url(imgs/i6.jpg)";
 
});


document.getElementById("bg3").addEventListener("click", function(){
    document.getElementById("ch1").style.backgroundImage = "url(imgs/i7.jpg)";
     
     document.getElementById("ch2").style.backgroundImage = "url(imgs/i8.jpg)";
     
     document.getElementById("ch3").style.backgroundImage = "url(imgs/i9.jpg)";
 
});

document.getElementById("bg4").addEventListener("click", function(){
    document.getElementById("ch1").style.backgroundImage = "url(imgs/i10.jpg)";
     
     document.getElementById("ch2").style.backgroundImage = "url(imgs/i11.jpg)";
     
     document.getElementById("ch3").style.backgroundImage = "url(imgs/i12.jpg)";
 
});

document.getElementById("ch1").addEventListener("mouseenter", function(){
    
    document.getElementById("zoom").style.backgroundImage = document.getElementById("ch1").style.backgroundImage;
});

document.getElementById("ch2").addEventListener("mouseenter", function(){
    
    document.getElementById("zoom").style.backgroundImage = document.getElementById("ch2").style.backgroundImage;
});

document.getElementById("ch3").addEventListener("mouseenter", function(){
    
    document.getElementById("zoom").style.backgroundImage = document.getElementById("ch3").style.backgroundImage;
});

document.getElementById("zoom").addEventListener("click", function(){
   document.getElementById("zoomcontrols").style.display = "block"; 
    
});

document.getElementById("in").addEventListener("click", function(){
   
    
    if(numwidth <= 91 && numheight <=64){
         numwidth += 10;
    document.getElementById("zoom").style.width = numwidth + "%";
    numheight += 7;
    document.getElementById("zoom").style.height = numheight + "%";
        
    }
});

document.getElementById("out").addEventListener("click", function(){
    
    
    if(numheight >= 11 && numwidth >= 8){
        numwidth -= 10;
    document.getElementById("zoom").style.width = numwidth + "%";
    numheight -= 7;
    document.getElementById("zoom").style.height = numheight + "%";
    }

});

numInp.addEventListener("change", function(){
       if(numInp.value <= 12 && numInp.value >= 1){
	bg.style.backgroundImage = "url(./imgs/i"+numInp.value+".jpg)";
}
    if (numInp.value > 12 && numInp.value < 1){
        alert("doesn’t exist!");
    };
});
	
    


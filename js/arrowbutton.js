document.addEventListener('scroll',()=>{
    if(window.pageYOffset > 500){
      document.getElementById("arrowbutton").style.display = "flex";
      document.getElementById("arrowbutton").style.opacity = "100" 
      document.getElementById("arrowbutton").style.transition= "all 0.9s"
    }else if(window.pageYOffset < 10){
      document.getElementById("arrowbutton").style.display = "none";
      document.getElementById("arrowbutton").style.transition= "all 0.9s"
  
    }
})

function topFunction(){
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}
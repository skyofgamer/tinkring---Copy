
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  

  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  } 
  let noob = screen.width;
let y = "you are "
  function run(){
    if(document.getElementById("zx").value == 0){
      document.getElementById("xz").innerHTML = y + "Weak"
    }
    if(document.getElementById("zx").value == 1){
      document.getElementById("xz").innerHTML = y + "below average"
    }
    if(document.getElementById("zx").value == 2){
      document.getElementById("xz").innerHTML = y + "Average"
    }

    if(document.getElementById("zx").value == 3){
      document.getElementById("xz").innerHTML = `${y}Above Average`
    }
    if(document.getElementById("zx").value == 4){
      document.getElementById("xz").innerHTML = `${y}strong`
    }
    if(document.getElementById("zx").value == 5){
      document.getElementById("xz").innerHTML = y+ "pro"
    }
    if(document.getElementById("zx").value >= 6 ){
      document.getElementById("xz").innerHTML = y+ "Master"
    }
    if(document.getElementById("zx").value >= 1000000 ){
      document.getElementById("xz").innerHTML =  "you are GOD"
      document.getElementById("xz").style.color = ("red")
    }
    else{
      document.getElementById("xz").style.color = ("black")
    }
  }
  if(noob <= 700){
    document.getElementById("xz").style.width = ('200')
  }
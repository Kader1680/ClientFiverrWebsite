// $(document).ready(function(){
//     $(".fancybox").fancybox({
//     openEffect: "none",
//     closeEffect: "none"
//     });
//   $('#myCarousel').carousel({
//        interval: false
//    }); 

   function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  } 
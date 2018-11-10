document.addEventListener("DOMContentLoaded", () => { //start DOMContentLoaded
  console.log("NIEWIERNE PSY RULEZ!!!!");

  $(".buttonJQtoggleMain").click(function(){
         $(".buttonJQtoggleMain").toggleClass("buttonJQtoggleNext");
     });


     $("#flip").on("click", function(){
          let text = $("#flip").text();

          if( text == "down"){
            $("#flip").text("up");
            $("#panel").slideDown("slow");
          }else{
              $("#flip").text("down");
              $("#panel").slideUp("slow");
          }
          console.log(text);
      });
});//end DOMContentLoaded

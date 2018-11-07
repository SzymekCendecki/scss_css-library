document.addEventListener("DOMContentLoaded", () => { //start DOMContentLoaded
  console.log("NIEWIERNE PSY RULEZ!!!!");

  $(".buttonJQtoggleMain").click(function(){
         $(".buttonJQtoggleMain").toggleClass("buttonJQtoggleNext");
     });

$( "#div1" ).change(function(){
        alert("The text has been changed.");
    });

});//end DOMContentLoaded

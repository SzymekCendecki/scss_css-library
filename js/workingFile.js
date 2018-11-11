document.addEventListener("DOMContentLoaded", () => { //start DOMContentLoaded
  console.log("NIEWIERNE PSY RULEZ!!!!");

  $(".buttonJQtoggleMain").click(function(){
         $(".buttonJQtoggleMain").toggleClass("buttonJQtoggleNext");
     });


     $("#panel, #panel2, #panel3").css("display", "none");


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


      $("#flip2").on("click", function(){
           let text2 = $("#flip2").text();

           if( text2 == "down"){
             $("#flip2").text("up");
             $("#panel2").slideDown("slow");
           }else{
               $("#flip2").text("down");
               $("#panel2").slideUp("slow");
           }
           console.log(text2);
       });


       $("#flip3").on("click", function(){
            let text2 = $("#flip3").text();

            if( text2 == "down"){
              $("#flip3").text("up");
              $("#panel3").slideDown("slow");
            }else{
                $("#flip3").text("down");
                $("#panel3").slideUp("slow");
            }
            console.log(text2);
        });
});//end DOMContentLoaded

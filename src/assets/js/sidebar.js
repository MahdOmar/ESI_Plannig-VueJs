$(function(){
    $(".fa-bars").on("click",function(){
        if($("._1side_menu").hasClass('hidden')){
           // $(".hidden").toggle();
            $(".hidden").removeClass("hidden");
            $(".header").removeClass("slider");
            $(".main").removeClass("slider");
            $(".planning").removeClass("sliderpl");
        }
        else{
         //   $("._1side_menu").toggle();
            $("._1side_menu").addClass("hidden");
            $(".header").addClass("slider");
            $(".main").addClass("slider");
            $(".planning").addClass("sliderpl");

        }
       
       



    });

    


});



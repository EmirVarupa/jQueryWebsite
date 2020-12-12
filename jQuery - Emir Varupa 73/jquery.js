$(document).ready(function(){ //Kada je dokument spreman, pokreni sljedeci kod
            $(".jqimg").hover(function(){ //Selektovanje klase .jqimg
                    $(this).animate({"height":"400px"}); //Kada predje kursorom preko slike, podesi height slike na 400px
                }, function(){
                    $(this).animate({"height":"600px"})  //Kada se pomjeri kursor sa slike, podesi height slike na 600px
            });
        
            $(".slika-o-uradjenom").click(function(){ //Kada se klikne na sliku, izvrsi funkciju
                $(".tekst-o-uradjenom").slideToggle("slow"); //sakrij ili otkrij tekst
            });
        });
$(document).ready(function(){
    $("#button").click(function(){
        domtoimage.toBlob(document.getElementById("carta"))
        .then(function(blob){
            window.saveAs(blob, "carta.png");
        });
    });

    $("#carta").css('border', '2px solid #000');                    /* card */
    $("#imagem-carta-container").css('border', '2px solid #000');   /* img-card */
    $("#custo-mana-carta").css('background-color', "#000");         /* mana */
    $("#cor-texto-carta-input").val("#ffffff");                     /* card-collor */
});

/**/

$("#nome-carta-input").on("input", function(){
    $("#nome-carta").html($(this).val());
});
$("#custo-mana-carta-input").on("input", function(){
    $("#custo-mana-carta").html($(this).val());
});
$("#imagem-url-carta-input").on("input", function(){
    $("#img-carta").attr("src", $(this).val());
});
$("#background-url-carta-input").on("input", function(){
    $("#background-carta").attr("src", $(this).val());
});
$("#border-url-carta-input").on("input", function(){
    $("#top-name-config-img").attr("src", $(this).val());
});
$("#descricao-carta-input").on("input", function(){
    $("#descricao-carta").html($(this).val());
});
$("#descricao-carta-input2").on("input", function(){
    $("#descricao-carta2").html($(this).val());
});
$("#atributos-carta-input").on("input", function(){
    $("#atributos-carta").html($(this).val());
});
$("#atributos-carta-input2").on("input", function(){
    $("#atributos-carta2").html($(this).val());
});
$("#textura-carta-input").on('change', function() {
    $("#carta").removeClass();
    $("#carta").addClass("carta "+this.value);
});

$("#cor-carta-input").change(function(){
    //$("#nome-carta").css('background', $(this).val()); custo-mana-carta
    $("#carta").css('border', '2px solid '+$(this).val());
    $("#imagem-carta-container").css('border', '2px solid '+$(this).val());
    $(".config-descricao-carta").css('border', '2px solid '+$(this).val());
    $("#background-carta").css('border', '2px solid '+$(this).val());
    $("#custo-mana-carta").css('background-color', $(this).val());
});
$("#cor-texto-carta-input").change(function(){
    //$("#nome-carta").css('background', $(this).val()); custo-mana-carta
    $("#nome-carta").css('color', $(this).val());
    $("#custo-mana-carta").css('color', $(this).val());
    $("#descricao-carta").css('color', $(this).val());
    $("#atributos-carta").css('color', $(this).val());
    $("#descricao-carta2").css('color', $(this).val());
    $("#atributos-carta2").css('color', $(this).val());
});


//imagem da carta
$('select').change(function() {
    console.log($(this).val())
    var e= $(this).val();

    // Configuração do Background da carta 

    if(e=="4"){
        document.getElementById('upload-backimage-button').style.display='block';
        document.getElementById('background-url-carta-input').style.display='none';
        $("#cor-fundo-carta-input").attr("hidden", true);
    }
    if(e=="5"){
        document.getElementById('upload-backimage-button').style.display='none';
        document.getElementById('background-url-carta-input').style.display='block';
        $("#cor-fundo-carta-input").attr("hidden", true);
    }
    if(e=="6"){
        document.getElementById('upload-backimage-button').style.display='none';
        document.getElementById('background-url-carta-input').style.display='none';
        $("#cor-fundo-carta-input").attr("hidden", true);
    }
    if(e=="7"){
        document.getElementById('upload-backimage-button').style.display='none';
        document.getElementById('background-url-carta-input').style.display='none';
        $("#cor-fundo-carta-input").attr("hidden", false);
    }

    // Configuração da Borda

    if(e=="8"){
        document.getElementById('upload-borderimg-button').style.display='block';
        document.getElementById('border-url-carta-input').style.display='none';
        $("#cor-fundo-carta-input").attr("hidden", true);
    }
    if(e=="9"){
        document.getElementById('upload-borderimg-button').style.display='none';
        document.getElementById('border-url-carta-input').style.display='block';
        $("#cor-fundo-carta-input").attr("hidden", true);
    }
    if(e=="10"){
        document.getElementById('upload-borderimg-button').style.display='none';
        document.getElementById('border-url-carta-input').style.display='none';
        $("#cor-fundo-carta-input").attr("hidden", true);
    }
    if(e=="11"){
        document.getElementById('upload-borderimg-button').style.display='none';
        document.getElementById('border-url-carta-input').style.display='none';
        $("#cor-fundo-carta-input").attr("hidden", true);
        $("#top-name-config-img").attr('style', "opacity: 0");
    }
});






    $("#carta").removeClass();
    $("#carta").addClass("carta "+this.value);

    $("#cor-fundo-carta-input").change(function(){
         $("#carta").css('background-color', $(this).val());
         $('#background-carta')
                        .attr('style', "opacity: 0");
    });









        //Upload direto do computador
        
        $("#upload-backimage-button").click(function(){
            $("#selecao-arquivo").trigger('click');
        });
        
        function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
        
                reader.onload = function (e) {
                    $('#background-carta')
                        .attr('style', "opacity: 1");
                    $('#background-carta')
                        .attr('src', e.target.result);
                    $("#cor-fundo-carta-input").change(function(){
                    $("#carta").css('background-color', 'opacity: 0');
                    });

                };
        
                reader.readAsDataURL(input.files[0]);
            }
        }
      
        $("#upload-img").click(function(){
            $("#selecao-arquivo-img").trigger('click');
        });
        
        function readURL2(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
        
                reader.onload = function (e) {
                    $('#img-carta')
                        .attr('src', e.target.result);
                };
        
                reader.readAsDataURL(input.files[0]);
            }
        }

        $("#upload-borderimg-button").click(function(){
            $("#selecao-arquivo-bord").trigger('click');
        });
        
        function readURL3(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
        
                reader.onload = function (e) {
                    $('#top-name-config-img')
                        .attr('src', e.target.result);
                    $("#top-name-config-img").attr('style', "opacity: 1");
                };
        
                reader.readAsDataURL(input.files[0]);
            }
        }


function logar(){
    var email = document.querySelector('#email');
    var senha = document.querySelector('#pass');

    if(email.value == "jasmine@admin.com" && senha.value == "123" || email.value == "julianne@admin.com" && senha.value == "456"){
        localStorage.setItem("acesso", true);

        window.location.href = "index.html";
       
        
    }else{
        alert("User or password are incorrect");
        
    }
    
}

document.addEventListener('keypress', function(e){
    if(e.key == "Enter"){
        const btn = document.querySelector('#buttonS');
     btn.click();
    }
});


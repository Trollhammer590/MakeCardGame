function irParaSearch(){
    window.location.href = "search.html"
}


document.addEventListener('keypress', function(e){
    if(e.key == "Enter"){
        const btnS = document.querySelector('#btnSearch');
        btnS.click();
    }
})


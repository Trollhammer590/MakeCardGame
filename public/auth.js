
// Criação de conta no MakeCardGame

const btn= document.getElementById("b");

btn.addEventListener("click", function(){

    const form  = document.getElementById('signup-org');
    const auth =  getAuth();

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const email = form.elements['email'].value;
        const password = form.elements['pass'].value;
        console.log("email: ", email);
        console.log("password: ", password);
        console.log("name: ", firebase.name);

        return createUserWithEmailAndPassword(auth, email, password)
		.then((result) =>{
		 alert("Cadastrado!");
		 console.log(result);	
		})
		.catch(e => alert(e.message));

       
    });
});


// Criação de conta com o Google

/*const Google= document.getElementById("google");

Google.addEventListener("click", function(){

  import { GoogleAuthProvider } from "firebase/auth";
  import { getAuth } from "firebase/auth";
  import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

const auth = getAuth();
auth.languageCode = 'en';

provider.setCustomParameters({
    'login_hint': 'user@example.com'
  });



  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
});*/

/*
const Google= document.getElementById("google");

Google.addEventListener("click", function(){
 
  window.alert("Alooooo");

    const provider= new GoogleAuthProvider();
    firebase.auth.signInWithPopup(provider)
    .catch(function(error){
      alert(error.message);
    })
});

function Google(){

  window.alert("1234");
  const email = document.elements['email'].value;
  const password = document.elements['password'].value;

  firebase.auth.signInWithEmailAndPassword(email, password)
  .catch((error) => {
    if(error.code == 'auth/wrong-password' || error.code == 'aut/user-not-found'){
      alert('Invalid Email or Password');
      window.alert("Viix");
      return;
    }
      alert('Unable to login');
      window.alert("xiiV");
  });
}
AXu@K#A&DX7N*/
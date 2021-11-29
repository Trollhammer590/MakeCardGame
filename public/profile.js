const firebaseApp = initializeApp({
  apiKey: "AIzaSyAR61dkpsiGFCQRzCQ4nkAbU0plC-kYslY",
  authDomain: "make-cardgame.firebaseapp.com",
  projectId: "make-cardgame",
  storageBucket: "make-cardgame.appspot.com",
  messagingSenderId: "1016341861949",
  appId: "1:1016341861949:web:c95383455399adf6597c54",
  measurementId: "G-RBP9Q9N1ES"
})

const formInfo = document.getElementById('form-info');
const formInfo = document.getElementById('input-form-info');
const email = document.getElementById('email');
const password = document.getElementById('password');
const nickName = document.getElementById('name'); 
const img = document.getElementById('img-profile'); 

const file={}

const auth = firebase.auth();
auth.onAuthStateChanged(user =>{
  console.log(user);
})

function chooseFile(e){
  file = e.target.files[0];
}

const editInformation = () =>{
  const newNameAndPhoto = {
    newPhotoUrl: img.value,
    newName: nickName.value
  }
  const newEmail = email.value;
  const newPassword = password.value;
}
  const user = auth.currentUser;
  const changeNameAndPhoto = (user, newNameAndPhoto) => {
    const {newPhotoUrl, newName} = newNameAndPhoto;
    user.updateProfile({
      displayName: newName,
      PhotoUrl: newPhotoUrl
    })
    .then(()=> {
      console.log("Profile Updated Sucefully");
    })
    .catch(error =>{
      console.error(error);
    })
  }

/*document.getElementById("salvar").addEventListener("click", function (){
  
});*/
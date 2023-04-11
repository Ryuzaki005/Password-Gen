const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const mdp1El = document.querySelector("#mdp1") ; 
const mdp2El = document.querySelector("#mdp2") ;
const inputEl = document.querySelector("#length-input") ;
const btnGen = document.querySelector("#Generator") ;

btnGen.addEventListener("click", function (){
    // createPassword() ; 
    const password1 = createPassword() ;
    const password2 = createPassword() ;
    
    // displayPassword() ;   
    mdp1El.textContent = password1 ;
    mdp2El.textContent = password2 ;
})

function createPassword() {
    let password = ``
    for (let i = 0 ; i < inputEl.value ; i++) {
        password += characters[Math.floor(Math.random()*characters.length)]
    }
    return password
}

mdp1El.addEventListener("click", function copyButtonContentToClipboard() {
    const mdp1El = document.querySelector("#mdp1") ;
    if (mdp1El.textContent !== "Le texte a été copié") {
        const textToCopy = mdp1El.textContent;
        const input = document.createElement('textarea');
        input.value = textToCopy;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
    
      // Mettre à jour le texte du bouton après la copie
        mdp1El.textContent = "Le texte a été copié" ;
        mdp1El.classList.add('text-copied1');
    } 

   
})

mdp2El.addEventListener("click", function copyButtonContentToClipboard() {
    const mdp2El = document.querySelector("#mdp2") ; 
    if (mdp2El.textContent !== "Le texte a été copié") {
        const textToCopy = mdp2El.textContent;
        const input = document.createElement('textarea');
        input.value = textToCopy;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
        
      // Mettre à jour le texte du bouton après la copie
        mdp2El.textContent = "Le texte a été copié"
        mdp2El.classList.add('text-copied2');
    }

})

// inputEl.value qui sera la longueur du mot de passe
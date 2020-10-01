const form = document.querySelector('.form-quizz');
let tableauResultats = []
const responses = ['c', 'a', 'b', 'a', 'c'];
const emojis = ['✅', '🌟', '👀', '😭', '👎'];
const titreResultat = document.querySelector('.resultats h2');
const noteResultat = document.querySelector('.note');
const aideResultat = document.querySelector('.aide');
const toutesLesQuestions = document.querySelectorAll('.question-block');
let verifTableau = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    for(i = 1 ; i < 6; i++){
        tableauResultats.push(document.querySelector(`input[name="q${i}"]:checked`).value)
    }
    verifFunc(tableauResultats);
    tableauResultats = [];
})

function verifFunc(tabResultats){
    for(let a = 0; a < 5; a++){
        if(tabResultats[a] === responses[a]){
            verifTableau.push(true);
        }else{
            verifTableau.push(false);
        }
    }
afficherResultats(verifTableau);
couleurFonction(verifTableau);
verifTableau = [];
}


//Afficher messages en fonction du nombre de faute
function afficherResultats(tabCheck) {
    nbreFaute = tabCheck.filter(el => el !== true).length;
    
    switch(nbreFaute){
        case 0 :
            titreResultat.innerText = "✅ Bravo, c\'est un sans faute ✅";
            aideResultat.innerText = '';
            noteResultat.innerText = "Nombre de bonne réponse : 5/5";
        break;
        case 1 :
            titreResultat.innerText = " 👀 Il y a une faute 🌟";
            aideResultat.innerText = 'Retentez votre chance pour les questions en rouge';
            noteResultat.innerText = "Nombre de bonne réponse : 4/5";
        break;
        case 2 :
            titreResultat.innerText = "👀 Il y a deux fautes 😭";
            aideResultat.innerText = 'Retentez votre chance pour les questions en rouge';
            noteResultat.innerText = "Nombre de bonne réponse : 3/5";
        break;
        case 3 :
            titreResultat.innerText = " 👀 Il y a trois fautes 😭";
            aideResultat.innerText = 'Retentez votre chance pour les questions en rouge';
            noteResultat.innerText = "Nombre de bonne réponse : 2/5";
        break;
        case 4 :
            titreResultat.innerText = " 👀 Il y a quatre fautes 😭";
            aideResultat.innerText = 'Retentez votre chance pour les questions en rouge';
            noteResultat.innerText = "Nombre de bonne réponse : 1/5";
        break;
        case 5 : 
            titreResultat.innerText = "👀 Il n'y a pas de bonne réponse 😭";
            aideResultat.innerText = 'Retentez votre chance pour les questions en rouge';
            noteResultat.innerText = "Nombre de bonne réponse : 0/5";
        break;
        default : 
        titreResultat.innerText = " 👎 Il y a un problème 👎";
    }
}

//Mettre un background en rouge quand la réponse est fausse et vert quand elle est bonne
function couleurFonction(TabBool){
    for(let j = 0; j < 5; j++){
            if(TabBool[j] === true){
                toutesLesQuestions[j].style.background = "green";
            }else{
                toutesLesQuestions[j].style.background = "red";
                toutesLesQuestions[j].classList.add('echec');

                setTimeout(() =>{
                    toutesLesQuestions[j].classList.remove('echec');
                }, 500)
            }
    }
}

//Remettre le background en blanc quand le joueur retente une réponse
toutesLesQuestions.forEach(item => {
    item.addEventListener('click', () => {
        item.style.background = "white";
    })
})
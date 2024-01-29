
var numCase = 0 
    // instructions Javascript exécutées après chargement du DOM
var parent=document.querySelector(".listAnalogies")
console.log(parent)

// Création des analogies
data.forEach(function(element) {
    console.log(numCase)
    console.log("Si j'étais " + element + " je serais")
    parent.innerHTML = parent.innerHTML + "<section id='analogie"+numCase+"'class ='analogie analogie"+ numCase +"'><h2>Si j'étais " + data[numCase].Question + ",<br> je serais " +data[numCase].Reponse +"</h2> <img src="+ data[numCase].image+"><p>"+ data[numCase].explication + "</p></section>" 
    numCase = numCase + 1 
    }
)
;

let analogies = document.querySelector("#analogies")
let analogiesKey
analogies.addEventListener("keyup", function(event){
   
    analogiesKey = analogies.value
    console.log(analogiesKey)
    return analogiesKey
})

let valeurAnalogies = document.querySelector("#valeurAnalogies")
let valeurKey
valeurAnalogies.addEventListener("keyup",function(event){
   
    valeurKey = valeurAnalogies.value
    console.log(valeurKey)
    return valeurKey
})
let explicationAnalogie = document.querySelector("#explicationAnalogies")
let explicationKey
explicationAnalogie.addEventListener("keyup",function(event){
   
    explicationKey = explicationAnalogie.value
    console.log(explicationKey)
    return explicationKey
})

let imageAnalogie = document.querySelector("#imageAnalogies")
let imageKey
imageAnalogie.addEventListener("keyup",function(event){
   
    imageKey = imageAnalogie.value
    console.log(imageKey)
    return imageKey
})


// Fenêtre modale des mentions légales
var afficheimage = document.querySelector(".Mentions")
afficheimage.addEventListener("click",function(event){
    document.querySelector(".popup-invisible").classList.add('popup-visible')
    document.querySelector(".popup-invisible").classList.remove('popup-invisible')
})


var cachefenetre = document.querySelector(".cache-fenetre")
.addEventListener("click",function(event){
    
    document.querySelector(".popup").classList.add('popup-invisible')
    document.querySelector("popup").classList.remove('popup-visible')
})


// Analogies des internautes
let formulaireAnalogie = document.querySelector(".analogiesFormulaire")
envoyerForm = document.querySelector("#submit")
envoyerForm.addEventListener("click", function(event){
    event.preventDefault()
    formulaireAnalogie.innerHTML = formulaireAnalogie.innerHTML + "<section class ='analogie analogie"+numCase+"'><h2>Si j'étais " + analogiesKey + ", je serais <span class='rouge'>"+valeurKey+"</span></h2><img src=" + imageKey + "> <p>" + explicationKey + "</p></section>" 

})


// Envoi du formulaire
let urlVisitee = "https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=justine.thebault&courriel=philippe.gambette@u-pem.fr&message=Si j'étais "+analogiesKey+ "je serais" +valeurKey+"explication:"+explicationKey+"lien image :"+imageKey 
let submit=document.querySelector("#submit")
submit.addEventListener("click", function(event){
    fetch(urlVisitee).then(function(response){
        response.json().then(function(data){
            console.log("Réponse : ")
            console.log(data);
        })
    }) 
})




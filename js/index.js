const imgCanvas = document.getElementById("canvas");
const ctx = imgCanvas.getContext("2d");
const traitsList = document.querySelector(".traits-list"); 
const fur = document.getElementById("furTrait");
const backgroundColor = document.getElementById("backgroundTrait");
const clothes = document.getElementById("clothesTrait");
const finger = document.getElementById("fingerTrait");
const hold = document.getElementById("holdTrait");
const nails = document.getElementById("nailsTrait");
const wrist = document.getElementById("wristTrait");


async function getTraits(){
    const res = await fetch("/JSON/traits.json");
    const data = await res.json();

    data.forEach((traits)  => {

// POSIBILIDAD DE REESCRIBIR EL CÓDIGO CON UN INNER Y FOR PARA LOS DISTINTOS IDS

        let trait = traits.trait;
        let itemTrait = document.createElement("li");
        trait = trait.charAt(0).toUpperCase() + trait.slice(1);
        itemTrait.innerText = trait;
        itemTrait.classList.add('traits');
        traitsList.append(itemTrait);
    });



}

getTraits();


addEventListener
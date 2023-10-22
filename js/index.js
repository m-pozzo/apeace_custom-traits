const theCanvas = new fabric.Canvas("canvas");
const ctx = theCanvas.getContext("2d");
const traitsList = document.querySelector(".traits_list");
const createBtn = document.getElementById("btnCreate")
const listContainer = document.querySelector(".list_container");
const variantsContainer = document.getElementById("variants");
const traitsContainer = document.querySelector(".traits_container")
const backgroundColor = document.getElementById("optionsBg");
const fur = document.getElementById("optionsFur");
const clothes = document.getElementById("optionsClothes");
const finger = document.getElementById("optionsFinger");
const holding = document.getElementById("optionsHolding");
const nails = document.getElementById("optionsNails");
const wrist = document.getElementById("optionsWrist");

async function getTraits() {
    try {
        const response = await fetch("../json/traits.json");
        const traits = await response.json();

        traits.forEach(carc => {

            const trait = carc.trait;
            const imagen = carc.imagen;

            for (const color in imagen) {
                const urlImg = imagen[color];
                const option = document.createElement('img');
                option.classList.add('imgOption');
                option.src = urlImg;
                option.classList.add('option');
                if (trait === "background") {
                    backgroundColor.append(option);
                } else if (trait === "fur") {
                    fur.append(option);
                    
                } else if (trait === "hold") {
                    holding.append(option);
                } else if (trait === "clothes") {
                    clothes.append(option);
                } else if (trait === "finger") {
                    finger.append(option);
                } else if (trait === "nails") {
                    nails.append(option);
                } else {
                    wrist.append(option);
                }
                option.addEventListener('click', () => {
                    fabric.Image.fromURL(urlImg, function(oImg) {
                        oImg.set({
                            left: 200,
                            top: 0,
                            angle: 90,
                            opacity: 1.0
                          });
                        theCanvas.add(oImg);
                      });
                });
            }
        });
    }
    catch (err) {
        console.log('something goes wrong:', err)
    }

}

function active() {
    $('ul a:first').addClass('active');
    $('.traits_container').hide();
    $('.traits_container:first').show();

    $('ul.traits_list a').click(function () {
        $('ul.traits_list a').removeClass('active');
        $(this).addClass('active');
        $('.options_container .traits_container').hide();

        let option = $(this).attr('href');
        $(option).show();
        return false;
    });
}
active();
getTraits();



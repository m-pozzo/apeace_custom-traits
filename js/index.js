const imgCanvas = document.getElementById("canvas");
const ctx = imgCanvas.getContext("2d");
const traitsList = document.querySelector(".traits_list");
const listContainer = document.querySelector(".list_container");
const variantsContainer = document.getElementById("variants");
const traitsContainer = document.querySelector(".traits_container")
const fur = document.getElementById("furTrait");
const backgroundColor = document.getElementById("backgroundTrait");
const clothes = document.getElementById("clothesTrait");
const finger = document.getElementById("fingerTrait");
const hold = document.getElementById("holdTrait");
const nails = document.getElementById("nailsTrait");
const wrist = document.getElementById("wristTrait");

async function getTraits() {
    try {
        const response = await fetch("/JSON/traits.json");
        const traits = await response.json();

        traits.forEach(carc => {

            const trait = carc.trait;
            const imagen = carc.imagen;

            for (const color in imagen) {
                const urlImg = imagen[color];
                const option = document.createElement('div');
                option.innerHTML = `
                <img src="${urlImg}" style="width:70px; height: 70px;" />
                `;
                variantsContainer.append(option);
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



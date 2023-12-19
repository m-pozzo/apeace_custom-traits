const lienzo = document.createElement("canvas");
const ctx = lienzo.getContext("2d");
const widthBg = "100%";
const heightImg = "100%";
const widthAll = "80%";
const defaultBg = document.querySelector(".defaultBg");
const defaultFur = document.querySelector(".defaultFur");
const apeace = document.querySelector(".custom");
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
const defaultImg = document.querySelector(".delete");
const traitsData = [
    {
        trait: "background",
        imagen: {
            black: "../img/background/black.jpg",
            blue: "../img/background/blue.jpg",
            orange: "../img/background/orange.jpg"
        }
    },
    {
        trait: "fur",
        imagen: {
            black: "../img/fur/Black.png",
            blue: "../img/fur/Blue.png",
            white: "../img/fur/White.png"
        }
    },
    {
        trait: "clothes",
        imagen: {
            admiralsCoat: "../img/clothing/admirals-coat.png",
            blackHoles: "../img/clothing/black-holes.png",
            leatherJacket: "../img/clothing/leather-jacket.png"
        }
    },
    {
        trait: "finger",
        imagen: {
            boltRing: "../img/finger/bolt-ring.png",
            goldRing: "../img/finger/gold-ring.png",
            woodRing: "../img/finger/wood-ring.png"
        }
    },
    {
        trait: "hold",
        imagen: {
            aceCard: "../img/hold/ace-card.png",
            banana: "../img/hold/banana.png",
            fourLeafClover: "../img/hold/four-leaf-clover.png"
        }
    },
    {
        trait: "nails",
        imagen: {
            black: "../img/nails/black.png",
            hippie: "../img/nails/hippie.png",
            peace: "../img/nails/peace.png"
        }
    },
    {
        trait: "wrist",
        imagen: {
            chain: "../img/wrist/chain.png",
            gothicBracelet: "../img/wrist/gothic-bracelet.png",
            watch: "../img/wrist/watch.png"
        }
    }
];
let array = [];

function getTraits() {
        traitsData.forEach(carc => {

            const trait = carc.trait;
            const imagen = carc.imagen;

            for (i = 0; i < 1; i++) {
                const customImg = document.createElement('img');
                customImg.id = trait;
                customImg.classList.add('delete');
                customImg.style.width = widthAll;
                customImg.style.height = heightImg;
                customImg.style.position = "absolute";
                customImg.style.display = "none"
                apeace.append(customImg);

                function zeroRadius(){
                    array.forEach((bg)=>{
                        bg.style.borderRadius = "0px";      
                    });
                }

                for (const color in imagen) {
                    const urlImg = imagen[color];
                    const option = document.createElement('img');
                    option.classList.add('imgOption');
                    option.src = urlImg;
                    option.classList.add('option');

                    function insertTrait(width, height, z, trait) {
                        customImg.classList.add('apeace_img');
                        customImg.src = urlImg;
                        customImg.style.width = width;
                        customImg.style.height = height;
                        customImg.style.zIndex = z;
                        customImg.style.display = "block";
                        if (customImg.id == trait) {
                            customImg.innerHTML = ``;
                        }
                    }
                    function deleteTrait(trait) {
                        const deleteBtn = document.createElement("img");
                        deleteBtn.src = "../img/deleteIcon.png";
                        deleteBtn.style.cursor = "pointer";
                        trait.childElementCount >= 3 ? trait.append(deleteBtn) : undefined;
                        deleteBtn.addEventListener('click', () => {
                            customImg.style.display = "none";
                            defaultImg.style.display = "none";
                        });
                    }
                    if (trait === "background") {
                        option.addEventListener('click', () => {
                            insertTrait(widthBg, heightImg, "3", "background");
                            array.push(customImg);
                            apeace.removeChild(defaultBg);
                        });
                        backgroundColor.append(option);
                        deleteTrait(backgroundColor);
                    } else if (trait === "fur") {
                        option.addEventListener('click', () => {
                            insertTrait(widthAll, heightImg, "4", "fur");
                            customImg.classList.add('fur');
                            apeace.removeChild(defaultFur);
                        });
                        fur.append(option);
                        deleteTrait(fur);
                    } else if (trait === "nails") {
                        option.addEventListener('click', () => {
                            insertTrait(widthAll, heightImg, "5", "nails");
                            customImg.classList.add('fur');
                        });
                        nails.append(option);
                        deleteTrait(nails);
                    } else if (trait === "clothes") {
                        option.addEventListener('click', () => {
                            insertTrait(widthAll, heightImg, "10", "clothes");
                            customImg.classList.add('fur');
                        });
                        clothes.append(option);
                        deleteTrait(clothes);
                    } else if (trait === "finger") {
                        option.addEventListener('click', () => {
                            insertTrait(widthAll, heightImg, "15", "finger");
                            customImg.classList.add('fur');
                        });
                        finger.append(option);
                        deleteTrait(finger);
                    } else if (trait === "hold") {
                        option.addEventListener('click', () => {
                            insertTrait(widthAll, heightImg, "20", "hold");
                            customImg.classList.add('fur');
                        });
                        holding.append(option);
                        deleteTrait(holding);
                    } else {
                        option.addEventListener('click', () => {
                            insertTrait(widthAll, heightImg, "25", "wrist");
                            customImg.classList.add('fur');
                        });
                        wrist.append(option);
                        deleteTrait(wrist);
                    }
                }
                createBtn.onclick = () => {
                    zeroRadius();
                    apeace.style.width = "1100px";
                    apeace.style.height = "1000px";
                    html2canvas(apeace)
                        .then(function (canvas) {
                            const imgData = canvas.toDataURL("image/png");
                            const a = document.createElement('a');
                            a.download = "yourApeace.png";
                            a.href = imgData;
                            a.click();
                            Toastify({
                                text: "¡Created succesfully!",
                                duration: 10000,
                                style: {
                                    background: "linear-gradient(to right, #ef972c, #ef972c)",
                                }
                            }).showToast();
                            setTimeout(() => {
                                location.reload();
                            }, 150);
                        })
                        .catch((error) => {
                            console.error("Failed to download the Apeace.", error);
                        })
                }
            }
        });
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


getTraits();
active();


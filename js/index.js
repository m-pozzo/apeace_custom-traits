const theCanvas = new fabric.Canvas("canvas");
const ctx = theCanvas.getContext("2d");
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
                    option.addEventListener('click', () => {
                        var imgInstance = new fabric.Image(option, {
                            left: 300,
                            top: 0,
                            angle: 90,
                            opacity: 1.0,
                            overlayImage: 1
                        });
                        imgInstance.selectable = false;
                        theCanvas.add(imgInstance);
                    });
                    backgroundColor.append(option);
                } else if (trait === "fur") {
                    option.addEventListener('click', () => {
                        theCanvas.forEachObject((obj) => {
                            if (obj.trait === "fur") {
                                theCanvas.remove(obj);
                            }
                        });
                        var imgInstance = new fabric.Image(option, {
                            left: 70,
                            top: 0,
                            angle: 0,
                            opacity: 1.0,
                            width: 200,
                            height: 188,
                            overlayImage: 20,
                            trait: "fur"
                        });
                        imgInstance.selectable = false;
                        theCanvas.add(imgInstance);
                    });
                    fur.append(option);
                } else if (trait === "nails") {
                    option.addEventListener('click', () => {
                        theCanvas.forEachObject((obj) => {
                            if (obj.trait === "nails") {
                                theCanvas.remove(obj);
                            }
                        });
                        var imgInstance = new fabric.Image(option, {
                            left: 74,
                            top: 5,
                            angle: 0,
                            opacity: 1.0,
                            width: 160,
                            height: 160,
                            overlayImage: 30,
                            trait: "nails"
                        });
                        imgInstance.selectable = false;
                        theCanvas.add(imgInstance);
                    });
                    nails.append(option);
                } else if (trait === "clothes") {
                    option.addEventListener('click', () => {
                        theCanvas.forEachObject((obj) => {
                            if (obj.trait === "clothes") {
                                theCanvas.remove(obj);
                            }
                        });
                        var imgInstance = new fabric.Image(option, {
                            left: 55,
                            top: -30,
                            angle: 0,
                            opacity: 1.0,
                            width: 188,
                            height: 188,
                            overlayImage: 40,
                            trait: "clothes"
                        });
                        imgInstance.selectable = false;
                        theCanvas.add(imgInstance);
                    });
                    clothes.append(option);
                } else if (trait === "finger") {
                    option.addEventListener('click', () => {
                        if (color == "woodRing") {
                            theCanvas.forEachObject((obj) => {
                                if (obj.trait === "finger") {
                                    theCanvas.remove(obj);
                                }
                            });
                            var imgInstance = new fabric.Image(option, {
                                left: 55,
                                top: -12,
                                angle: 0,
                                opacity: 1.0,
                                width: 155,
                                height: 155,
                                overlayImage: 50,
                                trait: "finger"
                            });
                            imgInstance.selectable = false;
                            theCanvas.add(imgInstance);
                        } else if (color == "goldRing") {
                            theCanvas.forEachObject((obj) => {
                                if (obj.trait === "finger") {
                                    theCanvas.remove(obj);
                                }
                            });
                            var imgInstance = new fabric.Image(option, {
                                left: 68,
                                top: -4,
                                angle: 0,
                                opacity: 1.0,
                                width: 155,
                                height: 155,
                                overlayImage: 50,
                                trait: "finger"
                            });
                            imgInstance.selectable = false;
                            theCanvas.add(imgInstance);
                        } else {
                            theCanvas.forEachObject((obj) => {
                                if (obj.trait === "finger") {
                                    theCanvas.remove(obj);
                                }
                            });
                            var imgInstance = new fabric.Image(option, {
                                left: 80,
                                top: 3,
                                angle: 0,
                                opacity: 1.0,
                                width: 155,
                                height: 155,
                                overlayImage: 50,
                                trait: "finger"
                            });
                            imgInstance.selectable = false;
                            theCanvas.add(imgInstance);
                        }

                    });
                    finger.append(option);
                } else if (trait === "hold") {
                    option.addEventListener('click', () => {
                        if (color == "aceCard") {
                            theCanvas.forEachObject((obj) => {
                                if (obj.trait === "hold") {
                                    theCanvas.remove(obj);
                                }
                            });
                            var imgInstance = new fabric.Image(option, {
                                left: 77,
                                top: 7,
                                angle: 0,
                                opacity: 1.0,
                                width: 150,
                                height: 150,
                                overlayImage: 60,
                                trait: "hold"
                            });
                            imgInstance.selectable = false;
                            theCanvas.add(imgInstance);
                        } else if (color == "banana") {
                            theCanvas.forEachObject((obj) => {
                                if (obj.trait === "hold") {
                                    theCanvas.remove(obj);
                                }
                            });
                            var imgInstance = new fabric.Image(option, {
                                left: 75,
                                top: 5,
                                angle: 0,
                                opacity: 1.0,
                                width: 150,
                                height: 150,
                                overlayImage: 60,
                                trait: "hold"
                            });
                            imgInstance.selectable = false;
                            theCanvas.add(imgInstance);
                        } else {
                            theCanvas.forEachObject((obj) => {
                                if (obj.trait === "hold") {
                                    theCanvas.remove(obj);
                                }
                            });
                            var imgInstance = new fabric.Image(option, {
                                left: 115,
                                top: -13,
                                angle: 10,
                                opacity: 1.0,
                                width: 150,
                                height: 150,
                                overlayImage: 60,
                                trait: "hold"
                            });
                            imgInstance.selectable = false;
                            theCanvas.add(imgInstance);
                        }
                    });
                    holding.append(option);
                } else {
                    option.addEventListener('click', () => {
                        theCanvas.forEachObject((obj) => {
                            if (obj.trait === "wrist") {
                                theCanvas.remove(obj);
                            }
                        });
                        var imgInstance = new fabric.Image(option, {
                            left: 73,
                            top: 2,
                            angle: 0,
                            opacity: 1.0,
                            width: 155,
                            height: 155,
                            overlayImage: 70,
                            trait: "wrist"
                        });
                        imgInstance.selectable = false;
                        theCanvas.add(imgInstance);
                    });
                    wrist.append(option);
                }
                createBtn.onclick = () => {
                    const scaleFactor = 2;

                    const dataURL = theCanvas.toDataURL({
                    format: "png",
                    multiplier: scaleFactor     
                    });
                    const a = document.createElement('a');
                    a.download = "yourApeace";
                    a.href = dataURL;
                    a.click();
                    Toastify({
                        text: "¡Created succesfully!\nReload the website",
                        duration: 15000,
                        style: {
                            background: "linear-gradient(to right, #ef972c, #ef972c)",
                        }
                    }).showToast();
                }
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



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
                        var imgInstance = new fabric.Image(option, {
                            left: 70,
                            top: 0,
                            angle: 0,
                            opacity: 1.0,
                            width: 188,
                            height: 188,
                            overlayImage: 20

                        });
                        imgInstance.selectable = false;
                        theCanvas.add(imgInstance);
                    });
                    fur.append(option);
                } else if (trait === "nails") {
                    option.addEventListener('click', () => {
                        var imgInstance = new fabric.Image(option, {
                            left: 74,
                            top: 5,
                            angle: 0,
                            opacity: 1.0,
                            width: 160,
                            height: 160,
                            overlayImage: 30
                        });
                        imgInstance.selectable = false;
                        theCanvas.add(imgInstance);
                    });
                    holding.append(option);
                } else if (trait === "clothes") {
                    option.addEventListener('click', () => {
                        var imgInstance = new fabric.Image(option, {
                            left: 55,
                            top: -30,
                            angle: 0,
                            opacity: 1.0,
                            width: 188,
                            height: 188,
                            overlayImage: 40
                        });
                        imgInstance.selectable = false;
                        theCanvas.remove(imgInstance);
                        theCanvas.add(imgInstance);
                    });
                    clothes.append(option);
                } else if (trait === "finger") {
                    option.addEventListener('click', () => {
                        if (color == "woodRing") {
                            var imgInstance = new fabric.Image(option, {
                                left: 55,
                                top: -12,
                                angle: 0,
                                opacity: 1.0,
                                width: 155,
                                height: 155,
                                overlayImage: 50
                            });
                            imgInstance.selectable = false;
                            theCanvas.add(imgInstance);
                        } else if (color == "goldRing") {
                            var imgInstance = new fabric.Image(option, {
                                left: 65,
                                top: -12,
                                angle: 0,
                                opacity: 1.0,
                                width: 155,
                                height: 155,
                                overlayImage: 50
                            });
                            imgInstance.selectable = false;
                            theCanvas.add(imgInstance);
                        } else {
                            var imgInstance = new fabric.Image(option, {
                                left: 80,
                                top: 3,
                                angle: 0,
                                opacity: 1.0,
                                width: 155,
                                height: 155,
                                overlayImage: 50
                            });
                            imgInstance.selectable = false;
                            theCanvas.add(imgInstance);
                        }

                    });
                    finger.append(option);
                } else if (trait === "hold") {
                    option.addEventListener('click', () => {
                        if (color == "aceCard") {
                            var imgInstance = new fabric.Image(option, {
                                left: 77,
                                top: 7,
                                angle: 0,
                                opacity: 1.0,
                                width: 150,
                                height: 150,
                                overlayImage: 60
                            });
                            imgInstance.selectable = false;
                            theCanvas.add(imgInstance);
                        } else if (color == "banana") {
                            var imgInstance = new fabric.Image(option, {
                                left: 75,
                                top: 5,
                                angle: 0,
                                opacity: 1.0,
                                width: 150,
                                height: 150,
                                overlayImage: 60
                            });
                            imgInstance.selectable = false;
                            theCanvas.add(imgInstance);
                        } else {
                            var imgInstance = new fabric.Image(option, {
                                left: 115,
                                top: -13,
                                angle: 10,
                                opacity: 1.0,
                                width: 150,
                                height: 150,
                                overlayImage: 60
                            });
                            imgInstance.selectable = false;
                            theCanvas.add(imgInstance);
                        }
                    });
                    nails.append(option);
                } else {
                    option.addEventListener('click', () => {
                        var imgInstance = new fabric.Image(option, {
                            left: 73,
                            top: 2,
                            angle: 0,
                            opacity: 1.0,
                            width: 155,
                            height: 155,
                            overlayImage: 70
                        });
                        imgInstance.selectable = false;
                        theCanvas.add(imgInstance);
                    });
                    wrist.append(option);
                }
                console.log(color);
                createBtn.onclick = () => {
                    const dataURL = theCanvas.toDataURL("image/png");
                    const a = document.createElement('a');
                    a.download = "customApeace";
                    a.href = dataURL;
                    a.click();
                    Toastify({
                        text: "Created succesfully!",
                        style: {
                          background: "linear-gradient(to right, #ef972c, #ef972c)",
                        }
                      }).showToast();
                }
                // agregar cartel de que fue un exito la descarga y apretar f5 
                //para recargar pagina
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



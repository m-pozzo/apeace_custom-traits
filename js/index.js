document.addEventListener("DOMContentLoaded", () => {
    const widthBg = "100%";
    const heightImg = "100%";
    const widthAll = "100%";
    const defaultBg = document.querySelector(".defaultBg");
    const defaultFur = document.querySelector(".defaultFur");
    const apeace = document.querySelector(".custom");
    const createBtn = document.getElementById("btnCreate")
    const backgroundColor = document.getElementById("optionsBg");
    const fur = document.getElementById("optionsFur");
    const clothes = document.getElementById("optionsClothes");
    const finger = document.getElementById("optionsFinger");
    const holding = document.getElementById("optionsHolding");
    const nails = document.getElementById("optionsNails");
    const wrist = document.getElementById("optionsWrist");
    const firstCont = document.getElementById("firstContainer");
    // const secondCont = document.getElementById("secondContainer");
    const thirdCont = document.getElementById("thirdContainer");
    let arrayBg = [];

    async function getTraits() {
        try {
            const response = await fetch('./JSON/traits.json');
            const traits = await response.json()
            traits.forEach(carc => {

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
                    apeace.appendChild(customImg);

                    function zeroRadius() {
                        if (arrayBg.length === 0) {
                            defaultBg.style.borderRadius = "0px";
                            console.log("se modificó");
                        } else {
                            arrayBg.forEach((bg) => {
                                bg.style.borderRadius = "0px";
                            });
                        }
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
                        function deleteTrait(type) {
                            if (urlImg === `../img/${type}/x.png`) {
                                option.addEventListener('click', () => {
                                    customImg.style.display = "none";
                                });
                                option.classList.add('btn-delete');
                            }
                        }
                        if (trait === "background") {
                            option.addEventListener('click', () => {
                                insertTrait(widthBg, heightImg, "3", "background");
                                arrayBg.push(customImg);
                                apeace.removeChild(defaultBg);
                            });
                            backgroundColor.append(option);
                        } else if (trait === "fur") {
                            option.addEventListener('click', () => {
                                insertTrait(widthAll, heightImg, "4", "fur");
                                apeace.removeChild(defaultFur);
                            });
                            fur.append(option);
                        } else if (trait === "nails") {
                            option.addEventListener('click', () => {
                                insertTrait(widthAll, heightImg, "5", "nails");
                            });
                            nails.append(option);
                            deleteTrait("nails");
                        } else if (trait === "clothes") {
                            option.addEventListener('click', () => {
                                insertTrait(widthAll, heightImg, "10", "clothes");
                            });
                            clothes.append(option);
                            deleteTrait("clothing");
                        } else if (trait === "finger") {
                            option.addEventListener('click', () => {
                                insertTrait(widthAll, heightImg, "15", "finger");
                            });
                            finger.append(option);
                            deleteTrait("finger");
                        } else if (trait === "hold") {
                            option.addEventListener('click', () => {
                                insertTrait(widthAll, heightImg, "20", "hold");
                            });
                            holding.append(option);
                            deleteTrait("hold");
                        } else {
                            option.addEventListener('click', () => {
                                insertTrait(widthAll, heightImg, "25", "wrist");
                            });
                            wrist.append(option);
                            deleteTrait("wrist");
                        }
                    }
                    createBtn.onclick = () => {
                        const swalWithBootstrapButtons = Swal.mixin({
                            customClass: {
                                confirmButton: "btn btn-success",
                                cancelButton: "btn btn-danger"
                            },
                            buttonsStyling: true
                        });
                        swalWithBootstrapButtons.fire({
                            title: "Do you want a product preview with your custom image?",
                            showCancelButton: true,
                            confirmButtonText: "Yes",
                            cancelButtonText: "No, just download",
                            reverseButtons: false
                        }).then((result) => {
                            if (result.isConfirmed) {
                                arrayBg.forEach((bg) => {
                                    bg.style.display = "none";
                                });
                                defaultBg.classList.add("oculto");
                                apeace.style.width = "3000px";
                                apeace.style.height = "3000px";
                                downloadApeace(apeace);
                                firstCont.classList.add("oculto");
                                thirdCont.classList.remove("oculto");
                                swalWithBootstrapButtons.fire({
                                    title: "Downloaded",
                                    text: "Your Apeace has been downloaded.",
                                    icon: "success"
                                });
                            } else if (result.dismiss === Swal.DismissReason.cancel) {
                                zeroRadius();
                                apeace.style.width = "1000px";
                                apeace.style.height = "1000px";
                                downloadApeace(apeace);
                                setTimeout(() => {
                                    location.reload()
                                }, 2500)
                                swalWithBootstrapButtons.fire({
                                    title: "Downloaded",
                                    text: "Your Apeace has been downloaded.",
                                    icon: "success"
                                });
                            }
                        });
                    }
                }
            });

        }
        catch (err) {
            console.err('An error happend', err)
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
    function downloadApeace(image) {
        html2canvas(image)
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
                apeace.style.width = "420px";
                apeace.style.height = "400px";
                defaultBg.classList.add("apeace_img");
                // setTimeout(() => {
                //     location.reload();
                // }, 50);
            })
            .catch((error) => {
                console.error("Failed to download the Custom Apeace Image.", error);
            })
    }


    document.getElementById('upload-form').addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData();
        const fileField = document.getElementById('image-input');

        formData.append('image', fileField.files[0]);

        try {
            const response = await axios.post('http://localhost:3000/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            const resultDiv = document.getElementById("result")
            resultDiv.innerHTML = `
                <img src=${response.data.mockupUrl} alt="Product Mockup" class="custom_product_img"/>
            `
            // imgProductMockup.src = response.data.mockupUrl
        } catch (error) {
            console.error('Error:', error);
        }
    });


    getTraits();
    active();

})


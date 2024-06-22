const dev = 'http://localhost:3000/upload';
const prod = 'https://apeace-server-production.up.railway.app/upload';
const loader = document.querySelector('.loader_container');
const btnUplaod = document.getElementById('btnUpload');

document.getElementById('upload-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData();
    const fileField = document.getElementById('image-input');
    
    formData.append('image', fileField.files[0]);
    loader.classList.remove("oculto")

    try {
        const response = await axios.post(prod, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        const resultDiv = document.getElementById("result");
        console.log(response);
        resultDiv.innerHTML = `
            <img src=${response.data.mockupUrl} alt="Product Mockup" class="custom_product_img"/>
        `;
        if (response.data.mockupUrl !== "") {
            loader.classList.add("oculto")
        }
    } catch (error) {
        console.error('Error:', error);
    }
});

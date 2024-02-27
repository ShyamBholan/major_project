// document.getElementById('fileInput').addEventListener('change', function () {
//     const previewContainer = document.getElementById('previewContainer');
//     const previewImage = document.getElementById('previewImage');
//     const submitButton = document.getElementById('submitButton');
//     const uploadMessage = document.getElementById('uploadMessage');
//     const fileInput = this;

//     if (fileInput.files && fileInput.files[0]) {
//         const reader = new FileReader();

//         reader.onload = function (e) {
//             previewImage.src = e.target.result;
//             previewContainer.style.display = 'block';
//             submitButton.classList.remove('hidden');
//             uploadMessage.classList.remove('hidden');
//         };

//         reader.readAsDataURL(fileInput.files[0]);
//     }
// });


// document.getElementById('fileInput').addEventListener('change', function () {
//     const previewContainer = document.getElementById('previewContainer');
//     const previewImage = document.getElementById('previewImage');
//     const submitButton = document.getElementById('submitButton');
//     const uploadMessage = document.getElementById('uploadMessage');
//     const fileInput = this;

//     if (fileInput.files && fileInput.files[0]) {
//         const reader = new FileReader();

//         reader.onload = function (e) {
//             previewImage.src = e.target.result;
//             previewContainer.style.display = 'block';
//             submitButton.classList.remove('hidden');
//             uploadMessage.classList.remove('hidden');
//         };

//         reader.readAsDataURL(fileInput.files[0]);
//     }
// });

// from chat 
function allowDrop(event) {
    event.preventDefault();
    var uploaderContainer = document.querySelector('.uploader-container');
    uploaderContainer.style.border = '2px dashed #4CAF50';
}

function drop(event) {
    event.preventDefault();
    var uploaderContainer = document.querySelector('.uploader-container');
    uploaderContainer.style.border = '2px dashed #ccc';

    var fileInput = document.getElementById('fileInput');
    fileInput.files = event.dataTransfer.files;

    handleFileChange();
}

function handleFileChange() {
    const previewContainer = document.getElementById('previewContainer');
    const previewImage = document.getElementById('previewImage');
    const submitButton = document.getElementById('submitButton');
    const uploadMessage = document.getElementById('uploadMessage');
    const fileInput = document.getElementById('fileInput');

    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();

        reader.onload = function (e) {
            previewImage.src = e.target.result;
            previewContainer.style.display = 'block';
            submitButton.classList.remove('hidden');
            uploadMessage.classList.remove('hidden');
        };

        reader.readAsDataURL(fileInput.files[0]);
    }
}
const $ = (e) => document.querySelector(e)

const $uploadArea = $(".upload-area")
const $inputFile = $("#file-image")
const $imagePreview = $("#image-preview")

$uploadArea.addEventListener("click", () => {
    $inputFile.click()
})

//Drag and Drop
//Drag over
$uploadArea.addEventListener("dragover", (e) => {
    e.preventDefault()
    $uploadArea.classList.add("dragover")
})

//Drag leave
$uploadArea.addEventListener("dragleave", () => {
    $uploadArea.classList.remove("dragover")
})

//Drop
$uploadArea.addEventListener("drop", (e) => {
    e.preventDefault()
    $uploadArea.classList.remove("dragover")

    const files = e.dataTransfer.files

    if(files.length > 0){
        handleFiles(files)
    }
})

//funciones

const handleFiles = (files) => {
    const file = files[0]

    if(validateFiles(file)){
        displayImage(file)
    }else{
        console.error("Archivo no permitido")
        alert("solo se perimiten archivos png o jpeg")
    }
}

const validateFiles = (file) => {
    const validTypes = ["image/png", "image/jpeg"]
    return validTypes.includes(file.type)
}

const displayImage = (file) => {
    const reader = new FileReader()

    reader.onload = (e) => {
        $imagePreview.src = e.target.result
        $imagePreview.hidden = false
    }

    reader.readAsDataURL(file)
}

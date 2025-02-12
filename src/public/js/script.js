const $ = (e) => document.querySelector(e)

const $uploadArea = $(".upload-area")
const $inputFile = $("#file-image")
const $imagePreview = $("#image-preview")
const $btnReiniciar = $(".btn-reiniciar")
const $btnDescargar = $(".btn-descargar")

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
        $btnReiniciar.hidden = false
        $btnDescargar.hidden = false
        editarImagen()
    }
})

const $contenedorSection = $(".container-section")

//funciones
const editarImagen = () => {
    const contenedor = document.createElement("article")
    contenedor.classList.add("filters-container")

    contenedor.innerHTML = `
     <h2>Filtros</h2>
     <small>Ajusta los filtros de tu imagen</small>
    <div class="filters">
        <label for="brillo">
            brillo
            <input type="range" name="brillo" id="brillo">
        </label>
        <label for="contraste">
            Contraste
            <input type="range" name="contraste" id="contraste">
        </label>
        <label for="saturacion">
            Saturación
            <input type="range" name="saturacion" id="saturacion">
        </label>
        <label for="desenfoque">
            Desenfoque
            <input type="range" name="desenfoque" id="desenfoque">
        </label>
    </div>
    `
    $contenedorSection.appendChild(contenedor)

}

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

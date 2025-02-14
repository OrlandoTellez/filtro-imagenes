const $ = (e) => document.querySelector(e)

const $uploadArea = $(".upload-area")
const $inputFile = $("#file-image")
const $imagePreview = $("#image-preview")
const $btnReiniciar = $(".btn-reiniciar")
const $btnDescargar = $(".btn-descargar")
const $contenedor = $(".container")
const $contenedorImagen = $("picture")

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
    $uploadArea.classList.add("hidden")

    const files = e.dataTransfer.files

    if(files.length > 0){
        handleFiles(files)
        $btnReiniciar.hidden = false
        $btnDescargar.hidden = false
        $contenedorSection.hidden = false
        $contenedor.style.display = "flex"
        $contenedorImagen.style.display = "flex"
        document.body.style.height = "100%"
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
            Brillo
            <input type="range" name="brillo" id="brillo" min="0" max="200" value="100">
        </label>
        <label for="contraste">
            Contraste
            <input type="range" name="contraste" id="contraste" min="0" max="200" value="100">
        </label>
        <label for="saturacion">
            Saturación
            <input type="range" name="saturacion" id="saturacion" min="0" max="200" value="100">
        </label>
        <label for="desenfoque">
            Desenfoque
            <input type="range" name="desenfoque" id="desenfoque" min="0" max="10" value="0">
        </label>
    </div>
`
    $contenedorSection.appendChild(contenedor)

    
    const $brillo = $("#brillo")
    const $contraste = $("#contraste")
    const $saturacion = $("#saturacion")
    const $desenfoque = $("#desenfoque")

    const aplicarFiltros = () => {
        const brillo = $brillo.value
        const contraste = $contraste.value
        const saturacion = $saturacion.value
        const desenfoque = $desenfoque.value
    
        $imagePreview.style.filter = `
            brightness(${brillo}%) 
            contrast(${contraste}%) 
            saturate(${saturacion}%) 
            blur(${desenfoque}px)
        `
    }

    [$brillo, $contraste, $saturacion, $desenfoque].forEach(input => {
        input.addEventListener("input", aplicarFiltros)
    })
    
    $btnReiniciar.addEventListener("click", () => {
        $brillo.value = 100
        $contraste.value = 100
        $saturacion.value = 100
        $desenfoque.value = 0
            
        aplicarFiltros()
    })
    
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


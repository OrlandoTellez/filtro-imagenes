const $ = (e) => document.querySelector(e)

const $uploadArea = $(".upload-area")
const $inputFile = $("#file-image")

$uploadArea.addEventListener("click", () => {
    $inputFile.click()
})

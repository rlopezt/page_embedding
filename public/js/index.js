$("#submit-button").on("click", function () {
    let inputValue = $("#submission-content").val()
    let modifiedUri = processVideoUri(inputValue)
    $("#video-frame").attr('src', modifiedUri)
    console.log($("#video-frame").attr('src'))
})

$("#complete-page-embedding").on("click", function () {
    window.open("public/html/fullpage.html", "_blank")
})

function processVideoUri(originalUri) {
    console.log($("#video-frame").attr('src'))
    let modifiedUri = originalUri.replace("watch?v=", "embed/")
    console.log(modifiedUri)
    return modifiedUri
}
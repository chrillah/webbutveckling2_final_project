function testSvg(){
    let isOpened = svgExample.getAttribute("aria-expanded")
    if(isOpened === "false"){
        svgExample.setAttribute("aria-expanded", "true")
    } else {
        svgExample.setAttribute("aria-expanded", "false")
    }
}

const svgExample = document.getElementById('svg-example')
svgExample.addEventListener("click", testSvg)

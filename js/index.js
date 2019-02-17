//function to display the number of images selected by user
//on the first upload option button.
function displayCount() {
    var uploadBtn = document.getElementById("uploadBtn");
    //number of images selected
    var imagesCount = uploadBtn.files.length;
    var prompt = document.getElementById("uploadPrompt");
    //one file selected
    if (imagesCount == 1) {
        prompt.innerHTML = uploadBtn.files.length + " File selected";
        //responsiveness
        if (window.innerWidth > 800) {
            prompt.style.marginLeft = "262px";
        }else{
            prompt.style.marginLeft = "107px";
        }
    } else {
        //multiple files
        prompt.innerHTML = uploadBtn.files.length + " Files selected";
        //responsiveness
        if (window.innerWidth > 800) {
            prompt.style.marginLeft = "262px";
        }else{
            prompt.style.marginLeft = "107px";
        }
    }

}


///second upload function  - option two
function uploadNum(num) {
    prompt = document.getElementsByClassName(num + "upload");
    prompt[0].innerHTML = "1 File Selected";
    prompt[0].style.color = "#d89b4e";
}
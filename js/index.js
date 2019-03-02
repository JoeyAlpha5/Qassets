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
        } else {
            prompt.style.marginLeft = "107px";
        }
    } else {
        //multiple files
        prompt.innerHTML = uploadBtn.files.length + " Files selected";
        //responsiveness
        if (window.innerWidth > 800) {
            prompt.style.marginLeft = "262px";
        } else {
            prompt.style.marginLeft = "107px";
        }
    }

}


///second upload function  - option two
function uploadNum(num) {
    var prompt = document.getElementsByClassName(num + "upload");
    //prompt[0].innerHTML = "1 File Selected";
    //prompt[0].style.color = "#d89b4e";

    //get the upload container
    var uploadBtn = document.getElementsByClassName(num + "uploadBtn");

    var BackgrounDisplay = document.getElementsByClassName("uploadBtn");

    //get the uploaded image and display it as the background image
    var image = uploadBtn[0].files[0];
    var objectUrl = URL.createObjectURL(image);
    BackgrounDisplay[num-1].style.backgroundImage = "url(" + objectUrl + ")";
    BackgrounDisplay[num-1].style.backgroundSize = "cover";
    BackgrounDisplay[num-1].style.border = "0";


    //get the cancel icon and display it
    var cancelIcons = document.getElementsByClassName("far fa-times-circle");
    cancelIcons[num-1].style.display = "block";
    
}

function removeImage(num){
    //get the uploaded image and remove it as the background image
    var BackgrounDisplay = document.getElementsByClassName("uploadBtn");
    BackgrounDisplay[num-1].style.backgroundImage = "unset";
    BackgrounDisplay[num-1].style.backgroundSize = "unset";
    BackgrounDisplay[num-1].style.border = "3px dotted rgba(179, 179, 179, 0.1411764705882353)";

        //get the cancel icon and hide it
        var cancelIcons = document.getElementsByClassName("far fa-times-circle");
        cancelIcons[num-1].style.display = "none";
}
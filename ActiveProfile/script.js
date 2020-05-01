var slider_state = true;

function ChangeSlider(){
    if (slider_state === true){
        document.querySelector("#circle").style.left = "-60px";
        document.querySelector("#filter_status").innerText = "Off";
        document.querySelector(".filter_item").style.backgroundColor = "#C3C3C3";
        document.querySelector(".filter_item").style.color = "#646464";
        slider_state = false;
    } else if (slider_state === false){
        document.querySelector("#circle").style.left = "-30px";
        document.querySelector("#filter_status").innerText = "On";
        document.querySelector(".filter_item").style.backgroundColor = "#FFF";
        document.querySelector(".filter_item").style.color = "#000";
        slider_state = true;
    }

}
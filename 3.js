function mulai(){

    document.getElementById("music").play();

    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "block";
}

function mulailagi(){

    document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "block";
}

function kembali(){

    document.getElementById("page3").style.display = "none";
    document.getElementById("page2").style.display = "block";
}
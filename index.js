let dodger = document.getElementById("dodger");

dodger.style.backgroundColor = "#FF69B4";

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers);

    if (left > 0) {
        dodger.style.left = `${left - 5}px`;
    }
}

function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers);

    if (left < 360) {
        dodger.style.left = `${left + 5}px`;
    }  
}

function moveDodgerUp() {
    let bottomNumbers = dodger.style.bottom.replace("px", "");
    let bottom = parseInt(bottomNumbers);

    if (bottom < 380) {
        dodger.style.bottom = `${bottom + 5}px`;
    }  
}

function moveDodgerDown() {
    let bottomNumbers = dodger.style.bottom.replace("px", "");
    let bottom = parseInt(bottomNumbers);

    if (bottom > 0) {
        dodger.style.bottom = `${bottom - 5}px`;
    }  
}

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();    
    };
});

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    };
});

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowDown") {
        moveDodgerDown();
    };
});

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowUp") {
        moveDodgerUp();
    };
});




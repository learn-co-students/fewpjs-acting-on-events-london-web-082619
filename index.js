let dodger = document.querySelector("#dodger");
dodger.style.backgroundColor = "#FF69B4";

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    } else if (e.key === "ArrowRight") {
      moveDodgerRight();
    } else if (e.key === "ArrowUp") {
      moveDodgerUp();
    } else {
      moveDodgerDown();
    }
  });

  const moveDodgerLeft = () => {
    var leftNumbers = dodger.style.left.replace("px", "");
    var left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  
  const moveDodgerRight = () =>{
    var leftNumbers = dodger.style.left.replace("px", "");
    var left = parseInt(leftNumbers, 10);
  
    if (left < 360) {
      dodger.style.left = `${left + 1}px`;
    }
  }

  const moveDodgerUp = () => {
    var bottomNumbers = dodger.style.bottom.replace("px", "");
    var bottom = parseInt(bottomNumbers, 10);
  
    if (bottom < 360) {
      dodger.style.bottom = `${bottom + 1}px`;
    }
  }

  const moveDodgerDown = () => {
    var bottomNumbers = dodger.style.bottom.replace("px", "");
    var bottom = parseInt(bottomNumbers, 10);
  
    if (bottom > 0) {
      dodger.style.bottom = `${bottom - 1}px`;
    }
  }
const box = document.getElementById('box');
const gameArea = document.getElementById('gameArea');

let boxX = 0;
let boxY = 0;
let velocityX = 2; // Change the velocity as needed
let velocityY = 2; // Change the velocity as needed

// Colors for different sides
const colors = {
    left: 'red',
    right: 'blue',
    top: 'green',
    bottom: 'yellow'
};

function moveBox() {
    boxX += velocityX;
    boxY += velocityY;

    // Check for collisions with game area boundaries
    if (boxX <= 0) {
        velocityX = Math.abs(velocityX);
        box.style.backgroundColor = colors.left;
    } else if (boxX + box.offsetWidth >= gameArea.offsetWidth) {
        velocityX = -Math.abs(velocityX);
        box.style.backgroundColor = colors.right;
    }

    if (boxY <= 0) {
        velocityY = Math.abs(velocityY);
        box.style.backgroundColor = colors.top;
    } else if (boxY + box.offsetHeight >= gameArea.offsetHeight) {
        velocityY = -Math.abs(velocityY);
        box.style.backgroundColor = colors.bottom;
    }

    // Update box position
    box.style.left = boxX + 'px';
    box.style.top = boxY + 'px';

    requestAnimationFrame(moveBox);
}

// Start the animation
moveBox();

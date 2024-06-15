// Create game area
const gameArea = document.createElement('div');
document.body.appendChild(gameArea);

// Style game area
gameArea.style.position = 'relative';
gameArea.style.width = '80vw';
gameArea.style.height = '80vh';
gameArea.style.border = '2px solid black';
gameArea.style.overflow = 'hidden';
gameArea.style.margin = '0 auto';
gameArea.style.backgroundColor = '#f0f0f0';
gameArea.style.display = 'flex';
gameArea.style.justifyContent = 'center';
gameArea.style.alignItems = 'center';

// Create the box
const box = document.createElement('div');
gameArea.appendChild(box);

// Style the box
box.style.position = 'absolute';
box.style.width = '50px';
box.style.height = '50px';
box.style.backgroundColor = 'red';

// Initial positions and velocities
let boxX = 0;
let boxY = 0;
let velocityX = 2;
let velocityY = 2;

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
    } else if (boxX + box.offsetWidth >= gameArea.clientWidth) {
        velocityX = -Math.abs(velocityX);
        box.style.backgroundColor = colors.right;
    }

    if (boxY <= 0) {
        velocityY = Math.abs(velocityY);
        box.style.backgroundColor = colors.top;
    } else if (boxY + box.offsetHeight >= gameArea.clientHeight) {
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

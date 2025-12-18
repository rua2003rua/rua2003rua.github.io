function createStars() {
    const container = document.getElementById('star-container');
    const starCount = 100;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random size
        const size = Math.random() * 3 + 1;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        
        // Random position
        star.style.left = Math.random() * 100 + 'vw';
        
        // Random animation duration and delay
        const duration = Math.random() * 3 + 2;
        const delay = Math.random() * 5;
        
        star.style.animationDuration = duration + 's';
        star.style.animationDelay = '-' + delay + 's';
        
        container.appendChild(star);
    }
}

document.addEventListener('DOMContentLoaded', createStars);
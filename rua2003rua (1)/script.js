function initAnimations() {
    const container = document.getElementById('animation-container');
    const items = ['★', '❄', 'New Year 2026'];
    
    setInterval(() => {
        const div = document.createElement('div');
        const type = items[Math.floor(Math.random() * items.length)];
        
        div.className = 'falling-item';
        div.innerText = type;
        
        // Random horizontal position
        div.style.left = Math.random() * 100 + 'vw';
        
        // Custom styling based on type
        if (type === '★') {
            div.style.color = '#ff0000'; // Red Stars
            div.style.fontSize = '20px';
        } else if (type === '❄') {
            div.style.color = '#ffffff'; // White Snowflakes
            div.style.fontSize = '25px';
        } else {
            div.style.color = '#ff0000'; // New Year 2026 in Red
            div.style.fontSize = '18px';
            div.style.fontWeight = 'bold';
            div.style.whiteSpace = 'nowrap';
        }

        // Random speed
        div.style.animationDuration = (Math.random() * 5 + 5) + 's';
        
        container.appendChild(div);

        // Remove from DOM after animation ends
        setTimeout(() => div.remove(), 10000);
    }, 300); // Frequency of falling items
}

document.addEventListener('DOMContentLoaded', initAnimations);
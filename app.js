import { showDateUtility } from './utils/date.js';
import { showMathUtility } from './utils/math.js';

const contentDiv = document.getElementById('content');
const dateBtn = document.getElementById('date-btn');
const mathBtn = document.getElementById('math-btn');

dateBtn.addEventListener('click', () => {
    contentDiv.innerHTML = '';
    showDateUtility(contentDiv);
});

mathBtn.addEventListener('click', () => {
    contentDiv.innerHTML = '';
    showMathUtility(contentDiv);
});

// Register service worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/test-pwa-240912/sw.js').then((registration) => {
            console.log('ServiceWorker registered with scope:', registration.scope);
        }).catch((error) => {
            console.error('ServiceWorker registration failed:', error);
        });
    });
}
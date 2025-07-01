/**
 * This script loads Lottie animations for key icons on the page.
 * It uses the Lottie Web player to render JSON animations.
 */

const loadLottieAnimations = () => {
  const lottieScript = document.createElement('script');
  lottieScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.9.6/lottie.min.js';
  lottieScript.onload = () => {
    // Example: Load a Lottie animation for a car icon
    const carIconContainer = document.getElementById('lottie-car-icon');
    if (carIconContainer) {
      lottie.loadAnimation({
        container: carIconContainer,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://assets9.lottiefiles.com/packages/lf20_8xq6v0.json' // Example car animation JSON URL
      });
    }
    // Add more Lottie animations for other icons as needed
  };
  document.head.appendChild(lottieScript);
};

document.addEventListener('DOMContentLoaded', loadLottieAnimations);

/**
 * This script adds an animated programmer icon to the footer with subtle animations and click interaction.
 * On click, the icon scales up briefly and redirects to the creator's social media page.
 */

document.addEventListener('DOMContentLoaded', () => {
  const footerSignature = document.getElementById('murfi-signature');
  const icon = document.getElementById('murfi-icon');

  if (footerSignature && icon) {
    footerSignature.addEventListener('click', () => {
      icon.classList.add('scale-up');
      setTimeout(() => {
        icon.classList.remove('scale-up');
        window.open('https://bit.ly/m/WEB-SISCAMCHACCHA', '_blank');
      }, 300);
    });
  }
});

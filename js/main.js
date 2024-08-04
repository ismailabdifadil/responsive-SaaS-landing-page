document.addEventListener('DOMContentLoaded', () => {
  const faqContainer = document.querySelector('.faq-content');

  faqContainer.addEventListener('click', (event) => {
    const groupHeader = event.target.closest('.faq-group-header');

    if (!groupHeader) return;

    const group = groupHeader.parentElement;
    const groupBody = group.querySelector('.faq-group-body');
    const icon = group.querySelector('i');

    // Toggle Icon
    icon.classList.toggle('fa-minus');
    icon.classList.toggle('fa-plus');

    // Toggle visibility of group body
    groupBody.classList.toggle('open');

    // Close other FAQ group bodies

    const otherGroups = faqContainer.querySelectorAll('.faq-group');

    otherGroups.forEach((otherGroup) => {
      if (otherGroup !== group) {
        const otherGroupBody = otherGroup.querySelector('.faq-group-body');
        const otherIcon = otherGroup.querySelector('.faq-group-header i');

        otherGroupBody.classList.remove('open');

        otherIcon.classList.remove('fa-minus');
        otherIcon.classList.add('fa-plus');
      }
    });
  });

  // Display Mobile Menu

  const hamburgerButton = document.getElementById('hamburger-button');
  const mobileMenu = document.querySelector('.mobile-menu');

  hamburgerButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  });
});

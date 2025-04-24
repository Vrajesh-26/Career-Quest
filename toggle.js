function toggleReadMore(button) {
  const field = button.parentElement;
  const dots = field.querySelector('.dots');
  const moreContent = field.querySelector('.more-content');
  
  if (dots.style.display === "none") {
      dots.style.display = "inline";
      button.textContent = "Read More";
      moreContent.style.display = "none";
      field.style.paddingBottom = "1.5rem";
  } else {
      dots.style.display = "none";
      button.textContent = "Read Less";
      moreContent.style.display = "block";
      field.style.paddingBottom = "2.5rem";
  }
}

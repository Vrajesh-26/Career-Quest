function toggleReadMore() {
    const dots = document.getElementById("dots");
    const moreText = document.getElementById("more");
    const btnText = document.getElementById("readMoreBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      moreText.style.display = "none";
      btnText.innerText = "Read More";
    } else {
      dots.style.display = "none";
      moreText.style.display = "inline";
      btnText.innerText = "Read Less";
    }
  }
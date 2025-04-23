function calculateCareer() {
    let scores = {
        engineering: 0,
        medical: 0,
        business: 0,
        arts: 0
    };

    // Get selected answers
    let answers = document.querySelectorAll("input[type=radio]:checked");
    answers.forEach((answer) => {
        scores[answer.value]++;
    });

    // Find the career with the highest score
    let bestCareer = Object.keys(scores).reduce((a, b) => (scores[a] > scores[b] ? a : b));

    // Define career suggestions
    let careerSuggestions = {
        engineering: "You might be a great Engineer! Consider careers like Software Development, AI, or Robotics.",
        medical: "You might thrive in the Medical field! Explore careers like Doctor, Nurse, or Biomedical Researcher.",
        business: "You could excel in Business & Management! Consider careers in Entrepreneurship, Marketing, or Finance.",
        arts: "You have a creative mindset! Consider careers in Graphic Design, Film Making, or Animation."
    };

    // Display the result
    document.getElementById("result").innerHTML = `<h3>Recommended Career:</h3> <p>${careerSuggestions[bestCareer]}</p>`;
}

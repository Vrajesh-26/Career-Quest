// Update progress bar as user answers questions
document.addEventListener('DOMContentLoaded', function() {
    const radioInputs = document.querySelectorAll('input[type="radio"]');
    const progressBar = document.getElementById('quizProgress');
    
    radioInputs.forEach(input => {
      input.addEventListener('change', function() {
        const answered = document.querySelectorAll('input[type="radio"]:checked').length;
        const progress = (answered / 15) * 100;
        progressBar.style.width = progress + '%';
        
        // Add pulse animation to the answered question// Update progress bar as user answers questions
document.addEventListener('DOMContentLoaded', function() {
    const radioInputs = document.querySelectorAll('input[type="radio"]');
    const progressBar = document.getElementById('quizProgress');
    
    radioInputs.forEach(input => {
      input.addEventListener('change', function() {
        const answered = document.querySelectorAll('input[type="radio"]:checked').length;
        const progress = (answered / 15) * 100;
        progressBar.style.width = progress + '%';
        
        // Add pulse animation to the answered question
        const question = this.closest('.question');
        question.classList.add('animate__animated', 'animate__pulse');
        setTimeout(() => {
          question.classList.remove('animate__animated', 'animate__pulse');
        }, 1000);
      });
    });
  });
  
  function calculateCareer() {
    const answers = [];
    for (let i = 1; i <= 15; i++) {
      const selected = document.querySelector(`input[name='q${i}']:checked`);
      if (!selected) {
        alert('Please answer all questions to get accurate results.');
        return;
      }
      answers.push(selected.value);
    }
  
    // Calculate scores for each career field
    const score = {
      engineering: 0,
      medical: 0,
      business: 0,
      arts: 0,
      law: 0
    };
    
    answers.forEach(ans => {
      score[ans] = (score[ans] || 0) + 1;
    });
  
    // Sort fields by score
    const sorted = Object.entries(score).sort((a, b) => b[1] - a[1]);
    const topField = sorted[0][0];
    const secondField = sorted[1][0];
  
    // Career suggestions
    const careers = {
      engineering: [
        'Software Engineer',
        'AI/ML Specialist',
        'Data Scientist',
        'Robotics Engineer',
        'Cybersecurity Analyst'
      ],
      medical: [
        'Doctor (General Physician)',
        'Surgeon',
        'Nurse Practitioner',
        'Medical Researcher',
        'Physical Therapist'
      ],
      business: [
        'Business Analyst',
        'Marketing Manager',
        'Financial Advisor',
        'Entrepreneur',
        'Human Resources Manager'
      ],
      arts: [
        'Graphic Designer',
        'Creative Director',
        'Film Maker',
        'Animator',
        'Art Director'
      ],
      law: [
        'Corporate Lawyer',
        'Human Rights Attorney',
        'Judge',
        'Legal Consultant',
        'Public Prosecutor'
      ]
    };
  
    // Display results
    const resultDiv = document.getElementById('result');
    const primaryList = document.getElementById('primaryCareers');
    const secondaryList = document.getElementById('secondaryCareers');
    const secondaryFieldDiv = document.getElementById('secondaryField');
    
    // Clear previous results
    primaryList.innerHTML = '';
    secondaryList.innerHTML = '';
    
    // Add primary field careers
    careers[topField].forEach((career, index) => {
      const li = document.createElement('li');
      li.textContent = career;
      li.classList.add('animate__animated', 'animate__fadeInUp');
      li.style.animationDelay = `${index * 0.1}s`;
      primaryList.appendChild(li);
    });
    
    // Add secondary field if score is close
    if (score[secondField] >= score[topField] * 0.8) {
      secondaryFieldDiv.style.display = 'block';
      
      careers[secondField].slice(0, 3).forEach((career, index) => {
        const li = document.createElement('li');
        li.textContent = career;
        li.classList.add('animate__animated', 'animate__fadeInUp');
        li.style.animationDelay = `${index * 0.1 + 0.5}s`;
        secondaryList.appendChild(li);
      });
    } else {
      secondaryFieldDiv.style.display = 'none';
    }
    
    resultDiv.style.display = 'block';
    
    // Scroll to results
    resultDiv.scrollIntoView({ behavior: 'smooth' });
  }
  
  function restartQuiz() {
    // Reset form
    document.getElementById('careerQuiz').reset();
    
    // Hide results
    document.getElementById('result').style.display = 'none';
    
    // Reset progress bar
    document.getElementById('quizProgress').style.width = '0%';
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
        const question = this.closest('.question');
        question.classList.add('animate__animated', 'animate__pulse');
        setTimeout(() => {
          question.classList.remove('animate__animated', 'animate__pulse');
        }, 1000);
      });
    });
  });
  
  function calculateCareer() {
    const answers = [];
    for (let i = 1; i <= 15; i++) {
      const selected = document.querySelector(`input[name='q${i}']:checked`);
      if (!selected) {
        alert('Please answer all questions to get accurate results.');
        return;
      }
      answers.push(selected.value);
    }
  
    // Calculate scores for each career field
    const score = {
      engineering: 0,
      medical: 0,
      business: 0,
      arts: 0,
      law: 0
    };
    
    answers.forEach(ans => {
      score[ans] = (score[ans] || 0) + 1;
    });
  
    // Sort fields by score
    const sorted = Object.entries(score).sort((a, b) => b[1] - a[1]);
    const topField = sorted[0][0];
    const secondField = sorted[1][0];
  
    // Career suggestions
    const careers = {
      engineering: [
        'Software Engineer',
        'AI/ML Specialist',
        'Data Scientist',
        'Robotics Engineer',
        'Cybersecurity Analyst'
      ],
      medical: [
        'Doctor (General Physician)',
        'Surgeon',
        'Nurse Practitioner',
        'Medical Researcher',
        'Physical Therapist'
      ],
      business: [
        'Business Analyst',
        'Marketing Manager',
        'Financial Advisor',
        'Entrepreneur',
        'Human Resources Manager'
      ],
      arts: [
        'Graphic Designer',
        'Creative Director',
        'Film Maker',
        'Animator',
        'Art Director'
      ],
      law: [
        'Corporate Lawyer',
        'Human Rights Attorney',
        'Judge',
        'Legal Consultant',
        'Public Prosecutor'
      ]
    };
  
    // Display results
    const resultDiv = document.getElementById('result');
    const primaryList = document.getElementById('primaryCareers');
    const secondaryList = document.getElementById('secondaryCareers');
    const secondaryFieldDiv = document.getElementById('secondaryField');
    
    // Clear previous results
    primaryList.innerHTML = '';
    secondaryList.innerHTML = '';
    
    // Add primary field careers
    careers[topField].forEach((career, index) => {
      const li = document.createElement('li');
      li.textContent = career;
      li.classList.add('animate__animated', 'animate__fadeInUp');
      li.style.animationDelay = `${index * 0.1}s`;
      primaryList.appendChild(li);
    });
    
    // Add secondary field if score is close
    if (score[secondField] >= score[topField] * 0.8) {
      secondaryFieldDiv.style.display = 'block';
      
      careers[secondField].slice(0, 3).forEach((career, index) => {
        const li = document.createElement('li');
        li.textContent = career;
        li.classList.add('animate__animated', 'animate__fadeInUp');
        li.style.animationDelay = `${index * 0.1 + 0.5}s`;
        secondaryList.appendChild(li);
      });
    } else {
      secondaryFieldDiv.style.display = 'none';
    }
    
    resultDiv.style.display = 'block';
    
    // Scroll to results
    resultDiv.scrollIntoView({ behavior: 'smooth' });
  }
  
  function restartQuiz() {
    // Reset form
    document.getElementById('careerQuiz').reset();
    
    // Hide results
    document.getElementById('result').style.display = 'none';
    
    // Reset progress bar
    document.getElementById('quizProgress').style.width = '0%';
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // JavaScript functionality
  const skillsList = document.getElementById('skillsList');
  const skillsItems = skillsList.getElementsByTagName('li');

  // Add click event listeners to skills items
  for (let i = 0; i < skillsItems.length; i++) {
      skillsItems[i].addEventListener('click', function () {
          // Toggle active class on clicked skill
          this.classList.toggle('active');

          // Show/hide hidden skills
          const hiddenSkills = document.getElementsByClassName('hidden');
          for (let j = 0; j < hiddenSkills.length; j++) {
              hiddenSkills[j].classList.toggle('hidden');
          }
      });
  }





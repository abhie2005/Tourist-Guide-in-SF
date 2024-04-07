document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1); // Get target section ID
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                const offsetTop = targetSection.getBoundingClientRect().top + window.pageYOffset; // Calculate the offset of the section from the top of the viewport
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
            // Toggle subsection visibility if the clicked link is for the accommodation section
            if (targetId === 'accommodation') {
                toggleAccommodationSubsection();
            }
        });
    });
});
    document.addEventListener("DOMContentLoaded", function () {
        const accommodationSection = document.getElementById("accommodation");
        const subsectionContainer = document.getElementById("subsection-container");
        const accommodationHeading = document.querySelector("#accommodation h2");
    
        let isSubsectionVisible = false;
    
        accommodationSection.addEventListener("click", function () {
          if (isSubsectionVisible) {
            subsectionContainer.style.display = "none"; // Hide the subsections
            accommodationHeading.style.display = "block"; // Show the accommodation heading
          } else {
            subsectionContainer.style.display = "block"; // Show the subsections
            accommodationHeading.style.display = "none"; // Hide the accommodation heading
          }
          isSubsectionVisible = !isSubsectionVisible; // Toggle the flag
        });
    });

    document.addEventListener("DOMContentLoaded", function () {
        const restaurantsSection = document.getElementById("restaurants");
        const subsectionContainer = document.getElementById("restaurants-subsection-container");
        const restaurantsHeading = document.querySelector("#restaurants h2");
    
        // Hide the subsection initially
        subsectionContainer.style.display = "none";
    
        restaurantsSection.addEventListener("click", function () {
            // Toggle the subsection visibility
            if (subsectionContainer.style.display === "none") {
                subsectionContainer.style.display = "block"; // Show the subsections
                restaurantsHeading.style.display = "none"; // Hide the restaurants heading
            } else {
                subsectionContainer.style.display = "none"; // Hide the subsections
                restaurantsHeading.style.display = "block"; // Show the restaurants heading
            }
        });
    });

    document.addEventListener("DOMContentLoaded", function () {
        const placesToVisitSection = document.getElementById("places-to-visit");
        const placesToVisitSubsectionContainer = document.getElementById("places-subsection-container");
        const placesToVisitHeading = document.querySelector("#places-to-visit h2");
        
        let isPlacesToVisitSubsectionVisible = false;
        
        placesToVisitSection.addEventListener("click", function () {
            togglePlacesToVisitSubsection();
        });
        
        function togglePlacesToVisitSubsection() {
            if (isPlacesToVisitSubsectionVisible) {
                placesToVisitSubsectionContainer.style.display = "none"; // Hide the subsections
                placesToVisitHeading.style.display = "block"; // Show the places to visit heading
            } else {
                placesToVisitSubsectionContainer.style.display = "block"; // Show the subsections
                placesToVisitHeading.style.display = "none"; // Hide the places to visit heading
            }
            isPlacesToVisitSubsectionVisible = !isPlacesToVisitSubsectionVisible; // Toggle the flag
        }
    });
    document.addEventListener("DOMContentLoaded", function () {
        const helpSection = document.getElementById("help");
        const helpSubsectionContainer = document.getElementById("help-subsection-container");
        const helpHeading = document.querySelector("#help h2");
        
        let isHelpSubsectionVisible = false;
        
        helpSection.addEventListener("click", function () {
            toggleHelpSubsection();
        });
        
        function toggleHelpSubsection() {
            if (isHelpSubsectionVisible) {
                helpSubsectionContainer.style.display = "none"; // Hide the subsections
                helpHeading.style.display = "block"; // Show the help heading
            } else {
                helpSubsectionContainer.style.display = "block"; // Show the subsections
                helpHeading.style.display = "none"; // Hide the help heading
            }
            isHelpSubsectionVisible = !isHelpSubsectionVisible; // Toggle the flag
        }
    });
          
    
    
    
    
    

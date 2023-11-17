
document.addEventListener("DOMContentLoaded", () => {
    let data = null
    // Use AJAX to get model info from Django
    fetch('/get_model_data/')
        .then(response => response.json())
        .then(jsondata => {
            // Do something with the data
            data = jsondata;
        })
        .catch(error => console.error('Error:', error));

    window.scrollTo({top: 0, behavior: "smooth"});
    const nameHeader = document.querySelector("#name-display");
    const text = "brian_zhang";

    const socialMediaWrapper = document.querySelector("#initial-display > div");
    const portfolioAreaWrapper = document.querySelector("#portfolio-area-wrapper");
    const skipAnimationButton = document.querySelector("#skip-animation-button");
    const portfolioItems = document.querySelectorAll("#portfolio-area > button");
    skipAnimationButton.onclick = () => {
        charCount = text.length-1;
        type();
    };
    setTimeout(() => {
        portfolioAreaWrapper.classList.add("opacity-transition-slow");
        skipAnimationButton.classList.add("opacity-transition-fast");
    }, 50);

    let charCount = 0;

    function type() {
        ++charCount;
        
        if(charCount <= text.length) {
            nameHeader.textContent = text.substring(0, charCount);
            setTimeout(type, 200);
        }
        else {
            skipAnimationButton.style.opacity = 0;
            setTimeout(skipAnimationButton.remove, 500);
            socialMediaWrapper.classList.remove("display-none");
            setTimeout(() => {
                socialMediaWrapper.classList.remove("opacity-0");
                portfolioAreaWrapper.classList.remove("opacity-0");
                Array.from(portfolioItems).forEach((item) => {
                    item.onclick = (event) => handlePortfolioClick(event, data);
                });
            }, 1000);
        }
    }

    if(charCount === 0) {
        setTimeout(type, 1500);
    }

});


function handlePortfolioClick(event, data) {
    const projectId = event.currentTarget.id;
    window.scrollTo({top: 0, behavior: "smooth"});
    document.querySelector("#cursor").classList.add("remove-animation");

    const seeMoreDetailsText = document.querySelector("#see-more-details-text");
    if(!seeMoreDetailsText.style.height !== 0) {
        seeMoreDetailsText.style.height = 0;
        seeMoreDetailsText.style.marginTop = 0;
    }

    const displayArea = document.querySelector("#display-area");
    const initialDisplay = document.querySelector("#initial-display");
    const itemDisplay = document.querySelector("#item-display");
    const backButton = document.querySelector("#item-display > button");

    if(initialDisplay.classList.contains("display-none")) {
        itemDisplay.classList.remove("opacity-transition-medium");
        itemDisplay.classList.add("opacity-transition-fast", "opacity-0");
        setTimeout(() => {
            updateDisplayInformation(projectId, data);
            itemDisplay.classList.remove("opacity-0");
        }, 750);
    }
    else {
        // initial display area fade left animation
        displayArea.classList.add("darken");
        initialDisplay.classList.add("fade-left");
        initialDisplay.classList.add("opacity-0");

        setTimeout(() => {
            initialDisplay.classList.add("display-none");
            itemDisplay.classList.remove("display-none");
            setTimeout(() => {
                itemDisplay.classList.remove("opacity-0");
                backButton.onclick = () => {
                    document.querySelector("#item-display > iframe").src = ""; // stop video if it's playing
                    displayArea.classList.remove("darken");
                    itemDisplay.classList.add("opacity-0");
                    setTimeout(() => {
                        itemDisplay.classList.add("display-none");
                        initialDisplay.classList.remove("display-none");
                        setTimeout(() => {
                            initialDisplay.classList.remove("fade-left");
                            initialDisplay.classList.remove("opacity-0");
                        }, 50);
                    }, 500);
                };

                updateDisplayInformation(projectId, data);
            }, 50)

        }, 1000);
    }
}


// update display information depending on project selected
function updateDisplayInformation(projectId, data) {
    let targetProject = null;
    for (project of data.projects) {
        if (projectId === project.title + '-portfolio-item-id') {
            targetProject = project;
        }
    }
    
    const itemDisplayHeader = document.querySelector("#item-display  h2");
    const itemDisplayParagraph = document.querySelector("#item-display  p");
    const itemDisplayLink = document.querySelector("#item-display a");
    const videoPlayer = document.querySelector("#item-display > iframe");
    itemDisplayHeader.textContent = targetProject.title;
    itemDisplayParagraph.textContent = targetProject.long_description;
    itemDisplayLink.href = targetProject.repo_url;
    videoPlayer.src = targetProject.demo_url;
}
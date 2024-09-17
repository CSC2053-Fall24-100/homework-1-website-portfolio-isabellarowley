console.log("testing");

// I used the following reference on Stack Overflow to complete this problem:
// Link 1: https://stackoverflow.com/questions/11234575/triple-3-equal-signs

    // Selecting the "Hide Schedule" button:
    const hideSchedule = document.getElementById("toggle-schedule");

    // Selecting the scheudle table container:
    const scheduleContainer = document.getElementById("scheduleContainer");

    // Adding a click event listener to the button:
    hideSchedule.addEventListener('click', function () {
        if (scheduleContainer.style.display === "none") {
            scheduleContainer.style.display = "block";

            // Changing the table's visbility:
            hideSchedule.textContent = "Hide Schedule";
        }
        else {
            scheduleContainer.style.display = "none";

            // Changing the table's visbility:
            hideSchedule.textContent = "Show Schedule";
        }
    });

    
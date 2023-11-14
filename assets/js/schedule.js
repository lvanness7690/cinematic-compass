document.addEventListener('DOMContentLoaded', function() {
    const scheduledShowsList = document.getElementById('scheduledShowsList');
    updateScheduledList();

    function updateScheduledList() {
        scheduledShowsList.innerHTML = ''; // Clear the list before updating
        let schedule = JSON.parse(localStorage.getItem('schedule')) || [];

        if(schedule.length === 0) {
            scheduledShowsList.innerHTML = '<li>No shows added to your schedule yet.</li>';
            return;
        }

        schedule.forEach((show, index) => {
            // Fetch the show data from TVMaze API by show title
            fetch(`https://api.tvmaze.com/singlesearch/shows?q=${encodeURIComponent(show.title)}`)
            .then(response => response.json())
            .then(data => {
                const listItem = document.createElement('li');
                listItem.textContent = show.title;

                // Create a div to display the network information
                const networkInfo = document.createElement('div');
                if (data.network) {
                    networkInfo.textContent = `Network: ${data.network.name}`;
                } else if (data.webChannel) {
                    networkInfo.textContent = `Online: ${data.webChannel.name}`;
                } else {
                    networkInfo.textContent = 'Network information not available.';
                }
                listItem.appendChild(networkInfo);

                // Create a button to remove the show from the schedule
                const removeButton = document.createElement('button');
                removeButton.textContent = 'X';
                removeButton.onclick = function() { removeFromSchedule(index); };
                listItem.appendChild(removeButton);

                scheduledShowsList.appendChild(listItem);
            })
            .catch(error => {
                console.error('Error fetching show information:', error);
                // Add the list item even if there's an error
                const listItem = document.createElement('li');
                listItem.textContent = `${show.title} - Network information not available.`;
                scheduledShowsList.appendChild(listItem);
            });
        });
    }

    function removeFromSchedule(index) {
        let schedule = JSON.parse(localStorage.getItem('schedule')) || [];
        schedule.splice(index, 1); // Remove the show at the specified index
        localStorage.setItem('schedule', JSON.stringify(schedule)); // Update the schedule in local storage
        updateScheduledList(); // Update the list displayed to the user
    }
});

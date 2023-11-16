document.addEventListener('DOMContentLoaded', function() {
    const scheduledShowsList = document.getElementById('scheduledShowsList');
    updateScheduledList();

    function updateScheduledList() {
        scheduledShowsList.innerHTML = ''; // Clear the list before updating
        let schedule = JSON.parse(localStorage.getItem('schedule')) || [];
    
        if(schedule.length === 0) {
            scheduledShowsList.innerHTML = '<li class="box">No shows added to your schedule yet.</li>';
            return;
        }
    
        schedule.forEach((show, index) => {
            // Fetch the show data from TVMaze API by show title
            fetch(`https://api.tvmaze.com/singlesearch/shows?q=${encodeURIComponent(show.title)}`)
            .then(response => response.json())
            .then(data => {
                const listItem = document.createElement('li');
                listItem.classList.add('box'); // Bulma class for a box container
    
                // Title of the show
                const title = document.createElement('h2');
                title.classList.add('title'); // Bulma class for titles
                title.textContent = show.title;
                listItem.appendChild(title);
    
                // Network information
                const networkInfo = document.createElement('div');
                networkInfo.classList.add('content'); // Bulma class for content text
                if (data.network) {
                    networkInfo.textContent = `Network: ${data.network.name}`;
                } else if (data.webChannel) {
                    networkInfo.textContent = `Online: ${data.webChannel.name}`;
                } else {
                    networkInfo.textContent = 'Network information not available.';
                }
                listItem.appendChild(networkInfo);
    
                // Remove button
                const removeButton = document.createElement('button');
                removeButton.classList.add('button', 'is-small', 'is-rounded'); // Bulma classes for a primary button
                removeButton.textContent = 'Remove from Schedule';
                removeButton.onclick = function() { removeFromSchedule(index); };
                listItem.appendChild(removeButton);
    
                scheduledShowsList.appendChild(listItem);
            })
            .catch(error => {
                console.error('Error fetching show information:', error);
                // Add the list item even if there's an error
                const listItem = document.createElement('li');
                listItem.classList.add('box'); // Bulma class for a box container
    
                const title = document.createElement('h2');
                title.classList.add('title'); // Bulma class for titles
                title.textContent = `${show.title} - Network information not available.`;
                listItem.appendChild(title);
    
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

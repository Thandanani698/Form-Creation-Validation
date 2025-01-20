// Define the asynchronous function to fetch user data
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';  // API URL

    // Select the container element where the data will be displayed
    const dataContainer = document.getElementById('api-data');

    // Clear existing content (loading message)
    dataContainer.innerHTML = '';

    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);

        // Check if the response is successful
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Convert the response to JSON
        const users = await response.json();

        // Create a <ul> element to hold the list of user names
        const userList = document.createElement('ul');

        // Loop through the users and create <li> elements for each user
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Append the user list to the dataContainer
        dataContainer.appendChild(userList);
    } catch (error) {
        // Handle errors (e.g., network issues)
        dataContainer.textContent = 'Failed to load user data.';
        console.error('Error fetching data:', error);
    }
}

// Ensure that fetchUserData runs once the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);

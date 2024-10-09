async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');
    try{
        const response = await fetch(apiUrl);
        const users = response.jason();
        dataContainer.innerHTML = '';
        const userList = document.createElement('ul');
        users.forEach(user => {
            // Create a <li> element
            const listItem = document.createElement('li');
            
            // Set the text content of the <li> to the user’s name
            listItem.textContent = user.name;
            
            // Append the <li> to userList
            userList.appendChild(listItem);
        });

        dataContainer.appendChild(userList);

    }catch(error){
        dataContainer.innerHTML = '';
        dataContainer.textContent= 'Failed to load user data.';

    }

    document.addEventListener('DOMContentLoaded', fetchUserData);

    
}

fetchUserData();
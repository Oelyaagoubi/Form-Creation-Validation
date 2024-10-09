document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', function(event){
        

        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        let isValid = true;
        let messages = [];

        if(username.length < 3 ){
            isValid = false;
            messages.push('username cant be less than 3 caracters'); 
        }
        if(!email.includes('@') || !email.includes('.')){
            isValid = false;
            messages.push('incorrect email'); 
        }
        if(password.length <= 8 ){
            isValid = false;
            messages.push('password must be more than 8 caracters'); 
        }
       
       feedbackDiv.style.display = 'block';
         if(isValid){
            feedbackDiv.textContent ="Registration successful!";
            feedbackDiv.style.color = "#28a745";
         }else if (!isValid){
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = "#dc3545";
         }  
         
         event.preventDefault();
         });

        
       

    });

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('registration-form');
    const feedbackDev = document.getElementById('form-feedback');

    form.removeEventListener('submit', function(event){
        event.preventDefault();

        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        let isValid = true;
        let messages = [];

        if(username.length < 3 ){
            isValid = false;
            messages.push('username cant be less than 3 caracters'); 
        }
        if(!/@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)){
            isValid = false;
            messages.push('incorrect email'); 
        }
        if(password.length >= 8 ){
            isValid = false;
            messages.push('password must be more than 8 caracters'); 
        }
       
       function showfeedback(){
        document.getElementById('form-feedback').style.display = 'block';
         if(isValid){
            document.getElementById('form-feedback').textContent ="Registration successful!";
            document.getElementById('form-feedback').style.color = "#28a745";
         }else if (!isValid){
            document.getElementById('form-feedback').innerHTML.join('<br>');
            document.getElementById('form-feedback').style.color = "#dc3545";
         }
       }

    })
});
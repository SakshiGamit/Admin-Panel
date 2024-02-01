const showPassword = document.querySelector('#showPassword');
        const password = document.querySelector('#password');

        showPassword.addEventListener("click" , function(){
            this.classList.toggle('fa-eye');
            const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
            password.setAttribute('type', type);
        });
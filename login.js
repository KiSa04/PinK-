
window.addEventListener('load', function() {

            document.getElementById('email').focus();

            document.addEventListener('keydown', function(event) {
                    
                    console.log(event.key);

                    switch (event.key) {
                   case 'ArrowDown':
                        event.preventDefault(); // Evitar que a página role para baixo
                        if (document.activeElement.id == 'email') {
                            document.getElementById('password').focus();
                        } else if (document.activeElement.id == 'password')  {
                            document.getElementById('done').focus();
                        } else {
		            document.getElementById('email').focus();
			}
			
                    break;
                    case 'ArrowUp':
                        event.preventDefault(); // Evitar que a página role para baixo

                        if (document.activeElement.id == 'password') {
                            document.getElementById('email').focus();
                        } else {
                            document.getElementById('password').focus();
                        }
                    break;
                    case 'Enter':
			event.preventDefault();
                        if (document.activeElement.id == 'done') {
			    //console.log(``);
                            window.location.href = `kinterest-index.html?v=1&email=${encodeURIComponent(document.getElementById('email').value)}&pass=${encodeURIComponent(document.getElementById('password').value)}&type=1`;
                            }
                        break;
			}
               });
            });
    

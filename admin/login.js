var x = document.getElementById("email");
var p = document.getElementById("password");

document.getElementById("form").addEventListener("submit", (ee) =>{
     ee.preventDefault();
     console.log(x.value);
     console.log(p.value);
     if (x.value == "admin@gamil.com" && p.value == "qwerty") {
          swal({
               title:'Bievenido',
               html: 'Acceso permitido',
               type: 'success'
          });
          setTimeout(() => {
               loadPage();
          },3000);
     } else {
          swal({
               title:'Error',
               html: 'Usuario o password incorrecta',
               type: 'error'

          });
     }
     function loadPage() {
          window.location.href="./admin.html";
          
     }
});
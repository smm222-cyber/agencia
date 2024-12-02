document.addEventListener('DOMContentLoaded', function () {
    let multipleCardCarousel = document.querySelector("#carouselExampleControls");


    if (window.matchMedia("(min-width: 768px)").matches) {
      let carousel = new bootstrap.Carousel(multipleCardCarousel, {
        interval: false, // Disable automatic sliding
        wrap: false, // Prevent wrapping at the end
      });


      let carouselWidth = document.querySelector(".carousel-inner").scrollWidth;
      let cardWidth = document.querySelector(".carousel-item").offsetWidth;
      let scrollPosition = 0;


      document.querySelector("#carouselExampleControls .carousel-control-next").addEventListener("click", function () {
        if (scrollPosition < carouselWidth - cardWidth * 4) {
          scrollPosition += cardWidth;
          document.querySelector("#carouselExampleControls .carousel-inner").scroll({ left: scrollPosition, behavior: 'smooth' });
        }
      });


      document.querySelector("#carouselExampleControls .carousel-control-prev").addEventListener("click", function () {
        if (scrollPosition > 0) {
          scrollPosition -= cardWidth;
          document.querySelector("#carouselExampleControls .carousel-inner").scroll({ left: scrollPosition, behavior: 'smooth' });
        }
      });
    } else {
      multipleCardCarousel.classList.add("slide");
    }
  });


  // Formulario 

  let formulario = document.getElementById("miFormulario");
 
        function validarFormulario(){
                const name = document.getElementById("name").value;
                const email = document.getElementById("email").value;
                const message = document.getElementById("message").value;
               
 
                if(name.trim() === '' || email.trim() === ''|| message.trim() === ''){
                    return false;
                }
                else{
                    return true;
                }
            }
 
        formulario.addEventListener("submit", function(event){
            //Prevenir comportamiento predeterminado
            event.preventDefault();//Para no actualizar la pagina
 
            if(validarFormulario() == true){
              const name = document.getElementById("name").value;
              const email = document.getElementById("email").value;
              const subject = document.getElementById("subject").value;
              const message = document.getElementById("message").value;
 
                console.log("Formulario enviado, sin recargar la pagina");
 
            //     if(subject.trim() === ''){
            //      subject= "nada";
            //   }
            //   if(message.trim() === ''){
            //     subject= "nada";
            //  }
            const mensajeCodigo =encodeURIComponent(message);
            const asuntoCodigo =encodeURIComponent("Asunto: " + subject);
                console.log("Nombre:"+name);
                console.log("Email:"+email);
                console.log("Asunto:"+subject);
                console.log("Mensaje:"+message);
                console.log(mensajeCodigo);
                console.log(asuntoCodigo);
            const numeroEmpresa="59177494707";
            const mensaje= encodeURIComponent("Hola, mi nombre es "+ name+ ".Mi correo es "+email+" y mi mensaje es: " +message);
            const link =  `https://api.whatsapp.com/send?phone=59176900071&text=`+mensaje;
            window.location.href=link;
            console.log(link);
               

            }
            else{
                console.log("Formulario es invalido, complete los campos");
            }
 
           
        });
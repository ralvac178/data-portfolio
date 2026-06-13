document.addEventListener("DOMContentLoaded", function() {
  // Buscamos el enlace en el menú que apunta a tu archivo PDF
  // Ajusta 'Roy_Alva_Costilla_CV.pdf' si el nombre es diferente
  var links = document.querySelectorAll('a[href$="Roy_Alva_Costilla_CV.pdf"]');
  
  links.forEach(function(link) {
        link.setAttribute('download', 'Roy_Alva_Costilla_CV.pdf');
  });
});
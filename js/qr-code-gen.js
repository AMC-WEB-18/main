document.addEventListener("DOMContentLoaded", function() {
    let qrbox=document.getElementById("qrbox");
    let qrcode=document.getElementById("qrcode");
      qrcode.src= "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example+Vada_Pav";
    
});
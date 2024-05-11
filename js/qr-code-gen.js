document.addEventListener("DOMContentLoaded", function() {
    let qrbox=document.getElementById("qrbox");
    let qrcode=document.getElementById("qrcode");
    const qrCodeUrl = generateQRCode(listCard);
    function generateQRCode(data) {
      const qrData = JSON.stringify(products);
      const qrSize = "150x150";
      const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}&data=${qrData}`;
      return qrUrl;
  }
  
  console.log(qrCodeUrl); // Output: URL of the generated QR code
});
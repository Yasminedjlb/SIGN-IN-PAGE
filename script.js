// Handle the sign-in form submission
document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from refreshing the page
   
    // Collect user inputs
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const level = document.getElementById('level').value;

    // Update the banner message
    const bannerMessage = `تم تسجيلك بنجاح! الاسم: ${firstName} ${lastName}, الطور الدراسي: ${level}`;
    document.getElementById('bannerMessage').innerText = bannerMessage;

    // Show the banner
    document.getElementById('banner').style.display = 'block';
});
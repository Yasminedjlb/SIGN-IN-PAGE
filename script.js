// Ensure a pop-up message appears on submission
document.querySelector('#registration-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('تم تسجيلك في الجمعية بنجاح');
});
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert("Login Successful!");
});
document.getElementById("clickjacking").addEventListener("click", function () {
    alert("OPPS!! Account Deleted!");
});
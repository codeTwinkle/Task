document.getElementById('signup-form').addEventListener('submit', function(event) {
	event.preventDefault();

	var email = document.getElementById('email').value;
	var password = document.getElementById('password').value;
	var confirmPassword = document.getElementById('confirm-password').value;

	if (password !== confirmPassword) {
		alert('Passwords do not match.');
		return;
	}

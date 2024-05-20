const signUpForm = document.getElementById('signUpForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');

signUpForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();
  const password = passwordInput.value.trim();
  const confirmPassword = confirmPasswordInput.value.trim();

  // Validate name
  if (!isValidName(name)) {
    alert('Name must contain only characters.');
    return;
  }

  // Validate email
  if (!isValidEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Validate phone number
  if (!isValidPhoneNumber(phone)) {
    alert('Please enter a valid 10-digit phone number.');
    return;
  }

  // Validate password
  if (password.length < 6) {
    alert('Password must be at least 8 characters long.');
    return;
  }

  // Validate password confirmation
  if (password !== confirmPassword) {
    alert('Passwords do not match.');
    return;
  }

  // Perform sign-up logic here
  console.log('Sign-up successful!');
});

function isValidName(name) {
  return /^[A-Za-z]+$/.test(name);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhoneNumber(phone) {
  return /^\d{10}$/.test(phone);
}
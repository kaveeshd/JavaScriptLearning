function frmBack() {
  location.href = 'MyProfile.html';
}

function frmSubmit() {
  var firstName = document.getElementById('form-name').value;
  var lastName = document.getElementById('form-lastName').value;
  var email = document.getElementById('form-email').value;
  var rating = document.getElementById('form-rating').value;
  var message = document.getElementById('form-message').value;

  sessionStorage.setItem('firstName', firstName);
  sessionStorage.setItem('lastName', lastName);
  sessionStorage.setItem('email', email);
  sessionStorage.setItem('rating', rating);
  sessionStorage.setItem('message', message);

  document.getElementById('feedback-form').submit(); //form submission
}

function frmLoad() {

  var firstName = sessionStorage.getItem('firstName');
  var lastName = sessionStorage.getItem('lastName');
  var email = sessionStorage.getItem('email');
  var rating = sessionStorage.getItem('rating');
  var message = sessionStorage.getItem('message');

  if (firstName && lastName && email && rating && message) {

    var htmlText = '<div class="alert alert-success border-info">' + '\n' +
      '<h4>Thank you for your feedback</h4>' + '\n' +
      '<p><strong>Name</strong> ' + firstName + ' ' + lastName + '</p>' + '\n' +
      '<p><strong>Email</strong> ' + email + '</p>' + '\n' +
      '<p><strong>Rating</strong> ' + rating + '</p>' + '\n' +
      '<p><strong>Message</strong><br /> ' + message + '\n' +
      '</div>'

    document.getElementById('messages').innerHTML = htmlText;
    sessionStorage.clear();
  }
}
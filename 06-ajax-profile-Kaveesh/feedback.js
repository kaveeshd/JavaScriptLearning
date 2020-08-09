/*
  06-ajax-profile-Kaveesh - feedback.js
  Assignment from Day 6, Fundamentals of Web Technologies workshop.

  Version 1, 2020-08-09,  DashoraK.

  This is feedback javascript which is responsible for interactions in the feedback.html
*/

//Goes back to the profile page via jQuery
$('#backButton').click(function () {
  location.href = 'index.html';
});

//Handles the submit button click via jQuery
$('#submitButton').click(function () {
  var firstName = $('#form-name').val();
  var lastName = $('#form-lastName').val();
  var email = $('#form-email').val();
  var rating = $('#form-rating').val();
  var message = $('#form-message').val();

  console.log('submit is working');
  //I thought to use sessionStorage just to experiment with the SUBMIT button
  sessionStorage.setItem('firstName', firstName);
  sessionStorage.setItem('lastName', lastName);
  sessionStorage.setItem('email', email);
  sessionStorage.setItem('rating', rating);
  sessionStorage.setItem('message', message);

  $('#feedback-form').submit(); //form submission
});

//handles the window onload function via jQuery
$(window).on('load', function () {

  //I thought to use sessionStorage just to experiment with the SUBMIT button
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

    $('#messages').html(htmlText);
    sessionStorage.clear();
  }

  // var myH2s                   = document.getElementsByTagName('h1');
  // var myPageTitle             = myH2s[0];
  //     myPageTitle.style.color = 'blue';

  // var labels = document.getElementsByTagName('label');
  // for (let index = 0; index < labels.length; index++) {
  //   labels[index].style.color = 'green';
  // }

  var labels = $('label')

  for (var label of labels) {
    label.style.fontWeight = 'bold';
  }

  Array.prototype.slice.call($('label')).map(el => el.style.color = 'blue');
});
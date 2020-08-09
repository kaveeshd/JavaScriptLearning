/*
  06-ajax-profile-Kaveesh - index.js
  Assignment from Day 6, Fundamentals of Web Technologies workshop.

  Version 1, 2020-08-09,  DashoraK.

  This javascript is responsible for loading the page information.
  By default when the user opens the page the errorJumboTron is visible. On page load if the JSON loads successfully, it will be hidden and the profileObject will be displayed.
  Individual functions in the code are responsible for loading the information in the page.
*/

//The is the profileJSON object. Change the path here to test the failure case
var profileJSON = 'profile.json';
var profileObject;

//This is the on load function which loads the profileJSON.
$(window).on('load', function () {

  $.ajax(profileJSON, {
    success: function (res) {
      console.log('JSON Load Succeeded ==> ', this, arguments);
      profileObject = arguments[0];

      try {
        $('#errorJumboTron').toggle();
        $('#profileJumboTron').toggle();

        $(document).prop('title', profileObject.name + ' Profile');
        $('#profileName').html(profileObject.name);
        $('#profileTitle').html(profileObject.title);
        $('#profilePic').attr('src', profileObject.picture);
        $('#profileFacebook').attr('href', profileObject.facebook);
        $('#profileLinkedIn').attr('href', profileObject.linkedIn);
        $('#profileEmail').attr('href', profileObject.email);
      } catch (err) {
        console.log(err);
      }

    },
    error: function () {
      console.log('JSON Load Failed ==> ', this, arguments);
    }
  });
});

//Handles the summary tab click and fills in the content
$('#tabs a[href="#summary"]').on('click', function () {
  console.log('Summary');
  var htmlText;

  try {
    var summaryObject = profileObject.profileDetails.summary;

    htmlText = '<h1><span class="badge badge-warning">' + summaryObject.tabName + '</span></h1>';

    for (var i = 0; i < summaryObject.details.length; i++) {
      htmlText += '\n<p>' + summaryObject.details[i] + '</p>'
    }
  } catch (err) {
    htmlText = '<h2 class="card-title h2 pb-2 display-3">&#128562 Unable to Load Profile &#128562</h2>';
  }

  $('#summary').html(htmlText);
  $(this).tab('show');
});

//Handles the experience tab click and fills in the content
$('#tabs a[href="#experience"]').on('click', function () {
  console.log('Experience');
  var htmlText;

  try {
    var experienceObject = profileObject.profileDetails.experience;

    htmlText = '<h1><span class="badge badge-secondary">' + experienceObject.tabName + '</span></h1>';

    for (var i = 0; i < experienceObject.details.length; i++) {
      htmlText += '\n<p>' + experienceObject.details[i].position + '</p>'
      htmlText += '\n<p>' + experienceObject.details[i].year + '</p>\n<br />'
    }
  } catch (err) {
    htmlText = '<h2 class="card-title h2 pb-2 display-3">&#128562 Unable to Load Profile &#128562</h2>';
  }

  $('#experience').html(htmlText);
  $(this).tab('show');
});

//Handles the education tab click and fills in the content
$('#tabs a[href="#education"]').on('click', function () {
  console.log('Education');
  var htmlText;

  try {
    var educationObject = profileObject.profileDetails.education;

    htmlText = '<h1><span class="badge badge-success">' + educationObject.tabName + '</span></h1>';

    htmlText += '\n<table class="table table-hover table-bordered">';
    htmlText += '\n  <thead class="thead-dark">';
    htmlText += '\n    <tr>';
    htmlText += '\n      <th scope="col">Institution</th>';
    htmlText += '\n      <th scope="col">Degree</th>';
    htmlText += '\n      <th scope="col">Specialization</th>';
    htmlText += '\n      <th scope="col">Year</th>';
    htmlText += '\n      <th scope="col">Percentage</th>';
    htmlText += '\n    </tr>';
    htmlText += '\n  </thead>';
    htmlText += '\n  <tbody>';

    for (var i = 0; i < educationObject.details.length; i++) {
      htmlText += '\n    <tr>';
      htmlText += '\n      <td>' + educationObject.details[i].institution + '</td>';
      htmlText += '\n      <td>' + educationObject.details[i].degree + '</td>';
      htmlText += '\n      <td>' + educationObject.details[i].specialization + '</td>';
      htmlText += '\n      <td>' + educationObject.details[i].year + '</td>';
      htmlText += '\n      <td>' + educationObject.details[i].percentage + '</td>';
      htmlText += '\n    </tr>';
    }

    htmlText += '\n  </tbody>';
    htmlText += '\n</table>';
  } catch (err) {
    htmlText = '<h2 class="card-title h2 pb-2 display-3">&#128562 Unable to Load Profile &#128562</h2>';
  }

  $('#education').html(htmlText);
  $(this).tab('show');
});

//Handles the skills tab click and fills in the content
$('#tabs a[href="#skills"]').on('click', function () {
  console.log('Skills');
  var htmlText;

  try {
    var skillsObject = profileObject.profileDetails.skills;
    htmlText = '<h1><span class="badge badge-primary">' + skillsObject.tabName + '</span></h1>';

    for (let i = 0; i < skillsObject.details.length; i++) {
      htmlText += '\n<p><strong>' + skillsObject.details[i].skillType + ':</strong> ' + skillsObject.details[i].value + '</p>';
    }
  } catch (err) {
    htmlText = '<h2 class="card-title h2 pb-2 display-3">&#128562 Unable to Load Profile &#128562</h2>';
  }

  $('#skills').html(htmlText);
  $(this).tab('show');
});
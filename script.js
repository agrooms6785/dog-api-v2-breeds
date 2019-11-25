//this is my local js file
'use strict'


//this function handles the display of dog images in the DOM
function displayResults(responseJson, breed) {
  console.log(responseJson.message)
  if (responseJson.message === "Breed not found (master breed does not exist)") {
        $('.results').append(`<h2>Breed not found; please try again.`)
    }
    else if (responseJson.message === "Breed not found (sub breed does not exist)") {
          $('.results').append(`<h2>Sub-breed not found; please try again.`)
    }
    else {
        $('.results').append(`<h2>Here's a picture of a ${breed}: </h2>
        <img src="${responseJson.message}" class=results-img>`)
    }
}

//this function gets the random dog image, then displays in the DOM
//it also handles the catch error
function getDogImage(breed) {
  console.log('`getDogImage` ran')
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson, breed))
    .catch(error => alert('Oops! Something went wrong. Try again later!'))
}


//this function handles the submit
function submitForm() {
  $('.js-submit-button').on('submit', function(event)  {
    event.preventDefault()
    let breed = $('input').val().toLowerCase()
    // let updatedBreed = encodeURI(breed)
    console.log(breed)
    $('.results').empty()
    getDogImage(breed)
  })
}

// Shorthand for $( document ).ready()
$(function() {
    console.log( "your app has loaded!" )
    submitForm()
})

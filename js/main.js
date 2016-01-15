$(document).ready(function(){

  // Initialize Parse with your Parse application & javascript keys
  Parse.initialize("fe50rfKZvPJARdcqFrDRRs77qaudvQGPU5JyMd0L", "Er5TBVwLJAOuSOaL6kjslLZTgVD6pSzNqWGGcEAe");

  // Setup the form to watch for the submit event
  $('#umzug_erfassen').submit(function(e){
    e.preventDefault();

    // Grab the elements from the form to make up
    // an object containing name, email and message
    var data = { 
      site: "pickito.de", 
      subject: "Neuer Umzug",
      date: document.getElementById('date').value ,
      size: document.getElementById('size').value ,
      numberOfPersons: document.getElementById('numberOfPersons').value ,
      fromStreet: document.getElementById('fromStreet').value ,
      fromZip: document.getElementById('fromZip').value,
      fromCity: document.getElementById('fromCity').value, 
      toStreet: document.getElementById('toStreet').value ,
      toZip: document.getElementById('toZip').value,
      toCity: document.getElementById('toCity').value, 
      email: document.getElementById('email').value
    }
    
    // Run our Parse Cloud Code and 
    // pass our 'data' object to it
    Parse.Cloud.run("sendEmail", data, {
      success: function(object) {
        $('#response').html('Email sent!').addClass('success').fadeIn('fast');
      },

      error: function(object, error) {
        console.log(error);
        $('#response').html('Error! Email not sent!').addClass('error').fadeIn('fast');
      }
    });
  });

});
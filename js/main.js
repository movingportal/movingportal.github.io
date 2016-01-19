$(document).ready(function() {

    // Initialize Parse with your Parse application & javascript keys
    Parse.initialize("fe50rfKZvPJARdcqFrDRRs77qaudvQGPU5JyMd0L", "Er5TBVwLJAOuSOaL6kjslLZTgVD6pSzNqWGGcEAe");

    // Setup the form to watch for the submit event
    $('#umzug_erfassen').submit(function(e) {
        e.preventDefault();

        // Grab the elements from the form to make up
        // an object containing name, email and message
        var data = {
            site: "pickito.de",
            subject: "Neuer Umzug",
            sender: "Jens Laufer <jens.laufer@pickito.de>",
            Empfaenger: document.getElementById('email').value,
            Datum: document.getElementById('date').value,
            Groesse: document.getElementById('size').value,
            AnzahlPersonen: document.getElementById('numberOfPersons').value,
            Von: {
                Strasse: document.getElementById('fromStreet').value,
                Plz: document.getElementById('fromZip').value,
                Stadt: document.getElementById('fromCity').value
            },
            Nach: {
                Strasse: document.getElementById('toStreet').value,
                Plz: document.getElementById('toZip').value,
                Stadt: document.getElementById('toCity').value
            }
        }

        Parse.Cloud.run("handle", data, {
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
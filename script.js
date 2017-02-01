$(document).ready(function() {
    // the rest of your javascript must go in here

    $("#giphy").submit(function(event) {
        // everything you want to happen *after* the form is submitted must go in here
        event.preventDefault() ;
        var query= $("#query").val();
        console.log(query);
    });


});

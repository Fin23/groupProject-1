// Get the modal

 $(window).on('load', function () {



//  $(document).on('click', function () {

  $('#reg-link').on('click', function (evt){
    evt.preventDefault()
    console.log('i see you');
    $('#myModal').modal('hide');
     $('#loginModal').modal('show');
  })

    $('#registerModal').modal('show');

    var modal = document.getElementById("registerModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");
    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    // When the user clicks the button, open the modal 
    // btn.onclick = function() {
    //   modal.style.display = "block";
    // }
    
    // When the user clicks on <span> (x), close the modal
    // span.onclick = function() {
    //   modal.style.display = "none";
    // }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }

}


});
$('#submit-acct-btn').on('click', function (){
    $('#registerModal').modal('hide');
})



// });
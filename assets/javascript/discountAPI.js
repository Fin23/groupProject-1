$('#submit-business-btn').on('click', function (event) {

var apiKey = "vuyUpTVc";
var searchTerm = $('#search_value').val().trim();
searchTerm = searchTerm.toLowerCase();
var category = "";
// $("select.selectpicker").change(function () {
    category = $('.selectpicker').children("option:selected").val().toLowerCase().replace(/\s+/g, '-');
    // .split('&').join('_')
console.log(category);
// })

var numOfDeals = 0
// $("select.dealpicker").change(function () {
    numOfDeals = $('.dealpicker').children("option:selected").val();
// })
console.log(numOfDeals);
var queryURL = "https://api.discountapi.com/v2/deals?&query=" + searchTerm + "&api_key=" + apiKey + "&category_slugs=" + category + "&per_page=" + numOfDeals;




    // $('#submit-business-btn').on('click', function (response) {
        event.preventDefault();
        console.log(queryURL);
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

        console.log(category);
        console.log(response);
        console.log(queryURL);

        console.log('hi2');
        
        // console.log(response.deals);
        // console.log(response.deals[0].deal);
        //  console.log(response.deals[6].deal.merchant.postal_code);
        // console.log(response.deals[6].deal.category_name);
        // var searchTerm = $('#search_value').val().trim().toLowerCase();
        // searchTerm = searchTerm.toLowerCase();
        console.log(searchTerm);
        console.log(category);
        console.log(numOfDeals);
        // queryURL = "https://api.discountapi.com/v2/deals?&query=" + searchTerm + "&api_key=" + apiKey + "&category_slugs=" + category + "&per_page=" + numOfDeals;
        console.log(queryURL);
        console.log(response);

        //Appending results business-search-results class
        //create an element to have the title displayed

        


        for (var i = 0; i < response.deals.length; i++) {
            var title= response.deals[i].deal.title;
            
            // console.log('lets see....');
            // console.log(response);


        var titlePlaceholder = $('<p>').text('Title: '+ title);
        $(".business-search-results").append(titlePlaceholder);

        

       

        }
        for (var x= 0; x < response.deals.length; x++) {
            var link= response.deals[x].deal.url;
            console.log('this is link ' +link);

            var urlPlaceholder = $('<p>').text('Link: '+ link);
            $("#urllink").append(urlPlaceholder);

        }


    })



});
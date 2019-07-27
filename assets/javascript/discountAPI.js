var apiKey = "vuyUpTVc";
var searchTerm = $('#search_value').val().trim();
var category="";
$("select.selectpicker").change(function () {
    category = $(this).children("option:selected").val().toLowerCase().replace(/\s+/g, '-');

})
var numOfDeals= 0
$("select.dealpicker").change(function () {
    numOfDeals= $(this).children("option:selected").val();
})
console.log(numOfDeals);
var queryURL = "https://api.discountapi.com/v2/deals?&query=" + searchTerm + "&api_key=" + apiKey + "&category_slugs=" + category;
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {

   
    $('#submit-business-btn').on('click', function (event) {
        event.preventDefault();

        console.log(category);

        console.log('hi2');
        console.log(response);
        console.log(response.deals);
        console.log(response.deals[0].deal);
        console.log(response.deals[6].deal.merchant.postal_code);
        console.log(response.deals[6].deal.category_name);
        var searchTerm = $('#search_value').val().trim().toLowerCase();
        searchTerm= searchTerm.toLowerCase();
        console.log(searchTerm);
        console.log(category);
        console.log(numOfDeals);
        var queryURL = "https://api.discountapi.com/v2/deals?&query=" + searchTerm + "&api_key=" + apiKey + "&category_slugs=" + category + "&per_page=" +numOfDeals;
        console.log(queryURL);

        //appending results business-search-results class
       

    })

});
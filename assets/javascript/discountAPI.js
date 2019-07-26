// $('document').on('click', function (){
// function buildQueryURL() {
// var queryURL = "https://api.discountapi.com/v2/deals?api_key=eVYvrvli";
// var queryParams= {}

// queryParams.q= $("#search_value").val().trim();
// console.log(queryParams.q);

// queryParams.zipCode = $("#postalcode").val().trim();
// console.log(queryParams.zipCode);

// queryParams.category = $("#category_list option").val().trim();
// queryParams.categories = $("#category_list option").val().trim();

// console.log("---------------\nURL: " + queryURL + "\n---------------");
// console.log(queryURL + $.param(queryParams));
// return queryURL + $.param(queryParams);

// }


// function updatePage(discountData) {

//     var numDiscountDeals= $('#deal-count').val();
//     console.log(discountData);
//     console.log("------------------------------------");

// for (var i=0; i < numDiscountDeals; i++){
//     var deal = discountData.response.docs[i]; }





// }

//     var apiKey= "vuyUpTVc";
//     var queryURL= "https://api.discountapi.com/v2/deals?api_key=" + apiKey;
//     // var zipcode= response.deals[i].deal.merchant.postal_code

//     var queryParams = {};
//      //create varaibles for the inputs on the form
//     var searchTerm= $('#search_value').val().trim();

//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then (function (response) {
        
//         // $('#submit-business-btn"').on('click', function (){

//        console.log('hi2');
//         console.log(response);
//         console.log(response.deals);
//         console.log(response.deals[0].deal);
//         console.log(response.deals[0].deal.image_url);
//         console.log(response.deals[0].deal.short_title);
//     })


var discount = {
	url: "https://api.discountapi.com/v2/deals/?query=",
	getCoupons: function (searchTerm) {
		$.ajax({
			url: this.url + searchTerm + "&category_slugs=audio,automotive,beauty_health,crafts_hobbies,electronics,fashion_accessories,fitness_product,food_alcohol, gifts,home_goods,kitchen,luggage,mens_fashion,mobile,movies_music_games,office_supplies,product,tools,toys,women_fashion",
			method: "GET",
		}).then(function (response) {
			console.log(response);
			$("#discount-container").append("<p>" + 'Check out this (somewhat) related coupon! - ' + response.deals[0].deal.merchant.name + "</p>");
			$("#discount-container").append("<a href='" + response.deals[0].deal.url + "'><img src='" + response.deals[0].deal.image_url + "' /> </a>");
			
			if (searchTerm === ""){
				$("#discount-container").empty()
			}
		})
			.catch(function (error) {
				console.log(error);
			})
	}
};
$('#submit-business-btn').on('click', function () {
    event.preventDefault();
    // var queryURL= buildQueryURL();
    // $.ajax({
    //     url: queryURL,
    //     method: "GET"
    //   }).then(updatePage);
    // updatePage();
})
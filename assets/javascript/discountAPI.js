// $('document').on('click', function (){


// function businessResults () {
    var apiKey= "vuyUpTVc";
    var queryURL= "https://api.discountapi.com/v2/deals?api_key=" + apiKey;
    var zipcode= response.deals[i].deal.merchant.postal_code

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then (function (response) {
        
        // $('#submit-business-btn"').on('click', function (){

       console.log('hi2');
        console.log(response);
        console.log(response.deals);
        console.log(response.deals[0].deal);
        console.log(response.deals[6].deal.merchant.postal_code);
    })
    // });
// }

// businessResults();
// })
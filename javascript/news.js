
$(document).ready(function(){
$("#searchbtn").on("click", function(e){
e.preventDefault();

let query = $("#searchquery").val();
let url = "https://newsapi.org/v2/everything?q="+query+"domains=wsj.com&apiKey=9a1aa1cc59c9499790a0a0882960d673";
console.log(url);

if(query !==""){
    
 $.ajax({


     url:url,
     method:"GET",
     dataType:"json",


     beforSend: function(){
            $("#loader").show();
     },
complete: function(){
    $("#loader").hide();
},
success: function(news){
console.log(news);
},
error: function(){
    console.log("error");
}
 })

}else{
    console.log("please enter something")
}
});

});




 
    
//google news api
//apikey=9a1aa1cc59c9499790a0a0882960d673

//civicFeed api
//"https://api-beta.civicfeed.com/news/search?q="+query+"&apiKey=IUc327VfgV8wXOBxEmFge7BZplpHPmhF7sFDC5rV";

 

// $.ajax({
//     url:queryURL,
//     method:"GET"
// })



// //end of document.ready fn.
// });


$(document).ready(function(){
    //sets location data to the html page
    var getLocation =document.getElementById('news_by_location');
    getLocation.addEventListener('click', evt=>{
        //checks to see if geolocation is possible on machine
        if('geolocation' in navigator){
            console.log('geolocation available');
            navigator.geolocation.getCurrentPosition(position => {
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;
                document.getElementById('latitude').textContent = lat;
                document.getElementById('longitude').textContent = lon;
                //google maps api
                let maps =`https://maps.googleapis.com/maps/api/js?center=${latitude},${longitude}key=AIzaSyCsd1F-SULT6cPi_UjGgZMbSOfSpWO90MM&callback=initMap`;
                const mapImg = document.getElementById("mapImg");
                mapImg.src = maps;
                console.log(position);
            });
        }else{
            console.log('geo not available')
        }
    });
    //start of the search button functions, can either type in the search query text box or the census text box
    $("#searchbtn").on("click", function(e){
    e.preventDefault();
    
    let query = $("#searchquery").val();
    let queryName= $("#searchquery_census").val();
    console.log(queryName);

  
//census api
let url1 =  `https://api.census.gov/data/2017/acs/acs5/profile?get=DP04_0001E,NAME&for=county%20subdivision:*&in=state:${queryName}&key=1fd063357ec31ee10c8e966bcb0ccff98c9edc33`;
//main news api
    let url = "https://newsapi.org/v2/top-headlines?q="+query+"&apiKey=9a1aa1cc59c9499790a0a0882960d673";
    console.log(url, url1);


  
    
    if(query !==""){
        
     $.ajax({
         url:url, url1,
         method:"GET",
         dataType:"json",
         
//creates a little animated loading bar under the search area 
         beforeSend: function(){
                $("#loader").show();
         },
    complete: function(){
        $("#loader").hide();
    },
    success: function(news){
    console.log(news);
        let output = "";
        let latestNews = news.articles;
    
    for(var i in latestNews){
        output += `
       <div class="border1" style= 'font-size: 20px;'>
      <p> <img src="${latestNews[i].urlToImage}" <div style = 'height:120px; width:170px;'></img>
        ${latestNews[i].title}
       
        ${latestNews[i].description}
        <br>
       Source: ${latestNews[i].source.name}
        <br>
        Publish on: ${latestNews[i].publishedAt}
        <br>
        <a href="${latestNews[i].url}" class ="btn"> Read some news</a></p>
       </div>
        `;
    }
    if(output !== ""){
        $("#recent_news").html(output);
        M.toast({
            html: " you did it, good job....",
            classes: 'blue'
        });

    }else{
        let NewsNotFound = "This news isn't available.";
        $("#recent_news").html("<div style = ' font-size:40px; text-align:center;'>"+ NewsNotFound+"</div>");
        
    }
    },
    error: function(){
        console.log("error");
    }
     });
    
    }else{
        console.log("please enter something");
    }
    });
    
    });
    
    
    
    
     
        
    
    
    
      //civicFeed api
    //let url = "https://api-beta.civicfeed.com/legislation/metadata accept: application/json X-API-KEY: IUc327VfgV8wXOBxEmFge7BZplpHPmhF7sFDC5rV";
     
//<img src="${latestNews[i].urlToImage}"></img>    and <p>${latestNews[i].content}</p>   <div class="six">
//col 16 m6 s12  
//api notes currently using news api 
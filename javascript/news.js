
$(document).ready(function(){
    $("#searchbtn").on("click", function(e){
    e.preventDefault();
    
    let query = $("#searchquery").val();
    let url = "https://newsapi.org/v2/top-headlines?q="+query+"&country=us&category=business&apiKey=9a1aa1cc59c9499790a0a0882960d673";
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
     let output = "";
    let latestNews = news.articles;
    
    for(var i in latestNews){
        output += `
        <h4>${latestNews[i].title}</h4>
        <img src="${latestNews[i].urlToImage}">
        <p>${latestNews[i].description}</p>
        <p>${latestNews[i].content}</p>
        <p>Publish on: ${latestNews[i].publishedAt}</p>
        <a>${latestNews[i].url}</a>
        `;
    }
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
    //let url = "https://api-beta.civicfeed.com/codify/search?&apiKey=IUc327VfgV8wXOBxEmFge7BZplpHPmhF7sFDC5rV";
    
     

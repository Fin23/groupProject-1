
$(document).ready(function(){
    $("#searchbtn").on("click", function(e){
    e.preventDefault();
    
    let query = $("#searchquery").val();
    //civicFeed api
    //let url = "https://api-beta.civicfeed.com/legislation/metadata accept: application/json X-API-KEY: IUc327VfgV8wXOBxEmFge7BZplpHPmhF7sFDC5rV";

    let url = "https://newsapi.org/v2/top-headlines?q="+query+"&apiKey=9a1aa1cc59c9499790a0a0882960d673";
    console.log(url);

  
    
    if(query !==""){
        
     $.ajax({
         url:url,
         method:"GET",
         dataType:"json",
         

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
    
    
    
    
     
        
    
    
    
    
     
//<img src="${latestNews[i].urlToImage}"></img>    and <p>${latestNews[i].content}</p>   <div class="six">
//col 16 m6 s12  
//api notes currently using news api 
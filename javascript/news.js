
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
        <div class="five2">
        <h4>${latestNews[i].title}</h4>
        
        <p>${latestNews[i].description}</p>
        <p>${latestNews[i].content}</p>
        <p>Publish on: ${latestNews[i].publishedAt}</p>
        <a href="${latestNews[i].url}" class ="btn"> Read some news</a>
       </div>
        `;
    }
    if(output !== ""){
        $("#recent_news").html(output);
        M.toast({
            html: "there you go, nice reading",
            classes: 'green'
        })

    }else{
        let NewsNotFound = "This news isn't available.";
        $("#recent_news").html("<div style = ' font-size:40px; text-align:center;'>"+ NewsNotFound+"</div>")
        
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
    
     
//<img src="${latestNews[i].urlToImage}"></img>    col 16 m6 s12
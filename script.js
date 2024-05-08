//date: 2022.11.21
//author: april harris
//re: AOT Demo Project GIF Generator

document.addEventListener('keydown', ({key}) => key === 'Enter' && fetchGifs());

  function fetchGifs() {
  
  $("#gifResults").text("");
  let searchInput = $(".searchQ").val();
  let request = new XMLHttpRequest();
  let url = "https://api.giphy.com/v1/gifs/search?q="+searchInput+"&api_key=7gwFD7V7ijHhYad76xl9E5k6YtbwO7T6";

  request.open("GET", url, true);

  request.onload = function() {

    let res = JSON.parse(this.response); 
    
    if (request.status >= 200 && request.status < 400) {

      
      for (let gif = 0; gif < 10; gif++) {
        
        $("#gifResults").append(`<img class="p-3 img-fluid" src=  ${res.data[gif].images.downsized_large.url} >`);
   
      }  

    }

    
  }

  //OPTIONAL
  
  let newRequest = new XMLHttpRequest();
  let newUrl = "https://api.adviceslip.com/advice/search/"+searchInput;
  newRequest.open("GET", newUrl, true);
  newRequest.onload = function generateAdvice() {

    let newRes = JSON.parse(this.response);
    if (newRequest.status >= 200 && newRequest.status < 400) {
      let resAdv = newRes.slips[0].advice;
      console.log(resAdv);
      $("#advice").text(resAdv);
    }

    
  };
  
  

  request.send();
  newRequest.send();
}




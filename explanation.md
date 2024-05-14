1. Clear Previous Search Results:


$("#gifResults").text("");

This line of code uses jQuery to find the element with the ID "gifResults" and clears its content. This ensures that any previous search results are removed before displaying new ones.

2. Get Search Query:

let searchInput = $(".searchForm").val();

This line retrieves the value of the input field with the class "searchForm", this is the input group (text field) where the user has entered their search term

3. Construct API Request URL:

let url = "https://api.giphy.com/v1/gifs/search?q=" + searchInput + "&api_key=7gwFD7V7ijHhYad76xl9E5k6YtbwO7T6";

Make sure you have your GIPHY API. The GIPHY API requires an API key for authentication. We customize the URL for the GIPHY API by combining the user's search query and (your) API key.

4. Create XMLHttpRequest Object:

let request = new XMLHttpRequest();

This line initiates our XMLHttpRequest object. This will be used to make the HTTP request to the GIPHY API.

5. Open GET Request to GIPHY API:



request.open("GET", url, true);

This line initializes a GET request to the URL constructed in step #3. The third parameter (true) specifies that the request should be asynchronous.

6. Define Request Completion Handler:

request.onload = function() {
    // Parse the JSON response
    let res = JSON.parse(this.response);
    // Check if the request was successful
    if (request.status >= 200 && request.status < 400) {
        // Loop through the first 10 GIFs in the response and append them to the page
        for (let gif = 0; gif < 10; gif++) {
            $("#gifResults").append(`<img class="p-3 img-fluid" src="${res.data[gif].images.downsized_large.url}">`);
        }
    }
};

This code defines a function to be executed when the request completes. It first parses the JSON response received from the GIPHY API. Then, it checks if the request was successful (status code between 200 and  up to and including 399). If successful, it iterates over the first 10 GIFs in the response and appends them to the element with the ID "gifResults" on the page.

7. Send Request:

    request.send();

    Finally, this line sends the HTTP request to the GIPHY API.

Overall, this function fetches GIFs from the GIPHY API based on the user's input, dynamically adds them to the page, and handles any errors that may occur during the request.
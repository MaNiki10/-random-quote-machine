const quoteText = document.querySelector(".quote"),
quoteBtn = document.querySelector("button"),
authorName = document.querySelector("name"),
twitterBtn = document.querySelector("twitter"),
tumblrBtn = document.querySelector("tumblr"),
facebook = document.querySelector("facebook");

function randomQuote(){
	quoteBtn.classList.add("loading");
	quoteBtn.innerText = "Loading Quote...";

	fetch("http://api.quotable.io/random").then(response=> response.json()).then(result =>{
		quoteText.innerText = result.content;
		authorName.innerText = result.author;
		quoteBtn.classList.remove("loading");
		quoteBtn.innerText = "New Quote";
	});
}

twitterBtn.addEventListener("click", ()=>{
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetUrl, "_blank");
});
quoteBtn.addEventListener("click", randomQuote);
        


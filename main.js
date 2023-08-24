//console.log('hello');
// url : https://www.reddit.com/r/Art.json


RedditService.getRedditData()
.then(data=>displayRedditPost(data))
.catch(error=>console.log(error))


function displayRedditPost(posts){
    console.log(posts)
}

// const service = new RedditService()

// service.getRedditData2()
//console.log('hello');
// url : https://www.reddit.com/r/Art.json


RedditService.getRedditData()
.then(childrenArray => displayRedditPost(childrenArray))
.catch(error=>console.log(error))


function displayRedditPost(childrenArray){
    console.log(childrenArray)
    const postList = document.getElementById('postList');
    postList.innerHTML = '';
    for (let i = 0; i < childrenArray.length; i++) {
        const post = childrenArray[i]; 
        const postListElement = document.createElement('li');
        postListElement.classList.add('postcard')

        const postTitleH3 = document.createElement('h3');
        const postAuthorP = document.createElement('p');
        const postScoreSpan = document.createElement('span');

        const titleNode = document.createTextNode(post.title);
        const authorNode = document.createTextNode(post.author);
        const scoreNode = document.createTextNode(post.score);

        postTitleH3.appendChild(titleNode);
        postAuthorP.appendChild(authorNode);
        postScoreSpan.appendChild(scoreNode );


        postListElement.appendChild(postTitleH3);
        postListElement.appendChild(postAuthorP);
        postListElement.appendChild(postScoreSpan);

        postList.appendChild(postListElement);
}
}

// const service = new RedditService()

// service.getRedditData2()
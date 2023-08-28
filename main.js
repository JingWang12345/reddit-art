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
        const postCreatedP = document.createElement('p');
        const postScoreSpan = document.createElement('span');
        const postUrlImg = document.createElement('img');
        

        const titleNode = document.createTextNode(post.title);
        const authorNode = document.createTextNode(post.author);
        const createdNode = document.createTextNode(post.created);
        const scoreNode = document.createTextNode(post.score);
        const urlNode = document.createTextNode(post.url);

        postTitleH3.appendChild(titleNode);
        postAuthorP.appendChild(authorNode);
        postCreatedP.appendChild(createdNode);
        postScoreSpan.appendChild(scoreNode);
        postUrlImg.appendChild(urlNode);


        postListElement.appendChild(postTitleH3);
        postListElement.appendChild(postAuthorP);
        postListElement.appendChild(postScoreSpan);
        postListElement.appendChild(postUrlImg);
        postListElement.appendChild(postCreatedP);

        postList.appendChild(postListElement);
}
}

// const service = new RedditService()

// service.getRedditData2()



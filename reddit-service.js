class RedditService{

    constructor(){}

    static getRedditData(){
        return fetch('https://www.reddit.com/r/Art.json')
        .then( resp => resp.json())
        .then( json => this.parseData(json))
        // .then( data => console.log(data))
        // .catch( error => console.log(error))
    }

    static parseData(json){
        console.log(json)
        const data = json.data;
        console.log(data);
        const children = data.children;
        console.log(children);

        const childrenArray=[]

        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            console.log(child);
            const childData = child.data;

            const childObject= {
                title: childData.title,
                url: childData.url,
                author: childData.author,
                score: childData.score,
                created: childData.created
            }
            childrenArray.push(childObject)
            
        }


        return childrenArray;
    }

    // getRedditData2(){
    //     fetch('https://www.reddit.com/r/Art.json')
    //     .then( resp => resp.json())
    //     .then( data => console.log(data))
    //     .catch( error => console.log(error))
    // }
}
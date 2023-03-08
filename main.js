
const posts=['POST 1'];

function createPost(){
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push( 'POST 2');
            resolve(posts);
        }, 2000)
    }) 
}
function deletePost(){
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.pop();
            resolve();
            console.log(posts);
        }, 2000)
    }) 
}
const user={
    username: 'restin',
    lastactivityTime:'08 th March'
}

function updateLastUserActivityTime(){
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            user.lastactivityTime=new Date().getTime();
            resolve(user.lastactivityTime);
        }, 1000)
    }) 
}


function userupdateapost(){
    Promise.all([createPost(),updateLastUserActivityTime()])
    .then(([createPostresolves,updateLastUserActivityTimeresolves])=>{
        console.log(createPostresolves,updateLastUserActivityTimeresolves);
    })
    
}
userupdateapost();
deletePost();

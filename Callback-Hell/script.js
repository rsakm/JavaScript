


function makeHttpRequest(method, url,callback){

    const xhr = new XMLHttpRequest()
xhr.responseType = 'json'
xhr.addEventListener('load', () => {
  callback(xhr.response);
})

xhr.open(method,url);
xhr.send();

}

makeHttpRequest('GET', 'https://dummyjson.com/users', (usersData)=>{
    console.log(usersData);
    makeHttpRequest('Get', `https://dummyjson.com/posts/user/${usersData.users[0].id}`,(PostsData)=>{
      // console.log(data);
      makeHttpRequest('Get', `https://dummyjson.com/comments/post/${PostsData.posts[0].id}`,(commentsData)=>{
        console.log(commentsData)
      });
    });
});
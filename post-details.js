
let url = new URL(location.href);
let post = url.searchParams.get('post');

fetch('https://jsonplaceholder.typicode.com/posts/' + post)
    .then(value => value.json())
    .then(postsAll => console.log(postsAll))

fetch('https://jsonplaceholder.typicode.com/posts/' + post)
    .then(value => value.json())
    .then(post => {
        for (const postDetail in post) {
            let postParam = document.createElement('div');
            postParam.classList.add('postParam')
            let postInfo = document.querySelector('.postInfo');
            postParam.innerHTML = `${postDetail} : ${post[postDetail]}`;
            postInfo.appendChild(postParam);
        }
    });

fetch('https://jsonplaceholder.typicode.com/posts/' + post + '/comments')
    .then(value => value.json())
    .then(comments => console.log(comments));

fetch('https://jsonplaceholder.typicode.com/posts/' + post + '/comments')
    .then(value => value.json())
    .then(comments => {
        let postComments = document.querySelector('.postComments');
        for (let i = 0; i< comments.length; i++){

            let comment = document.createElement('div');
            comment.classList.add('comment');
            let commentId = document.createElement('div');
            let commentName = document.createElement('div');
            let commentEmail = document.createElement('div');
            let commentBody = document.createElement('div');
            commentId.innerHTML = `id: ${comments[i].id}`
            commentName.innerHTML = `Name: ${comments[i].name}`
            commentEmail.innerHTML = `Email: ${comments[i].email}`
            commentBody.innerHTML = `comment: ${comments[i].body}`
            comment.append(commentId,commentName,commentEmail,commentBody);
            postComments.appendChild(comment);
        }
    })
fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        for (let i = 0; i < users.length; i++) {
            const user = users[i];
            let container = document.getElementById('container');
            let userDiv = document.createElement('div');
            userDiv.classList.add('userBlock');

            let userId = document.createElement('div');
            let userName = document.createElement('div');
            userId.classList.add('userId');
            userName.classList.add('userName');
            userId.innerHTML = `USER ${user.id}`;
            userName.innerHTML = `${user.name}`;
            userDiv.append(userId,userName);

            let button = document.createElement('button');
            button.classList.add('userDetails');
            let a = document.createElement('a');
            a.href = 'user-details.html?id=' + JSON.stringify(user.id)
            button.innerHTML = 'User Details';
            userDiv.appendChild(a);
            a.appendChild(button);
            container.appendChild(userDiv);
        }
    })

setTimeout(function () {

    let ad = document.createElement('div');
    // let container = document.querySelector('#container');
    document.body.appendChild(ad)
    ad.classList.add('ad');
    ad.innerHTML = 'REKLAMA'
    let buttonCloseAd = document.createElement('button');
    buttonCloseAd.addEventListener('click',function (ev) {
        ad.setAttribute('class','close')
    })
    let i = document.createElement('i');
    i.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    buttonCloseAd.appendChild(i);
    let video = document.createElement('video');
    video.setAttribute('autoplay','autoplay')
    video.innerHTML = "<source src=\"images/videoplayback.mp4\" type=\"video/webm\">"

    ad.append(buttonCloseAd,video);

},1000);


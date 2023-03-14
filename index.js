fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        for (let i = 0; i < users.length; i++) {
            const user = users[i];
            let container = document.getElementById('container');
            let userDiv = document.createElement('div');
            userDiv.classList.add('userBlock');

            let userInfo = document.createElement('div');
            userInfo.innerHTML = `${user.id} --- ${user.name}`;
            userDiv.append(userInfo);

            let button = document.createElement('button');
            let a = document.createElement('a');
            a.href = 'user-details.html?id=' + JSON.stringify(user.id)
            // a.setAttribute('target','_blank');
            button.innerHTML = 'User Details';
            userDiv.appendChild(a);
            a.appendChild(button);
            container.appendChild(userDiv);
        }
    })


import { useState } from "react";

function Github() {
    const username = 'Rayuga2000';
    const url = `https://api.github.com/users/${username}`;

    const [name, setName] = useState()
    const [image,setImage]=useState()
    const [repo,setRepo]=useState()
    
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            // Access personal details from data object
            // console.log('Username:', data.login);
            setName(data.name)
            // console.log('Name:', name);
            // console.log('Bio:', data.bio);
            // console.log('Location:', data.location);
            setRepo(data.public_repos)
            // console.log('Public Repos:', public_repos);
            // console.log('Followers:', data.followers);
            // console.log('Following:', data.following);
            setImage(data.avatar_url)
            // console.log('Profile Image:', avatar_url);
        })
        .catch(error => console.error('Error fetching data:', error));
    return (
    <section className='card-github'>
          <img src={image} className="rounded-[50%]" width="128px" alt="" />
          <h1 className="heading">{name}</h1>
          <p>Public Repos: {repo}</p>
          <button>Follow on Github</button>
    </section>
  )
}

export default Github

import { useState } from "react";

function Github() {
    const username = 'Rayuga2000';
    const url = `https://api.github.com/users/${username}`;

    const [name, setName] = useState()
    const [image, setImage] = useState()
    const [location, setLocation] = useState()
    // const [bio,setBio]=useState()
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
            // setBio(data.bio)
            // console.log('Bio:', data.bio);
            setLocation(data.location)
            console.log('Location:', data.location);
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
          <img src={image} width="128px" alt="" />
            <h1>{name}</h1>
            <p className="text-sm mt-[-25%]">[ {location} ]</p>
            {/* <p className="text-sm text-center">{bio}</p> */}
            <p>Public Repos: {repo}</p>
          <button>Follow on Github</button>
    </section>
  )
}

export default Github

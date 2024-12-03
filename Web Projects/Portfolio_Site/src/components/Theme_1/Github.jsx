import { useEffect, useId, useState } from "react";

function Github() {
    const username = 'Rayuga2000';
    const gitURL = `https://api.github.com/users/${username}`;
    const gitFollowingURL = gitURL + "/following"
    // console.log(gitFollowingURL);

    const [name, setName] = useState()
    const [image, setImage] = useState()
    const [location, setLocation] = useState()
    const [repo, setRepo] = useState()
    const [following, setFollowing] = useState([])

    useEffect(() => {        
        fetch(gitFollowingURL)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                setFollowing(data)
                // console.log('Follow',following);
            })
            .catch(error => console.error('Error fetching data:', error))
        
        fetch(gitURL)
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
                setRepo(data.public_repos)
                // console.log('Public Repos:', public_repos);
                // console.log('Followers:', data.followers);
                // console.log('Following:', data.following);
                setImage(data.avatar_url)
                // console.log('Profile Image:', avatar_url);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [])

    return (
    <section className='card-github'>
        <img src={image} width="128px" alt="" />
        <h1>{name}</h1>
        <p className="text-sm">[ {location} ]</p>
        {/* <p className="text-sm text-center">{bio}</p> */}
        <p className="border-b-2 border-b-cyan-400">Following</p>
        <span className="text-white/50">
            {following.map((item,i) => (
                <p key={i} className="text-sm text-center">{item.login}</p>
            ))}
        </span>
        <p>Public Repos: {repo}</p>
        <button onClick={() => window.open('https://github.com/Rayuga2000','_blank')}>Follow on Github</button>
    </section>
  )
}

export default Github

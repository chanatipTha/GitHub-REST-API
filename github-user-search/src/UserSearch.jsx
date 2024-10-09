import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import './UserSearch.css';

const UserSearch = () => {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);
    const [repos, setRepos] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "REST API GITHUB";
    }, []);

    const searchUser = async () => {
        setError(null);
        setUserData(null);
        setRepos([]);

        if (!username) {
            setError('Please enter a username');
            return;
        }

        try {
            const userResponse = await fetch(`https://api.github.com/users/${username}`);
            if (!userResponse.ok) {
                throw new Error('ไม่พบชื่อผู้ใช้');
            }
            const userData = await userResponse.json();
            setUserData(userData);

            const reposResponse = await fetch(userData.repos_url);
            const reposData = await reposResponse.json();
            setRepos(reposData);

            navigate('/user-info', { state: { userData, repos: reposData } });

        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="container">
            <h1>GitHub User Search</h1>
            
            <div className="input-button-container">
                <input 
                    type="text" 
                    placeholder="Enter GitHub Username" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button onClick={searchUser}>Search</button>
            </div>
    
            {error && <p className="error-message">{error}</p>}

            <div className="social-icons">
                <a href="https://www.facebook.com/chanatip.thanomrod/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="https://www.instagram.com/l_misterdonut_l/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a href="https://github.com/chanatipTha" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
            </div>
        </div>
    );
    
    
};

export default UserSearch;

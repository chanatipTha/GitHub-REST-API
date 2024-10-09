import React from 'react';
import { useLocation } from 'react-router-dom';
import './UserInfo.css';

const UserInfo = () => {
    const location = useLocation();
    const { userData = {}, repos = [] } = location.state || {}; 

    return (
        <div className="container">
            <div className="user-info">
                {userData.login ? ( 
                    <>
                        <img src={userData.avatar_url} alt="Avatar" className="avatar" />
                        <div>
                            <h2 className="user-name">{userData.name} (@{userData.login})</h2>
                            <p className="user-bio">{userData.bio || 'ไม่มีข้อมูลชีวประวัติ'}</p>
                            <p>
                                <a href={userData.html_url} target="_blank" rel="noopener noreferrer" className="profile-link">
                                    ดูโปรไฟล์บน GitHub
                                </a>
                            </p>
                        </div>
                    </>
                ) : (
                    <p className="error-message">ไม่พบข้อมูลผู้ใช้ โปรดค้นหาผู้ใช้ก่อน</p>
                )}
            </div>

            {repos.length > 0 ? ( 
                <div className="repos">
                    <h3 className="repo-title">คลังเก็บโค้ด:</h3>
                    {repos.map((repo) => {
                        const repoZipUrl = `https://github.com/${userData.login}/${repo.name}/archive/refs/heads/${repo.default_branch}.zip`;

                        return (
                            <div className="repo mb-4" key={repo.id}>
                                <h4 className="repo-name">
                                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="repo-link">
                                        {repo.name}
                                    </a>
                                </h4>
                                <p className="repo-description">{repo.description || 'ไม่มีคำอธิบาย'}</p>
                                <a href={repoZipUrl} className="download-button">
                                    <button className="download-btn">
                                        Download
                                    </button>
                                </a>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <p className="error-message">ไม่พบคลังเก็บโค้ด</p>
            )}
        </div>
    );
};

export default UserInfo;

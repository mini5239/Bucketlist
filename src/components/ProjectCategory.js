import React from 'react';
import ProjectList from './ProjectList';

class ProjectCategory extends React.Component {
    render() {
        const { active, cat, handleClick } = this.props;
        const styles = {
            background: {
                backgroundImage: `url(${cat.thumbnail})`,
                backgroundSize: 'cover',
                height: '500px',
                width: active ? '500px' : 'calc(20vw - 20px)',
            },
        };

        return (
            <li className={`category ${active ? 'isActive' : ''}`} onClick={() => handleClick()}>
                <div className="category--content">
                    <h2>{cat.name}</h2>
                    <ProjectList projects={cat.projects} /> {/* 카테고리별 프로젝트 목록 전달 */}
                </div>
                <div className="category--image-container">
                    <div className="category--image" style={styles.background}></div>
                </div>
                <div className="category--name">
                    <h6>{cat.name}</h6>
                </div>
            </li>
        );
    }
}

export default ProjectCategory;

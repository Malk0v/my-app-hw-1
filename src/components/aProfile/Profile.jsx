import PropTypes from 'prop-types';
import defaultImage from '../defImage.webp';
import './profile.css';

export default function Profile({
    avatar = defaultImage,
    username = 'Не известно',
    tag,
    location = 'Ukraine',
    stats,
}) {
    return (
        <div className="profile">
            <div className="description" key={username}>
                <img
                    src={avatar}
                    alt={username}
                    width="200px"
                    className="avatar"
                />
                <p className="name"> Имя: {username}</p>
                <p className="tag"> Ник: {tag}</p>
                <p className="location"> Страна: {location}</p>
            </div>
            <ul className="stats">
                <li>
                    <span className="label">Followers: </span>
                    <span className="quantity">{stats.followers}</span>
                </li>
                <li>
                    <span className="label">Views: </span>
                    <span className="quantity">{stats.views}</span>
                </li>
                <li>
                    <span className="label">Likes: </span>
                    <span className="quantity">{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
}

Profile.propTypes = {
    avatar: PropTypes.string,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string,
    stats: PropTypes.object.isRequired,
};

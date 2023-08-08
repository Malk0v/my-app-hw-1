import PropTypes from 'prop-types';
import Profile from './Profile';

export default function ProfileList({ items }) {
    return (
        <ul>
            {items.map(item => (
                <li key={item.tag}>
                    <Profile
                        avatar={item.avatar}
                        tag={item.tag}
                        username={item.username}
                        location={item.location}
                        stats={item.stats}
                    />
                </li>
            ))}
        </ul>
    );
}

ProfileList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            tag: PropTypes.string.isRequired,
        }),
    ),
};

import PropTypes from 'prop-types';

export default function section({ title }) {
    return <section>{title && <h2>{title}</h2>}</section>;
}

section.propTypes = {
    title: PropTypes.string,
};

import PropTypes from 'prop-types';

export default function section({ title, children }) {
    return (
        <section>
            {title && <h2>{title}</h2>}
            {children}
        </section>
    );
}

section.propTypes = {
    title: PropTypes.string,
};

import PropTypes from 'prop-types';

const DisplayCounter = ({val}) => {

    return (
        <p>La valeur est : {val}</p>
    )
}

DisplayCounter.propTypes = {
    val : PropTypes.number.isRequired
}


export default DisplayCounter;
import PropTypes from 'prop-types';

const ButtonCounter = ({step, onCalc}) => {

    return (
        <div>
            <button onClick={() => onCalc(step, '+')} > + {step} </button>
            <button onClick={() => onCalc(step, '-')} > - {step} </button>
        </div>
    )
}

ButtonCounter.defaultProps = {
    step: 1,
    onCalc: () => {}  //  NOOP => No Operation
}

ButtonCounter.propTypes = {
    step: PropTypes.number,
    onCalc: PropTypes.func
}

export default ButtonCounter;
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';


const feedBackStatus = ['good', 'neutral', 'bad'];

export default function FeedbackOptions(props) {
    const { callback } = props;
    return (
        <div className={s.btn_item}>
        {feedBackStatus.map(name => (
            <button
                className={s.btn}
                key={name}
                onClick={() => callback(name)}
            >
                {name}
            </button>
          ))}  
          </div>  
    );
};


FeedbackOptions.propTypes = {
    callback: PropTypes.func.isRequired,
}


// import React from 'react';
import PropTypes from 'prop-types';
 
// import {countTotalFeedback} from '../helpers/countTotalFeedback';
// import {countPositiveFeedbackPercentage} from '../helpers/countPositsvePersage';
import s from './Statistics.module.css';

export default function Statistics(props) {
    const { good, neutral, bad, total, positivePercentage } =props
    return( 
    <>
    <div className={s.statis}>
        
          <span
            className={s.item_statis} >Good:{good}
          </span>
          <span
            className={s.item_statis}>Neutral:{neutral}
          </span>
          <span
            className={s.item_statis}>Bad:{bad}
          </span>
           <span
            className={s.item_statis}>Total:{total}
           </span>
           <span className={s.item_statis}>
             Positive feedback:{positivePercentage}%
             </span>
        </div>
        </>
     );
   
};

Statistics.propTypes = {
    options: PropTypes.array,
    state: PropTypes.object,
}



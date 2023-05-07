import { useState } from 'react';
import FeedbackOptions from '../feedbackOptions/FeedbackOptions';
import Statistics from '../statistics/Statistics.jsx';
import  Section  from '../section/Section';
import  Notification  from '../notification/Notification'
import  countPositiveFeedbackPercentage  from '../helpers/countPositsvePersage';
import s from './App.module.css';




export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + neutral + bad;

 
  const handleClick = status => {
    switch (status) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };
  
  return (
    <div className={s.conteiner}>
      <Section title="Please leave feedback">
    <FeedbackOptions callback={handleClick}/>
      </Section>
      {total !== 0 ? (
        <Section title="Statiatics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={countPositiveFeedbackPercentage(good, total)}
        /> 
      </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
}
 

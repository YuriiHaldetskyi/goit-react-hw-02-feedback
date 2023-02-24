import css from '../FeedBackOptions/feedbackoptions.module.css';
export const FeedbackOptions = ({
  onHandleInrementGood,
  onHandleInrementNeutral,
  onHandleInrementBad,
}) => {
  return (
    <div className={css.wrapper}>
      <button className={css.btn} type="button" onClick={onHandleInrementGood}>
        Good
      </button>
      <button
        className={css.btn}
        type="button"
        onClick={onHandleInrementNeutral}
      >
        Neutral
      </button>
      <button className={css.btn} type="button" onClick={onHandleInrementBad}>
        Bad
      </button>
    </div>
  );
};

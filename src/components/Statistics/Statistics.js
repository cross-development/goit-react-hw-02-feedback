//Core
import React from "react";
import PropTypes from "prop-types";
//Style
import style from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={style.listWrapper}>
      <ul className={style.feedbackList}>
        <li className={style.feedbackListItem}>Good: {good}</li>
        <li className={style.feedbackListItem}>Neutral: {neutral}</li>
        <li className={style.feedbackListItem}>Bad: {bad}</li>
        <li className={style.feedbackListItem}>Total: {total}</li>
        <li className={style.feedbackListItem}>
          Positive Feedback: {positivePercentage ? positivePercentage : 0}%{" "}
        </li>
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;

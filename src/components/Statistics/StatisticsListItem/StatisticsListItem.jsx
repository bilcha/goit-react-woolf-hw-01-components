import generateColors from 'helpers/generateColors';
import styles from './StatisticsListItem.module.css';

export const StatisticsListItem = ({ label, percentage }) => {
  return (
    <li
      className={styles.statisticListItem}
      style={{ backgroundColor: generateColors() }}
    >
      <p className={styles.label}>{label}</p>
      <p className={styles.percentage}>{percentage} %</p>
    </li>
  );
};

import styles from "./StatisticsListItem.module.css"

function  generateColor () {
    return '#' +  Math.random().toString(16).substr(-6);
  }
export const StatisticsListItem = ({label, percentage }) => {
  const color = generateColor() 
  return (
    <li className={styles.statisticListItem} style={{backgroundColor: color}}>
      <p className={styles.label}>{label}</p>
      <p className={styles.percentage}>{percentage} %</p>
    </li>
  )
}
import { StatisticsListItem } from "./StatisticsListItem"

import styles from "./Statistics.module.css"

export const Statistics = ({stats, title}) => {
  return (
    <div className={styles.statisticsCard}>
      {{title} ? <h2>{title}</h2> : null}
      <ul className={styles.statisticsList}>{stats.map(({id, label, percentage}) =>
        <StatisticsListItem key={id} label={label} percentage={percentage} />
      )}
      </ul>
    </div>
  )
}
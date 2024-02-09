import styles from "./TransactionHistory.module.css"

export const TransactionHistoryData = ({ type, amount, currency }) => {
  return (
    <tr>
      <td className={styles.tableCell}>{type}</td>
      <td className={styles.tableCell}>{amount}</td>
      <td className={styles.tableCell}>{currency}</td>
    </tr>
  )
}
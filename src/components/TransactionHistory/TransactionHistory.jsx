import { TransactionHistoryData } from "./TransactionHistoryData"
import styles from "./TransactionHistory.module.css"

export const TransactionHistory = ({transactions})=> {
  return (
    <table className={styles.table}>
      <thead className={styles.tableHeader}>
        <tr>
          <th className={styles.tableCell}>Type</th>
          <th className={styles.tableCell}>Amount</th>
          <th className={styles.tableCell}>Currency</th>    
        </tr>
      </thead>
      <tbody>{transactions.map(({id, type, amount, currency}) => 
        <TransactionHistoryData key={id} type={type} amount={amount} currency={currency} />
      )}

      </tbody>
   </table>
 )
}

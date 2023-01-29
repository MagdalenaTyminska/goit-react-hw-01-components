import css from './Transactions.module.css';
import PropTypes from 'prop-types';

export const Transactions = ({ items }) => (
    <section className={css.transactions}>
      <table className={css.transactionsTable}>
        <thead className={css.tableHeader}>
          <tr className={css.tableHeaderTr}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(item => (
            <tr key={item.id} className={css.tableBodyTr}>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );

Transactions.propTypes = {
  items: PropTypes.array.isRequired,
};

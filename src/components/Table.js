import React from 'react'

const Table = () => {

    const data1 = [
        { id: 1, name: 'John', age: 25, country: 'USA' },
        { id: 2, name: 'Jane', age: 30, country: 'Canada' },
        { id: 3, name: 'Bob', age: 28, country: 'UK' },
        { id: 4, name: 'Alice', age: 22, country: 'Australia' },
      ];
    
      const data2 = [
        { id: 1, product: 'Product A', price: '$20.00', quantity: 15 },
        { id: 2, product: 'Product B', price: '$15.00', quantity: 8 },
        { id: 3, product: 'Product C', price: '$30.00', quantity: 10 },
        { id: 4, product: 'Product D', price: '$25.00', quantity: 12 },
      ];
    
      // CSS styles
      const styles = {
        container: {
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
        },
        table: {
          width: '45%',
          margin: '10px',
          borderCollapse: 'collapse',
          borderRadius: '8px',
          overflow: 'hidden',
        },
        th: {
          backgroundColor: 'black',
          color: 'white',
          padding: '10px',
          textAlign: 'left',
          border: '1px solid #ddd',
        },
        td: {
          padding: '10px',
          border: '1px solid #ddd',
        },
      };

  return (
    <div style={styles.container}>
    {/* Table 1 */}
    <table style={{ ...styles.table, backgroundColor: 'white' }}>
      <thead>
        <tr>
          <th style={styles.th}>ID</th>
          <th style={styles.th}>Name</th>
          <th style={styles.th}>Age</th>
          <th style={styles.th}>Country</th>
        </tr>
      </thead>
      <tbody>
        {data1.map((row) => (
          <tr key={row.id}>
            <td style={styles.td}>{row.id}</td>
            <td style={styles.td}>{row.name}</td>
            <td style={styles.td}>{row.age}</td>
            <td style={styles.td}>{row.country}</td>
          </tr>
        ))}
      </tbody>
    </table>

    {/* Table 2 */}
    <table style={{ ...styles.table, backgroundColor: 'white' }}>
      <thead>
        <tr>
          <th style={styles.th}>ID</th>
          <th style={styles.th}>Product</th>
          <th style={styles.th}>Price</th>
          <th style={styles.th}>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {data2.map((row) => (
          <tr key={row.id}>
            <td style={styles.td}>{row.id}</td>
            <td style={styles.td}>{row.product}</td>
            <td style={styles.td}>{row.price}</td>
            <td style={styles.td}>{row.quantity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default Table
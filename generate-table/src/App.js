import { useState } from 'react';
function Table({ rows, columns }) {
  console.log("table", rows, columns);
  return (
    <table>
      <tbody>
        {Array.from({ length : rows}, () => 0).map((_, row) => (
          <tr key={row}>
            { Array.from({ length : columns}, () => 0).map((_, col) => (
              <td key={col}>
                {col % 2 === 0
                  ? rows * col + (row + 1)
                  : rows * (col + 1) - row}
                </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default function App() {
  const [rows, setRows] = useState('');
  const [columns, setColumns] = useState('');

  return (
    <div className="app">
      <form onSubmit={(event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        setRows(Number(data.get('rows')));
        setColumns(Number(data.get('columns')));
      } }>
      <div>
          <label htmlFor="rows">Rows</label>
          <input
            id="rows"
            name="rows"
            type="number"
            min={1}
            defaultValue={rows}
          />
        </div>
        <div>
          <label htmlFor="columns">Columns</label>
          <input
            id="columns"
            name="columns"
            type="number"
            min={1}
            defaultValue={columns}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {
        rows && columns && (
          <Table rows={rows} columns={columns} />
        )
      }
      </div>
  )
}

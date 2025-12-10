import { useMemo } from 'react';

interface StyledTableProps {
  tableHead: string[];
  tableBodyRow: string[][];
  headColSpan?: Record<string, number>;
  mergeBodyColumns?: number[];
}

const StyledTable = ({
  tableHead,
  tableBodyRow,
  headColSpan = {},
  mergeBodyColumns = [],
}: StyledTableProps) => {
  const rows = tableBodyRow;
  const rowCount = rows.length;
  const colCount = rows[0]?.length ?? 0;

  const rowSpanMatrix = useMemo(() => {
    const matrix = Array.from({ length: rowCount }, () =>
      Array.from({ length: colCount }, () => 1),
    );

    mergeBodyColumns.forEach((colIndex) => {
      if (colIndex < 0 || colIndex >= colCount) return;
      let start = 0;
      for (let rowIndex = 1; rowIndex <= rowCount; rowIndex++) {
        const same =
          rowIndex < rowCount &&
          rows[rowIndex][colIndex] === rows[start][colIndex];

        if (!same) {
          const span = rowIndex - start;
          matrix[start][colIndex] = span;
          for (
            let identicalRowIndex = start + 1;
            identicalRowIndex < rowIndex;
            identicalRowIndex++
          )
            matrix[identicalRowIndex][colIndex] = 0;
          start = rowIndex;
        }
      }
    });

    return matrix;
  }, [rows, rowCount, colCount, mergeBodyColumns]);

  return (
    <table className='styled-table text-center text-sm sm:text-base table-auto border-yellow-800 border-2 p-8'>
      <thead className='bg-yellow-700 bg-opacity-40'>
        <tr>
          {tableHead.map((headCell, index) => {
            const colSpan = headColSpan[headCell] ?? 1;
            return (
              <th
                key={index}
                colSpan={colSpan}
                className='border-2 border-yellow-800 p-2'
              >
                {headCell}
              </th>
            );
          })}
        </tr>
      </thead>

      <tbody className='border border-yellow-800 p-2'>
        {rows.map((row, r) => (
          <tr
            key={r}
            className='table-row-hover border border-yellow-800 p-2 ease-initial delay-75 duration-500 hover:bg-yellow-400 hover:bg-opacity-30 hover:cursor-pointer'
          >
            {row.map((cell, index) => {
              const span = rowSpanMatrix[r][index];
              if (span === 0) return null;

              const fontClass = index === 0 ? 'font-semibold' : 'font-normal';

              return (
                <td
                  key={index}
                  rowSpan={span > 1 ? span : undefined}
                  className={`${fontClass} border border-yellow-800 p-2`}
                >
                  {cell}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StyledTable;

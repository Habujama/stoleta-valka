interface StyledTableProps {
    tableHead: string[]
    tableBodyRow: string[][]
}

const StyledTable = ({tableHead, tableBodyRow}: StyledTableProps) => (
    <table className='text-center table-auto border border-stone-500 p-8'>
        <thead className='bg-stone-600 bg-opacity-40'>
            {tableHead.map((headCell, index) => (
                <th key={index} className='border border-stone-500 p-2 '>{headCell}</th>
            ))}
        </thead>
        <tbody className='border border-stone-500 p-2 '>
            
            {tableBodyRow.map((tableBodyRow, index) => (
                <tr key={index} className='border border-stone-500 p-2 hover:bg-stone-400 hover:bg-opacity-30 hover:cursor-pointer'>
                    {tableBodyRow.map((tableBodyCell, index) => (
                        <td key={index} className='first-of-type:font-semibold border border-stone-500 p-2'>
                            {tableBodyCell}
                        </td>
                    ))}
                    
                </tr>
            ))}
        </tbody>
    </table>
)

export default StyledTable

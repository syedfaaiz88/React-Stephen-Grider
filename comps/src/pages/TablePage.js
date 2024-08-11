//import Table from "../components/Table";
import SortableTable from "../components/SortableTable";

function TablePage() {
    const data = [
        { name: 'Orange', color: 'bg-orange-500', score: 5 },
        { name: 'Apple', color: 'bg-red-500', score: 3 },
        { name: 'Banana', color: 'bg-yellow-500', score: 1 },
        { name: 'Lime', color: 'bg-green-500', score: 4 },
    ]
    const config = [
        {
            label: 'Fruit',
            render: (row)=> row.name,
            sortValue: (row) => row.name,
        },
        {
            label: 'Color',
            render: (row)=> <div className={`p-2 m-3 ${row.color}`}></div>
        },
        {
            label: 'Score',
            render: (row)=> row.score,
            sortValue: (row) => row.score,
        },
    ]
    const keyFn = (row) =>{
        return row.name;
    }
    return (
        <SortableTable data={data} config={config} keyFn={keyFn} />
    )
}
export default TablePage;
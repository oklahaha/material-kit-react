import DataTable from "react-data-table-component";
import React, {useState, useEffect} from "react"
import Button from '@mui/material/Button';

function Table() {

    const [news, setNews] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8080/news/list")
        .then((response) => response.json())
        .then((data) => {
            setNews(data);
        })
        .catch((err) => {
            console.log(err.message);
        });
    }, []);
    
    const columns = [
        {
            name: "日期",
            selector: (row) => row.date,
            sortable: true,
        },
        {
            name: "最新消息",
            selector: (row) => row.title,
            sortable: true,
        },
        {
            name: "詳情",
            cells: (row) => (
                <button onClick= {() => {alert('clicked');}}>
                    詳情
                </button>
            )
        }
    ];

    return (
        <>
            <div>
                <DataTable 
                    columns = {columns}
                    data = {news}
                    title="最新消息"
                    pagination
                    highlightOnHover
                    striped
                />
            </div>
        </>
    );
}

export default Table;
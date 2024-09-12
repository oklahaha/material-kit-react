import DataTable from "react-data-table-component";
import React, {useState, useEffect} from "react"

function Table() {

    const getNews = (event) => {
		const newsId = event.currentTarget.id;
        console.log(newsId);
	};

    const [news, setNews] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8080/news/list")
        .then((response) => response.json())
        .then((data) => {
            // Sort data by date in descending order
            const sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date));
            setNews(sortedData);
        })
        .catch((err) => {
            console.log(err.message);
        });
    }, []);
    
    const columns = [
        {
            id: "date",
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
			cell: (row) => <button className="btn btn-default btn-primary" onClick={getNews} id={row.newsId}>詳情</button>,
            ignoreRowClick: true
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
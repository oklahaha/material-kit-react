import DataTable from "react-data-table-component";
import React, {useState, useEffect} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

function Table() {

    const editAthlete = (event) => {
        console.log(event.currentTarget.id);
    };

    const deleteAthlete = (event) => {
        const athleteId = event.currentTarget.id;
        console.log(athleteId);
        fetch(`http://localhost:8080/athlete/deleteAthlete/?athleteId=${athleteId}`, {
            method: 'DELETE',
        })
        .then((response) => {
            if (response.ok) {
                // Optionally, you can refresh the athlete list or remove the deleted athlete from the state
                setAthlete((prevAthletes) => prevAthletes.filter(athlete => athlete.athleteId !== athleteId));
            } else {
                console.log('Failed to delete athlete');
            }
        })
        .catch((err) => {
            console.log(err.message);
        });
    };

    const [athlete, setAthlete] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8080/athlete/listAthlete")
        .then((response) => response.json())
        .then((data) => {
            setAthlete(data);
        })
        .catch((err) => {
            console.log(err.message);
        });
    }, []);
    
    const columns = [
        {
            name: "參賽者編號",
            selector: (row) => row.athleteId,
            sortable: true,
        },
        {
            name: "參賽者姓名",
            selector: (row) => row.chName,
            sortable: true,
        },
        {
            name: "性別",
            selector: (row) => row.gender,
            sortable: true,
        },
        {
            name: "年齡",
            selector: (row) => row.age,
            sortable: true,
        },
        {
            name: "地區",
            selector: (row) => row.district,
            sortable: true,
        },
        {
            name: "編輯",
            cell:(row) => <button class="btn btn-default btn-primary" onClick={editAthlete} id={row.athleteId}><i class="bi bi-pencil-square"></i>編輯</button>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
        {
            name: "刪除",
            cell:(row) => <button class="btn btn-default btn-danger" onClick={deleteAthlete} id={row.athleteId}><i class="bi bi-trash-fill"></i>刪除</button>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        }
    ];

    return (
        <>
            <div>
                <DataTable 
                    columns = {columns}
                    data = {athlete}
                    title="參賽者"
                    pagination
                    highlightOnHover
                    striped
                />
            </div>
        </>
    );
}

export default Table;
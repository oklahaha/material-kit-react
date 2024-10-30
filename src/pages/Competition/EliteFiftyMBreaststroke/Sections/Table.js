import DataTable from "react-data-table-component";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ConfirmModal from "./ConfirmModal";

function Table({ title }) {

	const navigate = useNavigate();
    const [event, setEvent] = useState([]);
	const [showModal, setShowModal] = useState(false);
	const [selectedId, setSelectedId] = useState(null);

	const editEliteFiftyMBreaststroke = (event) => {
		const id = event.currentTarget.id;
		navigate("/pages/competition/editEliteFiftyMBreaststroke", { state: { id } });
	};

	const handleDeleteClick = (id) => {
		setSelectedId(id);
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
		setSelectedId(null);
	};

	const deleteEliteFiftyMBreaststroke = (id) => {
		fetch(`http://localhost:8080/eliteFiftyMBreaststroke/deleteEliteFiftyMBreaststroke?id=${id}`, {
			method: 'DELETE',
		})
		.then((response) => {
			if (response.status === 204) {
				fetchHundredMBreaststroke();
				onAlertChange("Delete EliteFiftyMBreaststroke success!", "success");
			} else {
				console.log('Failed to delete athlete');
				onAlertChange("Delete EliteFiftyMBreaststroke fail!", "danger");
			}
		})
		.catch((err) => {
			console.log(err.message);
			onAlertChange("Delete EliteFiftyMBreaststroke fail!", "danger");
		})
		.finally(() => {
			handleCloseModal();
		});
	};

	const fetchEliteFiftyMBreaststroke = () => {
		fetch("http://localhost:8080/eliteFiftyMBreaststroke/listEliteFiftyMBreaststroke")
		.then((response) => response.json())
		.then((data) => {
			setEvent(data);
		})
		.catch((err) => {
			console.log(err.message);
			onAlertChange("Fetch EliteFiftyMBreaststroke data fail!", "danger"); // Added user feedback
		});
    };

	useEffect(() => {
		fetchEliteFiftyMBreaststroke();
	}, []);

	const exportToExcel = () => {
        const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        const fileExtension = '.xlsx';

        // Flatten the data structure and sort by time as string
        const flattenedData = event
            .map(row => ({
                參賽者: row.athleteId.chName,
                性別: row.gender,
                年齡: row.age,
                區域: row.district,
                時間: row.time
            }))

        const ws = XLSX.utils.json_to_sheet(flattenedData);
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], { type: fileType });
        
        const fileName = `${title}_${new Date().toISOString()}${fileExtension}`;
        
        if (navigator.msSaveOrOpenBlob) {
            navigator.msSaveOrOpenBlob(data, fileName);
        } else {
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(data);
            link.download = fileName;
            link.click();
        }
    };
    
    const columns = [
        {
            name: "參賽者",
            selector: (row) => row.athleteId.chName,
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
            name: "區域",
            selector: (row) => row.district,
            sortable: true,
        },
		{
            name: "時間",
            selector: (row) => row.time,
            sortable: true,
        },
		{
			name: "編輯",
			cell: (row) => <button className="btn btn-default btn-primary" onClick={editEliteFiftyMBreaststroke} id={row.id}>編輯</button>,
			ignoreRowClick: true
		},
		{
			name: "刪除",
			cell: (row) => (
				<button
					className="btn btn-default btn-danger"
					onClick={() => handleDeleteClick(row.id)}
				>
					刪除
				</button>
			),
			ignoreRowClick: true
		}
    ];

    return (
        <>
            <div>
				<button 
                    type="button"
                    className="btn btn-success mb-3" 
                    onClick={exportToExcel}
                >
                    Export to Excel
                </button>
                <DataTable 
                    columns={columns}
                    data={event}
                    title={title}
                    pagination
                    highlightOnHover
                    striped
                />
            </div>
			<ConfirmModal
				show={showModal}
				handleClose={handleCloseModal}
				handleDelete={deleteEliteFiftyMBreaststroke}
				id={selectedId}
			/>
        </>
    );
}

export default Table;
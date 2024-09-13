import DataTable from "react-data-table-component";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ConfirmModal from "./ConfirmModal";

function Table({ gender, age, title }) {

	const navigate = useNavigate();
    const [event, setEvent] = useState([]);
	const [showModal, setShowModal] = useState(false);
	const [selectedId, setSelectedId] = useState(null);

	const editFiftyMBreaststroke = (event) => {
		const id = event.currentTarget.id;
		navigate("/pages/competition/editFiftyMBreaststroke", { state: { id } });
	};

	const handleDeleteClick = (id) => {
		setSelectedId(id);
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
		setSelectedId(null);
	};

	const deleteFiftyMBreaststroke = (id) => {
		fetch(`http://localhost:8080/fiftyMBreaststroke/deleteFiftyMBreaststroke?id=${id}`, {
			method: 'DELETE',
		})
		.then((response) => {
			if (response.status === 204) {
				fetchHundredMBreaststroke();
				onAlertChange("Delete FiftyMBreaststroke success!", "success");
			} else {
				console.log('Failed to delete athlete');
				onAlertChange("Delete FiftyMBreaststroke fail!", "danger");
			}
		})
		.catch((err) => {
			console.log(err.message);
			onAlertChange("Delete FiftyMBreaststroke fail!", "danger");
		})
		.finally(() => {
			handleCloseModal();
		});
	};

	const fetchFiftyMBreaststroke = () => {
        if (gender && age) {
            fetch(`http://localhost:8080/fiftyMBreaststroke/listFiftyMBreaststrokeByGenderAndAge?gender=${gender}&age=${age}`)
            .then((response) => response.json())
            .then((data) => {
                setEvent(data);
            })
            .catch((err) => {
                console.log(err.message);
                onAlertChange("Fetch FiftyMBreaststroke data fail!", "danger"); // Added user feedback
            });
        }
    };

	useEffect(() => {
		fetchFiftyMBreaststroke();
	}, [gender, age]);
    
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
			cell: (row) => <button className="btn btn-default btn-primary" onClick={editFiftyMBreaststroke} id={row.id}>編輯</button>,
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
				handleDelete={deleteFiftyMBreaststroke}
				id={selectedId}
			/>
        </>
    );
}

export default Table;
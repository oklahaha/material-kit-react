import DataTable from "react-data-table-component";
import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ConfirmModal from "./ConfirmModal";

function Table({ onAlertChange }) {
	const navigate = useNavigate();
	const [athlete, setAthlete] = useState([]);
	const [showModal, setShowModal] = useState(false);
	const [selectedAthleteId, setSelectedAthleteId] = useState(null);

	const editAthlete = (event) => {
		const athleteId = event.currentTarget.id;

		navigate("/pages/competition/editAthlete", { state: { athleteId } });

	};

	const handleDeleteClick = (athleteId) => {
		setSelectedAthleteId(athleteId);
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
		setSelectedAthleteId(null);
	};

	const deleteAthlete = (athleteId) => {
		fetch(`http://localhost:8080/athlete/deleteAthlete?athleteId=${athleteId}`, {
			method: 'DELETE',
		})
		.then((response) => {
			if (response.status === 204) {
				fetchAthletes();
				onAlertChange("Delete Athlete success!", "success");
			} else {
				console.log('Failed to delete athlete');
				onAlertChange("Delete Athlete fail!", "danger");
			}
		})
		.catch((err) => {
			console.log(err.message);
			onAlertChange("Delete Athlete fail!", "danger");
		})
		.finally(() => {
			handleCloseModal();
		});
	};

	const fetchAthletes = () => {
		fetch("http://localhost:8080/athlete/listAthlete")
			.then((response) => response.json())
			.then((data) => {
				setAthlete(data);
			})
			.catch((err) => {
				console.log(err.message);
			});
	};

	useEffect(() => {
		fetchAthletes();
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
			cell: (row) => <button className="btn btn-default btn-primary" onClick={editAthlete} id={row.athleteId}>編輯</button>,
			ignoreRowClick: true
		},
		{
			name: "刪除",
			cell: (row) => (
				<button
					className="btn btn-default btn-danger"
					onClick={() => handleDeleteClick(row.athleteId)}
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
					data={athlete}
					title="參賽者"
					pagination
					highlightOnHover
					striped
				/>
			</div>
			<ConfirmModal
				show={showModal}
				handleClose={handleCloseModal}
				handleDelete={deleteAthlete}
				athleteId={selectedAthleteId}
			/>
		</>
	);
}

export default Table;
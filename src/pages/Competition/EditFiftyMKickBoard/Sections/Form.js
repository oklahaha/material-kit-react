import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

function Form({ id }) {
    const navigate = useNavigate();

    const [fiftyMKickBoard, setFiftyMKickBoard] = useState({
        id: "",
        athleteId: {
            chName: "",
        },
        age: "",
        gender: "",
        district: "",
        time: ""
    });

    useEffect(() => {
        const fetchFiftyMKickBoardData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/fiftyMKickBoard/getFiftyMKickBoard?id=${id}`);
                if (response.ok) {
                    const fetchedFiftyMKickBoard = await response.json();
                    setFiftyMKickBoard(prev => ({
                        ...prev,
                        ...fetchedFiftyMKickBoard,
                        age: fetchedFiftyMKickBoard.age !== null ? fetchedFiftyMKickBoard.age.toString() : "",
                        time: fetchedFiftyMKickBoard.time
                    }));
                } else {
                    console.error('Failed to fetch FiftyMKickBoard data');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        if (id) {
            fetchFiftyMKickBoardData();
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFiftyMKickBoard(prev => ({
            ...prev,
            [name]: value // This will correctly update the time value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const fiftyMKickBoardData = {
            ...fiftyMKickBoard,
            age: fiftyMKickBoard.age ? parseInt(fiftyMKickBoard.age) : null,
            time: fiftyMKickBoard.time // Ensure time is included in the submission
        };
    
        console.log('Submitting FiftyMKickBoard data:', fiftyMKickBoardData);
    
        try {
            const response = await fetch('http://localhost:8080/fiftyMKickBoard/editFiftyMKickBoard', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(fiftyMKickBoardData),
            });
    
            if (response.ok) {
                const updatedFiftyMKickBoard = await response.json();
                console.log('Updated fiftyMKickBoard:', updatedFiftyMKickBoard);
                const { gender, age, title } = fiftyMKickBoard; // Extract parameters from state
                navigate("/pages/competition/fiftyMKickBoard", { 
                    state: { 
                        message: "FiftyMKickBoard updated successfully!", 
                        type: "success", 
                        gender, 
                        age, 
                        title 
                    } 
                });
            } else {
                const errorData = await response.json();
                console.error('Failed to update FiftyMKickBoard:', errorData);
                alert(`Failed to update FiftyMKickBoard: ${errorData.message || 'Unknown error'}`);
            }
        } catch (error) {
            console.error('Error:', error);
            alert(`An error occurred: ${error.message}`);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group row">
                <label htmlFor="chName" className="col-sm-2 col-form-label">中文姓名</label>
                <div className="col-sm-10">
                    <span>{fiftyMKickBoard.athleteId.chName}</span> {/* Display athlete's Chinese name */}
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="age" className="col-sm-2 col-form-label">年齡</label>
                <div className="col-sm-10">
                    <span>{fiftyMKickBoard.age}</span> {/* Display athlete's age */}
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">性別</label>
                <div className="col-sm-10">
                    <span>{fiftyMKickBoard.gender}</span> {/* Display athlete's gender */}
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="district" className="col-sm-2 col-form-label">區域</label>
                <div className="col-sm-10">
                    <span>{fiftyMKickBoard.district}</span> {/* Display athlete's district */}
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="time" className="col-sm-2 col-form-label">時間</label>
                <div className="col-sm-10">
                    <input 
                        type="text" 
                        className="form-control" 
                        id="time" 
                        name="time" 
                        value={fiftyMKickBoard.time || ""} 
                        onChange={handleChange} 
                        placeholder="mm:ss.msms"
                    />
                </div>
            </div>
            <div style={{textAlign: "right"}}>
                <button type="submit" className="btn btn-default btn-primary">
                    Submit
                </button>
            </div>
        </form>
    );
}

export default Form;
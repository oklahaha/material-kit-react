import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

function Form({ id }) {
    const navigate = useNavigate();

    const [eliteHundredMBreaststroke, setEliteHundredMBreaststroke] = useState({
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
        const fetchEliteHundredMBreaststrokeData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/eliteHundredMBreaststroke/getEliteHundredMBreaststroke?id=${id}`);
                if (response.ok) {
                    const fetchedEliteHundredMBreaststroke = await response.json();
                    setEliteHundredMBreaststroke(prev => ({
                        ...prev,
                        ...fetchedEliteHundredMBreaststroke,
                        age: fetchedEliteHundredMBreaststroke.age !== null ? fetchedEliteHundredMBreaststroke.age.toString() : "",
                        time: fetchedEliteHundredMBreaststroke.time
                    }));
                } else {
                    console.error('Failed to fetch EliteHundredMBreaststroke data');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        if (id) {
            fetchEliteHundredMBreaststrokeData();
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEliteHundredMBreaststroke(prev => ({
            ...prev,
            [name]: value // This will correctly update the time value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const eliteHundredMBreaststrokeData = {
            ...eliteHundredMBreaststroke,
            age: eliteHundredMBreaststroke.age ? parseInt(eliteHundredMBreaststroke.age) : null,
            time: eliteHundredMBreaststroke.time // Ensure time is included in the submission
        };
    
        console.log('Submitting EliteHundredMBreaststroke data:', eliteHundredMBreaststrokeData);
    
        try {
            const response = await fetch('http://localhost:8080/eliteHundredMBreaststroke/editEliteHundredMBreaststroke', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(eliteHundredMBreaststrokeData),
            });
    
            if (response.ok) {
                const updatedEliteHundredMBreaststroke = await response.json();
                console.log('Updated eliteHundredMBreaststroke:', updatedEliteHundredMBreaststroke);
                const { gender, age, title } = eliteHundredMBreaststroke; // Extract parameters from state
                navigate("/pages/competition/eliteHundredMBreaststroke", { 
                    state: { 
                        message: "EliteHundredMBreaststroke updated successfully!", 
                        type: "success", 
                        gender, 
                        age, 
                        title 
                    } 
                });
            } else {
                const errorData = await response.json();
                console.error('Failed to update EliteHundredMBreaststroke:', errorData);
                alert(`Failed to update EliteHundredMBreaststroke: ${errorData.message || 'Unknown error'}`);
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
                    <span>{eliteHundredMBreaststroke.athleteId.chName}</span> {/* Display athlete's Chinese name */}
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="age" className="col-sm-2 col-form-label">年齡</label>
                <div className="col-sm-10">
                    <span>{eliteHundredMBreaststroke.age}</span> {/* Display athlete's age */}
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">性別</label>
                <div className="col-sm-10">
                    <span>{eliteHundredMBreaststroke.gender}</span> {/* Display athlete's gender */}
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="district" className="col-sm-2 col-form-label">區域</label>
                <div className="col-sm-10">
                    <span>{eliteHundredMBreaststroke.district}</span> {/* Display athlete's district */}
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
                        value={eliteHundredMBreaststroke.time || ""} 
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
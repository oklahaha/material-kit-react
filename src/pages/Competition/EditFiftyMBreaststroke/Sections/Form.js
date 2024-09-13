import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

function Form({ id }) {
    const navigate = useNavigate();

    const [fiftyMBreaststroke, setFiftyMBreaststroke] = useState({
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
        const fetchFiftyMBreaststrokeData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/fiftyMBreaststroke/getFiftyMBreaststroke?id=${id}`);
                if (response.ok) {
                    const fetchedFiftyMBreaststroke = await response.json();
                    setFiftyMBreaststroke(prev => ({
                        ...prev,
                        ...fetchedFiftyMBreaststroke,
                        age: fetchedFiftyMBreaststroke.age !== null ? fetchedFiftyMBreaststroke.age.toString() : "",
                        time: fetchedFiftyMBreaststroke.time
                    }));
                } else {
                    console.error('Failed to fetch FiftyMBreaststroke data');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        if (id) {
            fetchFiftyMBreaststrokeData();
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFiftyMBreaststroke(prev => ({
            ...prev,
            [name]: value // This will correctly update the time value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const fiftyMBreaststrokeData = {
            ...fiftyMBreaststroke,
            age: fiftyMBreaststroke.age ? parseInt(fiftyMBreaststroke.age) : null,
            time: fiftyMBreaststroke.time // Ensure time is included in the submission
        };
    
        console.log('Submitting FiftyMBreaststroke data:', fiftyMBreaststrokeData);
    
        try {
            const response = await fetch('http://localhost:8080/fiftyMBreaststroke/editFiftyMBreaststroke', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(fiftyMBreaststrokeData),
            });
    
            if (response.ok) {
                const updatedFiftyMBreaststroke = await response.json();
                console.log('Updated fiftyMBreaststroke:', updatedFiftyMBreaststroke);
                const { gender, age, title } = fiftyMBreaststroke; // Extract parameters from state
                navigate("/pages/competition/fiftyMBreaststroke", { 
                    state: { 
                        message: "FiftyMBreaststroke updated successfully!", 
                        type: "success", 
                        gender, 
                        age, 
                        title 
                    } 
                });
            } else {
                const errorData = await response.json();
                console.error('Failed to update FiftyMBreaststroke:', errorData);
                alert(`Failed to update FiftyMBreaststroke: ${errorData.message || 'Unknown error'}`);
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
                    <span>{fiftyMBreaststroke.athleteId.chName}</span> {/* Display athlete's Chinese name */}
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="age" className="col-sm-2 col-form-label">年齡</label>
                <div className="col-sm-10">
                    <span>{fiftyMBreaststroke.age}</span> {/* Display athlete's age */}
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">性別</label>
                <div className="col-sm-10">
                    <span>{fiftyMBreaststroke.gender}</span> {/* Display athlete's gender */}
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="district" className="col-sm-2 col-form-label">區域</label>
                <div className="col-sm-10">
                    <span>{fiftyMBreaststroke.district}</span> {/* Display athlete's district */}
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
                        value={fiftyMBreaststroke.time || ""} 
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
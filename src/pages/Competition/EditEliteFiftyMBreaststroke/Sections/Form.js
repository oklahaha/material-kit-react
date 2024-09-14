import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

function Form({ id }) {
    const navigate = useNavigate();

    const [eliteFiftyMBreaststroke, setEliteFiftyMBreaststroke] = useState({
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
        const fetchEliteFiftyMBreaststrokeData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/eliteFiftyMBreaststroke/getEliteFiftyMBreaststroke?id=${id}`);
                if (response.ok) {
                    const fetchedEliteFiftyMBreaststroke = await response.json();
                    setEliteFiftyMBreaststroke(prev => ({
                        ...prev,
                        ...fetchedEliteFiftyMBreaststroke,
                        age: fetchedEliteFiftyMBreaststroke.age !== null ? fetchedEliteFiftyMBreaststroke.age.toString() : "",
                        time: fetchedEliteFiftyMBreaststroke.time
                    }));
                } else {
                    console.error('Failed to fetch EliteFiftyMBreaststroke data');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        if (id) {
            fetchEliteFiftyMBreaststrokeData();
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEliteFiftyMBreaststroke(prev => ({
            ...prev,
            [name]: value // This will correctly update the time value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const eliteFiftyMBreaststrokeData = {
            ...eliteFiftyMBreaststroke,
            age: eliteFiftyMBreaststroke.age ? parseInt(eliteFiftyMBreaststroke.age) : null,
            time: eliteFiftyMBreaststroke.time // Ensure time is included in the submission
        };
    
        console.log('Submitting EliteFiftyMBreaststroke data:', eliteFiftyMBreaststrokeData);
    
        try {
            const response = await fetch('http://localhost:8080/eliteFiftyMBreaststroke/editEliteFiftyMBreaststroke', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(eliteFiftyMBreaststrokeData),
            });
    
            if (response.ok) {
                const updatedEliteFiftyMBreaststroke = await response.json();
                console.log('Updated eliteFiftyMBreaststroke:', updatedEliteFiftyMBreaststroke);
                const { gender, age, title } = eliteFiftyMBreaststroke; // Extract parameters from state
                navigate("/pages/competition/eliteFiftyMBreaststroke", { 
                    state: { 
                        message: "EliteFiftyMBreaststroke updated successfully!", 
                        type: "success", 
                        gender, 
                        age, 
                        title 
                    } 
                });
            } else {
                const errorData = await response.json();
                console.error('Failed to update EliteFiftyMBreaststroke:', errorData);
                alert(`Failed to update EliteFiftyMBreaststroke: ${errorData.message || 'Unknown error'}`);
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
                    <span>{eliteFiftyMBreaststroke.athleteId.chName}</span> {/* Display athlete's Chinese name */}
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="age" className="col-sm-2 col-form-label">年齡</label>
                <div className="col-sm-10">
                    <span>{eliteFiftyMBreaststroke.age}</span> {/* Display athlete's age */}
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">性別</label>
                <div className="col-sm-10">
                    <span>{eliteFiftyMBreaststroke.gender}</span> {/* Display athlete's gender */}
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="district" className="col-sm-2 col-form-label">區域</label>
                <div className="col-sm-10">
                    <span>{eliteFiftyMBreaststroke.district}</span> {/* Display athlete's district */}
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
                        value={eliteFiftyMBreaststroke.time || ""} 
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
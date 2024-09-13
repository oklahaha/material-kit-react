import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

function Form({ id }) {
    const navigate = useNavigate();

    const [fiftyMButterflystroke, setFiftyMButterflystroke] = useState({
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
        const fetchFiftyMButterflystrokeData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/fiftyMButterflystroke/getFiftyMButterflystroke?id=${id}`);
                if (response.ok) {
                    const fetchedFiftyMButterflystroke = await response.json();
                    setFiftyMButterflystroke(prev => ({
                        ...prev,
                        ...fetchedFiftyMButterflystroke,
                        age: fetchedFiftyMButterflystroke.age !== null ? fetchedFiftyMButterflystroke.age.toString() : "",
                        time: fetchedFiftyMButterflystroke.time
                    }));
                } else {
                    console.error('Failed to fetch FiftyMButterflystroke data');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        if (id) {
            fetchFiftyMButterflystrokeData();
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFiftyMButterflystroke(prev => ({
            ...prev,
            [name]: value // This will correctly update the time value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const fiftyMButterflystrokeData = {
            ...fiftyMButterflystroke,
            age: fiftyMButterflystroke.age ? parseInt(fiftyMButterflystroke.age) : null,
            time: fiftyMButterflystroke.time // Ensure time is included in the submission
        };
    
        console.log('Submitting FiftyMButterflystroke data:', fiftyMButterflystrokeData);
    
        try {
            const response = await fetch('http://localhost:8080/fiftyMButterflystroke/editFiftyMButterflystroke', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(fiftyMButterflystrokeData),
            });
    
            if (response.ok) {
                const updatedFiftyMButterflystroke = await response.json();
                console.log('Updated fiftyMButterflystroke:', updatedFiftyMButterflystroke);
                const { gender, age, title } = fiftyMButterflystroke; // Extract parameters from state
                navigate("/pages/competition/fiftyMButterflystroke", { 
                    state: { 
                        message: "FiftyMButterflystroke updated successfully!", 
                        type: "success", 
                        gender, 
                        age, 
                        title 
                    } 
                });
            } else {
                const errorData = await response.json();
                console.error('Failed to update FiftyMButterflystroke:', errorData);
                alert(`Failed to update FiftyMButterflystroke: ${errorData.message || 'Unknown error'}`);
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
                    <span>{fiftyMButterflystroke.athleteId.chName}</span> {/* Display athlete's Chinese name */}
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="age" className="col-sm-2 col-form-label">年齡</label>
                <div className="col-sm-10">
                    <span>{fiftyMButterflystroke.age}</span> {/* Display athlete's age */}
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">性別</label>
                <div className="col-sm-10">
                    <span>{fiftyMButterflystroke.gender}</span> {/* Display athlete's gender */}
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="district" className="col-sm-2 col-form-label">區域</label>
                <div className="col-sm-10">
                    <span>{fiftyMButterflystroke.district}</span> {/* Display athlete's district */}
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
                        value={fiftyMButterflystroke.time || ""} 
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
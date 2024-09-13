import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

function Form({ id }) {
    const navigate = useNavigate();

    const [fiftyMBackstroke, setFiftyMBackstroke] = useState({
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
        const fetchFiftyMBackstrokeData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/fiftyMBackstroke/getFiftyMBackstroke?id=${id}`);
                if (response.ok) {
                    const fetchedFiftyMBackstroke = await response.json();
                    setFiftyMBackstroke(prev => ({
                        ...prev,
                        ...fetchedFiftyMBackstroke,
                        age: fetchedFiftyMBackstroke.age !== null ? fetchedFiftyMBackstroke.age.toString() : "",
                        time: fetchedFiftyMBackstroke.time
                    }));
                } else {
                    console.error('Failed to fetch FiftyMBackstroke data');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        if (id) {
            fetchFiftyMBackstrokeData();
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFiftyMBackstroke(prev => ({
            ...prev,
            [name]: value // This will correctly update the time value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const fiftyMBackstrokeData = {
            ...fiftyMBackstroke,
            age: fiftyMBackstroke.age ? parseInt(fiftyMBackstroke.age) : null,
            time: fiftyMBackstroke.time // Ensure time is included in the submission
        };
    
        console.log('Submitting FiftyMBackstroke data:', fiftyMBackstrokeData);
    
        try {
            const response = await fetch('http://localhost:8080/fiftyMBackstroke/editFiftyMBackstroke', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(fiftyMBackstrokeData),
            });
    
            if (response.ok) {
                const updatedFiftyMBackstroke = await response.json();
                console.log('Updated fiftyMBackstroke:', updatedFiftyMBackstroke);
                const { gender, age, title } = fiftyMBackstroke; // Extract parameters from state
                navigate("/pages/competition/fiftyMBackstroke", { 
                    state: { 
                        message: "FiftyMBackstroke updated successfully!", 
                        type: "success", 
                        gender, 
                        age, 
                        title 
                    } 
                });
            } else {
                const errorData = await response.json();
                console.error('Failed to update FiftyMBackstroke:', errorData);
                alert(`Failed to update FiftyMBackstroke: ${errorData.message || 'Unknown error'}`);
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
                    <span>{fiftyMBackstroke.athleteId.chName}</span> {/* Display athlete's Chinese name */}
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="age" className="col-sm-2 col-form-label">年齡</label>
                <div className="col-sm-10">
                    <span>{fiftyMBackstroke.age}</span> {/* Display athlete's age */}
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">性別</label>
                <div className="col-sm-10">
                    <span>{fiftyMBackstroke.gender}</span> {/* Display athlete's gender */}
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="district" className="col-sm-2 col-form-label">區域</label>
                <div className="col-sm-10">
                    <span>{fiftyMBackstroke.district}</span> {/* Display athlete's district */}
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
                        value={fiftyMBackstroke.time || ""} 
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
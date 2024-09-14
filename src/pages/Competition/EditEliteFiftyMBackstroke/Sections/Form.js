import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

function Form({ id }) {
    const navigate = useNavigate();

    const [eliteFiftyMBackstroke, setEliteFiftyMBackstroke] = useState({
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
        const fetchEliteFiftyMBackstrokeData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/eliteFiftyMBackstroke/getEliteFiftyMBackstroke?id=${id}`);
                if (response.ok) {
                    const fetchedEliteFiftyMBackstroke = await response.json();
                    setEliteFiftyMBackstroke(prev => ({
                        ...prev,
                        ...fetchedEliteFiftyMBackstroke,
                        age: fetchedEliteFiftyMBackstroke.age !== null ? fetchedEliteFiftyMBackstroke.age.toString() : "",
                        time: fetchedEliteFiftyMBackstroke.time
                    }));
                } else {
                    console.error('Failed to fetch EliteFiftyMBackstroke data');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        if (id) {
            fetchEliteFiftyMBackstrokeData();
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEliteFiftyMBackstroke(prev => ({
            ...prev,
            [name]: value // This will correctly update the time value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const eliteFiftyMBackstrokeData = {
            ...eliteFiftyMBackstroke,
            age: eliteFiftyMBackstroke.age ? parseInt(eliteFiftyMBackstroke.age) : null,
            time: eliteFiftyMBackstroke.time // Ensure time is included in the submission
        };
    
        console.log('Submitting EliteFiftyMBackstroke data:', eliteFiftyMBackstrokeData);
    
        try {
            const response = await fetch('http://localhost:8080/eliteFiftyMBackstroke/editEliteFiftyMBackstroke', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(eliteFiftyMBackstrokeData),
            });
    
            if (response.ok) {
                const updatedEliteFiftyMBackstroke = await response.json();
                console.log('Updated eliteFiftyMBackstroke:', updatedEliteFiftyMBackstroke);
                const { gender, age, title } = eliteFiftyMBackstroke; // Extract parameters from state
                navigate("/pages/competition/eliteFiftyMBackstroke", { 
                    state: { 
                        message: "EliteFiftyMBackstroke updated successfully!", 
                        type: "success", 
                        gender, 
                        age, 
                        title 
                    } 
                });
            } else {
                const errorData = await response.json();
                console.error('Failed to update EliteFiftyMBackstroke:', errorData);
                alert(`Failed to update EliteFiftyMBackstroke: ${errorData.message || 'Unknown error'}`);
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
                    <span>{eliteFiftyMBackstroke.athleteId.chName}</span> {/* Display athlete's Chinese name */}
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="age" className="col-sm-2 col-form-label">年齡</label>
                <div className="col-sm-10">
                    <span>{eliteFiftyMBackstroke.age}</span> {/* Display athlete's age */}
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">性別</label>
                <div className="col-sm-10">
                    <span>{eliteFiftyMBackstroke.gender}</span> {/* Display athlete's gender */}
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="district" className="col-sm-2 col-form-label">區域</label>
                <div className="col-sm-10">
                    <span>{eliteFiftyMBackstroke.district}</span> {/* Display athlete's district */}
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
                        value={eliteFiftyMBackstroke.time || ""} 
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
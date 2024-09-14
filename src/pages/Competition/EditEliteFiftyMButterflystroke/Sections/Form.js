import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

function Form({ id }) {
    const navigate = useNavigate();

    const [eliteFiftyMButterflystroke, setEliteFiftyMButterflystroke] = useState({
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
        const fetchEliteFiftyMButterflystrokeData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/eliteFiftyMButterflystroke/getEliteFiftyMButterflystroke?id=${id}`);
                if (response.ok) {
                    const fetchedEliteFiftyMButterflystroke = await response.json();
                    setEliteFiftyMButterflystroke(prev => ({
                        ...prev,
                        ...fetchedEliteFiftyMButterflystroke,
                        age: fetchedEliteFiftyMButterflystroke.age !== null ? fetchedEliteFiftyMButterflystroke.age.toString() : "",
                        time: fetchedEliteFiftyMButterflystroke.time
                    }));
                } else {
                    console.error('Failed to fetch EliteFiftyMButterflystroke data');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        if (id) {
            fetchEliteFiftyMButterflystrokeData();
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEliteFiftyMButterflystroke(prev => ({
            ...prev,
            [name]: value // This will correctly update the time value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const eliteFiftyMButterflystrokeData = {
            ...eliteFiftyMButterflystroke,
            age: eliteFiftyMButterflystroke.age ? parseInt(eliteFiftyMButterflystroke.age) : null,
            time: eliteFiftyMButterflystroke.time // Ensure time is included in the submission
        };
    
        console.log('Submitting EliteFiftyMButterflystroke data:', eliteFiftyMButterflystrokeData);
    
        try {
            const response = await fetch('http://localhost:8080/eliteFiftyMButterflystroke/editEliteFiftyMButterflystroke', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(eliteFiftyMButterflystrokeData),
            });
    
            if (response.ok) {
                const updatedEliteFiftyMButterflystroke = await response.json();
                console.log('Updated eliteFiftyMButterflystroke:', updatedEliteFiftyMButterflystroke);
                const { gender, age, title } = eliteFiftyMButterflystroke; // Extract parameters from state
                navigate("/pages/competition/eliteFiftyMButterflystroke", { 
                    state: { 
                        message: "EliteFiftyMButterflystroke updated successfully!", 
                        type: "success", 
                        gender, 
                        age, 
                        title 
                    } 
                });
            } else {
                const errorData = await response.json();
                console.error('Failed to update EliteFiftyMButterflystroke:', errorData);
                alert(`Failed to update EliteFiftyMButterflystroke: ${errorData.message || 'Unknown error'}`);
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
                    <span>{eliteFiftyMButterflystroke.athleteId.chName}</span> {/* Display athlete's Chinese name */}
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="age" className="col-sm-2 col-form-label">年齡</label>
                <div className="col-sm-10">
                    <span>{eliteFiftyMButterflystroke.age}</span> {/* Display athlete's age */}
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">性別</label>
                <div className="col-sm-10">
                    <span>{eliteFiftyMButterflystroke.gender}</span> {/* Display athlete's gender */}
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="district" className="col-sm-2 col-form-label">區域</label>
                <div className="col-sm-10">
                    <span>{eliteFiftyMButterflystroke.district}</span> {/* Display athlete's district */}
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
                        value={eliteFiftyMButterflystroke.time || ""} 
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
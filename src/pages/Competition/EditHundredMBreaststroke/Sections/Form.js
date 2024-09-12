import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

function Form({ id }) {
    const navigate = useNavigate();

    const [hundredMBreaststroke, setHundredMBreaststroke] = useState({
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
        const fetchHundredMBreaststrokeData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/hundredMBreaststroke/getHundredMBreaststroke?id=${id}`);
                if (response.ok) {
                    const fetchedHundredMBreaststroke = await response.json();
                    setHundredMBreaststroke(prev => ({
                        ...prev,
                        ...fetchedHundredMBreaststroke,
                        age: fetchedHundredMBreaststroke.age !== null ? fetchedHundredMBreaststroke.age.toString() : "",
                        time: fetchedHundredMBreaststroke.time
                    }));
                } else {
                    console.error('Failed to fetch HundredMBreaststroke data');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        if (id) {
            fetchHundredMBreaststrokeData();
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setHundredMBreaststroke(prev => ({
            ...prev,
            [name]: value // This will correctly update the time value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const hundredMBreaststrokeData = {
            ...hundredMBreaststroke,
            age: hundredMBreaststroke.age ? parseInt(hundredMBreaststroke.age) : null,
            time: hundredMBreaststroke.time // Ensure time is included in the submission
        };
    
        console.log('Submitting HundredMBreaststroke data:', hundredMBreaststrokeData);
    
        try {
            const response = await fetch('http://localhost:8080/hundredMBreaststroke/editHundredMBreaststroke', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(hundredMBreaststrokeData),
            });
    
            if (response.ok) {
                const updatedHundredMBreaststroke = await response.json();
                console.log('Updated HundredMBreaststroke:', updatedHundredMBreaststroke);
                const { gender, age, title } = hundredMBreaststroke; // Extract parameters from state
                navigate("/pages/competition/hundredMBreaststroke", { 
                    state: { 
                        message: "HundredMBreaststroke updated successfully!", 
                        type: "success", 
                        gender, 
                        age, 
                        title 
                    } 
                });
            } else {
                const errorData = await response.json();
                console.error('Failed to update HundredMBreaststroke:', errorData);
                alert(`Failed to update HundredMBreaststroke: ${errorData.message || 'Unknown error'}`);
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
                    <span>{hundredMBreaststroke.athleteId.chName}</span>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="age" className="col-sm-2 col-form-label">年齡</label>
                <div className="col-sm-10">
                    <span>{hundredMBreaststroke.age}</span>
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">性別</label>
                <div className="col-sm-10">
                    <span>{hundredMBreaststroke.gender}</span>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="district" className="col-sm-2 col-form-label">區域</label>
                <div className="col-sm-10">
                    <span>{hundredMBreaststroke.district}</span>
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
                        value={hundredMBreaststroke.time || ""} 
                        onChange={handleChange} 
                        placeholder="mm:ss:ms"
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
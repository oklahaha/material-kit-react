import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

function Form({ id }) {
    const navigate = useNavigate();

    const [fiftyMFreeStyle, setFiftyMFreeStyle] = useState({
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
        const fetchFiftyMFreeStyleData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/fiftyMFreeStyle/getFiftyMFreeStyle?id=${id}`);
                if (response.ok) {
                    const fetchedFiftyMFreeStyle = await response.json();
                    setFiftyMFreeStyle(prev => ({
                        ...prev,
                        ...fetchedFiftyMFreeStyle,
                        age: fetchedFiftyMFreeStyle.age !== null ? fetchedFiftyMFreeStyle.age.toString() : "",
                        time: fetchedFiftyMFreeStyle.time
                    }));
                } else {
                    console.error('Failed to fetch FiftyMFreeStyle data');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        if (id) {
            fetchFiftyMFreeStyleData();
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFiftyMFreeStyle(prev => ({
            ...prev,
            [name]: value // This will correctly update the time value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const fiftyMFreeStyleData = {
            ...fiftyMFreeStyle,
            age: fiftyMFreeStyle.age ? parseInt(fiftyMFreeStyle.age) : null,
            time: fiftyMFreeStyle.time // Ensure time is included in the submission
        };
    
        console.log('Submitting FiftyMFreeStyle data:', fiftyMFreeStyleData);
    
        try {
            const response = await fetch('http://localhost:8080/fiftyMFreeStyle/editFiftyMFreeStyle', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(fiftyMFreeStyleData),
            });
    
            if (response.ok) {
                const updatedFiftyMFreeStyle = await response.json();
                console.log('Updated fiftyMFreeStyle:', updatedFiftyMFreeStyle);
                const { gender, age, title } = fiftyMFreeStyle; // Extract parameters from state
                navigate("/pages/competition/fiftyMFreeStyle", { 
                    state: { 
                        message: "FiftyMFreeStyle updated successfully!", 
                        type: "success", 
                        gender, 
                        age, 
                        title 
                    } 
                });
            } else {
                const errorData = await response.json();
                console.error('Failed to update FiftyMFreeStyle:', errorData);
                alert(`Failed to update FiftyMFreeStyle: ${errorData.message || 'Unknown error'}`);
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
                    <span>{fiftyMFreeStyle.athleteId.chName}</span> {/* Display athlete's Chinese name */}
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="age" className="col-sm-2 col-form-label">年齡</label>
                <div className="col-sm-10">
                    <span>{fiftyMFreeStyle.age}</span> {/* Display athlete's age */}
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">性別</label>
                <div className="col-sm-10">
                    <span>{fiftyMFreeStyle.gender}</span> {/* Display athlete's gender */}
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="district" className="col-sm-2 col-form-label">區域</label>
                <div className="col-sm-10">
                    <span>{fiftyMFreeStyle.district}</span> {/* Display athlete's district */}
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
                        value={fiftyMFreeStyle.time || ""} 
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
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

function Form({ id }) {
    const navigate = useNavigate();

    const [eliteFiftyMFreeStyle, setEliteFiftyMFreeStyle] = useState({
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
        const fetchEliteFiftyMFreeStyleData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/eliteFiftyMFreeStyle/getEliteFiftyMFreeStyle?id=${id}`);
                if (response.ok) {
                    const fetchedEliteFiftyMFreeStyle = await response.json();
                    setEliteFiftyMFreeStyle(prev => ({
                        ...prev,
                        ...fetchedEliteFiftyMFreeStyle,
                        age: fetchedEliteFiftyMFreeStyle.age !== null ? fetchedEliteFiftyMFreeStyle.age.toString() : "",
                        time: fetchedEliteFiftyMFreeStyle.time
                    }));
                } else {
                    console.error('Failed to fetch EliteFiftyMFreeStyle data');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        if (id) {
            fetchEliteFiftyMFreeStyleData();
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEliteFiftyMFreeStyle(prev => ({
            ...prev,
            [name]: value // This will correctly update the time value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const eliteFiftyMFreeStyleData = {
            ...eliteFiftyMFreeStyle,
            age: eliteFiftyMFreeStyle.age ? parseInt(eliteFiftyMFreeStyle.age) : null,
            time: eliteFiftyMFreeStyle.time // Ensure time is included in the submission
        };
    
        console.log('Submitting EliteFiftyMFreeStyle data:', eliteFiftyMFreeStyleData);
    
        try {
            const response = await fetch('http://localhost:8080/eliteFiftyMFreeStyle/editEliteFiftyMFreeStyle', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(eliteFiftyMFreeStyleData),
            });
    
            if (response.ok) {
                const updatedEliteFiftyMFreeStyle = await response.json();
                console.log('Updated eliteFiftyMFreeStyle:', updatedEliteFiftyMFreeStyle);
                const { gender, age, title } = eliteFiftyMFreeStyle; // Extract parameters from state
                navigate("/pages/competition/eliteFiftyMFreeStyle", { 
                    state: { 
                        message: "EliteFiftyMFreeStyle updated successfully!", 
                        type: "success", 
                        gender, 
                        age, 
                        title 
                    } 
                });
            } else {
                const errorData = await response.json();
                console.error('Failed to update EliteFiftyMFreeStyle:', errorData);
                alert(`Failed to update EliteFiftyMFreeStyle: ${errorData.message || 'Unknown error'}`);
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
                    <span>{eliteFiftyMFreeStyle.athleteId.chName}</span> {/* Display athlete's Chinese name */}
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="age" className="col-sm-2 col-form-label">年齡</label>
                <div className="col-sm-10">
                    <span>{eliteFiftyMFreeStyle.age}</span> {/* Display athlete's age */}
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">性別</label>
                <div className="col-sm-10">
                    <span>{eliteFiftyMFreeStyle.gender}</span> {/* Display athlete's gender */}
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="district" className="col-sm-2 col-form-label">區域</label>
                <div className="col-sm-10">
                    <span>{eliteFiftyMFreeStyle.district}</span> {/* Display athlete's district */}
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
                        value={eliteFiftyMFreeStyle.time || ""} 
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
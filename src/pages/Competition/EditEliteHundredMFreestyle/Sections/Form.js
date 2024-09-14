import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

function Form({ id }) {
    const navigate = useNavigate();

    const [eliteHundredMFreestyle, setEliteHundredMFreestyle] = useState({
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
        const fetchEliteHundredMFreestyleData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/eliteHundredMFreestyle/getEliteHundredMFreestyle?id=${id}`);
                if (response.ok) {
                    const fetchedEliteHundredMFreestyle = await response.json();
                    setEliteHundredMFreestyle(prev => ({
                        ...prev,
                        ...fetchedEliteHundredMFreestyle,
                        age: fetchedEliteHundredMFreestyle.age !== null ? fetchedEliteHundredMFreestyle.age.toString() : "",
                        time: fetchedEliteHundredMFreestyle.time
                    }));
                } else {
                    console.error('Failed to fetch EliteHundredMFreestyle data');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        if (id) {
            fetchEliteHundredMFreestyleData();
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEliteHundredMFreestyle(prev => ({
            ...prev,
            [name]: value // This will correctly update the time value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const eliteHundredMFreestyleData = {
            ...eliteHundredMFreestyle,
            age: eliteHundredMFreestyle.age ? parseInt(eliteHundredMFreestyle.age) : null,
            time: eliteHundredMFreestyle.time // Ensure time is included in the submission
        };
    
        console.log('Submitting EliteHundredMFreestyle data:', eliteHundredMFreestyleData);
    
        try {
            const response = await fetch('http://localhost:8080/eliteHundredMFreestyle/editEliteHundredMFreestyle', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(eliteHundredMFreestyleData),
            });
    
            if (response.ok) {
                const updatedEliteHundredMFreestyle = await response.json();
                console.log('Updated eliteHundredMFreestyle:', updatedEliteHundredMFreestyle);
                const { gender, age, title } = eliteHundredMFreestyle; // Extract parameters from state
                navigate("/pages/competition/eliteHundredMFreestyle", { 
                    state: { 
                        message: "EliteHundredMFreestyle updated successfully!", 
                        type: "success", 
                        gender, 
                        age, 
                        title 
                    } 
                });
            } else {
                const errorData = await response.json();
                console.error('Failed to update EliteHundredMFreestyle:', errorData);
                alert(`Failed to update EliteHundredMFreestyle: ${errorData.message || 'Unknown error'}`);
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
                    <span>{eliteHundredMFreestyle.athleteId.chName}</span> {/* Display athlete's Chinese name */}
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="age" className="col-sm-2 col-form-label">年齡</label>
                <div className="col-sm-10">
                    <span>{eliteHundredMFreestyle.age}</span> {/* Display athlete's age */}
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">性別</label>
                <div className="col-sm-10">
                    <span>{eliteHundredMFreestyle.gender}</span> {/* Display athlete's gender */}
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="district" className="col-sm-2 col-form-label">區域</label>
                <div className="col-sm-10">
                    <span>{eliteHundredMFreestyle.district}</span> {/* Display athlete's district */}
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
                        value={eliteHundredMFreestyle.time || ""} 
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
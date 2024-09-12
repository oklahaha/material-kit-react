import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

function Form({ id }) {
    const navigate = useNavigate();

    const [hundredMFreestyle, setHundredMFreestyle] = useState({
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
        const fetchHundredMFreestyleData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/hundredMFreestyle/getHundredMFreestyle?id=${id}`);
                if (response.ok) {
                    const fetchedHundredMFreestyle = await response.json();
                    setHundredMFreestyle(prev => ({
                        ...prev,
                        ...fetchedHundredMFreestyle,
                        age: fetchedHundredMFreestyle.age !== null ? fetchedHundredMFreestyle.age.toString() : "",
                        time: fetchedHundredMFreestyle.time
                    }));
                } else {
                    console.error('Failed to fetch HundredMFreestyle data');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        if (id) {
            fetchHundredMFreestyleData();
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setHundredMFreestyle(prev => ({
            ...prev,
            [name]: value // This will correctly update the time value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const hundredMFreestyleData = {
            ...hundredMFreestyle,
            age: hundredMFreestyle.age ? parseInt(hundredMFreestyle.age) : null,
            time: hundredMFreestyle.time // Ensure time is included in the submission
        };
    
        console.log('Submitting HundredMFreestyle data:', hundredMFreestyleData);
    
        try {
            const response = await fetch('http://localhost:8080/hundredMFreestyle/editHundredMFreestyle', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(hundredMFreestyleData),
            });
    
            if (response.ok) {
                const updatedHundredMFreestyle = await response.json();
                console.log('Updated hundredMFreestyle:', updatedHundredMFreestyle);
                const { gender, age, title } = hundredMFreestyle; // Extract parameters from state
                navigate("/pages/competition/hundredMFreestyle", { 
                    state: { 
                        message: "HundredMFreestyle updated successfully!", 
                        type: "success", 
                        gender, 
                        age, 
                        title 
                    } 
                });
            } else {
                const errorData = await response.json();
                console.error('Failed to update HundredMFreestyle:', errorData);
                alert(`Failed to update HundredMFreestyle: ${errorData.message || 'Unknown error'}`);
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
                    <span>{hundredMFreestyle.athleteId.chName}</span> {/* Display athlete's Chinese name */}
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="age" className="col-sm-2 col-form-label">年齡</label>
                <div className="col-sm-10">
                    <span>{hundredMFreestyle.age}</span> {/* Display athlete's age */}
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">性別</label>
                <div className="col-sm-10">
                    <span>{hundredMFreestyle.gender}</span> {/* Display athlete's gender */}
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="district" className="col-sm-2 col-form-label">區域</label>
                <div className="col-sm-10">
                    <span>{hundredMFreestyle.district}</span> {/* Display athlete's district */}
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
                        value={hundredMFreestyle.time || ""} 
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
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

function Form({ athleteId }) {
    const navigate = useNavigate();

    const [athlete, setAthlete] = useState({
        engName: "",
        chName: "",
        age: "",
        gender: "",
        district: "",
        phone: "",
        fiftyMFreestyle: false,
        fiftyMBackstroke: false,
        fiftyMBreaststroke: false,
        fiftyMButterflystroke: false,
        hundredMFreestyle: false,
        hundredMBreaststroke: false,
        fiftyMKickBoard: false,
    });

    useEffect(() => {
        const fetchAthleteData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/athlete/getAthlete?athleteId=${athleteId}`);
                if (response.ok) {
                    const fetchedAthlete = await response.json();
                    setAthlete(prev => ({
                        ...prev,
                        ...fetchedAthlete,
                        age: fetchedAthlete.age !== null ? fetchedAthlete.age.toString() : "",
                        phone: fetchedAthlete.phone !== null ? fetchedAthlete.phone.toString() : "",
                    }));
                } else {
                    console.error('Failed to fetch athlete data');
                    // TODO: Add error handling
                }
            } catch (error) {
                console.error('Error:', error);
                // TODO: Add error handling
            }
        };

        if (athleteId) {
            fetchAthleteData();
        }
    }, [athleteId]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setAthlete(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const athleteData = {
            ...athlete,
            athleteId: athleteId,
            age: athlete.age ? parseInt(athlete.age) : null,
            phone: athlete.phone ? parseInt(athlete.phone) : null
        };
    
        console.log('Submitting athlete data:', athleteData);
    
        try {
            const response = await fetch('http://localhost:8080/athlete/editAthlete', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(athleteData),
            });
    
            if (response.ok) {
                const updatedAthlete = await response.json();
                console.log('Updated athlete:', updatedAthlete);
                navigate("/pages/competition/athlete", { state: { message: "Athlete updated successfully!", type: "success" } });
            } else if (response.status === 404) {
                console.error('Athlete not found');
                // Add error handling for athlete not found
                alert('Athlete not found. Please try again.');
            } else {
                const errorData = await response.json();
                console.error('Failed to update athlete:', errorData);
                // Add error handling
                alert(`Failed to update athlete: ${errorData.message || 'Unknown error'}`);
            }
        } catch (error) {
            console.error('Error:', error);
            // Add error handling
            alert(`An error occurred: ${error.message}`);
        }
    };

    const handleNonNegativeInput = (e) => {
        e.target.value = Math.abs(e.target.value);
    };

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group row">
                        <label htmlFor="engName" className="col-sm-2 col-form-label">英文姓名</label>
                        <div className="col-sm-10">
                            <input 
                                type="text" 
                                className="form-control" 
                                id="engName" 
                                name="engName"
                                value={athlete.engName} 
                                onChange={handleChange}
                                placeholder="Enter English Name"
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="chName" className="col-sm-2 col-form-label">中文姓名</label>
                        <div className="col-sm-10">
                            <input 
                                type="text" 
                                className="form-control" 
                                id="chName" 
                                name="chName"
                                value={athlete.chName} 
                                onChange={handleChange}
                                placeholder="Enter Chinese Name"
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="age" className="col-sm-2 col-form-label">年齡</label>
                        <div className="col-sm-10">
                            <input 
                                type="number" 
                                className="form-control" 
                                id="age" 
                                name="age"
                                value={athlete.age}
                                min="0" 
                                onInput={handleNonNegativeInput}
                                onChange={handleChange}
                                placeholder="Enter Age"
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="form-group-check">
                            <label className="col-sm-2 col-form-label">性別</label>
                            <div className="col-sm-10" style={{display: 'inline'}}>
                                <div className="form-check form-check-inline">
                                    <input 
                                        className="form-check-input" 
                                        type="radio"
                                        name="gender"
                                        id="M" 
                                        value="M"
                                        checked={athlete.gender === "M"}
                                        onChange={handleChange}
                                    />
                                    <label className="form-check-label" htmlFor="M">男</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input 
                                        className="form-check-input" 
                                        type="radio"
                                        name="gender"
                                        id="F" 
                                        value="F"
                                        checked={athlete.gender === "F"}
                                        onChange={handleChange}
                                    />
                                    <label className="form-check-label" htmlFor="F">女</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="district" className="col-sm-2 col-form-label">區域</label>
                        <div className="col-sm-10" style={{display: "inline"}}>
                            <select
                                className="form-control"
                                name="district"
                                id="district"
                                value={athlete.district}
                                onChange={handleChange}
                            >
                                <option value="">Select District</option>
                                <option value="TW">荃灣</option>
                                <option value="YL">元朗</option>
                                <option value="TM">屯門</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="phone" className="col-sm-2 col-form-label">電話</label>
                        <div className="col-sm-10">
                            <input 
                                type="number" 
                                className="form-control" 
                                id="phone" 
                                name="phone"
                                value={athlete.phone}
                                min="0" 
                                onInput={handleNonNegativeInput}
                                onChange={handleChange}
                                placeholder="Enter Phone No"
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="item" className="col-sm-2 col-form-label">參賽項目</label>
                        <div className="col-sm-10">
                            {['fiftyMFreestyle', 'fiftyMBackstroke', 'fiftyMBreaststroke', 'fiftyMButterflystroke', 
                              'hundredMFreestyle', 'hundredMBreaststroke', 'fiftyMKickBoard'].map((item) => (
                                <div key={item}>
                                    <input
                                        type="checkbox"
                                        name={item}
                                        id={item}
                                        checked={athlete[item]}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor={item} className="col-sm-2 col-form-label">
                                        {item === 'fiftyMFreestyle' ? '50M自由泳' :
                                         item === 'fiftyMBackstroke' ? '50M背泳' :
                                         item === 'fiftyMBreaststroke' ? '50M胸泳' :
                                         item === 'fiftyMButterflystroke' ? '50M蝶泳' :
                                         item === 'hundredMFreestyle' ? '100M自由泳' :
                                         item === 'hundredMBreaststroke' ? '100M胸泳' :
                                         '50M浮板'}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <br />
                    <div style={{textAlign: "right"}}>
                        <button type="submit" className="btn btn-default btn-primary">
                            <i className="bi bi-file-earmark"></i>Submit
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Form;
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState, useEffect} from "react"

function Form() {

    const [engName, setEngName] = useState("");
    const [chName, setChName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(
            engName,
            chName,
            age,
            gender,
        );
    };

    return (
        <>
            <div>
                <form>
                    <div class="form-group row">
                        <label for="engName" class="col-sm-2 col-form-label">英文姓名</label>
                        <div class="col-sm-10">
                            <input 
                                type="text" 
                                class="form-control" 
                                id="engName" 
                                value={engName} 
                                onChange={(e) =>
                                    setEngName(e.target.value)
                                }
                                placeholder="Enter English Name"
                            />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="engName" class="col-sm-2 col-form-label">中文姓名</label>
                        <div class="col-sm-10">
                            <input 
                                type="text" 
                                class="form-control" 
                                id="chName" 
                                value={chName} 
                                onChange={(e) =>
                                    setChName(e.target.value)
                                }
                                placeholder="Enter Chinese Name"
                            />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="age" class="col-sm-2 col-form-label">年齡</label>
                        <div class="col-sm-10">
                            <input 
                                type="number" 
                                class="form-control" 
                                id="age" 
                                value={age}
                                min="0" 
                                oninput="this.value = Math.abs(this.value)"
                                onChange={(e) =>
                                    setAge(e.target.value)
                                }
                                placeholder="Enter Age"
                            />
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="form-group-check">
                            <label class="form-label">性別</label>
                            <div class="col-sm-10 " >
                                <div class="form-check form-check-inline">
                                    <input 
                                        class="form-check-input" 
                                        type="radio"
                                        name="gender"
                                        id="M" 
                                        value="M"
                                        checked={gender === "M"}
                                        onChange={(e) =>
                                            setGender(e.target.value)
                                        }
                                    />
                                    <label class="form-check-label" for="M">男</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input 
                                        class="form-check-input" 
                                        type="radio"
                                        name="gender"
                                        id="F" 
                                        value="F"
                                        checked={gender === "F"}
                                        onChange={(e) =>
                                            setGender(e.target.value)
                                        }
                                    />
                                    <label class="form-check-label" for="F">女</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div style={{textAlign: "right"}}>
                        <button type="submit" class="btn btn-default btn-primary" onClick={(e) => handleSubmit(e)}><i class="bi bi-file-earmark"></i>Submit</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Form;
// import { useState } from "react";
// import axios from "axios"
import Form from "./components/Form/Form"
import React from "react"

function App() {
    // //Form States
    // const [name, setName] = useState('');
    // const [age,setAge] = useState('');
    // const [designation, setDesignation] = useState('');
    // const [salary, setSalary] = useState('');

    // //Submit Event    
    // const handleSubmit=(e) => {
    //     e.preventDefault();
    //     // console.log(name, age, designation, salary); 
    //     const data = {
    //         Name:name,
    //         Age:age,
    //         Designation:designation,
    //         Salary:salary
    //     }
    //     axios.post('https://sheet.best/api/sheets/1e830d29-23be-4006-91af-b04ecb84ac4e', data).then(response=>{
    //         console.log(response);
    //         // Clear the form here
    //         setName("")
    //         setAge("")
    //         setDesignation("")
    //         setSalary("")
    //     })
    // }

    return (
        <div>
            <Form/>
            {/* <br></br>
            <h1>Save Form Data in Google Sheets</h1>
            <br></br> */}

            {/* Form */}
            {/* <form autoComplete="off" className="form-group" onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" placeholder="Enter your name:" required className="form-control" 
                onChange={(e)=>setName(e.target.value)} value={name}/>
                <br></br>
                <label>Age</label>
                <input type="text" placeholder="Enter your age:" required className="form-control"
                onChange={(e)=>setAge(e.target.value)} value={age}/>
                <br></br>
                <label>Designation</label>
                <input type="text" placeholder="Enter your designation:" required className="form-control"
                onChange={(e)=>setDesignation(e.target.value)} value={designation}/>
                <br></br>
                <label>Salary</label>
                <input type="text" placeholder="Enter your salary:" required className="form-control"
                onChange={(e)=>setSalary(e.target.value)} value={salary}/>
                <br></br>
                <div style={{display:"flex", justifyContent:"flex-end"}}>
                    <button type="submit" className="btn-submit">Submit</button>
                </div>
            </form> */}
        </div>
    )
}

export default App
import React from 'react'
import { useState } from 'react';
import "../Form/form.css"
import axios from 'axios';

const Form = () => {

    //Form States
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [designation, setDesignation] = useState('');
    const [salary, setSalary] = useState('');

    //Submit Event    
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(name, age, designation, salary); 
        const data = {
            Name: name,
            Age: age,
            Designation: designation,
            Salary: salary
        }
        axios.post('https://sheet.best/api/sheets/1e830d29-23be-4006-91af-b04ecb84ac4e', data).then(response => {
            console.log(response);
            // Clear the form here
            setName("")
            setAge("")
            setDesignation("")
            setSalary("")
        })
    }

    return (
        <body className="body">
            
            <div className="container">

                    {/* Form */}
                    <h1 className="title">Save your data to Google Sheet</h1>
                    <form autoComplete="off" className="form-group" onSubmit={handleSubmit}>
                        <label>Name</label>
                        <input type="text" placeholder="Enter your name:" required className="form-control"
                            onChange={(e) => setName(e.target.value)} value={name} />
                        <br></br>
                        <label>Age</label>
                        <input type="text" placeholder="Enter your age:" required className="form-control"
                            onChange={(e) => setAge(e.target.value)} value={age} />
                        <br></br>
                        <label>Designation</label>
                        <input type="text" placeholder="Enter your designation:" required className="form-control"
                            onChange={(e) => setDesignation(e.target.value)} value={designation} />
                        <br></br>
                        <label>Salary</label>
                        <input type="text" placeholder="Enter your salary:" required className="form-control"
                            onChange={(e) => setSalary(e.target.value)} value={salary} />
                        <br></br>
                        <div style={{ display: "flex", justifyContent: "flex-end" }}>
                            <button type="submit" className="btn-submit">Submit</button>
                        </div>
                    </form>
            </div>
        </body>
    )
}

export default Form
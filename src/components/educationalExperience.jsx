import { useState } from "react"
import Button from "./button";

export default function EducationalExperience({setEduInfo}){
    const [schoolNameValue,setSchoolNameValue] = useState("");
    const [titleOfStudyValue,setTitleOfStudyValue] = useState("");
    const [dateOfStudyValue,setDateOfStudyValue] = useState(""); 
    
    function handleInputChange(e){
        e.preventDefault();
        setEduInfo(
            {
                schoolName: schoolNameValue,
                titleOfStudy: titleOfStudyValue,
                dateOfStudy: dateOfStudyValue,
            }
        )
    }
    return(
        <section className="educationalExperience">
            <h2>Educational Experience</h2>
            <form action="" onSubmit={handleInputChange}>
                <div>
                    <label htmlFor="schoolName">School name:</label>
                    <input type="text" name="" id="schoolName" placeholder="Enter school name" value={schoolNameValue} onChange={(e)=>setSchoolNameValue(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="titleOfStudy">Title of study:</label>
                    <input type="text" name="" id="titleOfStudy" placeholder="Enter title of study" value={titleOfStudyValue} onChange={(e)=>setTitleOfStudyValue(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="dateOfStudy">Date of study:</label>
                    <input type="date" name="" id="dateOfStudy" value={dateOfStudyValue} onChange={(e)=>setDateOfStudyValue(e.target.value)} />
                </div>
                <Button text="Add Educational Experience" onClick={handleInputChange}/>
            </form>
        </section>
    )
}
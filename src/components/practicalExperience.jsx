import { useState } from "react"
import Button from "./button";

export default function PraticalExperience({setExpInfo}){
    const [companyNameValue,setCompanyNameValue] = useState();
    const [positionTitleValue,setPositionTitleValue] = useState();
    const [jobMainResponsibilitiesValue,setJobMainResponsibilitiesValue] = useState();
    const [joinedDateValue,setJoinedDateValue] = useState();
    const [leftDateValue,setLeftDateValue] = useState();

    function handleInputChange(e){
        e.preventDefault();
        setExpInfo(
            {
                companyName: companyNameValue,
                positionTitle: positionTitleValue,
                jobMainResponsibilities: jobMainResponsibilitiesValue,
                joinedDate: joinedDateValue,
                leftDate: leftDateValue,
            }
        )
    }
    
    return(
        <section className="practicalExperience">
            <h2>Practical Experience</h2>
            <form action="" onSubmit={handleInputChange}>
                <div>
                    <label htmlFor="companyName">Company name:</label>
                    <input type="text" name="" id="companyName" placeholder="Enter company name" value={companyNameValue} onChange={(e)=>{setCompanyNameValue(e.target.value)}}/>
                </div>
                <div>
                    <label htmlFor="positionTitle">Position title:</label>
                    <input type="text" name="" id="positionTitle" placeholder="Enter position title" value={positionTitleValue} onChange={(e)=>{setPositionTitleValue(e.target.value)}} />
                </div>
                <div>
                    <label htmlFor="jobMainResponsibilities">Job main responsibilities:</label>
                    <textarea type="text" name="" id="jobMainResponsibilities" placeholder="Enter job main responsibilities" maxLength={1000} value={jobMainResponsibilitiesValue} onChange={(e)=>{setJobMainResponsibilitiesValue(e.target.value)}} />
                </div>
                <div>
                    <label htmlFor="joinedDate">Joined:</label>
                    <input type="date" name="" id="joinedDate" value={joinedDateValue} onChange={(e)=>{setJoinedDateValue(e.target.value)}}  />
                </div>
                <div>
                    <label htmlFor="leftDate">Left:</label>
                    <input type="date" name="" id="leftDate" value={leftDateValue} onChange={(e)=>{setLeftDateValue(e.target.value)}}/>
                </div>
                <Button text="Add Practical Experience" onClick={handleInputChange}/>
            </form>
        </section>
    )
}
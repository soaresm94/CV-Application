import { useState } from "react"
import GeneralInformation from "./generalInformation"
import EducationalExperience from "./educationalExperience"
import PracticalExperience from "./practicalExperience"
import Button from "./button";


export default function Page(){

    const [genInfo,setGenInfo] = useState("");
    const [eduInfo,setEduInfo] = useState([]);
    const [expInfo,setExpInfo] = useState([]);

    function addEduInfo(newEduInfo){
        setEduInfo((prevEduInfo)=>([...prevEduInfo,newEduInfo]));
    }

    function addExpInfo(newExpInfo){
        setExpInfo((prevExpInfo)=>([...prevExpInfo,newExpInfo]));
    }

    function removeEduInfo(index) {
        setEduInfo((prevEduInfo) => prevEduInfo.filter((_, i) => i !== index));
      }
      
      function removeExpInfo(index) {
        setExpInfo((prevExpInfo) => prevExpInfo.filter((_, i) => i !== index));
      }

    return(
        <div className="curriculumVitae">
            <h1>Curriculum Vitae</h1>
            <div className="one">
                <div className="curriculumVitaeForm">
                    <h1>Curriculum Vitae Form</h1>
                    <GeneralInformation setGenInfo={setGenInfo}/>
  
                    <EducationalExperience setEduInfo={addEduInfo}/>

                    <PracticalExperience setExpInfo={addExpInfo}/>

                </div>
                <div className="curriculumVitaePreview">
                    <h1>Curriculum Vitae Preview</h1>
                        <div><b>Name: </b>{genInfo.name}</div>
                        <div><b>Email: </b>{genInfo.email}</div>
                        <div><b>Phone number: </b>{genInfo.phoneNumber}</div>
                        <h2>Educational Experience</h2>
                        {eduInfo.map((info,index)=>(
                            <div className="eduInfoDiv">
                                <ul key={index}>
                                    <li><b>School name: </b>{info.schoolName}</li>
                                    <li><b>Title of study: </b>{info.titleOfStudy}</li>
                                    <li><b>Date of study: </b>{info.dateOfStudy}</li>
                                </ul>
                                <Button text="Remove" onClick={()=>removeEduInfo(index)}/>
                            </div>
                        ))}
                        <h2>Practical Experience</h2>
                        {expInfo.map((info,index)=>(
                            <div className="expInfoDiv">
                                <ul key={index}>
                                    <li><b>Company name: </b>{info.companyName}</li>
                                    <li><b>Position title: </b>{info.positionTitle}</li>
                                    <li><b>Job main responsibilities: </b>{info.jobMainResponsibilities}</li>
                                    <li><b>Joined date: </b>{info.joinedDate}</li>
                                    <li><b>Left date: </b>{info.leftDate}</li>
                                </ul>
                                <Button text="Remove" onClick={()=>removeExpInfo(index)}/>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}




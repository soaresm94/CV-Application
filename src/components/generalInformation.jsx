import { useState } from "react";
import Button from "./button";

export default function GeneralInformation({setGenInfo}){
    const [nameValue,setNameValue] = useState("");
    const [emailValue,setEmailValue] = useState("");
    const [phoneNumberValue,setPhoneNumberValue] = useState(""); 

    function handleInputChange(e){
        e.preventDefault();
        setGenInfo(
            {
                name: nameValue,
                email: emailValue,
                phoneNumber: phoneNumberValue,
            }
        )
    }

    return(
        <section className="generalInformation">
            <h2>General Information</h2>
            <form action="" onSubmit={handleInputChange}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="" id="name" placeholder="Enter name" value={nameValue} onChange={(e)=>setNameValue(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" name="" id="email" placeholder="Enter e-mail" value={emailValue} onChange={(e)=>setEmailValue(e.target.value)}/>                   
                </div>
                <div>
                    <label htmlFor="phoneNumber">Phone number:</label>
                    <input type="number" name="" id="phoneNumber" placeholder="Enter phone number" value={phoneNumberValue} onChange={(e)=>setPhoneNumberValue(e.target.value)} />
                </div>
                <Button text="Add General Information" onClick={handleInputChange}/>
            </form>
        </section>
    )
}


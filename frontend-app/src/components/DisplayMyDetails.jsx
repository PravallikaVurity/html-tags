import { useState } from "react";
const DisplayMyDetails = (props) => {
    console.log(props);
    
    return (
        <>
            <h3>DisplayMyDetails</h3>

            <h4>
                Props Data:<br/>Name:{props.Name} <br></br>Role:{props.Role} <br></br>RollNo:{props.RollNo} <br></br>Course:{props.Course} <br></br>College:{props.College}            </h4>
        </>

    );

}
export default DisplayMyDetails;

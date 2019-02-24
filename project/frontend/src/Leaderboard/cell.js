import React from 'react'

const cell = (props) => {
    let time = ''
    if(props.id == props.acQid) {
        console.log("csuhiodshvoihvnoindfovndfoi")
        if(props.acTime == 0) {
            time = ''
        }

        else {
            time = props.acTime
        }
         
    }

    return (
    <div>
        <div className="Acscore">
            {props.score}
        </div>
        <div className="Actime">
            {time}
        </div>
    </div>
    )
}

export default cell;
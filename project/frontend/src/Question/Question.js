import React from 'react'
import { NavLink } from 'react-router-dom'

const question = (props) => {

    const question = props.promise ? props.question : (
            <div>

            </div>
        )

    return (
    <NavLink to={'/Coding/' + props.id} style={{textDecoration:"none"}}>
        <div className={"flip-card Q" + props.id} >
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <div className="question">
                        <div className="qno">

                        </div>
                        <div className="qhead">
                            {question.questionTitle}
                        </div>

                        <div className="attempts">
                            {question.submission}
                        </div>
                    </div>
                </div>



                    <div className="accuracy">
                        <div className="progress">
                            <div
                                className="progress-bar progress-bar-success"
                                role="progressbar"
                                aria-valuenow="60"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ width: question.accuracy + "%" }}
                            >
                            </div>
                        </div>
                    </div>


                </div>


            </div>


        </NavLink>
    )
}

export default question;
import React from 'react'
import { NavLink } from 'react-router-dom'

const question = (props) => {

    const question = props.promise ? props.question : (
            <div>

            </div>
        )

    return (
        < div className={"flip-card Q" + props.id} >
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <div className="question">
                        <div className="qno">
                            {props.id}
                        </div>
                        <div className="title">
                            {question.questionTitle}
                        </div>

                        <div className="attempts">
                            {question.submission}
                        </div>
                    </div>
                </div>

                <div className="flip-card-back">
                    <div className="title">
                        {question.questionTitle}
                    </div>
                    <div className="accuracy">
                        <div className="progress">
                            <div
                                className="progress-bar progress-bar-success"
                                role="progressbar"
                                aria-valuenow="40"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ width: question.accuracy + "%" }}
                            >
                            </div>
                        </div>
                    </div>
                    <div className="try">
                        <NavLink to={'/Coding/' + props.id}> <button className="btn but1">Try it</button></NavLink>
                    </div>


                </div>


            </div>
        </div >
    )
}

export default question;
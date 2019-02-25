import React from 'react'
import { NavLink,withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { css } from '@emotion/core';
import { ClipLoader,BarLoader,PropagateLoader,PulseLoader} from 'react-spinners';


const Navig = styled.div`
height:7vh;
background-color: black;
width: 100%;
//  border: 1px solid red;
color:white;
`;
const Centerbox = styled.div`
height: 86vh;
width: 100%;
// border: 1px solid red;
display: flex;
       align-content: center;
       align-items: center;
`;
const BottomBox = styled.div`
color:white;
height: 7vh;
font-size: 3vh;
font-weight: unset;
justify-content: center;
text-align: center;
background-color: black;
width:100%;
//  border: 1px solid red;

`;
const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
    margin-top:1vh;
`;



const question = (props) => {
    const loader = (
        <div className='clip'>
            <ClipLoader
                css={override}
                sizeUnit={"px"}
                size={27}
                color={'#003366'}
                loading={true}
            />
        </div>
    )
    
    const questionAcc = props.promise ? props.question.accuracy : 0
    const questionSub = props.promise ? props.question.submission : loader
    const questionTitle = props.promise ? props.question.questionTitle : loader
    const questionAccuracyBar = props.promise ? (
        <div className="progress ">
                            <div
                                className="progress-bar progress-bar-success progs"
                                role="progressbar"
                                aria-valuenow="60"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ width: questionAcc + "%" }}
                            >
                            <div style={{
                                color:"black",
                                fontSize:"2vh",
                                fontWeight:"600",
                                marginTop:"0vh",
                                
                                
                            }}>
                            {questionAcc}%
                            </div>
                            </div>
                        </div>
    ) : (
        <BarLoader
            css={override}
            sizeUnit={"vh"}
            width={100}
            height={9}
            color={'#008080'}
            sloading={true}
        />
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
                            {questionTitle}
                        </div>

                        <div className="attempts mt-1">
                            SUCCESSFUL SUBMISSIONS:
                            <br/>
                            <div style={{marginTop:"1vh"}}>{questionSub}</div>
                        </div>        
                    <div className="accuracy row">
                    <div className="accutext">ACCURACY</div>


                        <div className="insideaccu">
                            {questionAccuracyBar}
                        </div>
                    </div>

                    </div>
                </div>
                </div>
            </div>
        </NavLink>
    )
}

export default withRouter(question);
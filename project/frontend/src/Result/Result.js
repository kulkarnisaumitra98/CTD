import React from 'react'
import styled from 'styled-components'
import './style.css'

const Navig = styled.div`
height:7vh;
background-color: black;
width: 100%;
//  border: 1px solid red;
color:white;
`;
const Centerbox = styled.div`
height: 86vh;
background-image: url("alt1.jpg");
width: 100%;
// border: 1px solid red;
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


class Main extends React.Component {
    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <Navig></Navig>
                <Centerbox >
                    <div className="teamname">
                        <h1>TEAM NAME</h1>
                    </div>

                    <div className="row bruh">
                        <div className=" rank">
                            RANK
                        <div className="content">1</div>
                        </div>
                        <div className="score">
                            Score
                        <div className="content">4395</div>
                        </div>
                    </div>
                    <div className="leader">
                        <table className="table">
                            <thead className="thead-dark">
                                <tr className="title table-row">
                                    <th><h5><b>RANK</b></h5></th>
                                    <th><h5><b>TEAM NAME</b></h5></th>
                                    <th><h5><b>SCORE</b></h5></th>

                                </tr>
                            </thead>
                            <tr className="r1 table-row">
                                <td>1</td>
                                <td>XYZ</td>
                                <td>123</td>
                            </tr>
                            <tr className="r2 table-row">
                                <td>2</td>
                                <td>XYZ</td>
                                <td>120</td>
                            </tr>
                            <tr className="r1 brd table-row">
                                <td>3</td>
                                <td>EYZ</td>
                                <td>111</td>
                            </tr>
                        </table>
                    </div>

                </Centerbox>
                <BottomBox>© PICT IEEE STUDENT BRANCH</BottomBox>
            </div>
        )
    }
}

export default Main

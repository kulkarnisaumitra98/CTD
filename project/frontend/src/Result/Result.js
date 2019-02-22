import React from 'react'
import styled from 'styled-components'
import './result.css'


const Centerbox = styled.div`
height: 86vh;
width: 100%;
justify-content: center;
// border: 1px solid red;
`;
const BottomBox = styled.div`
color:white;
height:7vh;
font-size:3vh;
display:flex;
justify-content: center;
text-align: center;
background-color: black;
width:100%;

`;


class Main extends React.Component {
    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <Centerbox >
                    <div className="teamname123">
                        <h1>TEAM NAME</h1>
                    </div>
                <div className="cache">
                    <div className="row ">
                        <div className="rankres">
                            RANK
                                  <div className="content12">1</div>
                        </div>
                        <div className="scoreit">
                            Score
                        <div className="content12">4395</div>
                        </div>
                    </div>
                    </div>
                    <div className="leaderres">
                        <table className="table">
                            <tbody>
                                <tr className="table-row">
                                    <th>RANK</th>
                                    <th>TEAM NAME</th>
                                    <th>SCORE</th>
                                </tr>
                            </tbody>
                            </table>

                            <table>
                                <tbody>
                            <tr className="table">
                                <td>1</td>
                                <td>XYZ</td>
                                <td>123</td>
                            </tr>
                            <tr className="table">
                                <td>2</td>
                                <td>XYZ</td>
                                <td>120</td>
                            </tr>
                            <tr className="table">
                                <td>3</td>
                                <td>EYZ</td>
                                <td>111</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </Centerbox>
                <BottomBox>© PICT IEEE STUDENT BRANCH</BottomBox>
            </div>
        )
    }
}
// 59 to 102 submission page and change result.css style names
export default Main

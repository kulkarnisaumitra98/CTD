import React from 'react'
import styled from 'styled-components'
import { css } from '@emotion/core';
import { ScaleLoader } from 'react-spinners';


const override = css`
    display: block;
`;

const TestCaseBox = styled.div`
    width:25%;
    height:25vh;
    border:2px solid green;
    margin-right:3vw;
    margin-left:2vw;
`;



class Testcase extends React.Component {
    constructor(props) {
        super(props);


    }

    render() {

        const text = this.props.state.loading ? 
        (
            <ScaleLoader
                css={override}
                sizeUnit={"vh"}
                size={5}
                color={'#000'}
                loading={true}
            />
            
        )
        :
        (
            <div>
                {this.props.state.testlist[this.props.id - 1]}
            </div>
        )

        return (
            <TestCaseBox>
                <div className="InsideTest">
                    Test Case {this.props.id}:
                </div>
                <div className="BelowInsideTest">
                    {text}
                </div>
            </TestCaseBox>
        )
    }

}


export default Testcase

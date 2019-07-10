import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import Button from '@material-ui/core/Button'
import { shadow, media } from 'lib/styleUtils';

// 상단 고정, 그림자
const Positioner = styled.div`
    display: flex;
    flex-direction: row;
    position: fixed;
    top: 45px;
    width: 100px;
    height: 100%;
`;

// 흰 배경, 내용 중간 정렬
const BackgroundColor = styled.div`
    background: #f1f1f5;
    display: flex;
    justify-content: center;
    height: auto;
`;

// 해더의 내용
const HeaderContents = styled.div`
    width: 200px;
    display: flex;
    flex-direction: column;

    padding-right: 1rem;
    padding-left: 1rem;
`;

// 로고
const Logo = styled.div`
    font-size: 1.5rem;
    letter-spacing: 2px;
    color: ${oc.gray[0]};
    font-family: 'Rajdhani';
`;

// 중간 여백
const Spacer = styled.div`
    flex-grow: 1;
`;

// 하단 그래디언트 테두리
const GradientBorder = styled.div`
    height: 3px;
    background: linear-gradient(to right, ${oc.teal[6]}, ${oc.cyan[5]});
`;

const LeftMenu = ({children}) => {
    return (
        <Positioner>
            <BackgroundColor>
                <HeaderContents>
                    <Button color="primary" target="_blank">
                       Button 1
                    </Button>
                    <Button color="primary" target="_blank">
                       Button 2
                    </Button>
                    {children}
                </HeaderContents>
            </BackgroundColor>
        </Positioner>
    );
};

export default LeftMenu;
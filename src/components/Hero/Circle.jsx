import React from 'react';
import styled from 'styled-components';

const Ellipse = styled.div`

    position: fixed;
    width: ${props => props.width};
    height: ${props => props.height};
    background: ${props => props.background};
    top: ${props => props.top};
    left: ${props => props.left};
    border-radius: 50%;

    @media screen and (max-width: 1200px) {
        display: none;
    }


`;

const Circle = ({width, height, top, left, background}) => {

  return (
    <Ellipse width={width} height={height} top={top} left={left} background={background} />
  )
}

export default Circle
import React, { useState, useRef, DragEvent } from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.svg';

interface InterfaceImageWrapper {
    readonly isElementVisible: boolean;
}

const DragAndDrop = () => {
    const [isElementVisible, setISElementVisible] = useState(true);
    const element = useRef<HTMLImageElement>(null);

    // hide ghost of element
    const dragHandler = (e: DragEvent) => {
        setISElementVisible(false);
    }

    // show
    const dragEndHandler = (e: DragEvent) => {
        e.preventDefault();
        setISElementVisible(true);
    }

    // add element to Box
    const dropHandler = (e: DragEvent) => {
        e.preventDefault();
        element.current && (e.target as Element).appendChild(element.current);
    }

    // allow for dragging
    const allowDrag = (e: DragEvent) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    }

    return (
        <DragAndDropWrapper>
            <ImageWrapper
                isElementVisible={isElementVisible}
                onDrag={dragHandler}
                onDragEnd={dragEndHandler}
            >
                <img
                    src={logo}
                    className="App-logo"
                    alt="logo"
                    id="app-logo"
                    draggable="true"
                    ref={element}
                />
            </ImageWrapper>
            <Box
                onDrop={dropHandler}
                onDragOver={allowDrag}
            >
            </Box>
        </DragAndDropWrapper>
    );
}

export default DragAndDrop;

const DragAndDropWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageWrapper = styled.div<InterfaceImageWrapper>`
  visibility: ${props => props.isElementVisible ? 'visible' : 'hidden'};
  img {
    cursor: pointer;
  }
`;

const Box = styled.div`
  border: 6px solid #61dafb;
  width: 200px;
  height: 200px;
  border-radius: 10px;
  background: #282c34;
`;
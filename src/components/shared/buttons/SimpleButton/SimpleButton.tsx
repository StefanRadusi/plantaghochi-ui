import * as React from 'react';

import './SimpleButton.css';

interface ISimpleButtonProps {
    title: string;
    onClick: () => void;
}

export const SimpleButton: React.StatelessComponent<ISimpleButtonProps> = (props) => (
    <div className='simpleButton' onClick={props.onClick}>
        <p> {props.title} </p>
    </div>
);
import React from 'react';
import {CloseCircleOutlined} from '@ant-design/icons'
import {
 WrapperModal
} from './style'


const Modal = ({...props}) => {
    const {lat, lng} = props.coordinates
    console.log(props)
    return(
        <WrapperModal>
            <h1>Modal window</h1>
            <div className="coords_location">
                <p>
                    <span>{lat}</span>
                </p>
                <p>
                    <span>{lng}</span>
                </p>
            </div>
            <div className="coords_city">
                <p>
                    <span>City: </span><span>Best</span>
                </p>
            </div>
            <div className="coords_street">
                <p>
                    <span>Street: </span><span>Pobeda</span>
                </p>
            </div>

            <div className={'closeBtn'}>
                <span><CloseCircleOutlined /></span>
            </div>
        </WrapperModal>
    )
}

export default Modal;
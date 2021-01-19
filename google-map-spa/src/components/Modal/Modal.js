import React from "react";
import { CloseCircleOutlined } from "@ant-design/icons";
import moment from "moment";
import { WrapperModal } from "./style";


const Modal = ({...props}) => {
    const {lat, lng} = props.coordinates;
    const {weather, district} = props;
    const {features} = district;
    const {properties} = features[0];

    return (
            <WrapperModal>
                <div className="district_address">
                    <h1>Your district is :<span>{properties.label}</span></h1>
                </div>
                <div className="coords_location">
                    <p>
                        <span><b>Latitude:</b> </span> <span>{lat}</span>
                    </p>
                    <p>
                        <span><b>Longitude:</b> </span><span>{lng}</span>
                    </p>
                </div>
                <div className="coords_city">
                    {weather.map(item => (
                        <div style={{margin: "10px"}}>
                            <span><b>{moment(item.dt_txt).format("dddd,  Do")}:</b></span> wind/speed: <span>{item.wind.speed} m/c </span>
                            <span> Temp: {item.main.temp} C</span>
                        </div>
                    ))}
                </div>
                <div className={"closeBtn"}
                     onClick={props.hideModal}>
                    <span><CloseCircleOutlined/></span>
                </div>
            </WrapperModal>
    )
}

export default Modal;
import React from 'react';

export default function Alert(props) {
    return props.alertMessage && <div className="bg-green-100 rounded-lg py-2 px-6 text-base text-green-700" role="alert">
        <strong>{props.alertMessage.msgType}</strong> : {props.alertMessage.msg}
    </div>;
}

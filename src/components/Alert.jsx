import React from 'react';

export default function Alert(props) {
    let bg;
    if (props.mode === 'light') {
        bg = "bg-[#ad5df4]";
    }
    else if (props.mode === 'red') {
        bg = "bg-[#ff3700]";
    }
    else if (props.mode === 'green') {
        bg = "bg-[#00af26]";
    }
    else if (props.mode === 'blue') {
        bg = "bg-[#1B1D5E]";
    }
    else {
        bg = "bg-[#141414]";
    }
    return <div className={`h-10 ${bg}`}>{props.alertMessage && <div className="bg-green-100 rounded-lg py-2 px-6 text-base text-green-700" role="alert">
        <strong>{props.alertMessage.msgType}</strong> : {props.alertMessage.msg}
    </div>}</div>;
}

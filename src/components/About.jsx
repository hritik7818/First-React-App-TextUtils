import React from 'react';

export default function About(props) {
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
    return <div className={`${bg} flex h-[520px]`}>
        <div className="h-96 w-1/2 mt-8">
            <div className="ml-36 mt-7 pr-20">
                <h1 className="text-5xl text-violet-700 mb-6">About Us</h1>
                <p className="text-xl text-white">TextUtils application is a text based application which is used to manipulates to the text as you want. You can convert text to the Upper Case to lower Case or lower case to upper case to lower case. You can also Capitalize Your text , Remove extra spaces and copy the text.
                </p>
            </div>
        </div>
        <div className="border-l-2 h-96 w-1/2 mt-8">
            <div className="ml-36 mt-7">
                <h1 className="text-5xl text-violet-700 mb-6">Features</h1>
                <ul className="list-disc text-xl text-white">
                    <li>Change to Upper case</li>
                    <li>Change to Lower case</li>
                    <li>Capitalize the text</li>
                    <li>Remove extra spaces from the text</li>
                    <li>Copy the text</li>
                </ul>
            </div>
        </div>
    </div>
}

import React from "react";

const list = (props) => {
    const { arr } = props;
    return (
        <div>
            <ul>
                {
                    arr && arr.map((item, index) => {
                        return <li key={item}>{item}</li>
                    })
                }
            </ul>
        </div>
    )
}
export default list;
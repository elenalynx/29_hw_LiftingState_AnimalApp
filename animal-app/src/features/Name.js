import * as React from "react";
// import {useState} from "react";

// ШАГ 1
// export default function Name({name, onNameChange}) {
//
//     return (
//         <div>
//             <label htmlFor="name">Name: </label>
//             <input
//                 id="name"
//                 value={name}
//                 onChange={onNameChange}
//             />
//         </div>
//     )
// }

// ШАГ 2
export default function Name() {
    const [name, setName] = React.useState('')

    return (
        <div>
            <label htmlFor="name">Name: </label>
            <input
                id="name"
                value={name}
                onChange={event => setName(event.target.value)}
            />
        </div>
    )
}
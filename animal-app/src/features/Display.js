import * as React from "react";

// ШАГ 1
// export default function Display({name, animal}) {
//   return <div>{`Эй ${name}, твое любимое животное: ${animal}!`}</div>
// }

// ШАГ 2
export default function Display({animal}) {
  return <div className={'display'}>{`Ваше любимое животное: ${animal}!`}</div>
}


// Удалите этот компонент в пользу нового
// export default function Display({name}) {
//     return <div className={'display'}>{`Эй ${name}, ты молодец!`}</div>
// }
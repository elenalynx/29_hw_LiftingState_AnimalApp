// import logo from './logo.svg';
import './App.css';
import * as React from 'react'
import Display from "./features/Display";
import Name from "./features/Name";
import FavoriteAnimal from "./features/FavoriteAnimal";

// ШАГ 1. У нас есть запрос на новую функцию для компонента `Display`. Нужно
// отображать `животное`, которое выбирает пользователь. Но это состояние
// управляется в `родственном` компоненте, поэтому мы должны передать это
// управление наименее общему родителю (`App`), а затем передать его вниз.

// ШАГ 2. Задача: вместо имени отображать только животное
// Вы заметите, что простое обновление компонента `Display` до этого работает
// нормально, но для дополнительной оценки пройдите процесс перемещения состояния
// к компонентам, которые в нем нуждаются. Вы знаете, что вы только что сделали для
// компонента «Animal»? Вам нужно сделать противоположную вещь для компонента «Name».

function App() {
    //ШАГ 1
  // const [name, setName] = React.useState('')
  // const [animal, setAnimal] = React.useState('')
  //
  // return (
  //     <form>
  //       <Name name={name} onNameChange={event => setName(event.target.value)} />
  //       <FavoriteAnimal animal={animal} onAnimalChange={event => setAnimal(event.target.value)} />
  //       <Display name={name} animal={animal}/>
  //     </form>
  // )

    // ШАГ 2
    const [animal, setAnimal] = React.useState('')

    return (
        <form>
            <Name />
            <FavoriteAnimal animal={animal} onAnimalChange={event => setAnimal(event.target.value)} />
            <Display animal={animal}/>
        </form>
    )
}

export default App
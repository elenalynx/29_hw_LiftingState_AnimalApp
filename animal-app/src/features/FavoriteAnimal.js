import * as React from "react";
// Принимать `animal` и `onAnimalChange` props в эту компоненту
export default function FavoriteAnimal({animal, onAnimalChange}) {
    // const [animal, setAnimal] = React.useState('')  // НЕ ИСПОЛЬЗУЮ ни в ШАГ 1, ни в ШАГ 2. Удалить это, сейчас состоянием будет управлять App
    return (
        <div>
            <label htmlFor="animal">Favorite Animal: </label>
            <input
                id="animal"
                value={animal}
                onChange={onAnimalChange}
                // onChange={event => setAnimal(event.target.value)} // НЕ ИСПОЛЬЗУЮ ни в ШАГ 1, ни в ШАГ 2
            />
        </div>
    )
}
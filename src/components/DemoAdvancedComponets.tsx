import Counter from "./class/Counter";
import Auth from "./auth/Auth";
import List from "./generics/List";
import RandomNumber from "./restriction/RandomNumber";
import Toast from "./template-literals/Toast";
import CustomButton from "./html/Button";
import CustomInput from "./html/Input";
import CustomComponent from "./html/CustomComponent";
import Text from "./polymorphic/Text";

//Constants
const starWarsCharactersList = ['Luke Skywalker', 'Han Solo', 'Leia Organa', 'Darth Vader', 'Emperor Palpatine']
const numbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const cyberPunk2077CharactersAsObjectsList = [
    {
        firstName: 'V',
        lastName: 'just V',
        placeOfBirth: 'The Badlands',
    },
    {
        firstName: 'Alt',
        lastName: 'Cunningham',
        placeOfBirth: 'Night City',
    },
    {
        firstName: 'Johnny',
        lastName: 'Silverhand',
        gender: 'College Station, Texas',
    },
    {
        firstName: 'Judy',
        lastName: 'Alvarez',
        placeOfBirth: 'Night City',
    },
    {
        firstName: 'Panam',
        lastName: 'Palmer',
        placeOfBirth: 'The Badlands',
    },
    {
        firstName: 'Goro',
        lastName: 'Takemura',
        placeOfBirth: 'Japan',
    },
    {
        firstName: 'Saburo',
        lastName: 'Arasaka',
        placeOfBirth: 'Japan',
    },
    {
        firstName: 'Yorinobu',
        lastName: 'Arasaka',
        placeOfBirth: 'Japan',
    }
]

function DemoAdvancedComponents () {

    return <div>
        <h2>Advanced Componets</h2>
        <h3>Counter Class Component</h3>
        <Counter message='The count is: '/>
        <h3>Pass Profile Component as Props to Private Component</h3>
        <Auth />
        <h3>List Component (Generic Props)</h3>
        <List
            itemName="Star Wars Characters"
            items={starWarsCharactersList}
            onClick={(item) => console.log(item)}
        />
        <List
            itemName="numbers"
            items={numbersList}
            onClick={(item) => console.log(item)}
        />
        <List
            itemName="Cyberpunk 2077 Characters (As Objects)"
            items={cyberPunk2077CharactersAsObjectsList}
            onClick={(item) => console.log(item)}
        />
        <h3>Random Number Component With Restricting Props</h3>
        <RandomNumber 
            value={198} 
            isPositive
        />
        <RandomNumber 
            value={-198} 
            isNegative
        />
        <RandomNumber 
            value={0} 
            isZero
        />
        <h3>Toast Component With Template Literals</h3>
        <Toast position='left-center'/>
        <h3>Button and Input Wrapping HTML Elements</h3>
        <CustomButton
            variant='primary'
            onClick={
                // Passes a function as a prop to the component. The Prop is an HTML Button Component Prop
                () => console.log('Clicked')
            }
        >
            HTML Wrap Button
        </CustomButton>
        <br /><br />
        <CustomInput
            onChange={
                // Passes a function as a prop to the component. The Prop is an HTML Input Component Prop
                (event) => console.log(`Input value set to: ${event.target.value}`)
            }
        />
        <h3>Custom Component (Extracting a Component’s Prop Types)</h3>
        <h4>User is not logged in</h4>
        <CustomComponent 
            isLoggedIn
            name='Mr. Bach'
            messageCount={4}
        />
        <h4>User is logged in</h4>
        <CustomComponent 
            isLoggedIn={false}
            name='Thomas'
            messageCount={6}
        />
        <h3>Text Polymorphic Component</h3>
        <Text size='large' as='h2'>Title</Text>
        <Text size='medium' as='h3'>Subheading</Text>
        <Text size='medium' as='p'>Paragraph</Text>
        <Text size='small' color='secondary' as='label' htmlFor='someId'>Label</Text>
    </div>
}

export default DemoAdvancedComponents
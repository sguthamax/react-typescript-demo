import Button from './Button';
import Container from './Container';
import Greet from './Greet';
import Input from './Input';
import Person from './Person';
import PersonList from './PersonList';
import FictionAward from './FictionAward';
import Heading from './Heading';
import Status from './Status';

// Types
type ButtonMouseEvent = React.MouseEvent<HTMLButtonElement>
type InputChangeEvent = React.ChangeEvent<HTMLInputElement>

// Miscellaneous consts
const containerStyles = {
    borderRadius: '10px',
    boxShadow: '1px 2px 9px gray',
    color: '#2b03a9',
    fontWeight: 'bold',
    maxWidth: '300px',
    margin: 'auto',
    marginBottom: '30px'
}

// Message Consts
const logMsgClickHandled = 'Click handled';
const logMsgInputChangeHandled = 'Input change handled by its parent component';

function GroupTypeScriptProps() {

    const personName = {
        first: 'Thomas',
        last: 'Anderson',
    }

    const nameList = [
        {
            first: 'Thomas',
            last: 'Anderson'
        },
        {
            first: 'John',
            last: 'Wick'
        },
        {
            first: 'Johnny',
            last: 'Silverhand'
        },
        {
            first: 'Robert',
            last: 'McCall'
        },
    ]

    function handleClick(event: ButtonMouseEvent, id: number) {
        console.log(logMsgClickHandled, event, id)
    }

    function handleChange(event: InputChangeEvent) {
        console.log(logMsgInputChangeHandled, event)
    }

    return (
        <div>
            <h2>Handling Component Props with TypeScript</h2>
            <h3>Basic Props</h3>
            <h4>Greet Component</h4>
            <Greet
                name='Thomas'
                isLoggedIn={true}
                messageCount={12}
            />
            <h4>Person Component</h4>
            <Person 
                name={personName}
            />
            <h4>Person List Component</h4>
            <PersonList 
                names={nameList}
            />
            <h3>Advanced Props</h3>
            <h4>Status Component</h4>
            <Status 
                status='loading'
            />
            <h4>Fiction Award and Heading Components</h4>
            <FictionAward>
                <Heading>The best fictional character award goes to... Johnny Silverhand</Heading>
            </FictionAward>
            <h3>Event Props (Button and Input Components)</h3>
            <div>
                Button: <Button onClick={handleClick}>Accept</Button>
            </div>
            <br />
            <div>
                Input: <Input value='' onChange={(handleChange)} handleChangeInternally={true} />
            </div>
            <h3>Style Props Container Component</h3>
            <Container styles={containerStyles}/>
        </div>
    );
}

export default GroupTypeScriptProps;
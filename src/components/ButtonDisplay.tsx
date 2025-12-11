interface ButtonDisplayProps {
    handleSelection: (selection: string) => void;
}
/*
React with vanilla javascript handles dynamic components with just the keyword props. With typescript, you handle it like this.
handleSelection is just what you're calling your 'function' to happen.
The word 'selection' here could be anything.
String here is telling the prop what type of thing is required to be expected.
The => void part is there because you have to include that to tell typescript what you're expected to have returned, and what type of data
will be returned. In this case, we don't actually need anything returned when you click something, or make your 'selection', so we use
void, which is the 'blank' keyword to say nothing to return.
*/

function ButtonDisplay({ handleSelection }: ButtonDisplayProps) {
    /*
    Here, you're destructuring the ButtonDisplayProps object to access the function directly so you don't have to do props.handleSelection.
    And ButtonDisplayProps is required there so it knows what type of thing we're using inside. Here, a function.
    */
    return (
        <>
            <h1>
                Select Family or Individual
            </h1>
            <button onClick={() => handleSelection("family")}>Family</button>
            <button onClick={() => handleSelection("individual")}>Individual</button>
            {/*
            This is just us saying handleSelection is meant to be a placeholder word for whatever function we pass into this component
            wherever we call it, like an argument or parameter in a basic javascript function.
            */}
        </>
    )
}

export default ButtonDisplay

interface ButtonDisplayProps {
    handleSelection: (selection: string) => void;
}

function ButtonDisplay({ handleSelection }: ButtonDisplayProps) {
    return (
        <>
            <h1>
                Select Family or Individual
            </h1>
            <button onClick={() => handleSelection("family")}>Family</button>
            <button onClick={() => handleSelection("individual")}>Individual</button>
        </>
    )
}

export default ButtonDisplay
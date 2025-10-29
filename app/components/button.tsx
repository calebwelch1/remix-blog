function Button() {
    const handleClick = () => console.log("Clicked");
    return(<button onClick={handleClick}> Click Me</button>)
    // return(<button onClick={() => handleClick(variable)}> Click Me</button>)

}

export default Button;
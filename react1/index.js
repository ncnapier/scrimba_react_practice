const list1 = (<ul>
    <li>banana</li>
    <li>apple</li>
</ul>);

const banner = (
    <h2>This is the main content of the website!</h2>
);

function Navbar() {
    return (
       <div>{banner}{list1}</div>
    );
}

function MainContent(){
    return(
        <h1>I'm learning React!</h1>
    )
}

const page = (
    <div>
        <Navbar />
        <MainContent />
    </div>
)
// ReactDOM.render(
//     page,
    
//     document.getElementById('root')
//     );
//imperative programming using only js:
const h1 = document.createElement("h1")
h1.textContent = "this is the imperative way to code."
h1.className = "header"
document.getElementById("root").append(h1)

//declarative programming using jsx:
//ReactDOM.render(<h1 className = "header">Hello, React!</h1>, document.getElementById("root"));

//jsx: javascript xml. makes react declarative instead of imperative. 
const navb = (
    <nav>
        <h1>Toilet Store</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
);
ReactDOM.render(
    navb,
    document.getElementById("root")
);


// ReactDOM.render(<h1>Hello Everyone!!!</h1>,document.querySelector("#root"));
const root = document.querySelector("#root");
// ReactDOM.render(<ul>
//     <li>Home</li>
//     <li>About</li>
//     <li>Contacts</li>
//     <li>Services</li>
// </ul>,root);
// import {Navbar} from "./components/Navbar.js"

function Navbar ()
{
    return(
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#">Features</a>
        <a className="nav-link" href="#">Pricing</a>
        <a className="nav-link disabled">Disabled</a>
      </div>
    </div>
  </div>
</nav>
    )
}

// function MainContent()
// {
//     return(
//         <h1>Hi My Name is Niladri Sen</h1>
//     )
// }


//wrapping html structure in a variable
// const page = (
//     <div>
//         <h1 className="name">My Name Is Niladri Sen</h1>
//         <p className="occupation">I am a Software Engineer</p>
//     </div>
// )
// console.log(page);

const navbar = (
  <nav>
    <h1>My Awesome Website In React</h1>
    <h3>Reacons I Love React-</h3>
    <ol>
      <li>It's composable</li>
      <li>It's Declarative</li>
      <li>It's a hireable skill </li>
      <li>It's actively maintained by skilled people</li>
    </ol>
  </nav>
)
ReactDOM.render(
    //<div>
// <Navbar />
// {/* <MainContent/> */}
// </div>
// page,
navbar,
root);
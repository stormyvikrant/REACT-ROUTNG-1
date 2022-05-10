import {Link} from "react-router-dom"

export const Navbar = () => {
  const nav = [
    { title: "Home", to: "/" },
    { title: "About", to: "/about" },
    { title: "Users", to: "/users" },
  ];

  return <div>
    
      {nav.map((e,i)=>(
          <Link key={i} to={e.to} style={{margin:"5px"}}>
              {e.title}
          </Link>
      ))}
  </div>;
};
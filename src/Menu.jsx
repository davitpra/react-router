// Importamos la etiqueta link
import { NavLink } from "react-router-dom";
import { routes } from "./routes";


function Menu() {
    return (
        <nav>
            <ul>
            {routes.map(route => (
                <li>
                    <NavLink
                        to = {route.path}
                        end
                        style={({ isActive }) => ({
                            color: isActive ? 'green' : 'red'
                        })}
                    >
                        {route.text}
                    </NavLink>
                </li>
            ))}
            </ul>
        </nav>
    );
}   
export {Menu}

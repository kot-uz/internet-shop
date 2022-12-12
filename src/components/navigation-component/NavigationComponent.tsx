import React from 'react';
import {Link} from "react-router-dom";
import {routes} from './navigationRoutes';



const NavigationComponent = () => {
  return (
    <nav className="flex justify-between items-center bg-blue-700 text-amber-50 h-[40px]">
      <h3 className="ml-2 text-2xl">Internet shop</h3>
      <div>
        {
          routes.map(r=>(
            <Link key={r.to} className="mx-2" to={r.to}>{r.text}</Link>

          ))
        }
      </div>
    </nav>
  );
};

export default NavigationComponent;
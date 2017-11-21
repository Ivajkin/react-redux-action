import About from 'app/components/about/about';
import Home from 'app/components/home/home';
import RealtyMap from 'app/components/realtyMap/realtyMap';


const appRoutes = [
    { path: '/realty-map', component: RealtyMap},
    { path: '/about', component: About},
    { path: '/', exact: true, component: Home},
];

export default appRoutes;
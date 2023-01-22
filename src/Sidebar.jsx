import { useEffect, useRef, useState, React } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BiHome, BiUser, BiUserPlus, BiPlusMedical } from "react-icons/bi";
import { Button } from '@chakra-ui/react';
import './assets/css/sidebar.scss';

const sidebarNavItems = [
    {
        display: 'Home',
        icon: <BiHome size={25} />,
        to: '/home',
        section: 'home'
    },

    {
        display: 'Empleados',
        icon: <BiUser size={25} />,
        to: '/usuarios',
        section: 'usuarios'
    },
    {
        display: 'Tabla Empleados',
        icon: <BiUserPlus size={30} />,
        to: '/createEmp',
        section: 'createEmp'
    },
    {
        display: 'Crear Usuarios',
        icon: <BiPlusMedical size={23} />,
        to: '/create',
        section: 'create'
    },

    {
        icon: <Button color='withe' backgroundColor='red.600'_hover={{ bg: 'red.500' }} size="lg" onClick={() => {localStorage.clear(); window.location.reload()}}>Cerrar Session</Button>,
        section: 'logout'
    },
]

export const Sidebar = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [getrol, setGetRol] = useState(false)
    const [stepHeight, setStepHeight] = useState(0);
    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();

    useEffect(() => {
        const getRol = JSON.parse(localStorage.getItem('user'))
        setGetRol(getRol)
        setTimeout(() => {
            const sidebarItem = sidebarRef.current.querySelector('.sidebar__menu__item');
            indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
            setStepHeight(sidebarItem.clientHeight);
        }, 50);
    }, []);
   
    const filterNavItemsByRole = (navItems, role) => {
        const isAdmin = role == 1
        const isLector = role == 2
        return navItems.filter(item => {
            if (item.section == 'home' && (isAdmin || isLector)) {
                return item;
            } else if (item.section == 'usuarios' && (isAdmin || isLector)) {
                return item;
            } else if (item.section == 'createEmp' && (isAdmin || isLector)) {
                return item;
            } else if (item.section == 'logout' && (isAdmin || isLector)) {
                return item;
            } else if (item.section == 'create' && isAdmin ) {
                return item;
            }
        });
    };
    const role = getrol['rol']
    const filteredNavItems = filterNavItemsByRole(sidebarNavItems, role);


    // change active index
    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1];
        const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location]);

    return (
        <div className='sidebar'>
            <div className="sidebar__logo">
                Recursos Humanos
            </div>
            <div ref={sidebarRef} className="sidebar__menu">
                <div
                    ref={indicatorRef}
                    className="sidebar__menu__indicator"
                    style={{
                        transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`
                    }}
                ></div>
                {
                    filteredNavItems.map((item, index) => (
                        <Link to={item.to} key={index}>
                            <div className={`sidebar__menu__item ${activeIndex === index ? 'active' : ''}`}>
                                <div className="sidebar__menu__item__icon">
                                    {item.icon}
                                </div>
                                <div className="sidebar__menu__item__text">
                                    {item.display}
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

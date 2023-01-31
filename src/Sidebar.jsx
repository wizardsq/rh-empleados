import { useEffect, useRef, useState, React } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BiHome, BiUser, BiUserPlus, BiPlusMedical } from "react-icons/bi";
import {AiOutlineUserDelete} from 'react-icons/ai'
import {FaBars} from 'react-icons/fa'
import {MdExitToApp} from 'react-icons/md'
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
        icon: <BiUser size={28} />,
        to: '/usuarios',
        section: 'usuarios'
    },
    {
        display: 'Emp Act.',
        icon: <BiUserPlus size={33} />,
        to: '/createEmp',
        section: 'createEmp'
    },
    {
        display: 'Emp Inac.',
        icon: <AiOutlineUserDelete size={30} />,
        to: '/empleadosin',
        section: 'empleadosin'
    },
    {
        display: 'Crear Us  ',
        icon: <BiPlusMedical size={23} />,
        to: '/create',
        section: 'create'
    },

    {
        icon: <MdExitToApp color='#FF2D00'  size={40} onClick={() => { localStorage.clear(); localStorage.setItem('auth', 'false'); window.location.reload() }} />,
        section: 'logout'
    },
]

export const Sidebar = ({collapsed, setCollapsed}) => {

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
            } else if (item.section == 'empleadosin' && (isAdmin || isLector)) {
                return item
            } else if (item.section == 'logout' && (isAdmin || isLector)) {
                return item;
            } else if (item.section == 'create' && isAdmin) {
                return item;
            }
        });
    };
    const role = getrol['rol']
    const filteredNavItems = filterNavItemsByRole(sidebarNavItems, role);
    const handleToggleSidebar = () => {
        setCollapsed( !collapsed);
      };


    // change active index
    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1];
        const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location]);

    return (
        <div className='sidebar'>
            <div className="sidebar__logo">
                {collapsed ? "RH" : 'Recursos Humanos'}
            </div>
            <div className="sidebar__toggle-button">
                <FaBars onClick={handleToggleSidebar} size={25}  style={{cursor: 'pointer'}}/>
            </div>
            <div ref={sidebarRef} className={`sidebar__menu ${collapsed ? 'collapsed' : ''}`}>
                <div
                    ref={indicatorRef}
                    className="sidebar__menu__indicator"
                    style={{
                        transform: `translateX(-51%) translateY(${activeIndex * stepHeight -2}px)`
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

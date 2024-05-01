import { useEffect, useRef, useState } from 'react';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

// img
import whiteLogo from '../../../../assets/Img/logoWhite.webp';
import logo from '../../../../assets/Img/logo.webp';

/////////////////////////////////////////////////////////////////
// composant navBar de l'app
const NavBar = () => {
    const ref = useRef(null);
    const { scrollY } = useScroll();
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [canChange, setCanChange] = useState(true);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    /////////////////////////////////////////////////////////////////
    // capture la taille de l'écran
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    /////////////////////////////////////////////////////////////////
    // empèche le changement de couleur sur les autres pages
    useEffect(() => {
        if (location.pathname !== '/') {
            setCanChange(false);
            setIsScrolled(true);
        } else {
            setCanChange(true);
            setIsScrolled(false);
        }
    }, [location.pathname]);
    
    /////////////////////////////////////////////////////////////////
    // règle la hauteur de changement de couleur
    function switchCol(change:boolean):number {
        const tab = [768, 1450];
        const val = [600 *0.7, 900 *0.7];
        if (change) {
           for (let x = 0; x < tab.length; ++x) {
                if (tab[x] > windowWidth) {
                    return val[x]
                } 
                console.log(windowWidth);
           }
           return 1100 * 0.7;
        } else {
            return 0;
        } 
    }
    /////////////////////////////////////////////////////////////////
    // surveille l'état du scroll et notifie le composant
    useMotionValueEvent(scrollY, "change", (latest) => {
        const shouldSetScrolled = latest >= switchCol(canChange);
        if (shouldSetScrolled !== isScrolled) {
            setIsScrolled(shouldSetScrolled);
        }
    });

    /////////////////////////////////////////////////////////////////
    // partie de gauche de la navBar (titre + logo)
    function title() {
        const titleClass = `mt-1 font-semiBold text-2xl ${isScrolled ? 'text-Primary' : 'text-backGround'}`;
        return (
        <Link className="flex items-center justify-center pl-[15%] max-md:pl-3" to={'/'}>
            <img src={isScrolled ? logo : whiteLogo} className="pr-1 h-9" alt="Logo" />
            <h1 className={titleClass}>NewBat</h1>
        </Link>
        );
    }

    /////////////////////////////////////////////////////////////////
    // template de lien
    function linkTemplate(title:string, dest:string) {
        const linkClass = `font-semiBold text-lg hover:text-Secondary ${isScrolled ? 'text-Primary' : 'text-backGround'}`;
        return <Link className={linkClass} to={dest}>{title}</Link>;
    }

    /////////////////////////////////////////////////////////////////
    // partie droite de la navBar (links)
    function links() {
        return (
        <div className='flex items-center justify-center pr-[15%] max-md:pr-3'>
            {linkTemplate("Offres", '/pricing')}
            <div className='w-6' />
            {linkTemplate("Contact", '/contact')}
        </div>
        );
    }

    /////////////////////////////////////////////////////////////////
    // code principale
    return (
        <div className={"w-screen h-16 bg-opacity-50 fixed top-0 flex items-center justify-between backdrop-blur-sm z-10"} ref={ref}>
        {title()}
        {links()}
        </div>
    );
};

export default NavBar;

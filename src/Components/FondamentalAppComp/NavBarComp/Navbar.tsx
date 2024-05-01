import { useRef, useState } from 'react';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import { Link } from 'react-router-dom';

// img
import whiteLogo from '../../../../assets/Img/logoWhite.webp';
import logo from '../../../../assets/Img/logo.webp';

const NavBar = () => {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const shouldSetScrolled = latest >= 900;
    if (shouldSetScrolled !== isScrolled) {
      setIsScrolled(shouldSetScrolled);
    }
  });

  function title() {
    const titleClass = `mt-1 font-semiBold text-2xl ${isScrolled ? 'text-Primary' : 'text-backGround'}`;
    return (
      <Link className="flex items-center justify-center pl-[15%]" to={'/'}>
        <img src={isScrolled ? logo : whiteLogo} className="pr-1 h-9" alt="Logo" />
        <h1 className={titleClass}>NewBat</h1>
      </Link>
    );
  }

  function linkTemplate(title:string, dest:string) {
    const linkClass = `font-semiBold text-lg hover:text-Secondary ${isScrolled ? 'text-Primary' : 'text-backGround'}`;
    return <Link className={linkClass} to={dest}>{title}</Link>;
  }

  function links() {
    return (
      <div className='flex items-center justify-center pr-[15%]'>
        {linkTemplate("Offres", '/pricing')}
        <div className='w-6' />
        {linkTemplate("Contact", '/contact')}
      </div>
    );
  }

  return (
    <div className={"w-screen h-16 bg-opacity-50 fixed top-0 flex items-center justify-between backdrop-blur-sm z-10"} ref={ref}>
      {title()}
      {links()}
    </div>
  );
};

export default NavBar;

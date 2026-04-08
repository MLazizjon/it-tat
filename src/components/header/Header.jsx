import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as S from './Header.styles';
import it_tat from './assets/it_tat.png';

const Header = () => {
  const location = useLocation();

  // Navigatsiya elementlari massivi
  const navLinks = [
    { id: 1, title: 'Bosh sahifa', path: '/' },
    { id: 2, title: 'Kurslar', path: '/kurslar' },
    { id: 3, title: 'Ustozlar', path: '/ustozlar' },
    { id: 4, title: 'Online kurslar', path: '/online' },
  ];

  return (
    <S.NavContainer>
      <S.Logo>
        <Link to="/">
          <img src={it_tat} alt="IT TAT Logo" style={{ height: '40px' }} />
        </Link>
      </S.Logo>

      <S.NavList>
        {navLinks.map((link) => (
          <li key={link.id}>
            <S.NavLink 
              as={Link} 
              to={link.path} 
              $active={location.pathname === link.path}
            >
              {link.title}
            </S.NavLink>
          </li>
        ))}
      </S.NavList>

      <S.Actions>
        <S.PhoneNumber href="tel:+998886110440">
           +998 (88) 611-04-40
        </S.PhoneNumber>
        
        {/* Ro'yxatdan o'tish tugmasini ham Kurslar sahifasiga yo'naltiramiz */}
        <S.RegisterButton as={Link} to="/kurslar">
          RO'YXATDAN O'TISH
        </S.RegisterButton>
      </S.Actions>
    </S.NavContainer>
  );
};

export default Header;
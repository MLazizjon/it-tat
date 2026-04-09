import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as S from './Header.styles';
import it_tat from './assets/it_tat.png';

const Header = () => {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "" });

  // Mobil menyuni yoqish/o'chirish
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      alert(`Rahmat, ${formData.name}! Tez orada bog'lanamiz.`);
      setFormData({ name: "", phone: "" });
      setIsModalOpen(false);
    }
  };

  return (
    <S.NavContainer>
      <S.Logo>
        <Link to="/">
          <img src={it_tat} alt="IT TAT Logo" />
        </Link>
      </S.Logo>

      {/* Desktop Navigatsiya */}
      <S.NavList>
        <li><S.NavLink as={Link} to="/" $isActive={location.pathname === '/'}>Bosh sahifa</S.NavLink></li>
        <li><S.NavLink as={Link} to="/kurslar" $isActive={location.pathname === '/kurslar'}>Kurslar</S.NavLink></li>
        <li><S.NavLink as={Link} to="/ustozlar" $isActive={location.pathname === '/ustozlar'}>Ustozlar</S.NavLink></li>
        <li><S.NavLink as={Link} to="/online" $isActive={location.pathname === '/online'}>Online kurslar</S.NavLink></li>
      </S.NavList>

      <S.Actions>
        <S.PhoneNumber href="tel:+998886110440" className="desktop-phone">
          +998 (88) 611-04-40
        </S.PhoneNumber>
        
        <S.RegisterButton onClick={() => setIsModalOpen(true)}>
          RO'YXATDAN O'TISH
        </S.RegisterButton>

        {/* Mobil menyu ochish tugmasi */}
        <S.MenuButton onClick={toggleMenu}>
          Menu
        </S.MenuButton>
      </S.Actions>

      {/* --- MOBIL OVERLAY MENU --- */}
      <S.OverlayMenu $isOpen={isMenuOpen}>
        {/* SIZ SO'RAGAN YOPISH TUGMASI */}
        <S.CloseButton 
          style={{ top: '20px', right: '6%', fontSize: '40px', color: '#1e1e1e' }} 
          onClick={toggleMenu}
        >
          &times;
        </S.CloseButton>

        <S.OverlayContent>
          <div className="menu-section">
            <span className="section-label">Navigatsiya</span>
            <Link to="/" onClick={toggleMenu}>Bosh sahifa</Link>
            <Link to="/kurslar" onClick={toggleMenu}>Kurslar </Link>
            <Link to="/ustozlar" onClick={toggleMenu}>Ustozlar</Link>
            <Link to="/online" onClick={toggleMenu}>Online</Link>
          </div>

          <div className="menu-section">
            <span className="section-label">Kontaktlar</span>
            <a href="tel:+998886110440" className="large-text">+998 (88) 611-04-40</a>
          </div>

          <div className="menu-section">
            <span className="section-label">Manzil</span>
            <p className="address-text">Samarqand sh., Mirzo Ulug'bek ko'chasi 35-uy</p>
          </div>
        </S.OverlayContent>
      </S.OverlayMenu>

      {/* --- REGISTRATSIYA MODAL --- */}
      {isModalOpen && (
        <S.ModalOverlay onClick={() => setIsModalOpen(false)}>
          <S.ModalContent onClick={(e) => e.stopPropagation()}>
            <S.CloseButton onClick={() => setIsModalOpen(false)}>&times;</S.CloseButton>
            <h3>Ro'yxatdan o'tish</h3>
            <p>Ma'lumotlaringizni qoldiring, biz sizga qo'ng'iroq qilamiz.</p>
            <form onSubmit={handleSubmit}>
              <S.ModalInput 
                name="name" 
                type="text" 
                placeholder="Ismingiz" 
                value={formData.name} 
                onChange={handleInputChange} 
                required 
              />
              <S.ModalInput 
                name="phone" 
                type="text" 
                placeholder="Telefon raqamingiz" 
                value={formData.phone} 
                onChange={handleInputChange} 
                required 
              />
              <S.SubmitBtn type="submit">Yuborish</S.SubmitBtn>
            </form>
          </S.ModalContent>
        </S.ModalOverlay>
      )}
    </S.NavContainer>
  );
};

export default Header;
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as S from './Header.styles';
import it_tat from './assets/it_tat.png';

const Header = () => {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "" });

  // Navigatsiya linklari
  const navLinks = [
    { id: 1, title: 'Bosh sahifa', path: '/' },
    { id: 2, title: 'Kurslar', path: '/kurslar' },
    { id: 3, title: 'Ustozlar', path: '/ustozlar' },
    { id: 4, title: 'Online kurslar', path: '/online' },
  ];

  // Input o'zgarganda ishlaydi
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Yuborish va yopish
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      alert(`Rahmat, ${formData.name}! Tez orada bog'lanamiz.`);
      setFormData({ name: "", phone: "" }); // Tozalash
      setIsModalOpen(false); // Modalni yopish
    } else {
      alert("Iltimos, barcha maydonlarni to'ldiring!");
    }
  };

  return (
    <S.NavContainer>
      <S.Logo>
        <Link to="/">
          <img src={it_tat} alt="IT TAT Logo" />
        </Link>
      </S.Logo>

      <S.NavList>
        {navLinks.map((link) => (
          <li key={link.id}>
            <S.NavLink 
              as={Link} 
              to={link.path} 
              $isActive={location.pathname === link.path}
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
        
        {/* Tugmani bosganda modal ochiladi */}
        <S.RegisterButton onClick={() => setIsModalOpen(true)}>
          RO'YXATDAN O'TISH
        </S.RegisterButton>
      </S.Actions>

      {/* --- MODAL QISMI --- */}
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
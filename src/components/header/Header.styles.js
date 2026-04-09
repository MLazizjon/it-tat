import styled from 'styled-components';

export const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 6%;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.08);
  z-index: 1001;
  font-family: 'Inter', sans-serif;
  box-sizing: border-box;

  @media (max-width: 800px) {
    height: 70px;
    padding: 0 4%;
  }
`;

export const Logo = styled.div`
  img {
    height: 60px;
    cursor: pointer;
    object-fit: contain;
    @media (max-width: 800px) {
      height: 50px;
    }
  }
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 30px;
  margin: 0;
  padding: 0;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: ${props => (props.$isActive ? '#4154f1' : '#1e1e1e')};
  font-weight: 600;
  font-size: 15px;
  transition: 0.3s;
  &:hover { color: #4154f1; }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  .desktop-phone {
    @media (max-width: 1100px) {
      display: none;
    }
  }
`;

export const PhoneNumber = styled.a`
  color: #1e1e1e;
  text-decoration: none;
  font-weight: 700;
  font-size: 16px;
  &:hover { color: #4154f1; }
`;

export const RegisterButton = styled.button`
  background: #4154f1;
  color: #fff;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 13px;
  cursor: pointer;
  transition: 0.3s;
  white-space: nowrap;

  &:hover {
    background: #3444cc;
    transform: translateY(-2px);
  }

  @media (max-width: 450px) {
    padding: 10px 14px;
    font-size: 11px;
  }
`;

export const MenuButton = styled.button`
  display: none;
  background: #f0f2f5;
  color: #1e1e1e;
  border: none;
  padding: 10px 18px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;

  @media (max-width: 800px) {
    display: block;
  }
`;

// --- MOBIL OVERLAY MENU ---
export const OverlayMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #ffffff;
  z-index: 2000; /* Headerdan ham tepada turadi */
  display: ${props => (props.$isOpen ? 'block' : 'none')};
  overflow-y: auto;
  padding: 80px 6% 40px;
  box-sizing: border-box;
  animation: slideIn 0.3s ease-out;

  @keyframes slideIn {
    from { transform: translateX(100%); }
    to { transform: translateX(0); }
  }
`;

export const OverlayContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  .menu-section {
    display: flex;
    flex-direction: column;
    gap: 10px;

    .section-label {
      color: #999;
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      margin-bottom: 5px;
    }

    a {
      text-decoration: none;
      color: #1a237e;
      font-size: 32px;
      font-weight: 800;
      transition: 0.2s;
      
      &:hover {
        color: #4154f1;
        padding-left: 10px;
      }
    }

    .large-text {
      font-size: 28px;
      color: #4154f1;
    }

    .address-text {
      font-size: 18px;
      color: #555;
      line-height: 1.6;
      font-weight: 500;
    }
  }
`;

// --- MODALLAR VA TUGMALAR ---
export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: #f8f9fa;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 35px;
  cursor: pointer;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  z-index: 2001;

  &:hover {
    background: #e9ecef;
    transform: rotate(90deg);
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0; left: 0; width: 100%; height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  display: flex; justify-content: center; align-items: center;
  z-index: 3000;
  backdrop-filter: blur(8px);
`;

export const ModalContent = styled.div`
  background: white;
  padding: 40px;
  border-radius: 30px;
  width: 90%;
  max-width: 450px;
  position: relative;
  text-align: center;
  
  h3 { font-size: 24px; color: #1a237e; margin-bottom: 10px; font-weight: 800; }
  p { color: #666; margin-bottom: 25px; line-height: 1.5; }
`;

export const ModalInput = styled.input`
  width: 100%;
  padding: 18px;
  margin-bottom: 15px;
  border: 2px solid #eee;
  border-radius: 12px;
  box-sizing: border-box;
  font-size: 16px;
  outline: none;
  transition: 0.3s;
  &:focus { border-color: #4154f1; }
`;

export const SubmitBtn = styled.button`
  width: 100%;
  padding: 18px;
  background: #4154f1;
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
  &:hover { background: #3444cc; transform: translateY(-2px); }
`;
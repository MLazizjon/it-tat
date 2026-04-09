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
  z-index: 1000;
  font-family: 'Inter', sans-serif;
  box-sizing: border-box;
`;

export const Logo = styled.div`
  img { height: 70px; cursor: pointer; object-fit: contain; }
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 35px;
  margin: 0;
  padding: 0;
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
  gap: 25px;
`;

export const PhoneNumber = styled.a`
  color: #4154f1;
  text-decoration: none;
  font-weight: 700;
  font-size: 16px;
  &:hover { text-decoration: underline; }
`;

export const RegisterButton = styled.button`
  background: #4154f1;
  color: #fff;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 0 4px 10px rgba(65, 84, 241, 0.2);

  &:hover {
    background: #3444cc;
    transform: translateY(-2px);
  }
`;

// --- MODAL STILLARI ---
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0; left: 0; width: 100%; height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex; justify-content: center; align-items: center;
  z-index: 2000;
  backdrop-filter: blur(4px);
`;

export const ModalContent = styled.div`
  background: white;
  padding: 40px;
  border-radius: 20px;
  width: 100%;
  max-width: 400px;
  position: relative;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);

  h3 { color: #1e1e1e; font-size: 24px; margin-bottom: 10px; }
  p { color: #666; font-size: 14px; margin-bottom: 25px; }
`;

export const ModalInput = styled.input`
  width: 100%;
  padding: 15px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 10px;
  font-size: 15px;
  box-sizing: border-box;
  outline: none;
  &:focus { border-color: #4154f1; }
`;

export const SubmitBtn = styled.button`
  width: 100%;
  padding: 15px;
  background: #4154f1;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
  &:hover { background: #3444cc; }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 15px; right: 15px;
  background: none; border: none;
  font-size: 25px; cursor: pointer; color: #999;
  &:hover { color: #333; }
`;
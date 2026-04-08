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
`;

export const Logo = styled.div`
  img { height: 85px; cursor: pointer; }
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
  color: ${props => (props.active ? '#4154f1' : '#1e1e1e')};
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  transition: 0.3s;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover { color: #4154f1; }
`;

// MEGA MENU STYLES
export const MegaMenuWrapper = styled.div`
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  background: #ffffff;
  border-top: 3px solid #4154f1;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  padding: 40px 10%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  
  /* Animatsiya */
  visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
  opacity: ${props => (props.isOpen ? '1' : '0')};
  transform: translateY(${props => (props.isOpen ? '0' : '15px')});
  transition: all 0.35s ease-in-out;
`;

export const MegaColumn = styled.div`
  h4 {
    color: #4154f1;
    font-size: 17px;
    margin-bottom: 20px;
    position: relative;
    padding-bottom: 8px;
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 40px;
      height: 2px;
      background: #4154f1;
    }
  }
  ul { list-style: none; padding: 0; }
  li { margin-bottom: 12px; }
  a {
    color: #444;
    text-decoration: none;
    font-size: 14px;
    transition: 0.2s;
    &:hover { color: #4154f1; padding-left: 8px; }
  }
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
    box-shadow: 0 6px 15px rgba(65, 84, 241, 0.3);
  }
`;
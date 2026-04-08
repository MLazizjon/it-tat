import styled from 'styled-components';

export const OnlineContainer = styled.section`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  padding: 0 6%;
  overflow: hidden;
  background-color: #fff;
`;

export const DecorImage = styled.img`
  position: absolute;
  width: 150px;
  &.top-left {
    top: 10%;
    left: 10%;
  }
  &.bottom-right {
    bottom: 20%;
    right: 10%;
    width: 200px;
  }
  @media (max-width: 768px) {
    width: 80px;
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #1a237e;
  max-width: 800px;
  line-height: 1.2;
  margin-bottom: 40px;
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const ActionButton = styled.button`
  background-color: #4154f1;
  color: white;
  padding: 15px 40px;
  border-radius: 30px;
  font-size: 18px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px rgba(65, 84, 241, 0.3);
  &:hover {
    background-color: #1a237e;
    transform: translateY(-3px);
    box-shadow: 0 15px 25px rgba(65, 84, 241, 0.4);
  }
`;

// Footer uchun maxsus stillar
export const Footer = styled.footer`
  background-color: #4154f1;
  padding: 60px 8%;
  color: white;
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1.2fr 1fr;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const FooterCol = styled.div`
  .footer-logo {
    width: 120px;
    margin-bottom: 20px;
  }
  h4 {
    font-size: 18px;
    margin-bottom: 20px;
    font-weight: 700;
  }
  ul {
    list-style: none;
    padding: 0;
    li {
      margin-bottom: 12px;
      font-size: 15px;
      cursor: pointer;
      opacity: 0.9;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .contact-item {
    display: block;
    margin-bottom: 10px;
  }
  .socials {
    display: flex;
    gap: 15px;
    margin-top: 20px;
    .icon-link {
      color: white;
      border: 1px solid rgba(255, 255, 255, 0.3);
      padding: 8px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      transition: 0.3s;
      &:hover {
        background: rgba(255, 255, 255, 0.1);
      }
    }
  }
`;
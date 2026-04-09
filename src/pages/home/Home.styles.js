import styled, { createGlobalStyle, keyframes } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
  body {
    background-color: #ffffff;
    overflow-x: hidden;
    color: #333;
    width: 100%;
  }
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const SectionTitle = styled.h2`
  font-size: clamp(24px, 5vw, 36px);
  font-weight: 700;
  color: ${props => props.$white ? '#fff' : '#1a237e'};
  text-align: center;
  margin-bottom: clamp(30px, 8vw, 60px);
  line-height: 1.2;
  padding: 0 5%;
`;

// --- 1. Hero Section ---
export const HeroSection = styled.section`
  padding: clamp(100px, 15vw, 150px) 6% 60px;
  text-align: center;
`;

export const HeroTitle = styled.h1`
  font-size: clamp(28px, 6vw, 48px);
  color: #1a237e;
  max-width: 1000px;
  margin: 0 auto clamp(30px, 8vw, 60px);
  font-weight: 800;
  line-height: 1.1;
  span { color: #4154f1; }
`;

export const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 0.8fr 1.2fr;
  gap: 20px;
  
  @media (max-width: 1150px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const HeroCard = styled.div`
  background: ${props => props.$blue ? '#4154f1' : '#f0f2f5'};
  border-radius: 30px;
  padding: clamp(20px, 4vw, 35px);
  color: ${props => props.$blue ? '#fff' : '#000'};
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 420px;

  @media (max-width: 500px) {
    min-height: 350px;
  }

  .salom {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 100% !important;
      height: auto;
      object-fit: contain;
    }
  }

  .course-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
    div {
      border: 1px solid rgba(255,255,255,0.3);
      padding: 14px;
      border-radius: 15px;
      text-align: center;
      font-weight: 600;
      font-size: 15px;
      transition: 0.3s;
      &:hover { background: rgba(255,255,255,0.2); transform: translateX(5px); }
    }
  }

  p {
    font-size: clamp(18px, 3vw, 24px);
    line-height: 1.4;
    margin-bottom: 20px;
  }

  button {
    background: transparent;
    border: 2px solid white;
    color: white;
    padding: 18px;
    border-radius: 15px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    transition: 0.3s;
    &:hover { background: white; color: #4154f1; }
  }
`;

// --- 2. Features Section ---
export const FeaturesSection = styled.section`
  padding: 80px 6%;
`;

export const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  @media (max-width: 1200px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 600px) { grid-template-columns: 1fr; }
`;

export const FeatureCard = styled.div`
  background: #fff;
  padding: 40px 30px;
  border-radius: 25px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.05);
  transition: 0.3s;
  &:hover { transform: translateY(-10px); }
  
  .icon-box {
    width: 60px; height: 60px; background: #1e3a8a; border-radius: 50%;
    margin-bottom: 25px; display: flex; align-items: center; justify-content: center; 
    color: white; font-size: 24px;
  }
  h3 { font-size: 20px; color: #1a237e; margin-bottom: 15px; font-weight: 700; }
  p { font-size: 14px; color: #666; line-height: 1.6; }
`;

// --- 3. Format Section ---
export const FormatSection = styled.section`
  background: #4154f1;
  padding: 100px 6%;
`;

export const FormatGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  max-width: 1300px;
  margin: 0 auto;
  @media (max-width: 1000px) { grid-template-columns: 1fr; }
`;

export const FormatCard = styled.div`
  background: #fff;
  border-radius: 35px;
  padding: clamp(30px, 5vw, 50px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  
  .text-content {
    flex: 1;
    h3 { color: #4154f1; font-size: clamp(22px, 4vw, 30px); margin-bottom: 15px; font-weight: 800; }
    p { color: #555; font-size: 15px; line-height: 1.6; }
  }
  
  img { 
    width: clamp(100px, 25vw, 220px);
    height: auto;
    object-fit: contain;
  }

  @media (max-width: 550px) {
    flex-direction: column;
    text-align: center;
    img { width: 140px; order: 2; }
    .text-content { order: 1; }
  }
`;

// --- 4. Courses Section ---
export const CoursesSection = styled.section`
  background: #4154f1;
  padding: 0 6% 100px;
`;

export const CourseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  @media (max-width: 1100px) { grid-template-columns: 1fr 1fr; }
  @media (max-width: 700px) { grid-template-columns: 1fr; }
`;

export const CourseCard = styled.div`
  background: #fff;
  border-radius: 30px;
  padding: 40px;
  min-height: 420px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover { transform: translateY(-10px); box-shadow: 0 25px 50px rgba(0,0,0,0.2); }
  
  .top { 
    display: flex; justify-content: space-between; align-items: center;
    span { font-weight: 700; color: #4154f1; font-size: 18px; }
  }
  
  .badge { 
    background: #eef0ff; color: #4154f1; 
    padding: 8px 16px; border-radius: 10px; font-size: 13px; font-weight: 800;
  }

  h3 { font-size: clamp(28px, 5vw, 36px); color: #1a237e; margin: 25px 0; font-weight: 800; }
  
  .ai-badge {
    background: linear-gradient(90deg, #7000ff, #ff00d4);
    color: white; padding: 6px 15px; border-radius: 20px; 
    font-size: 12px; width: fit-content; font-weight: 700;
  }

  p { color: #666; font-size: 15px; line-height: 1.6; margin-top: 15px; }

  .arrow {
    width: 60px; height: 60px; border: 2px solid #4154f1; border-radius: 18px;
    display: flex; align-items: center; justify-content: center; 
    color: #4154f1; font-size: 26px; margin-left: auto; margin-top: 20px;
    transition: 0.3s;
  }
  &:hover .arrow { background: #4154f1; color: #fff; }
`;

// --- 5. Coworking Section ---
export const CoworkingSection = styled.section`
  padding: 100px 6%;
`;

export const Gallery = styled.div`
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  gap: 20px;
  margin-top: 40px;
  
  img { width: 100%; border-radius: 30px; object-fit: cover; height: 100%; min-height: 250px; }
  
  .side { 
    display: grid; gap: 20px; 
    @media (max-width: 850px) { grid-template-columns: 1fr 1fr; }
    @media (max-width: 500px) { grid-template-columns: 1fr; }
  }

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
  }
`;

// --- 6. Partners Section ---
export const PartnersSection = styled.section`
  padding: 80px 6%;
  text-align: center;
`;

export const PartnersGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: clamp(30px, 8vw, 60px);
  margin-top: 50px;
  
  img {
    height: clamp(35px, 6vw, 55px);
    width: auto;
    filter: grayscale(100%);
    opacity: 0.5;
    transition: 0.3s;
    &:hover { filter: grayscale(0); opacity: 1; transform: scale(1.1); }
  }
`;

// --- 7. Map Section ---
export const MapSection = styled.section`
  padding: 80px 6%;
`;

export const MapFlex = styled.div`
  display: flex;
  gap: 30px;
  @media (max-width: 1000px) { flex-direction: column-reverse; }
`;

export const MapWrapper = styled.div`
  flex: 2;
  height: clamp(350px, 50vw, 550px);
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
`;

export const ContactInfoCard = styled.div`
  flex: 1;
  background: #f8f9fa;
  padding: 40px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  h3 { color: #4154f1; font-size: 28px; margin-bottom: 15px; font-weight: 800; }
  p { color: #444; font-size: 17px; line-height: 1.5; margin-bottom: 20px; }
  .label { font-weight: 800; color: #1a237e; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; }
  .value { color: #1a237e; font-size: 22px; font-weight: 700; margin-top: 5px; }

  @media (max-width: 500px) {
    padding: 30px;
    h3 { font-size: 24px; }
    .value { font-size: 18px; }
  }
`;

// --- 8. Registration Section ---
export const RegisterSection = styled.section`
  background: #4154f1;
  padding: 100px 6%;
`;

export const RegisterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
  gap: 50px;
  @media (max-width: 1000px) { flex-direction: column; }
`;

export const TagsSide = styled.div`
  flex: 1;
  position: relative;
  height: 400px;
  width: 100%;
  @media (max-width: 1000px) { display: none; }
`;

export const Tag = styled.div`
  position: absolute;
  background: ${props => props.$white ? '#fff' : 'rgba(255, 255, 255, 0.15)'};
  color: ${props => props.$white ? '#4154f1' : '#fff'};
  border: ${props => props.$white ? 'none' : '1px solid rgba(255, 255, 255, 0.4)'};
  padding: 16px 30px;
  border-radius: 50px;
  font-weight: 700;
  white-space: nowrap;
  transform: rotate(${props => props.$deg || '0'}deg);
  top: ${props => props.$top};
  left: ${props => props.$left};
`;

export const FormCard = styled.div`
  flex: 0.9;
  width: 100%;
  max-width: 550px;
  background: rgba(255, 255, 255, 0.1);
  padding: clamp(30px, 6vw, 60px);
  border-radius: 40px;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;

  h3 { font-size: clamp(26px, 5vw, 36px); margin-bottom: 15px; font-weight: 800; }
  p { font-size: 16px; margin-bottom: 30px; opacity: 0.9; }
  
  input {
    width: 100%; padding: 20px; margin-bottom: 20px; border-radius: 15px; 
    border: 1px solid rgba(255,255,255,0.3); background: rgba(255,255,255,0.1);
    color: #fff; font-size: 16px; outline: none;
    &::placeholder { color: rgba(255,255,255,0.7); }
    &:focus { border-color: #fff; }
  }
  
  button {
    width: 100%; padding: 20px; border-radius: 15px; background: #fff; 
    color: #4154f1; border: none; font-size: 18px; font-weight: 800; 
    cursor: pointer; transition: 0.3s;
    &:hover { background: #f0f0f0; transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,0,0,0.1); }
  }
`;

// --- 9. FAQ Section ---
export const FAQSection = styled.section`
  padding: 100px 6%;
  display: flex;
  align-items: center;
  gap: clamp(30px, 8vw, 80px);
  @media (max-width: 1000px) { 
    flex-direction: column;
    img { max-width: 400px !important; }
  }
`;

export const FAQContent = styled.div`
  flex: 1.2;
  width: 100%;
`;

export const FAQItem = styled.div`
  margin-bottom: 15px;
  border-radius: 20px;
  background: #f8f9fa;
  overflow: hidden;
  border: 1px solid #eee;
`;

export const FAQHeader = styled.div`
  padding: 25px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-weight: 700;
  font-size: 18px;
  color: #1a237e;
  @media (max-width: 500px) { font-size: 16px; padding: 20px; }
`;

export const FAQBody = styled.div`
  padding: ${props => props.$isOpen ? '0 30px 30px' : '0 30px'};
  max-height: ${props => props.$isOpen ? '500px' : '0'};
  opacity: ${props => props.$isOpen ? '1' : '0'};
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  color: #555;
  line-height: 1.7;
  font-size: 15px;
`;

// --- 10. Footer ---
export const Footer = styled.footer`
  background: #4154f1;
  padding: 100px 6% 40px;
  color: white;
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 0.8fr 0.8fr 1.5fr;
  gap: 50px;
  @media (max-width: 1100px) { grid-template-columns: 1fr 1fr; }
  @media (max-width: 600px) { grid-template-columns: 1fr; text-align: center; }
`;

// SIZDA XATO BERGAN KOMPONENT MANA SHU:
export const FooterCol = styled.div`
  h4 { 
    margin-bottom: 30px; 
    font-size: 20px; 
    font-weight: 800; 
    text-transform: uppercase; 
    letter-spacing: 1px; 
  }

  ul { list-style: none; }

  li { 
    margin-bottom: 15px; 
    opacity: 0.8; 
    cursor: pointer; 
    transition: 0.3s; 
    &:hover { opacity: 1; padding-left: 5px; } 
  }
  
  .desc { line-height: 1.8; opacity: 0.9; font-size: 16px; }

  .contact-item { 
    display: block; 
    margin-bottom: 10px; 
    font-weight: 700; 
    font-size: 20px; 
  }
  
  .socials { 
    display: flex; 
    gap: 15px; 
    margin-top: 25px; 
    @media (max-width: 600px) { justify-content: center; }
    button { 
      width: 45px; 
      height: 45px; 
      border-radius: 12px; 
      border: 1.5px solid rgba(255,255,255,0.4); 
      background: transparent; 
      color: white; 
      cursor: pointer; 
      transition: 0.3s;
      &:hover { background: #fff; color: #4154f1; }
    }
  }
`;

export const Copyright = styled.div`
  text-align: center; margin-top: 80px; padding-top: 30px; 
  border-top: 1px solid rgba(255,255,255,0.1); 
  font-size: 14px; opacity: 0.6;
`;

// --- Modal Section ---
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(12px);
  display: flex; justify-content: center; align-items: center;
  z-index: 9999; padding: 20px;
`;

export const ModalContent = styled.div`
  background: white;
  width: 100%;
  max-width: 650px;
  padding: clamp(30px, 8vw, 60px);
  border-radius: 40px;
  position: relative;
  animation: ${fadeIn} 0.4s ease-out;
  
  h2 { font-size: clamp(28px, 5vw, 42px); color: #1a237e; margin-bottom: 20px; font-weight: 900; }
  
  .modal-info-row {
    display: flex; gap: 30px; margin-bottom: 30px; padding-bottom: 20px;
    border-bottom: 2px solid #f0f2f5;
    @media (max-width: 500px) { flex-direction: column; gap: 10px; }
  }

  .modal-text { font-size: 16px; line-height: 1.8; color: #555; margin-bottom: 40px; }

  .modal-btn {
    width: 100%; padding: 20px; background: #4154f1; color: white;
    border: none; border-radius: 20px; font-size: 18px; font-weight: 800;
    cursor: pointer; transition: 0.3s;
    &:hover { background: #3444cc; transform: translateY(-3px); }
  }
`;

export const CloseButton = styled.button`
  position: absolute; top: 25px; right: 25px;
  background: #f0f2f5; border: none; width: 45px; height: 45px;
  border-radius: 50%; font-size: 25px; cursor: pointer;
  display: flex; align-items: center; justify-content: center;
`;
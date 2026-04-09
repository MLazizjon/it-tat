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
  }
  img {
    max-width: 100%;
    display: block;
  }
`;

// --- Animatsiyalar ---
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// --- Reusable Components ---
export const Container = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  width: 100%;
`;

export const SectionTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  color: ${props => props.$white ? '#fff' : '#1a237e'};
  text-align: center;
  margin-bottom: 60px;
  line-height: 1.2;
`;

// --- 1. Hero Section ---
export const HeroSection = styled.section`
  padding: 120px 6% 80px;
  text-align: center;
`;

export const HeroTitle = styled.h1`
  font-size: 42px;
  color: #1a237e;
  max-width: 900px;
  margin: 0 auto 50px;
  font-weight: 800;
  span { color: #4154f1; }
`;

export const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr 1.3fr;
  gap: 20px;
  @media (max-width: 992px) { grid-template-columns: 1fr; }
`;

export const HeroCard = styled.div`
  background: ${props => props.$blue ? '#4154f1' : '#f0f2f5'};
  border-radius: 24px;
  padding: 25px;
  color: ${props => props.$blue ? '#fff' : '#000'};
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 400px;

  .course-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    div {
      border: 1px solid rgba(255,255,255,0.3);
      padding: 12px;
      border-radius: 12px;
      text-align: center;
      font-weight: 500;
      transition: 0.3s;
      &:hover { background: rgba(255,255,255,0.2); }
    }
  }

  button {
    background: transparent;
    border: 1px solid white;
    color: white;
    padding: 15px;
    border-radius: 12px;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s;
    &:hover { background: white; color: #4154f1; }
  }
`;

// --- 2. Features Section ---
export const FeaturesSection = styled.section`
  padding: 100px 6%;
`;

export const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  @media (max-width: 1100px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 600px) { grid-template-columns: 1fr; }
`;

export const FeatureCard = styled.div`
  background: #fff;
  padding: 40px 30px;
  border-radius: 24px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.05);
  transition: 0.3s;
  &:hover { transform: translateY(-10px); }
  
  .icon-box {
    width: 55px; height: 55px; background: #1e3a8a; border-radius: 50%;
    margin-bottom: 25px; display: flex; align-items: center; justify-content: center; 
    color: white; font-size: 24px;
  }
  h3 { font-size: 20px; color: #1a237e; margin-bottom: 15px; }
  p { font-size: 14px; color: #666; line-height: 1.6; }
`;

// --- 3. Format Section ---
export const FormatSection = styled.section`
  background: #4154f1;
  padding: 100px 6%;
`;

export const FormatGrid = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 25px;
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 992px) { grid-template-columns: 1fr; }
`;

export const FormatCard = styled.div`
  background: #fff;
  border-radius: 30px;
  padding: 45px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
  .text-content {
    max-width: 65%;
    h3 { color: #4154f1; font-size: 28px; margin-bottom: 20px; }
    p { color: #555; font-size: 15px; line-height: 1.6; }
  }
  
  img { 
    width: 220px; 
    object-fit: contain; 
    align-self: flex-end;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    img { width: 120px; margin-top: 20px; }
    .text-content { max-width: 100%; }
  }
`;

// --- 4. Courses Section ---
export const CoursesSection = styled.section`
  background: #4154f1;
  padding: 100px 6%;
`;

export const CourseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  @media (max-width: 992px) { grid-template-columns: 1fr; }
`;

export const CourseCard = styled.div`
  background: #fff;
  border-radius: 28px;
  padding: 35px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: 0.3s;
  &:hover { transform: scale(1.02); box-shadow: 0 20px 40px rgba(0,0,0,0.15); }
  
  .top { 
    display: flex; 
    justify-content: space-between; 
    align-items: center;
    span { font-weight: 600; color: #4154f1; }
  }
  
  .badge { 
    background: #eef0ff; color: #4154f1; 
    padding: 6px 14px; border-radius: 8px; font-size: 13px; font-weight: 700;
  }

  h3 { font-size: 34px; color: #1a237e; margin: 20px 0; }
  
  .ai-badge {
    background: linear-gradient(90deg, #7000ff, #ff00d4);
    color: white; padding: 6px 15px; border-radius: 20px; 
    font-size: 12px; width: fit-content; font-weight: 600;
  }

  .arrow {
    width: 55px; height: 55px; border: 1.5px solid #4154f1; border-radius: 15px;
    display: flex; align-items: center; justify-content: center; 
    color: #4154f1; font-size: 24px; margin-left: auto;
  }
`;

// --- PARTNERS SECTION (Sizda xato bergan qism) ---
export const PartnersSection = styled.section`
  padding: 100px 6%;
  background: #fff;
  text-align: center;
`;

export const PartnersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 40px;
  align-items: center;
  justify-items: center;
  margin-top: 50px;
  img {
    max-width: 150px;
    filter: grayscale(100%);
    opacity: 0.6;
    transition: 0.3s;
    &:hover { filter: grayscale(0); opacity: 1; transform: scale(1.1); }
  }
`;

// --- MODAL SECTION (Chiroyli va Katta) ---
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  padding: 20px;
`;

export const ModalContent = styled.div`
  background: white;
  width: 100%;
  max-width: 700px;
  padding: 60px;
  border-radius: 40px;
  position: relative;
  animation: ${fadeIn} 0.4s ease-out;
  box-shadow: 0 30px 60px rgba(0,0,0,0.3);

  h2 { font-size: 42px; color: #4154f1; margin-bottom: 20px; font-weight: 800; }
  
  .modal-info-row {
    display: flex;
    gap: 40px;
    margin-bottom: 30px;
    padding-bottom: 20px;
    border-bottom: 2px solid #f0f2f5;
    font-size: 20px;
    color: #1a237e;
    strong { color: #4154f1; }
  }

  .modal-text { font-size: 18px; line-height: 1.8; color: #555; margin-bottom: 40px; }

  .modal-btn {
    width: 100%;
    padding: 22px;
    background: #4154f1;
    color: white;
    border: none;
    border-radius: 20px;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
    transition: 0.3s;
    &:hover { background: #3444cc; transform: translateY(-5px); box-shadow: 0 10px 20px rgba(65, 84, 241, 0.3); }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 30px; right: 30px;
  background: #f0f2f5;
  border: none;
  width: 50px; height: 50px;
  border-radius: 50%;
  font-size: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  &:hover { background: #e2e5e9; transform: rotate(90deg); }
`;

// --- 5. Coworking Section ---
export const CoworkingSection = styled.section`
  padding: 100px 6%;
`;

export const Gallery = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 25px;
  margin-top: 40px;
  img { width: 100%; border-radius: 30px; object-fit: cover; height: 100%; }
  .side { display: grid; gap: 25px; }
`;

// --- 7. Map Section ---
export const MapSection = styled.section`
  padding: 100px 6%;
`;

export const MapFlex = styled.div`
  display: flex;
  gap: 30px;
  @media (max-width: 992px) { flex-direction: column; }
`;

export const MapWrapper = styled.div`
  flex: 2;
  height: 500px;
  border-radius: 24px;
  overflow: hidden;
`;

export const ContactInfoCard = styled.div`
  flex: 1;
  background: #fff;
  padding: 35px;
  border-radius: 24px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.08);
  h3 { color: #4154f1; font-size: 24px; margin-bottom: 10px; }
  .label { font-weight: 700; color: #1a237e; display: block; margin-top: 20px; font-size: 14px; text-transform: uppercase; }
  .value { color: #555; font-size: 16px; margin-top: 5px; }
`;

// --- 8. Registration Section ---
export const RegisterSection = styled.section`
  background: #4154f1;
  padding: 120px 6%;
  color: white;
`;

export const RegisterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 992px) { flex-direction: column; gap: 60px; }
`;

export const TagsSide = styled.div`
  flex: 1;
  position: relative;
  height: 350px;
  width: 100%;
`;

export const Tag = styled.div`
  position: absolute;
  background: ${props => props.$white ? '#fff' : 'rgba(255, 255, 255, 0.15)'};
  color: ${props => props.$white ? '#4154f1' : '#fff'};
  border: ${props => props.$white ? 'none' : '1px solid rgba(255, 255, 255, 0.5)'};
  padding: 14px 25px;
  border-radius: 50px;
  font-weight: 600;
  transform: rotate(${props => props.$deg || '0'}deg);
  top: ${props => props.$top};
  left: ${props => props.$left};
`;

export const FormCard = styled.div`
  flex: 0.8;
  background: rgba(255, 255, 255, 0.12);
  padding: 50px;
  border-radius: 35px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  h3 { font-size: 32px; margin-bottom: 10px; }
  input {
    width: 100%; padding: 20px; margin-bottom: 20px; border-radius: 15px; border: none; font-size: 16px;
  }
  button {
    width: 100%; padding: 20px; border-radius: 15px; background: #5c67f2; color: white; border: none; font-size: 18px; font-weight: 700; cursor: pointer;
  }
`;

// --- 9. FAQ Section ---
export const FAQSection = styled.section`
  padding: 100px 6%;
  display: flex;
  gap: 60px;
  @media (max-width: 992px) { flex-direction: column; }
`;

export const FAQContent = styled.div`flex: 1.2;`;

export const FAQItem = styled.div`
  margin-bottom: 15px;
  border-radius: 15px;
  background: #f8f9fa;
`;

export const FAQHeader = styled.div`
  padding: 24px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  font-weight: 600;
  color: #1a237e;
`;

export const FAQBody = styled.div`
  padding: ${props => props.$isOpen ? '0 24px 24px' : '0 24px'};
  max-height: ${props => props.$isOpen ? '300px' : '0'};
  overflow: hidden;
  transition: 0.3s;
  color: #555;
`;

// --- 10. Footer ---
export const Footer = styled.footer`
  background: #4154f1;
  padding: 80px 6% 40px;
  color: white;
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
  gap: 50px;
  @media (max-width: 992px) { grid-template-columns: 1fr 1fr; }
  @media (max-width: 600px) { grid-template-columns: 1fr; }
`;

export const FooterCol = styled.div`
  h4 { margin-bottom: 30px; font-weight: 700; }
  ul { list-style: none; }
  li { margin-bottom: 15px; opacity: 0.8; cursor: pointer; }
  .contact-item { display: block; margin-bottom: 10px; font-weight: 600; }
  .socials { display: flex; gap: 15px; margin-top: 20px; 
    button { padding: 10px 15px; border-radius: 10px; border: 1px solid white; background: transparent; color: white; cursor: pointer; }
  }
`;

export const Copyright = styled.div`
  text-align: center; margin-top: 80px; padding-top: 30px; border-top: 1px solid rgba(255,255,255,0.1); font-size: 14px; opacity: 0.6;
`;
import styled from 'styled-components';

// 1. Umumiy Kurslar Section
export const KurslarSection = styled.section`
  padding: 20px 50px;
  background-color: #fcfcfc;

  
  @media (max-width: 768px) {
    padding: 50px 4%;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 32px;
  color: #1a237e;
  text-align: center;
  margin-bottom: 50px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 26px;
    margin-bottom: 30px;
  }
`;

// 2. Kurslar Grid
export const KurslarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1100px) {
    gap: 20px;
  }

  @media (max-width: 950px) {
    grid-template-columns: 1fr; /* Planshet va mobilda bitta ustun */
  }
`;

export const KursCard = styled.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 25px;
  display: flex;
  gap: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
  border: 1px solid #f0f0f0;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 500px) {
    flex-direction: column; /* Mobilda rasm tepaga chiqadi */
    align-items: center;
    text-align: center;
    padding: 20px;
  }
`;

export const TeacherBox = styled.div`
  flex: 0.35;
  text-align: center;
  min-width: 120px;

  img {
    width: 100px;
    height: 100px;
    border-radius: 12px;
    object-fit: cover;
    margin-bottom: 12px;
    background: #f8f9fa;
    border: 2px solid #f0f2ff;
  }

  h4 { font-size: 15px; color: #4154f1; margin-bottom: 4px; font-weight: 700; }
  p { font-size: 12px; color: #333; font-weight: 600; opacity: 0.8; }

  @media (max-width: 500px) {
    flex: 1;
    width: 100%;
    border-bottom: 1px solid #f0f0f0;
    padding-bottom: 15px;
    margin-bottom: 15px;
  }
`;

export const ContentBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  .top-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
    
    h3 { font-size: 22px; color: #1a237e; font-weight: 800; }
    
    button {
      background: #4154f1;
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 6px;
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
      white-space: nowrap;
      transition: 0.3s;
      &:hover { background: #1a237e; }
    }
  }

  .description { 
    font-size: 12px; 
    color: #666; 
    line-height: 1.5; 
    margin-bottom: 15px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  @media (max-width: 500px) {
    width: 100%;
    .top-row {
      flex-direction: column;
      gap: 10px;
      h3 { font-size: 20px; }
      button { width: 100%; }
    }
  }
`;

export const InfoTable = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-top: auto;

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

export const InfoItem = styled.div`
  .row {
    margin-bottom: 8px;
    span { display: block; font-size: 11px; color: #999; margin-bottom: 2px; }
    b { font-size: 14px; color: #4154f1; font-weight: 700; }
  }
  .dashed-line {
    width: 100%;
    height: 1px;
    border-top: 1px dashed #4154f1;
    margin: 6px 0;
    opacity: 0.3;
  }
`;

// --- MODAL STILLARI ---
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex; justify-content: center; align-items: center;
  z-index: 2000;
  backdrop-filter: blur(8px);
  padding: 20px;
`;

export const ModalContent = styled.div`
  background: white;
  width: 100%;
  max-width: 550px;
  padding: 30px;
  border-radius: 20px;
  position: relative;
  max-height: 85vh;
  overflow-y: auto;

  @media (max-width: 500px) {
    padding: 20px;
    border-radius: 15px;
  }

  .modal-header {
    margin-bottom: 20px;
    h2 { color: #1a237e; font-size: 24px; margin-bottom: 5px; }
    .teacher-name { color: #4154f1; font-weight: 700; }
  }

  .modal-body {
    section {
      margin-bottom: 15px;
      h4 { color: #1a237e; margin-bottom: 6px; font-weight: 700; }
      p, li { color: #555; font-size: 14px; line-height: 1.5; }
      ul { padding-left: 18px; }
    }
  }

  .price-tag {
    background: #f4f6ff;
    padding: 15px;
    border-radius: 12px;
    text-align: center;
    strong { color: #4154f1; font-size: 20px; display: block; margin-top: 5px; }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 15px; right: 15px;
  background: #eee; border: none;
  width: 30px; height: 30px; border-radius: 50%;
  cursor: pointer; font-size: 20px;
  display: flex; align-items: center; justify-content: center;
`;

export const ModalFooterBtn = styled.button`
  width: 100%;
  padding: 14px;
  background: #4154f1;
  color: white;
  border: none;
  border-radius: 10px;
  margin-top: 20px;
  font-weight: 700;
  cursor: pointer;
`;

// 3. Ta'lim Formati
export const FormatSection = styled.section`
  background-color: #4154f1;
  padding: 80px 6%;
`;

export const FormatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;

export const FormatCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  grid-row: ${props => props.$isLarge ? '1 / span 2' : 'auto'};

  .text-content {
    h3 { color: #4154f1; font-size: 24px; margin-bottom: 10px; font-weight: 800; }
    p { font-size: 14px; color: #555; line-height: 1.5; }
  }

  img { width: 130px; height: auto; object-fit: contain; }

  @media (max-width: 1100px) {
    img { width: 100px; }
  }

  @media (max-width: 500px) {
    flex-direction: column;
    text-align: center;
    padding: 20px;
    img { width: 120px; order: -1; } /* Rasm tepaga chiqadi */
  }
`;

// 4. Nimaga bizni tanlashadi
export const WhyUsSection = styled.section`
  padding: 80px 6%;
`;

export const WhyUsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const WhyUsCard = styled.div`
  background: #fff;
  padding: 25px;
  border-radius: 15px;
  border: 1px solid #f0f0f0;
  box-shadow: 0 5px 15px rgba(0,0,0,0.02);

  .icon-circle {
    width: 45px; height: 45px; background: #1a237e; color: white;
    border-radius: 50%; display: flex; align-items: center; justify-content: center;
    margin-bottom: 15px; font-size: 20px;
  }

  h3 { font-size: 18px; color: #1a237e; margin-bottom: 10px; font-weight: 700; }
  p { font-size: 13px; color: #666; line-height: 1.6; }
`;

// 5. Natijalar
export const ResultsSection = styled.section`
  padding: 80px 6%;
  background: #f8f9ff;
`;

export const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 25px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const ResultCard = styled.div`
  background: #fff;
  padding: 35px 25px 25px;
  border-radius: 15px;
  position: relative;
  box-shadow: 0 5px 20px rgba(0,0,0,0.03);

  .number {
    position: absolute;
    top: -15px; left: 25px;
    background: #1a237e; color: white;
    width: 32px; height: 32px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-weight: 700; font-size: 14px;
  }

  h3 { 
    font-size: 18px; color: #4154f1; margin-bottom: 12px; 
    border-bottom: 2px solid #f0f2ff; padding-bottom: 8px;
    font-weight: 700;
  }
  p { font-size: 13px; color: #666; line-height: 1.6; }
`;

// 6. Footer
export const Footer = styled.footer`
  background-color: #4154f1;
  padding: 60px 6%;
  color: white;
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 30px;
  }
`;

export const FooterCol = styled.div`
  h4 { font-size: 16px; margin-bottom: 20px; text-transform: uppercase; letter-spacing: 1px; }
  
  ul {
    list-style: none; padding: 0;
    li { margin-bottom: 10px; font-size: 14px; opacity: 0.8; cursor: pointer; transition: 0.2s; &:hover { opacity: 1; text-decoration: underline; } }
  }

  .socials {
    display: flex; gap: 12px;
    @media (max-width: 600px) { justify-content: center; }
    button {
      background: rgba(255,255,255,0.15); border: none;
      color: white; width: 40px; height: 40px; border-radius: 50%; cursor: pointer;
      &:hover { background: white; color: #4154f1; }
    }
  }
`;
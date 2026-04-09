import styled from 'styled-components';

// 1. Umumiy Kurslar Section va Sarlavha
export const KurslarSection = styled.section`
  padding: 80px 6%;
  background-color: #fcfcfc;
`;

export const SectionTitle = styled.h2`
  font-size: 32px;
  color: #1a237e;
  text-align: center;
  margin-bottom: 50px;
  font-weight: 700;
`;

// 2. Kurslar Grid
export const KurslarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px 30px;
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 1024px) { grid-template-columns: 1fr; }
`;

export const KursCard = styled.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 25px;
  display: flex;
  gap: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
  border: 1px solid #f0f0f0;
`;

export const TeacherBox = styled.div`
  flex: 0.35;
  text-align: center;
  img {
    width: 90px;
    height: 90px;
    border-radius: 8px;
    object-fit: cover;
    margin-bottom: 12px;
    background: #f8f9fa;
  }
  h4 { font-size: 14px; color: #4154f1; margin-bottom: 4px; font-weight: 700; }
  p { font-size: 11px; color: #333; font-weight: 600; }
`;

export const ContentBox = styled.div`
  flex: 1;
  .top-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
    h3 { font-size: 20px; color: #1a237e; font-weight: 700; }
    button {
      background: #4154f1;
      color: white;
      border: none;
      padding: 7px 18px;
      border-radius: 6px;
      font-size: 11px;
      font-weight: 600;
      cursor: pointer;
      transition: 0.3s;
      &:hover { background: #1a237e; }
    }
  }
  .description { font-size: 11px; color: #666; line-height: 1.5; margin-bottom: 20px; }
`;

export const InfoTable = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

export const InfoItem = styled.div`
  .row {
    margin-bottom: 15px;
    span { display: block; font-size: 10px; color: #999; margin-bottom: 3px; }
    b { font-size: 13px; color: #4154f1; font-weight: 700; }
    .empty-val { color: #555; }
  }
  .dashed-line {
    width: 100%;
    height: 1px;
    border-top: 1px dashed #4154f1;
    margin: 8px 0;
    opacity: 0.5;
  }
`;

// --- MODAL STILLARI ---
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex; justify-content: center; align-items: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
`;

export const ModalContent = styled.div`
  background: white;
  width: 95%;
  max-width: 600px;
  padding: 40px;
  border-radius: 24px;
  position: relative;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);

  &::-webkit-scrollbar { width: 6px; }
  &::-webkit-scrollbar-thumb { background: #ccc; border-radius: 10px; }

  .modal-header {
    margin-bottom: 25px;
    border-bottom: 1px solid #eee;
    padding-bottom: 15px;
    h2 { color: #1a237e; font-size: 26px; margin-bottom: 5px; }
    .teacher-name { color: #4154f1; font-weight: 600; font-size: 16px; }
  }

  .modal-body {
    section {
      margin-bottom: 20px;
      h4 { color: #1a237e; margin-bottom: 8px; font-size: 17px; font-weight: 700; }
      p { color: #555; line-height: 1.6; font-size: 14px; }
      ul {
        padding-left: 20px;
        li { color: #555; font-size: 14px; margin-bottom: 6px; line-height: 1.4; }
      }
    }
  }

  .price-tag {
    background: #f0f2ff;
    padding: 20px;
    border-radius: 15px;
    text-align: center;
    margin-top: 25px;
    span { font-size: 14px; color: #666; font-weight: 500; }
    strong { color: #4154f1; font-size: 22px; display: block; margin-top: 5px; }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 15px; right: 15px;
  background: #f1f1f1; border: none;
  font-size: 24px; cursor: pointer; color: #666;
  width: 35px; height: 35px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  transition: 0.2s;
  &:hover { background: #e1e1e1; color: #000; }
`;

export const ModalFooterBtn = styled.button`
  width: 100%;
  padding: 16px;
  background: #4154f1;
  color: white;
  border: none;
  border-radius: 12px;
  margin-top: 25px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.3s;
  &:hover { background: #1a237e; transform: translateY(-2px); }
`;

// 3. Ta'lim Formati
export const FormatSection = styled.section`
  background-color: #4154f1;
  padding: 100px 6%;
  color: white;
`;

export const FormatGrid = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 25px;
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 992px) { grid-template-columns: 1fr; }
`;

export const FormatCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 30px;
  color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-row: ${props => props.$isLarge ? '1 / span 2' : 'auto'};
  .text-content {
    max-width: 65%;
    h3 { color: #4154f1; font-size: 24px; margin-bottom: 15px; font-weight: 800; }
    p { font-size: 13px; line-height: 1.6; color: #555; }
  }
  img { width: 150px; height: auto; object-fit: contain; }
  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
    .text-content { max-width: 100%; margin-bottom: 20px; }
  }
`;

// 4. Nimaga bizni tanlashadi
export const WhyUsSection = styled.section`
  padding: 100px 6%;
  background: #fff;
`;

export const WhyUsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 992px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 500px) { grid-template-columns: 1fr; }
`;

export const WhyUsCard = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.04);
  border: 1px solid #f5f5f5;
  .icon-circle {
    width: 45px; height: 45px; background: #1a237e; color: white;
    border-radius: 50%; display: flex; align-items: center; justify-content: center;
    margin-bottom: 20px; font-size: 18px;
  }
  h3 { font-size: 17px; color: #1a237e; margin-bottom: 12px; font-weight: 700; }
  p { font-size: 12px; color: #777; line-height: 1.6; }
`;

// 5. Natijalar
export const ResultsSection = styled.section`
  padding: 100px 6%;
  background: #fcfcfc;
`;

export const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 992px) { grid-template-columns: repeat(2, 1fr); }
`;

export const ResultCard = styled.div`
  background: #fff;
  padding: 40px 25px 25px;
  border-radius: 12px;
  border: 1px solid #eee;
  position: relative;
  .number {
    position: absolute;
    top: -18px; left: 50%; transform: translateX(-50%);
    background: #1a237e; color: white;
    width: 36px; height: 36px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-weight: 800; border: 4px solid #fcfcfc;
  }
  h3 { 
    font-size: 19px; color: #4154f1; margin-bottom: 15px; 
    border-bottom: 2px solid #4154f1; padding-bottom: 8px;
    display: inline-block; width: 100%; font-weight: 700;
  }
  p { font-size: 12px; color: #666; line-height: 1.6; }
`;

// 6. Footer
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
  @media (max-width: 992px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 500px) { grid-template-columns: 1fr; }
`;

export const FooterCol = styled.div`
  .desc { font-size: 14px; line-height: 1.6; opacity: 0.9; }
  h4 { font-size: 16px; margin-bottom: 20px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; }
  ul {
    list-style: none; padding: 0;
    li { margin-bottom: 12px; font-size: 14px; cursor: pointer; opacity: 0.8; transition: 0.2s; &:hover { opacity: 1; text-decoration: underline; } }
  }
  .contact-item { display: block; margin-bottom: 10px; font-size: 15px; font-weight: 600; }
  .socials {
    display: flex; gap: 10px; margin-top: 20px;
    button {
      background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2);
      color: white; width: 40px; height: 40px; border-radius: 8px; cursor: pointer;
      transition: 0.3s; &:hover { background: white; color: #4154f1; }
    }
  }
`;
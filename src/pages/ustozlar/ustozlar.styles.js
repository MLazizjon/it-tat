import styled from 'styled-components';

// 1. Asosiy Section
export const UstozlarSection = styled.section`
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

// 2. Ustozlar Grid
export const UstozlarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 1024px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 768px) { grid-template-columns: 1fr; }
`;

export const UstozCard = styled.div`
  background: #ffffff;
  border-radius: 20px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  border: 1px solid #f0f0f0;
  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 20px;
    border: 5px solid #f0f4ff;
  }
  h3 { font-size: 22px; color: #1a237e; margin-bottom: 8px; }
  .direction { font-size: 14px; color: #4154f1; font-weight: 700; margin-bottom: 15px; display: block; }
  .experience { background: #f1f3ff; color: #1a237e; padding: 5px 15px; border-radius: 20px; font-size: 12px; font-weight: 600; display: inline-block; margin-bottom: 20px; }
  p { font-size: 13px; color: #666; line-height: 1.6; }
`;

// 3. Iqtibos (Quote) Section
export const QuoteSection = styled.section`
  padding: 100px 6%;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 992px) { flex-direction: column; text-align: center; }
`;

export const QuoteText = styled.div`
  flex: 1;
  .quote-icon {
    width: 40px; height: 40px; background-color: #4154f1; color: white;
    display: flex; align-items: center; justify-content: center;
    border-radius: 4px; margin-bottom: 30px; font-size: 20px;
  }
  h2 { font-size: 32px; color: #4154f1; line-height: 1.3; margin-bottom: 30px; }
  .author h4 { font-size: 22px; color: #4154f1; margin-bottom: 5px; }
  .author p { font-size: 14px; color: #1a237e; opacity: 0.7; }
`;

export const QuoteImage = styled.div`
  flex: 1;
  img {
    width: 100%; border-radius: 8px;
    box-shadow: 20px 20px 0px #f1f3ff;
  }
`;

// 4. Footer
export const Footer = styled.footer`
  background-color: #4154f1; padding: 60px 8%; color: white;
`;

export const FooterGrid = styled.div`
  display: grid; grid-template-columns: 1.5fr 1fr 1.2fr 1fr; gap: 40px;
  max-width: 1200px; margin: 0 auto;
  @media (max-width: 992px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 500px) { grid-template-columns: 1fr; }
`;

export const FooterCol = styled.div`
  .footer-logo { width: 120px; margin-bottom: 20px; }
  h4 { font-size: 18px; margin-bottom: 20px; font-weight: 700; }
  ul { list-style: none; padding: 0; li { margin-bottom: 12px; font-size: 15px; cursor: pointer; } }
  .socials { display: flex; gap: 15px; margin-top: 20px; 
    .icon-link { color: white; font-size: 20px; border: 1px solid rgba(255,255,255,0.3); width: 40px; height: 40px; border-radius: 8px; display: flex; align-items: center; justify-content: center; }
  }
`;
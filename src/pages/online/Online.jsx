import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './online.styles';
// import { FaFacebookF, FaInstagram, FaTelegramPlane } from 'react-icons/fa';

const Online = () => {
  const navigate = useNavigate();

  return (
    <>
      <S.OnlineContainer>
        {/* Dekorativ elementlar */}
        <S.DecorImage src="/assets/blue-wave.png" className="top-left" alt="decor" />
        {/* <S.DecorImage src="/assets/blue-circle.png" className="bottom-right" alt="decor" /> */}

        <S.Title>Online darslar yaqin kunlarda yo'lga qo'yiladi</S.Title>
        
        <S.ActionButton onClick={() => navigate('/kurslar')}>
          Mavjud kurslarni ko'rish
        </S.ActionButton>
      </S.OnlineContainer>

      {/* FOOTER QISMI */}
      <S.Footer>
        <S.FooterGrid>
          <S.FooterCol>
            {/* <img src="/it-tat-white.png" alt="IT TAT" className="footer-logo" /> */}
            <p style={{fontSize: '14px', opacity: 0.9}}>
              Innovatsiya va texnologiya orqali O'zbekiston yoshlarini dunyoga tanitish
            </p>
          </S.FooterCol>

          <S.FooterCol>
            <h4>Navigatsiya:</h4>
            <ul>
              <li onClick={() => navigate('/')}>Bosh sahifa</li>
              <li onClick={() => navigate('/kurslar')}>Kurslar</li>
              <li onClick={() => navigate('/ustozlar')}>Ustozlar</li>
              <li>Online kurslar</li>
            </ul>
          </S.FooterCol>

          <S.FooterCol>
            <h4>Kurslar:</h4>
            <ul>
              <li>Backend</li>
              <li>Frontend</li>
              <li>Grafik Dizayn</li>
              <li>SMM</li>
              <li>Robototexnika</li>
            </ul>
          </S.FooterCol>

          <S.FooterCol>
            <h4>ALOQA:</h4>
            <span className="contact-item">+998 (88) 611-04-40</span>
            <span className="contact-item">+998 (90) 602-04-40</span>
            <div className="socials">
  <button type="button">Fb</button>
  <button type="button">Insta</button>
  <button type="button">Tg</button>
</div>
          </S.FooterCol>
        </S.FooterGrid>
      </S.Footer>
    </>
  );
};

export default Online;
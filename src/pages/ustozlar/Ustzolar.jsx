import React from 'react';
import * as S from './ustozlar.styles';
import { FaQuoteLeft} from 'react-icons/fa';
import person_1 from '../kurslar/assets/person_1.png'
import person_2 from '../kurslar/assets/persom_2.png'
import person_3 from '../kurslar/assets/person_3.png'
import team from '../kurslar/assets/team.png'

const ustozlarData = [
  { id: 1, name: "G'olibjon Davronov", direction: "Backend", experience: "5+ yil", img: person_1, bio: "Python va Django bo'yicha katta tajribaga ega mutaxassis." },
  { id: 2, name: "Shaxzod Muradov", direction: "Frontend", experience: "4 yil", img: person_2, bio: "React va zamonaviy interfeyslar yaratish ustasi." },
  { id: 3, name: "Sayyorbek Xoliqov", direction: "JavaScript", experience: "3+ yil", img: person_3, bio: "JS algoritmlari va fundamenti bo'yicha ekspert." },
  // { id: 4, name: "Og'abek G'ulomov", direction: "Grafik Dizayn", experience: "6 yil", img: "/t7.png", bio: "Brending va kreativ dizayn yo'nalishi ustozi." },
  // { id: 5, name: "Moxinur Shodmonova", direction: "SMM", experience: "4 yil", img: "/t9.png", bio: "Raqamli marketing va brendlarni rivojlantirish mutaxassisi." },
  // { id: 6, name: "Toshtemir Abduraxmonov", direction: "Robototexnika", experience: "5 yil", img: "/t4.png", bio: "Muhandislik va robotlarni dasturlash bo'yicha usta." }
];

const Ustozlar = () => {
  return (
    <>
      {/* 1. USTOZLAR RO'YXATI */}
      <S.UstozlarSection>
        <S.SectionTitle>Bizning Tajribali Ustozlarimiz</S.SectionTitle>
        <S.UstozlarGrid>
          {ustozlarData.map((ustoz) => (
            <S.UstozCard key={ustoz.id}>
              <img src={ustoz.img} alt={ustoz.name} />
              <span className="direction">{ustoz.direction}</span>
              <h3>{ustoz.name}</h3>
              <div className="experience">Tajriba: {ustoz.experience}</div>
              <p>{ustoz.bio}</p>
            </S.UstozCard>
          ))}
        </S.UstozlarGrid>
      </S.UstozlarSection>

      {/* 2. IQTIBOS (QUOTE) BO'LIMI */}
      <S.QuoteSection>
        <S.QuoteText>
          <div className="quote-icon"><FaQuoteLeft /></div>
          <h2>Ustoz bilan birga harakat qilganda, har bir to'siqni yengib o'tish osonroq bo'ladi.</h2>
          <div className="author">
            <h4>Millon Zahino</h4>
            <p>Behavioral Science</p>
          </div>
        </S.QuoteText>
        <S.QuoteImage>
          <img src={team} alt="Working team" />
        </S.QuoteImage>
      </S.QuoteSection>

      {/* 3. FOOTER */}
      <S.Footer>
        <S.FooterGrid>
          <S.FooterCol>
            {/* <img src="/it-tat-white.png" alt="IT TAT" className="footer-logo" /> */}
            <p>Innovatsiya va texnologiya orqali O'zbekiston yoshlarini dunyoga tanitish</p>
          </S.FooterCol>
          <S.FooterCol>
            <h4>Navigatsiya:</h4>
            <ul>
              <li>Bosh sahifa</li> <li>Kurslar</li> <li>Ustozlar</li> <li>Online kurslar</li>
            </ul>
          </S.FooterCol>
          <S.FooterCol>
            <h4>Kurslar:</h4>
            <ul>
              <li>Backend</li> <li>Frontend</li> <li>Grafik Dizayn</li> <li>SMM</li>
            </ul>
          </S.FooterCol>
          <S.FooterCol>
            <h4>ALOQA:</h4>
            <span>+998 (88) 611-04-40</span>
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

export default Ustozlar;
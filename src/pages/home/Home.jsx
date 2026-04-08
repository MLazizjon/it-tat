import React, { useState } from "react";
import * as S from "./Home.styles";
import firt from './assets/first.png'
import indivi from './assets/indivi.png'
import mini from './assets/mini.png'
import covorking_first from './assets/covorking_first.png'
import covorking_second from './assets/covorking_second.png'
import covorking_third from './assets/covorking_third.png'
import frilance from './assets/frilance.png'
import it_park from './assets/it park.png'
import it_tat from './assets/it tat.png'
import mp from './assets/mp.png'
import union from './assets/union.png'
import texnomart from './assets/texnimart.png'
import krasniy from './assets/krasniy.png'
import telegram from './assets/telegram.png'

const Home = () => {
  // FAQ accordion uchun holat (state)
  const [openIndex, setOpenIndex] = useState(0);

  // FAQ ma'lumotlari
  const faqData = [
    {
      q: "IT sohasi nima?",
      a: "IT (Information Technology) – bu axborot texnologiyalari bo'lib, kompyuter tizimlari, dasturiy ta'minot, ma'lumotlar bazasi, kiberxavfsizlik va boshqa texnologiyalarni o'z ichiga oladi."
    },
    {
      q: "IT sohasida ishlash uchun oliy ma'lumot kerakmi?",
      a: "Yo‘q, IT sohasi amaliy bilimga asoslangan. Ko‘plab muvaffaqiyatli dasturchilar universitet diplomisiz ham yaxshi daromad topishadi. Muhimi – amaliy tajriba va portfolio."
    },
    {
      q: "IT sohasini o'rganish uchun qancha vaqt kerak?",
      a: "Yo'nalishga qarab: Boshlang‘ich bilimlar 3-6 oy, professional daraja esa 1-2 yil vaqtni olishi mumkin."
    },
    {
      q: "IT sohasida qanday ish topish mumkin?",
      a: "Frilans platformalari (Upwork, Fiverr), mahalliy kompaniyalar (LinkedIn orqali) va shaxsiy portfolio yaratish eng yaxshi yo'llardir."
    },
    {
      q: "IT mutaxassislarining o'rtacha maoshi qancha?",
      a: "O‘zbekistonda 5,000,000 so'mdan 40,000,000 so‘mgacha. Xalqaro bozorda esa tajribaga qarab yanada yuqori."
    },
    {
      q: "IT sohasida ishlash uchun ingliz tili kerakmi?",
      a: "Ha, ingliz tili juda muhim. Texnik hujjatlar va xalqaro loyihalar asosan ingliz tilida bo‘ladi."
    },
    {
      q: "IT kurslarini tugatganimdan keyin darhol ish topa olamanmi?",
      a: "Ha, agar kurs davomida amaliy loyihalar yaratgan bo‘lsangiz va portfolioingiz tayyor bo‘lsa, imkoniyat juda yuqori."
    },
    {
      q: "Qaysi IT yo'nalishi eng foydali va kelajakda talabgir?",
      a: "Sun’iy intellekt (AI), Kiberxavfsizlik, Cloud Computing va Full Stack dasturlash yo'nalishlari hozirda eng yuqori o'rinlarda."
    }
  ];

  return (
    <>
      <S.GlobalStyle />

      {/* 1. HERO SECTION */}
      <S.HeroSection>
        <S.HeroTitle>
          Innovatsiya va texnologiya olamida buyuklardan biri bo'lishga <span>IT TAT</span> sizga ko'makdosh
        </S.HeroTitle>
        <S.HeroGrid>
          <S.HeroCard>
            <div> <img src={firt} alt="" /> </div>
          </S.HeroCard>
          <S.HeroCard $blue>
            <div className="course-list">
              {["Backend", "Frontend", "Kompyuter Savodxonligi", "Grafik Dizayn", "SMM", "Foundation", "Robototexnika"].map((item) => (
                <div key={item}>{item}</div>
              ))}
            </div>
          </S.HeroCard>
          <S.HeroCard $blue>
            <p style={{ fontSize: "22px", lineHeight: "1.4" }}>
              IT TAT - O'z qadriyatlariga ega va eng kuchli mutaxassislar jamlangan zamonaviy kasblar o'quv markazi.
            </p>
            <button>Bepul konsultatsiya olish</button>
          </S.HeroCard>
        </S.HeroGrid>
      </S.HeroSection>

      {/* 2. FEATURES SECTION */}
      <S.FeaturesSection>
        <S.SectionTitle>Nimaga bizni tanlashadi</S.SectionTitle>
        <S.FeatureGrid>
          <S.FeatureCard>
            <div className="icon-box">↗</div>
            <h3>Yuqori malakali mentorlar</h3>
            <p>Mentorlarimiz xalqaro tajribaga ega va o'z sohasining mutaxassislari.</p>
          </S.FeatureCard>
          <S.FeatureCard>
            <div className="icon-box">📜</div>
            <h3>Real loyihalar</h3>
            <p>Nazariya va amaliyot uyg'unligi asosida real keyslar bilan ishlaysiz.</p>
          </S.FeatureCard>
          <S.FeatureCard>
            <div className="icon-box">📊</div>
            <h3>Natijaga yo'naltirilgan</h3>
            <p>Har bir o'quvchining o'zlashtirish ko'rsatkichini nazorat qilamiz.</p>
          </S.FeatureCard>
          <S.FeatureCard>
            <div className="icon-box">🎯</div>
            <h3>Ish taklifi</h3>
            <p>Eng iqtidorli o'quvchilarimizga hamkor kompaniyalardan ish taklif etiladi.</p>
          </S.FeatureCard>
        </S.FeatureGrid>
      </S.FeaturesSection>

      {/* 3. FORMAT SECTION */}
      <S.FormatSection>
        <S.SectionTitle $white>Ta'lim Formati</S.SectionTitle>
        <S.FormatGrid>
          <S.FormatCard $isLarge>
            <div className="text-content">
              <h3>Individual</h3>
              <p>Faqat siz va mentor. Maxsus ishlab chiqilgan dastur asosida o'rganasiz.</p>
            </div>
            <img src={indivi} alt="Individual" />
          </S.FormatCard>
          <S.FormatCard>
            <div className="text-content">
              <h3>Mini guruh</h3>
              <p>4-5 kishilik kichik guruhlarda sifatli ta'lim.</p>
            </div>
            <img src={indivi} alt="Mini" />
          </S.FormatCard>
          <S.FormatCard>
            <div className="text-content">
              <h3>Guruh</h3>
              <p>10-12 kishilik standart guruhlarda jamoaviy muhit.</p>
            </div>
            <img src={mini} alt="Group" />
          </S.FormatCard>
        </S.FormatGrid>
      </S.FormatSection>

      {/* 4. COURSES SECTION */}
      <S.CoursesSection>
        <S.SectionTitle $white>Bizning kurslarimiz</S.SectionTitle>
        <S.CourseGrid>
          <S.CourseCard>
            <div className="top"><span>6 oy</span><div className="badge">+1 amaliyot</div></div>
            <h3>Backend</h3>
            <div className="ai-badge">Ai ✦</div>
            <p>Server qismini va ma'lumotlar bazasini boshqarishni o'rganing.</p>
            <div className="arrow">→</div>
          </S.CourseCard>
          <S.CourseCard>
            <div className="top"><span>6 oy</span><div className="badge">+1 amaliyot</div></div>
            <h3>Frontend</h3>
            <div className="ai-badge">Ai ✦</div>
            <p>Veb-saytlarning foydalanuvchi ko'radigan interfeysini yarating.</p>
            <div className="arrow">→</div>
          </S.CourseCard>
          <S.CourseCard>
            <div className="top"><span>2 oy</span></div>
            <h3>Savodxonlik</h3>
            <div className="ai-badge">Ai ✦</div>
            <p>Kompyuter bilan professional ishlashni noldan o'rganing.</p>
            <div className="arrow">→</div>
          </S.CourseCard>
        </S.CourseGrid>
      </S.CoursesSection>

      {/* 5. COWORKING SECTION */}
      <S.CoworkingSection>
        <S.SectionTitle>Bepul coworking</S.SectionTitle>
        <S.Gallery>
          <img src={covorking_first} alt="Main" />
          <div className="side">
            <img src={covorking_second} alt="C1" />
            <img src={covorking_third} alt="C2" />
          </div>
        </S.Gallery>
      </S.CoworkingSection>

      {/* 6. PARTNERS SECTION */}
      <S.PartnersSection>
        <S.SectionTitle>Bizning o'quvchilarimiz qayerda ishlashadi</S.SectionTitle>
        <S.PartnersGrid>
          <img src={frilance} alt="P1" />
          <img src={it_park} alt="P2" />
          <img src={it_tat} alt="P3" />
          <img src={mp} alt="P4" />
          <img src={union} alt="P5" />
          <img src={texnomart} alt="P6" />
          <img src={krasniy} alt="P6" />
        </S.PartnersGrid>
      </S.PartnersSection>

      {/* 7. MAP SECTION */}
      <S.MapSection>
        <S.SectionTitle>Biz qayerda joylashganmiz</S.SectionTitle>
        <S.MapFlex>
          <S.MapWrapper>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3072.048!2d66.924!3d39.658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDM5JzI4LjgiTiA2NsKwNTUnMjYuNCJF!5e0!3m2!1suz!2s!4v1620000000000!5m2!1suz!2s"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="Location"
            ></iframe>
          </S.MapWrapper>
          <S.ContactInfoCard>
            <img src="/office-photo.jpg" alt="Office" className="office-img" />
            <h3>Samarqand</h3>
            <p>Samarqand viloyati Beruniy ko'chasi 32a</p>
            <span className="label">mo'ljal</span>
            <p className="value">Ipoteka bank, chorni park ro'parasi.</p>
            <span className="label">Ish vaqti</span>
            <p className="value">08:00 - 22:00</p>
            <span className="label">Telefon</span>
            <p className="value">+998 (88) 611-04-40 <br /> +998 (90) 602-04-40</p>
          </S.ContactInfoCard>
        </S.MapFlex>
      </S.MapSection>

      {/* 8. REGISTRATION SECTION (Rasmdagi qiyaliklar bilan) */}
      <S.RegisterSection>
        <S.SectionTitle $white>Kurslarga ro'yxatdan o'tib, kelajagingizni boshlang!</S.SectionTitle>
        <S.RegisterContainer>
          <S.TagsSide>
            <div style={{ fontSize: "100px", zIndex: 2 }}>✈️</div>
            <S.Tag $white $deg="-8" $top="20px" $left="20px">#Robotexnika</S.Tag>
            <S.Tag $deg="5" $top="30px" $left="250px">#Foundation</S.Tag>
            <S.Tag $white $deg="12" $top="100px" $left="330px">#Frontend</S.Tag>
            <S.Tag $deg="-15" $top="130px" $left="10px">#Kompyuter savodxonligi</S.Tag>
            <S.Tag $white $deg="5" $top="200px" $left="200px">#Grafik dizayn</S.Tag>
            <S.Tag $deg="10" $top="220px" $left="400px">#SMM</S.Tag>
          </S.TagsSide>
          <S.FormCard>
            <h3>Bepul konsultatsiya</h3>
            <p>Aloqa ma'lumotlaringizni qoldiring, va mutaxassisimiz siz bilan bog'lanadi.</p>
            <input type="text" placeholder="Sizning ismingiz" />
            <input type="text" placeholder="+998 (__) ___ __ __" />
            <button>Ro'yxatdan o'tish</button>
          </S.FormCard>
        </S.RegisterContainer>
      </S.RegisterSection>

      {/* 9. FAQ SECTION */}
      <S.FAQSection>
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <img src={telegram} alt="FAQ Icon" style={{ width: "100%", maxWidth: "450px" }} />
        </div>
        <S.FAQContent>
          <S.SectionTitle style={{ textAlign: "left" }}>Tez-tez beriladigan savollar</S.SectionTitle>
          {faqData.map((item, index) => (
            <S.FAQItem key={index}>
              <S.FAQHeader onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                {item.q} <span>{openIndex === index ? "↑" : "↓"}</span>
              </S.FAQHeader>
              <S.FAQBody $isOpen={openIndex === index}>
                {item.a}
              </S.FAQBody>
            </S.FAQItem>
          ))}
        </S.FAQContent>
      </S.FAQSection>

      {/* 10. FOOTER SECTION */}
      <S.Footer>
        <S.FooterGrid>
          <S.FooterCol>
            <img src={it_tat} alt="Logo" className="footer-logo" style={{color:"black"}} />
            <p className="desc">Innovatsiya va texnologiya orqali O'zbekiston yoshlarini dunyoga tanitish</p>
          </S.FooterCol>
          <S.FooterCol>
            <h4>Navigatsiya:</h4>
            <ul>
              <li>Bosh sahifa</li>
              <li>Kurslar</li>
              <li>Ustozlar</li>
              <li>Online kurslar</li>
            </ul>
          </S.FooterCol>
          <S.FooterCol>
            <h4>Kurslar:</h4>
            <ul>
              <li>Backend</li>
              <li>Frontend</li>
              <li>Kompyuter Savodxonligi</li>
              <li>Grafik Dizayn</li>
              <li>SMM</li>
              <li>Foundation</li>
              <li>Robototexnika</li>
            </ul>
          </S.FooterCol>
          <S.FooterCol>
            <h4>ALOQA:</h4>
            <span className="contact-item">+998 (88) 611-04-40</span>
            <span className="contact-item">+998 (90) 602-04-40</span>
            <div className="socials">
              <a href="#">Fb</a>
              <a href="#">Insta</a>
              <a href="#">Tg</a>
            </div>
          </S.FooterCol>
        </S.FooterGrid>
        <S.Copyright>© 2024 IT TAT O'quv Markazi. Barcha huquqlar himoyalangan.</S.Copyright>
      </S.Footer>
    </>
  );
};

export default Home;
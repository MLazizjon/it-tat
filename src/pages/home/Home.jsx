import React, { useState } from "react";
import * as S from "./Home.styles";
import toast, { Toaster } from 'react-hot-toast'; 

// Rasmlar (Assets)
import firt from './assets/first.png';
import indivi from './assets/indivi.png';
import mini from './assets/mini.png';
import covorking_first from './assets/covorking_first.png';
import covorking_second from './assets/covorking_second.png';
import covorking_third from './assets/covorking_third.png';
import frilance from './assets/frilance.png';
import it_park from './assets/it park.png';
import it_tat from './assets/it tat.png';
import mp from './assets/mp.png';
import union from './assets/union.png';
import texnomart from './assets/texnimart.png';
import krasniy from './assets/krasniy.png';
import telegram from './assets/telegram.png';

const Home = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);

  // Form ma'lumotlari holati
  const [formData, setFormData] = useState({ name: "", phone: "" });

  // Input o'zgarganda ishlaydi
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Ma'lumotni yuborish, tozalash va toast chiqarish
  const handleSend = (e) => {
    if (e) e.preventDefault();
    
    if (formData.name.trim() === "" || formData.phone.trim() === "") {
      toast.error("Iltimos, ismingiz va telefon raqamingizni kiriting!");
      return;
    }

    // Muvaffaqiyatli xabar
    toast.success("Ma'lumotlaringiz qabul qilindi! Tez orada bog'lanamiz.");
    
    // Inputlarni tozalash
    setFormData({ name: "", phone: "" });
    
    // Ochiq modallarni yopish
    setIsConsultModalOpen(false);
    setSelectedCourse(null);
  };

  const coursesData = {
    backend: { title: "Backend Dasturlash", duration: "6 oy", price: "1,200,000 so'm", desc: "Server qismi, ma'lumotlar bazasi va murakkab algoritmlar bilan ishlashni professional darajada o'rganasiz." },
    frontend: { title: "Frontend Dasturlash", duration: "6 oy", price: "1,200,000 so'm", desc: "Zamonaviy veb-saytlar interfeysini React va Next.js texnologiyalari yordamida yaratishni o'rganasiz." },
    savodxonlik: { title: "Kompyuter Savodxonligi", duration: "2 oy", price: "600,000 so'm", desc: "Kompyuterda ishlash, Office dasturlari va internet xavfsizligi bo'yicha boshlang'ich bilimlarni olasiz." }
  };

  const faqData = [
    { q: "O'quv markazida darslar qachon boshlanadi?", a: "Guruhlar shakllanishiga qarab har oy yangi darslar boshlanadi." },
    { q: "Sohani noldan o'rgansa bo'ladimi?", a: "Ha, bizda darslar mutlaqo noldan boshlab o'rgatiladi." },
    { q: "Sertifikat beriladimi?", a: "Kursni muvaffaqiyatli tugatgan barcha o'quvchilarga maxsus sertifikat beriladi." },
    { q: "To'lovni bo'lib to'lash imkoniyati bormi?", a: "Ha, bizda oylik to'lov tizimi mavjud." }
  ];

  return (
    <>
      {/* Bildirishnomalar uchun */}
      <Toaster position="top-center" reverseOrder={false} />
      
      <S.GlobalStyle />

      {/* --- 1. HERO SECTION --- */}
      <S.HeroSection>
        <S.HeroTitle>
          Innovatsiya va texnologiya olamida buyuklardan biri bo'lishga <span>IT TAT</span> sizga ko'makdosh
        </S.HeroTitle>
        <S.HeroGrid>
          <S.HeroCard>
            <div className="salom"> <img src={firt} alt="Hero" style={{width:"800px"}}/> </div>
          </S.HeroCard>
          <S.HeroCard $blue>
            <div className="course-list">
              {["Backend", "Frontend", "Kompyuter Savodxonligi", "Grafik Dizayn", "SMM", "Foundation", "Robototexnika"].map((item) => (
                <div key={item} style={{cursor: "pointer"}} onClick={() => setSelectedCourse(coursesData[item.toLowerCase().split(' ')[0]] || coursesData.backend)}>{item}</div>
              ))}
            </div>
          </S.HeroCard>
          <S.HeroCard $blue>
            <p style={{ fontSize: "22px", lineHeight: "1.4" }}>
              IT TAT - O'z qadriyatlariga ega va eng kuchli mutaxassislar jamlangan zamonaviy kasblar o'quv markazi.
            </p>
            <button onClick={() => setIsConsultModalOpen(true)}>Bepul konsultatsiya olish</button>
          </S.HeroCard>
        </S.HeroGrid>
      </S.HeroSection>

      {/* --- 2. FEATURES SECTION --- */}
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

      {/* --- 3. FORMAT SECTION --- */}
      <S.FormatSection>
        <S.SectionTitle $white>Ta'lim Formati</S.SectionTitle>
        <S.FormatGrid>
          <S.FormatCard>
            <div className="text-content">
              <h3>Individual</h3>
              <p>Faqat siz va mentor. Maxsus ishlab chiqilgan dastur asosida o'rganasiz.</p>
            </div>
            <img src={indivi} alt="Individual" />
          </S.FormatCard>
          <S.FormatCard>
            <div className="text-content">
              <h3>Mini guruh</h3>
              <p>4-5 kishilik kichik guruhlarda sifatli ta'lim olish imkoniyati.</p>
            </div>
            <img src={mini} alt="Mini" />
          </S.FormatCard>
        </S.FormatGrid>
      </S.FormatSection>

      {/* --- 4. COURSES SECTION --- */}
      <S.CoursesSection>
        <S.SectionTitle $white>Bizning kurslarimiz</S.SectionTitle>
        <S.CourseGrid>
          <S.CourseCard onClick={() => setSelectedCourse(coursesData.backend)}>
            <div className="top"><span>6 oy</span><div className="badge">+1 amaliyot</div></div>
            <h3>Backend</h3>
            <div className="ai-badge">Ai ✦</div>
            <p>Server qismini va ma'lumotlar bazasini boshqarishni o'rganing.</p>
            <div className="arrow">→</div>
          </S.CourseCard>
          <S.CourseCard onClick={() => setSelectedCourse(coursesData.frontend)}>
            <div className="top"><span>6 oy</span><div className="badge">+1 amaliyot</div></div>
            <h3>Frontend</h3>
            <div className="ai-badge">Ai ✦</div>
            <p>Veb-saytlarning foydalanuvchi interfeysini yarating.</p>
            <div className="arrow">→</div>
          </S.CourseCard>
          <S.CourseCard onClick={() => setSelectedCourse(coursesData.savodxonlik)}>
            <div className="top"><span>2 oy</span></div>
            <h3>Savodxonlik</h3>
            <div className="ai-badge">Ai ✦</div>
            <p>Kompyuter bilan professional ishlashni noldan o'rganing.</p>
            <div className="arrow">→</div>
          </S.CourseCard>
        </S.CourseGrid>
      </S.CoursesSection>

      {/* --- MODAL 1: KURS HAQIDA --- */}
      {selectedCourse && (
        <S.ModalOverlay onClick={() => setSelectedCourse(null)}>
          <S.ModalContent onClick={(e) => e.stopPropagation()}>
            <S.CloseButton onClick={() => setSelectedCourse(null)}>×</S.CloseButton>
            <h2>{selectedCourse.title}</h2>
            <div className="modal-info-row">
              <div><strong>Davomiyligi:</strong> {selectedCourse.duration}</div>
              <div><strong>Narxi:</strong> {selectedCourse.price}</div>
            </div>
            <p className="modal-text">{selectedCourse.desc}</p>
            <button className="modal-btn" onClick={() => {setSelectedCourse(null); setIsConsultModalOpen(true);}}>
              Hoziroq yozilish
            </button>
          </S.ModalContent>
        </S.ModalOverlay>
      )}

      {/* --- MODAL 2: BEPUL KONSULTATSIYA --- */}
      {isConsultModalOpen && (
        <S.ModalOverlay onClick={() => setIsConsultModalOpen(false)}>
          <S.ModalContent onClick={(e) => e.stopPropagation()}>
            <S.CloseButton onClick={() => setIsConsultModalOpen(false)}>×</S.CloseButton>
            <h2 style={{textAlign: "center"}}>Konsultatsiya</h2>
            <p style={{textAlign: "center", marginBottom: "25px", color: "#666"}}>
              Ismingiz va raqamingizni qoldiring, biz sizga qo'ng'iroq qilamiz.
            </p>
            <form onSubmit={handleSend} style={{display: "flex", flexDirection: "column", gap: "20px"}}>
                <input 
                  name="name" 
                  type="text" 
                  placeholder="Ismingiz" 
                  style={{padding: "20px", borderRadius: "15px", border: "1px solid #ddd", fontSize: "16px"}}
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <input 
                  name="phone" 
                  type="text" 
                  placeholder="+998" 
                  style={{padding: "20px", borderRadius: "15px", border: "1px solid #ddd", fontSize: "16px"}}
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                <button type="submit" className="modal-btn">Yuborish</button>
            </form>
          </S.ModalContent>
        </S.ModalOverlay>
      )}

      {/* --- 5. COWORKING SECTION --- */}
      <S.CoworkingSection>
        <S.SectionTitle>Bepul coworking</S.SectionTitle>
        <S.Gallery>
          <img src={covorking_first} alt="Main Coworking" />
          <div className="side">
            <img src={covorking_second} alt="C1" />
            <img src={covorking_third} alt="C2" />
          </div>
        </S.Gallery>
      </S.CoworkingSection>

      {/* --- 6. PARTNERS SECTION --- */}
      <S.PartnersSection>
        <S.SectionTitle>Bizning o'quvchilarimiz qayerda ishlashadi</S.SectionTitle>
        <S.PartnersGrid>
          <img src={frilance} alt="P1" /><img src={it_park} alt="P2" />
          <img src={it_tat} alt="P3" /><img src={mp} alt="P4" />
          <img src={union} alt="P5" /><img src={texnomart} alt="P6" />
          <img src={krasniy} alt="P7" />
        </S.PartnersGrid>
      </S.PartnersSection>

      {/* --- 7. MAP SECTION --- */}
      <S.MapSection>
        <S.SectionTitle>Biz qayerda joylashganmiz</S.SectionTitle>
        <S.MapFlex>
          <S.MapWrapper>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3072.031238917823!2d66.9248235!3d39.6500000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d193d5f9d9f9d%3A0x1d5f9d9f9d9f9d9f!2sIT%20TAT!5e0!3m2!1suz!2suz!4v1234567890" 
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="Location">
            </iframe>
          </S.MapWrapper>
          <S.ContactInfoCard>
            <h3>Samarqand</h3>
            <p>Samarqand viloyati Beruniy ko'chasi 32a</p>
            <span className="label">Telefon</span>
            <p className="value">+998 (88) 611-04-40</p>
          </S.ContactInfoCard>
        </S.MapFlex>
      </S.MapSection>

      {/* --- 8. REGISTRATION SECTION --- */}
      <S.RegisterSection>
        <S.SectionTitle $white>Kurslarga ro'yxatdan o'tib, kelajagingizni boshlang!</S.SectionTitle>
        <S.RegisterContainer>
          <S.TagsSide>
            <S.Tag $white $deg="-8" $top="20px" $left="20px">#Robotexnika</S.Tag>
            <S.Tag $deg="12" $top="100px" $left="330px">#Frontend</S.Tag>
            <S.Tag $white $deg="5" $top="200px" $left="200px">#SMM</S.Tag>
          </S.TagsSide>
          <S.FormCard>
            <h3>Bepul konsultatsiya</h3>
            <p>Ismingiz va raqamingizni qoldiring.</p>
            <input 
              name="name" 
              type="text" 
              placeholder="Ismingiz" 
              value={formData.name}
              onChange={handleInputChange}
            />
            <input 
              name="phone" 
              type="text" 
              placeholder="+998" 
              value={formData.phone}
              onChange={handleInputChange}
            />
            <button onClick={handleSend}>Ro'yxatdan o'tish</button>
          </S.FormCard>
        </S.RegisterContainer>
      </S.RegisterSection>

      {/* --- 9. FAQ SECTION --- */}
      <S.FAQSection>
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <img src={telegram} alt="FAQ Icon" style={{ width: "100%", maxWidth: "750px" }} />
        </div>
        <S.FAQContent>
          <S.SectionTitle style={{ textAlign: "left" }}>Tez-tez beriladigan savollar</S.SectionTitle>
          {faqData.map((item, index) => (
            <S.FAQItem key={index}>
              <S.FAQHeader onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                {item.q} <span>{openIndex === index ? "↑" : "↓"}</span>
              </S.FAQHeader>
              <S.FAQBody $isOpen={openIndex === index}> {item.a} </S.FAQBody>
            </S.FAQItem>
          ))}
        </S.FAQContent>
      </S.FAQSection>

      {/* --- 10. FOOTER SECTION --- */}
      <S.Footer>
        <S.FooterGrid>
          <S.FooterCol><p className="desc">Innovatsiya va texnologiya orqali O'zbekiston yoshlarini dunyoga tanitish.</p></S.FooterCol>
          <S.FooterCol><h4>Navigatsiya:</h4><ul><li>Bosh sahifa</li><li>Kurslar</li><li>Biz haqimizda</li></ul></S.FooterCol>
          <S.FooterCol><h4>Kurslar:</h4><ul><li>Backend</li><li>Frontend</li><li>Grafik Dizayn</li></ul></S.FooterCol>
          <S.FooterCol><h4>ALOQA:</h4><span className="contact-item">+998 (88) 611-04-40</span><div className="socials"><button>Tg</button><button>Insta</button></div></S.FooterCol>
        </S.FooterGrid>
        <S.Copyright>© 2024 IT TAT O'quv Markazi. Barcha huquqlar himoyalangan.</S.Copyright>
      </S.Footer>
    </>
  );
};

export default Home;
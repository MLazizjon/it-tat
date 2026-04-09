import React, { useState } from 'react';
import * as S from './kurslar.styles';

// Rasmlar (Assets)
import person_1 from './assets/person_1.png';
import person_2 from './assets/persom_2.png';
import person_3 from './assets/person_3.png';
import person_4 from './assets/person_4.png';
import indi from './assets/indivi.png';
import mini from './assets/mini.png';

// Kurslar uchun batafsil ma'lumotlar bazasi
const kurslarData = [
  { 
    id: 1, 
    title: "Backend", 
    teacher: "G'olibjon Davronov", 
    duration: "6 oy", 
    days: "3 kun", 
    hours: "2 soat", 
    img: person_1,
    details: {
      about: "Backend kursi orqali siz zamonaviy veb-ilovalarning server qismini, ma'lumotlar bazasi bilan ishlashni va xavfsizlik tizimlarini yaratishni professional darajada o'rganasiz.",
      lessons: [
        "Python dasturlash tili asoslari",
        "Django va Django Rest Framework",
        "PostgreSQL va Ma'lumotlar bazasi arxitekturasi",
        "Docker va Serverga yuklash (Deployment)",
        "Telegram botlar va murakkab API integratsiyalari"
      ],
      target: "Mantiqiy fikrlashni yoqtiradigan va tizimlarning ichki ishlash jarayoniga qiziquvchilar uchun.",
      price: "1,200,000 so'm / oy"
    }
  },
  { 
    id: 2, 
    title: "Frontend", 
    teacher: "Shaxzod Muradov", 
    duration: "6 oy", 
    days: "3 kun", 
    hours: "2 soat", 
    img: person_2,
    details: {
      about: "Frontend kursi foydalanuvchilar bevosita ko'radigan va muloqot qiladigan veb-interfeyslarni yaratishga qaratilgan. Kursda zamonaviy SPA ilovalar yaratish o'rgatiladi.",
      lessons: [
        "HTML5 va CSS3 (Advanced Layouts)",
        "JavaScript ES6+ va Asinxron dasturlash",
        "React JS va State Management (Redux)",
        "Next.js va SEO asoslari",
        "Tailwind CSS va UI kutubxonalar"
      ],
      target: "Vizual natijalarni yoqtiradigan va kreativ interfeyslar yaratishga qiziquvchilar uchun.",
      price: "1,200,000 so'm / oy"
    }
  },
  { 
    id: 3, 
    title: "Frontend", 
    teacher: "Sayyorbek Xoliqov", 
    duration: "6 oy", 
    days: "3 kun", 
    hours: "2 soat", 
    img: person_3,
    details: {
      about: "Ushbu kursda zamonaviy frontend texnologiyalari amaliy loyihalar va networking asosida o'rgatiladi.",
      lessons: [
        "Veb-saytlarni adaptiv qilish",
        "JavaScript mantiqiy masalalari",
        "React Hooks va Custom Hooks",
        "REST API bilan ishlash",
        "Git va GitHub bilan jamoada ishlash"
      ],
      target: "IT sohasida kuchli portfolio yaratmoqchi bo'lgan boshlovchilar uchun.",
      price: "1,100,000 so'm / oy"
    }
  },
  { 
    id: 4, 
    title: "Robototexnika", 
    teacher: "Toshtemir Abduraxmonov", 
    duration: "6 oy", 
    days: "3 kun", 
    hours: "2 soat", 
    img: person_4,
    details: {
      about: "Robototexnika kursi elektronika va dasturlashni birlashtiradi. O'quvchilar o'z qo'llari bilan aqlli qurilmalar va robotlarni yasashni o'rganadilar.",
      lessons: [
        "Arduino mikrokontrollerlari",
        "Elektron komponentlar va datchiklar",
        "C++ asosida mikrokontrollerlarni dasturlash",
        "Aqlli uy (Smart Home) prototiplari",
        "Mobil ilova orqali robotlarni boshqarish"
      ],
      target: "Muhandislik, elektronika va yangi texnologiyalarga qiziquvchi yoshlar uchun.",
      price: "800,000 so'm / oy"
    }
  },
];

const Kurslar = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const openModal = (course) => setSelectedCourse(course);
  const closeModal = () => setSelectedCourse(null);

  return (
    <>
      {/* 1. ASOSIY KURSLAR RO'YXATI */}
      <S.KurslarSection>
        <S.SectionTitle>Kurslar</S.SectionTitle>
        <S.KurslarGrid>
          {kurslarData.map((course) => (
            <S.KursCard key={course.id}>
              <S.TeacherBox>
                <img src={course.img} alt={course.teacher} />
                <h4>{course.teacher}</h4>
                <p>{course.title} kursi ustozı</p>
              </S.TeacherBox>

              <S.ContentBox>
                <div className="top-row">
                  <h3>{course.title}</h3>
                  <button onClick={() => openModal(course)}>Batafsil ma'lumot</button>
                </div>
                <p className="description">
                  Bizning mentorlarimiz xalqaro darajadagi mutaxassislar bo'lib, o'z sohasida katta tajribaga ega.
                </p>
                
                <S.InfoTable>
                  <S.InfoItem>
                    <div className="row">
                      <span>Kurs davomiyligi</span>
                      <b>{course.duration}</b>
                    </div>
                    <div className="dashed-line" />
                    <div className="row">
                      <span>Haftada</span>
                      <b>{course.days}</b>
                    </div>
                  </S.InfoItem>

                  <S.InfoItem>
                    <div className="row">
                      <span>Dars vaqti</span>
                      <b className="empty-val">14:00 - 16:00</b>
                    </div>
                    <div className="dashed-line" />
                    <div className="row">
                      <span>Necha soat</span>
                      <b>{course.hours}</b>
                    </div>
                  </S.InfoItem>
                </S.InfoTable>
              </S.ContentBox>
            </S.KursCard>
          ))}
        </S.KurslarGrid>
      </S.KurslarSection>

      {/* --- KURS BATAFSIL MODALI --- */}
      {selectedCourse && (
        <S.ModalOverlay onClick={closeModal}>
          <S.ModalContent onClick={(e) => e.stopPropagation()}>
            <S.CloseButton onClick={closeModal}>&times;</S.CloseButton>
            <div className="modal-header">
              <h2>{selectedCourse.title} kursi haqida</h2>
              <p className="teacher-name">Mentor: {selectedCourse.teacher}</p>
            </div>

            <div className="modal-body">
              <section>
                <h4>Kurs haqida:</h4>
                <p>{selectedCourse.details.about}</p>
              </section>

              <section>
                <h4>Nimalarni o'rganasiz:</h4>
                <ul>
                  {selectedCourse.details.lessons.map((lesson, index) => (
                    <li key={index}>{lesson}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h4>Kimlar uchun:</h4>
                <p>{selectedCourse.details.target}</p>
              </section>

              <div className="price-tag">
                <span>Kurs narxi: </span>
                <strong>{selectedCourse.details.price}</strong>
              </div>
            </div>

            <S.ModalFooterBtn onClick={closeModal}>Tushunarli</S.ModalFooterBtn>
          </S.ModalContent>
        </S.ModalOverlay>
      )}

      {/* 2. TA'LIM FORMATI */}
      <S.FormatSection>
        <S.SectionTitle style={{color: '#fff', marginBottom: '40px'}}>Ta'lim Formati</S.SectionTitle>
        <S.FormatGrid>
          <S.FormatCard $isLarge>
            <div className="text-content">
              <h3>Individual</h3>
              <p>Har bir o'quvchining bilim darajasi, maqsadlari va o'rganish tezligiga moslashtirilgan maxsus o'quv dasturi. Ushbu kurs orqali siz IT sohasini chuqur o'zlashtirishingiz mumkin.</p>
            </div>
            <img src={indi} alt="Individual" />
          </S.FormatCard>

          <S.FormatCard>
            <div className="text-content">
              <h3>Mini guruh</h3>
              <p>Bu kichik guruhda (odatda 4-5 kishi) o'qitish usuli bo'lib, individual yondashuv va jamoaviy o'rganish muhitini birlashtiradi.</p>
            </div>
            <img src={indi} alt="Mini" />
          </S.FormatCard>

          <S.FormatCard>
            <div className="text-content">
              <h3>Guruh</h3>
              <p>Bu 10-12 kishidan iborat jamoada ta'lim olish tizimi bo'lib, o'quvchilarga o'zaro tajriba almashish imkonini beradi.</p>
            </div>
            <img src={mini} alt="Guruh" />
          </S.FormatCard>
        </S.FormatGrid>
      </S.FormatSection>

      {/* 3. NIMAGA BIZNI TANLASHADI */}
      <S.WhyUsSection>
        <S.SectionTitle>Nimaga bizni tanlashadi</S.SectionTitle>
        <S.WhyUsGrid>
          <S.WhyUsCard>
            <div className="icon-circle">↗</div>
            <h3>Yuqori malakali mentorlar</h3>
            <p>Bizning mentorlarimiz xalqaro darajadagi tajribali mutaxassislardir. Ular o'z sohasida katta tajribaga ega bo'lib, o'quvchilarga real loyihalar ustida ishlashni o'rgatadi.</p>
          </S.WhyUsCard>

          <S.WhyUsCard>
            <div className="icon-circle">🏅</div>
            <h3>Real loyihalarda amaliyot</h3>
            <p>Bizda o'quvchilar nazariyani amaliyot bilan mustahkamlashadi. Ular real loyihalarda ishtirok etib, dasturlash muammolarini hal qilishni o'rganishadi.</p>
          </S.WhyUsCard>

          <S.WhyUsCard>
            <div className="icon-circle">📊</div>
            <h3>Natijaga yo'naltirilgan ta'lim</h3>
            <p>Natijaga yo'naltirilgan ta'lim - muvaffaqiyat garovi! Bizning o'quv tizimimiz o'quvchilarning haqiqiy natijalarga erishishini ta'minlaydi.</p>
          </S.WhyUsCard>

          <S.WhyUsCard>
            <div className="icon-circle">🎯</div>
            <h3>Ish taklifi</h3>
            <p>IT TAT o'quv markazida o'qishni muvaffaqiyatli yakunlagan eng iqtidorli o'quvchilarga ishga joylashish imkoniyati taqdim etiladi.</p>
          </S.WhyUsCard>
        </S.WhyUsGrid>
      </S.WhyUsSection>

      {/* 4. NATIJALAR */}
      <S.ResultsSection>
        <S.SectionTitle>Kursni tugatganda nimalarga erishasiz</S.SectionTitle>
        <S.ResultsGrid>
          {[
            { id: '01', title: 'Portfolio', desc: 'Kurs davomida nazariy bilimlar bilan birga amaliy loyihalar ustida ishlaysiz va kursni tugatganingizda, sizning shaxsiy portfoliongiz shakllanadi.' },
            { id: '02', title: 'Networking', desc: 'Siz faqat kod yozishni emas, balki sohadagi boshqa mutaxassislar bilan aloqa o\'rnatishni va networking qilishni ham o\'rganasiz.' },
            { id: '03', title: 'Ish taklifi', desc: 'Eng yaxshi ko\'rsatkich ko\'rsatgan bitiruvchilarimizga hamkor kompaniyalarimizdan va markazimizdan ish takliflari beriladi.' },
            { id: '04', title: 'Sertifikat', desc: 'Kursni muvaffaqiyatli yakunlaganingizdan so\'ng, sizning bilim darajangizni tasdiqlovchi rasmiy sertifikat taqdim etiladi.' }
          ].map(item => (
            <S.ResultCard key={item.id}>
              <div className="number">{item.id}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </S.ResultCard>
          ))}
        </S.ResultsGrid>
      </S.ResultsSection>

      {/* 5. FOOTER */}
      <S.Footer>
        <S.FooterGrid>
          <S.FooterCol>
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

export default Kurslar;
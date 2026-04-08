import React from 'react';
import * as S from './kurslar.styles';
import { FaFacebookF, FaInstagram, FaTelegramPlane } from 'react-icons/fa';

// Kurslar ma'lumotlari
const kurslarData = [
  { id: 1, title: "Backend", teacher: "G'olibjon Davronov", duration: "6 oy", days: "3 kun", hours: "2 soat", img: "/t1.png" },
  { id: 2, title: "Frontend", teacher: "Shaxzod Muradov", duration: "6 oy", days: "3 kun", hours: "2 soat", img: "/t2.png" },
  { id: 3, title: "Frontend", teacher: "Sayyorbek Xoliqov", duration: "6 oy", days: "3 kun", hours: "2 soat", img: "/t3.png" },
  { id: 4, title: "Robototexnika", teacher: "Toshtemir Abduraxmonov", duration: "6 oy", days: "3 kun", hours: "2 soat", img: "/t4.png" },
  { id: 5, title: "Foundation va backend", teacher: "Muhammad G'ulomhusinov", duration: "6 oy / 2 oy", days: "3 kun", hours: "2 soat", img: "/t5.png" },
  { id: 6, title: "Kompyuter savodxonligi", teacher: "Jahongir Xamidov", duration: "2 oy", days: "3 kun", hours: "2 soat", img: "/t6.png" },
  { id: 7, title: "Grafik dizayn", teacher: "Og'abek G'ulomov", duration: "5 oy", days: "3 kun", hours: "2 soat", img: "/t7.png" },
  { id: 8, title: "Kompyuter savodxonligi", teacher: "Mansur Xamidov", duration: "2 oy", days: "3 kun", hours: "2 soat", img: "/t8.png" },
  { id: 9, title: "SMM", teacher: "Moxinur Shodmonova", duration: "3 oy", days: "3 kun", hours: "2 soat", img: "/t9.png" },
  { id: 10, title: "Robototexnika", teacher: "Islom Xolmurodov", duration: "6 oy", days: "3 kun", hours: "2 soat", img: "/t10.png" },
];

const Kurslar = () => {
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
                  <button>Batafsil ma'lumot</button>
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
                      <span>Dars boshlanish vaqti</span>
                      <b className="empty-val">-------</b>
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

      {/* 2. TA'LIM FORMATI */}
      <S.FormatSection>
        <S.SectionTitle style={{color: '#fff', marginBottom: '40px'}}>Ta'lim Formati</S.SectionTitle>
        <S.FormatGrid>
          <S.FormatCard $isLarge>
            <div className="text-content">
              <h3>Individual</h3>
              <p>Har bir o'quvchining bilim darajasi, maqsadlari va o'rganish tezligiga moslashtirilgan maxsus o'quv dasturi. Ushbu kurs orqali siz IT sohasini chuqur o'zlashtirishingiz mumkin.</p>
            </div>
            <img src="/indiv-3d.png" alt="Individual" />
          </S.FormatCard>

          <S.FormatCard>
            <div className="text-content">
              <h3>Mini guruh</h3>
              <p>Bu kichik guruhda (odatda 4-5 kishi) o'qitish usuli bo'lib, individual yondashuv va jamoaviy o'rganish muhitini birlashtiradi.</p>
            </div>
            <img src="/mini-3d.png" alt="Mini" />
          </S.FormatCard>

          <S.FormatCard>
            <div className="text-content">
              <h3>Guruh</h3>
              <p>Bu 10-12 kishidan iborat jamoada ta'lim olish tizimi bo'lib, o'quvchilarga o'zaro tajriba almashish imkonini beradi.</p>
            </div>
            <img src="/group-3d.png" alt="Guruh" />
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
            { id: '02', title: 'Networking', desc: 'Kurs davomida nazariy bilimlar bilan birga amaliy loyihalar ustida ishlaysiz va IT sohasida yangi tanishlar orttirasiz.' },
            { id: '03', title: 'Ish taklifi', desc: 'Kurs davomida nazariy bilimlar bilan birga amaliy loyihalar ustida ishlaysiz va eng yaxshi talabalar ish taklifiga ega bo\'ladi.' },
            { id: '04', title: 'Sertifikat', desc: 'Kurs davomida nazariy bilimlar bilan birga amaliy loyihalar ustida ishlaysiz va kursni yakunlaganda rasmiy sertifikatga ega bo\'lasiz.' }
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
            <img src="/it-tat-white.png" alt="IT TAT" className="footer-logo" />
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
              <li>3d Modeling Pro</li>
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
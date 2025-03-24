// import React, { useState, useEffect, useRef } from "react";
// import SectionHeader from "../../../../components/section-header/SectionHeader";
// import group from "../../../../assets/images/group.svg";
// import picgroup1 from "../../../../assets/images/picgroup1.jfif";
// import picgroup2 from "../../../../assets/images/picgroup2.jfif";
// import picgroup3 from "../../../../assets/images/picgroup3.jfif";
// import picgroup4 from "../../../../assets/images/picgroup4.jfif";
// import Code from "../../../../components/code/Code";
// import person from "../../../../assets/icons/person.svg";
// import bag from "../../../../assets/icons/bag.svg";
// import location from "../../../../assets/icons/location.svg";
// import like from "../../../../assets/icons/like.svg";
// import "./group.scss";

// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const teamData = [
//     {
//         id: 1,
//         name: "Shodiyorkhon Abdivoyitov",
//         img: picgroup1,
//         position: "Director of Improve",
//         location: "Toshkent, Chilonzor",
//         experience: "6 yillik tajriba",
//     },
//     {
//         id: 2,
//         name: "Fakhriyor Begmurodov",
//         img: picgroup2,
//         position: "Director of Improve Bulungur",
//         location: "Samarqand, Jomboy",
//         experience: "8 yillik tajriba",
//     },
//     {
//         id: 3,
//         name: "Sanjar Narzullayev Botir ogli",
//         img: picgroup3,
//         position: "Director of Improve Okdaryo",
//         location: "Farg‘ona, Marg‘ilon",
//         experience: "5 yillik tajriba",
//     },
//     {
//         id: 4,
//         name: "Doston Ismoilov Baxtiyor ogli",
//         img: picgroup4,
//         position: "Manager of Startup Center",
//         location: "Namangan, Chortoq",
//         experience: "10 yillik tajriba",
//     },
// ];

// const Group = () => {

//   const section1Ref = useRef(null);
//   const section2Ref = useRef(null);
//   const section3Ref = useRef(null);

//   useEffect(() => {
//       if (section1Ref.current && section2Ref.current && section3Ref.current) {
//           ScrollTrigger.create({
//               trigger: section1Ref.current,
//               start: "top top",
//               end: "bottom 0px",
//               pin: section1Ref.current,
//           });

//           ScrollTrigger.create({
//               trigger: section2Ref.current,
//               start: "top top",
//               end: "bottom 0px",
//               pin: section2Ref.current,
//           });

//           ScrollTrigger.create({
//               trigger: section3Ref.current,
//               start: "top top",
//               end: "bottom 0px",
//               pin: section3Ref.current,
//           });
//       }
//   }, []);

//     return (
//         <div className="group">
//             <div className="container">
//                 <div className="group__top">
//                     <SectionHeader
//                         subtitle={"BIZNING JAMOA"}
//                         title={
//                             "Bizning jamoamiz jahon darajasidagi mutaxassislardan iborat"
//                         }
//                     />
//                     <p className="group__top__desc">
//                         Biz sizni konsultatsiyamiz asosini tashkil etuvchi
//                         iqtidorli shaxslar bilan tanishtirishdan g'ururlanamiz,
//                         ularning har biri o'zining noyob mahorati va boy
//                         tajribasini o'zgartiruvchi natijalarga olib kteamData[0]adi.
//                     </p>
//                 </div>
//                 <div>
//                     {/* {teamData.map((el, index) => ( */}
//                     <div
//                         ref={section1Ref}
//                         id={teamData[0].id}
//                         className="group__content"
//                     >
//                         <div className="group__img">
//                             <img src={teamData[0].img} alt={teamData[0].name} />
//                         </div>
//                         <Code>
//                             <div className="group__cards">
//                                 <div className="group__card">
//                                     <div className="group__icon">
//                                         <img
//                                             src={teamData[0].img}
//                                             alt="person icon"
//                                         />
//                                     </div>
//                                     <h3 className="group__title">
//                                         {teamData[0].name}
//                                     </h3>
//                                 </div>
//                                 <div className="group__card">
//                                     <div className="group__icon">
//                                         <img src={bag} alt="bag icon" />
//                                     </div>
//                                     <h3 className="group__title">
//                                         {teamData[0].position}
//                                     </h3>
//                                 </div>
//                                 <div className="group__card">
//                                     <div className="group__icon">
//                                         <img
//                                             src={location}
//                                             alt="location icon"
//                                         />
//                                     </div>
//                                     <h3 className="group__title">
//                                         {teamData[0].location}
//                                     </h3>
//                                 </div>
//                                 <div className="group__card">
//                                     <div className="group__icon">
//                                         <img src={like} alt="like icon" />
//                                     </div>
//                                     <h3 className="group__title">
//                                         {teamData[0].experience}
//                                     </h3>
//                                 </div>
//                             </div>
//                             <p className="group__desc">
//                                 Doimiy rivojlanib borayotgan biznes landshaftida
//                                 mustahkam va aniq strategiyalar sizning
//                                 muvaffaqiyat sari yo'l-yo'riq ko'rsatuvchi
//                                 vositadir. Strategic Business Solutions
//                                 kompaniyasida biz oddiy rejalardan tashqari
//                                 biznes strategiyalarini ishlab chiqishga
//                                 ixtisoslashganmiz. Ular o'sish, innovatsiyalar,
//                                 yechimlar va bu farovonlik uchun mustahkam
//                                 rejalardir.
//                             </p>
//                         </Code>
//                     </div>
//                     <div
//                         ref={section2Ref}
//                         id={teamData[0].id}
//                         className="group__content"
//                     >
//                         <div className="group__img">
//                             <img src={teamData[0].img} alt={teamData[0].name} />
//                         </div>
//                         <Code>
//                             <div className="group__cards">
//                                 <div className="group__card">
//                                     <div className="group__icon">
//                                         <img
//                                             src={teamData[0].img}
//                                             alt="person icon"
//                                         />
//                                     </div>
//                                     <h3 className="group__title">
//                                         {teamData[0].name}
//                                     </h3>
//                                 </div>
//                                 <div className="group__card">
//                                     <div className="group__icon">
//                                         <img src={bag} alt="bag icon" />
//                                     </div>
//                                     <h3 className="group__title">
//                                         {teamData[0].position}
//                                     </h3>
//                                 </div>
//                                 <div className="group__card">
//                                     <div className="group__icon">
//                                         <img
//                                             src={location}
//                                             alt="location icon"
//                                         />
//                                     </div>
//                                     <h3 className="group__title">
//                                         {teamData[0].location}
//                                     </h3>
//                                 </div>
//                                 <div className="group__card">
//                                     <div className="group__icon">
//                                         <img src={like} alt="like icon" />
//                                     </div>
//                                     <h3 className="group__title">
//                                         {teamData[0].experience}
//                                     </h3>
//                                 </div>
//                             </div>
//                             <p className="group__desc">
//                                 Doimiy rivojlanib borayotgan biznes landshaftida
//                                 mustahkam va aniq strategiyalar sizning
//                                 muvaffaqiyat sari yo'l-yo'riq ko'rsatuvchi
//                                 vositadir. Strategic Business Solutions
//                                 kompaniyasida biz oddiy rejalardan tashqari
//                                 biznes strategiyalarini ishlab chiqishga
//                                 ixtisoslashganmiz. Ular o'sish, innovatsiyalar,
//                                 yechimlar va bu farovonlik uchun mustahkam
//                                 rejalardir.
//                             </p>
//                         </Code>
//                     </div>
//                     <div
//                         ref={section3Ref}
//                         id={teamData[0].id}
//                         className="group__content"
//                     >
//                         <div className="group__img">
//                             <img src={teamData[0].img} alt={teamData[0].name} />
//                         </div>
//                         <Code>
//                             <div className="group__cards">
//                                 <div className="group__card">
//                                     <div className="group__icon">
//                                         <img
//                                             src={teamData[0].img}
//                                             alt="person icon"
//                                         />
//                                     </div>
//                                     <h3 className="group__title">
//                                         {teamData[0].name}
//                                     </h3>
//                                 </div>
//                                 <div className="group__card">
//                                     <div className="group__icon">
//                                         <img src={bag} alt="bag icon" />
//                                     </div>
//                                     <h3 className="group__title">
//                                         {teamData[0].position}
//                                     </h3>
//                                 </div>
//                                 <div className="group__card">
//                                     <div className="group__icon">
//                                         <img
//                                             src={location}
//                                             alt="location icon"
//                                         />
//                                     </div>
//                                     <h3 className="group__title">
//                                         {teamData[0].location}
//                                     </h3>
//                                 </div>
//                                 <div className="group__card">
//                                     <div className="group__icon">
//                                         <img src={like} alt="like icon" />
//                                     </div>
//                                     <h3 className="group__title">
//                                         {teamData[0].experience}
//                                     </h3>
//                                 </div>
//                             </div>
//                             <p className="group__desc">
//                                 Doimiy rivojlanib borayotgan biznes landshaftida
//                                 mustahkam va aniq strategiyalar sizning
//                                 muvaffaqiyat sari yo'l-yo'riq ko'rsatuvchi
//                                 vositadir. Strategic Business Solutions
//                                 kompaniyasida biz oddiy rejalardan tashqari
//                                 biznes strategiyalarini ishlab chiqishga
//                                 ixtisoslashganmiz. Ular o'sish, innovatsiyalar,
//                                 yechimlar va bu farovonlik uchun mustahkam
//                                 rejalardir.
//                             </p>
//                         </Code>
//                     </div>
//                     {/* ))} */}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Group;

// import React, { useEffect, useRef } from "react";
// import SectionHeader from "../../../../components/section-header/SectionHeader";
// import picgroup1 from "../../../../assets/images/picgroup1.jfif";
// import picgroup2 from "../../../../assets/images/picgroup2.jfif";
// import picgroup3 from "../../../../assets/images/picgroup3.jfif";
// import picgroup4 from "../../../../assets/images/picgroup4.jfif";
// import Code from "../../../../components/code/Code";
// import bag from "../../../../assets/icons/bag.svg";
// import location from "../../../../assets/icons/location.svg";
// import like from "../../../../assets/icons/like.svg";
// import "./group.scss";

// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const teamData = [
//     {
//         id: 1,
//         name: "Shodiyorkhon Abdivoyitov",
//         img: picgroup1,
//         position: "Director of Improve",
//         location: "Toshkent, Chilonzor",
//         experience: "6 yillik tajriba",
//     },
//     {
//         id: 2,
//         name: "Fakhriyor Begmurodov",
//         img: picgroup2,
//         position: "Director of Improve Bulungur",
//         location: "Samarqand, Jomboy",
//         experience: "8 yillik tajriba",
//     },
//     {
//         id: 3,
//         name: "Sanjar Narzullayev Botir ogli",
//         img: picgroup3,
//         position: "Director of Improve Okdaryo",
//         location: "Farg‘ona, Marg‘ilon",
//         experience: "5 yillik tajriba",
//     },
//     {
//         id: 4,
//         name: "Doston Ismoilov Baxtiyor ogli",
//         img: picgroup4,
//         position: "Manager of Startup Center",
//         location: "Namangan, Chortoq",
//         experience: "10 yillik tajriba",
//     },
// ];

// const Group = () => {
//     const containerRef = useRef(null);
//     const sectionRefs = useRef([]);

//     useEffect(() => {
//         const sections = sectionRefs.current;
//         sections.forEach((section, index) => {
//             gsap.fromTo(
//                 section,
//                 { opacity: 0, y: 50 },
//                 {
//                     opacity: 1,
//                     y: 0,
//                     scrollTrigger: {
//                         trigger: section,
//                         start: "top center",
//                         end: "top top",
//                         scrub: true,
//                         pin: true,
//                         pinSpacing: false,
//                     },
//                 }
//             );
//         });
//     }, []);

//     return (
//         <div className="group">
//             <div className="container">
//                 <div className="group__top">
//                     <SectionHeader
//                         subtitle={"BIZNING JAMOA"}
//                         title={
//                             "Bizning jamoamiz jahon darajasidagi mutaxassislardan iborat"
//                         }
//                     />
//                     <p className="group__top__desc">
//                         Biz sizni konsultatsiyamiz asosini tashkil etuvchi
//                         iqtidorli shaxslar bilan tanishtirishdan g'ururlanamiz,
//                         ularning har biri o'zining noyob mahorati va boy
//                         tajribasini o'zgartiruvchi natijalarga olib keladi.
//                     </p>
//                 </div>
//                 <div ref={containerRef}>
//                     {teamData.map((el, index) => (
//                         <div
//                             key={el.id}
//                             ref={(el) => (sectionRefs.current[index] = el)}
//                             className="group__section"
//                         >
//                             <div className="group__content">
//                                 <div className="group__img">
//                                     <img src={el.img} alt={el.name} />
//                                 </div>
//                                 <Code>
//                                     <div className="group__cards">
//                                         <div className="group__card">
//                                             <h3 className="group__title">
//                                                 {el.name}
//                                             </h3>
//                                         </div>
//                                         <div className="group__card">
//                                             <h3 className="group__title">
//                                                 {el.position}
//                                             </h3>
//                                         </div>
//                                         <div className="group__card">
//                                             <h3 className="group__title">
//                                                 {el.location}
//                                             </h3>
//                                         </div>
//                                         <div className="group__card">
//                                             <h3 className="group__title">
//                                                 {el.experience}
//                                             </h3>
//                                         </div>
//                                     </div>
//                                     <p className="group__desc">
//                                         Doimiy rivojlanib borayotgan biznes
//                                         landshaftida mustahkam va aniq
//                                         strategiyalar sizning muvaffaqiyat sari
//                                         yo'l-yo'riq ko'rsatuvchi vositadir.
//                                     </p>
//                                 </Code>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Group;

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./group.scss";


gsap.registerPlugin(ScrollTrigger);

const Group = () => {
    const containerRef = useRef(null);

    useEffect(() => {

      let panels = gsap.utils.toArray(".panel");

      panels.forEach((panel, i) => {
          ScrollTrigger.create({
              trigger: panel,
              start: "top top",
              pin: i === panels.length - 1 ? false : true,
              //end:"bottom 100",
              pinSpacing: false,
          });
      });
    }, []);

    return (
        <div className="body">
            <div className="head"></div>
            <div className="container-pin" ref={containerRef}>
                <div className="description panel blue" style={{ backgroundColor: "blue" }}>
                    <div>
                        <h1>Layered pinning</h1>
                        <p>Use pinning to layer panels on top of each other as you scroll.</p>
                        <div className="scroll-down">
                            Scroll down<div className="arrow"></div>
                        </div>
                    </div>
                </div>
                <section className="panel red" style={{ backgroundColor: "red" }}>ONE</section>
                <section className="panel orange" style={{ backgroundColor: "orange" }}>TWO</section>
                <section className="panel purple" style={{ backgroundColor: "purple" }}>THREE</section>
                <section className="panel green" style={{ backgroundColor: "green" }}>FOUR</section>
            </div>
        </div>
    );
};

export default Group;

// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "./group.scss";

// gsap.registerPlugin(ScrollTrigger);

// const Group = () => {
//     const containerRef = useRef(null);

//     useEffect(() => {
//         const sections = gsap.utils.toArray(".section");

//         gsap.set(sections, { yPercent: 100 });

//         gsap.to(sections, {
//             yPercent: 0,
//             stagger: 1,
//             ease: "power1.out",
//             scrollTrigger: {
//                 trigger: ".container",
//                 start: "top top",
//                 end: "bottom bottom",
//                 pin: true,
//                 scrub: 1,
//             },
//         });
//     }, []);

//     return (
//         <div>
//             <div className="head"></div>
//             <div ref={containerRef} className="container">
//                 <div className="section section-1">Section 1</div>
//                 <div className="section section-2">Section 2</div>
//                 <div className="section section-3">Section 3</div>
//                 <div className="section section-4">Section 4</div>
//             </div>
//         </div>
//     );
// };

// export default Group;

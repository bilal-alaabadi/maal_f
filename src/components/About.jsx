// src/pages/About.jsx
import React from 'react';
// import perfumeImg from '../assets/Untitled-1-2.png';

const About = () => {
  return (
    <div dir="rtl" className="bg-white text-gray-800">
      <section className="max-w-6xl mx-auto py-16 px-4 md:px-8">
        <div className="flex flex-col md:flex-row-reverse items-center gap-10">
          {/* الصورة */}
          {/* <div className="md:w-1/2">
            <img
              src={perfumeImg}
              alt="maaalwardperfumes Luxury Perfume Brand"
              className="w-full max-w-md mx-auto rounded-xl shadow-lg"
            />
          </div> */}

          {/* النص */}
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-[#eb7eab] mb-4">
              maaalwardperfumes
              <br />
              <span> الفخامة في زجاجة</span>
            </h2>

            <p className="text-lg leading-loose mb-4">
              منذ عام 2013، بدأنا رحلتنا في قطر بابتكار عطورٍ فاخرة تمزج بين
              الأصالة والرقي. واليوم، نأتيكم بعالمٍ من الفخامة إلى قلب مسقط،
              حيث تلتقي الحرفة العريقة مع الحداثة.
            </p>

            <p className="leading-loose mb-4">
              نؤمن أن العطر ليس مجرد رائحة، بل هو هوية وشخصية تُعبّر عنك.
              لذلك نسعى دائمًا لاختيار أرقى المكونات العالمية لتقديم تجربة
              تُحاكي ذوقك الرفيع وتدوم في ذاكرتك.
            </p>

            <p className="leading-loose mb-4">
              عبر سنوات من الشغف والإبداع، أصبح اسم
              <span className="font-semibold text-[#eb7eab]"> maaalwardperfumes </span>
              مرادفًا للفخامة والجودة. واليوم، نواصل مسيرتنا لنضع بين يديك
              عطورًا لا تُنسى… عطور تحكي قصتك.
            </p>

            <div className="mt-6 p-5 rounded-xl border border-gray-200">
              <h3 className="text-2xl font-semibold text-[#eb7eab] mb-3">
                رؤيتنا
              </h3>
              <ul className="space-y-2 list-disc pr-5">
                <li>إبداع عطور تحمل بصمة فاخرة تُميزك.</li>
                <li>مكونات منتقاة بعناية لتجربة استثنائية.</li>
                <li>جمع الشرق والغرب في زجاجة واحدة.</li>
              </ul>
            </div>

            <p className="mt-8 text-lg font-medium text-[#eb7eab]">
              maaalwardperfumes … حيث تبدأ قصتك مع الفخامة.
            </p>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-xl font-semibold text-[#eb7eab]">
            عطر واحد… يروي هوية وأناقة خالدة.
          </p>
          <p className="mt-4 text-gray-700">
            ✨ لطلب عطرك الخاص تواصل معنا عبر: 93347609+
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;

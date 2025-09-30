import React from 'react';

const ReturnPolicy = () => {
  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-sm">
        
        {/* العنوان الرئيسي */}
        <h1 className="text-2xl md:text-3xl font-bold text-center text-[#eb7eab] mb-6">
          سياسة الاسترجاع والاستبدال
        </h1>

        {/* مقدمة الصفحة */}
        <div className="mb-8 text-right space-y-4">
          <p className="text-gray-700 text-lg leading-relaxed">
            في <span className="font-semibold text-[#eb7eab]">maaalwardperfumes</span> 
            نؤمن أن رضاكم هو أولويتنا. نقدم لكم أفخم العطور منذ عام 2013، 
            ونحرص دائمًا على أن تصلكم منتجاتنا بأفضل جودة.
          </p>
          <p className="text-gray-600">
            لكل طلبية، نرفق لكم <span className="font-semibold text-[#eb7eab]">سمبل مجاني</span> 
            لتجربة العطر قبل فتح العبوة الأساسية، وذلك حفاظًا على راحتكم وضمان ثقتكم بنا.
          </p>
        </div>

        {/* البنود الأساسية */}
        <div className="space-y-6 text-right">
          
          {/* البند الأول */}
          <div className="border-b border-gray-100 pb-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">الاسترجاع</h3>
            <p className="text-gray-600 leading-relaxed">
              نقبل طلبات الاسترجاع خلال 
              <span className="font-semibold text-[#eb7eab]"> 3 أيام من استلام الطلبية</span>، 
              بشرط أن تكون العبوة الأصلية مغلقة ولم تُستخدم، حيث يمكنكم تجربة السمبل المرفق قبل فتح المنتج.
            </p>
          </div>

          {/* البند الثاني */}
          <div className="border-b border-gray-100 pb-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">شروط الاستبدال</h3>
            <p className="text-gray-600 leading-relaxed">
              لا نقبل استبدال المنتجات التي تم فتح عبواتها الأصلية أو استخدامها، 
              وذلك لأسباب صحية وضمان الجودة. يمكنكم الاعتماد على السمبل المرفق للتجربة.
            </p>
          </div>

          {/* البند الثالث */}
          <div className="border-b border-gray-100 pb-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">المنتجات التالفة</h3>
            <p className="text-gray-600 leading-relaxed">
              في حال استلام منتج تالف، يرجى التواصل معنا خلال 3 أيام مع إرفاق صور توضح المشكلة بوضوح.
            </p>
          </div>

          {/* البند الرابع */}
          <div className="pb-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">تكاليف الشحن</h3>
            <p className="text-gray-600 leading-relaxed">
              نتحمل تكاليف الشحن فقط في حال كان الخطأ من جانبنا (منتج تالف أو غير مطابق للوصف). 
              في الحالات الأخرى تكون تكاليف الشحن على العميل.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ReturnPolicy;

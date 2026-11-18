import { CategorySlug, StudioContentData } from '../types/studio';

export const CATEGORY_ORDER: CategorySlug[] = [
  'sak-yant',
  'realistic',
  'geometric',
  'polynesian',
  'full-sleeve',
  'half-sleeve',
  'full-back',
  'coverup',
  'minimal',
  'small-jobs',
];

export const DEFAULT_CONTENT: StudioContentData = {
  studio: {
    name: 'Aof Tattoo Studio Phuket',
    heroImage: '/kuvat/hero.jpg',
    email: 'aof@aoftattoostudio.com',
    phone: '+66 92 701 3659',
    address: '98, 98 Kata Rd, Karon, Amphoe Mueang Phuket, Phuket 83100, Thailand',
    mapEmbedUrl:
      'https://maps.google.com/maps?q=98%20Kata%20Rd%2C%20Karon%2C%20Amphoe%20Mueang%20Phuket%2C%20Phuket%2083100%2C%20Thailand&t=&z=16&ie=UTF8&iwloc=&output=embed',
    instagram: 'https://www.instagram.com/aoftattoostudiophuket',
    facebook: 'https://www.facebook.com/aoftattoostudiophuket',
  },
  portfolio: [
    {
      image: '/images/sak-yant/sak-yant-01.jpg',
      category: 'sak-yant',
      title: 'Sacred Yantra Upper Back Sak Yant',
    },
    {
      image: '/images/realistic/realistic-01.jpg',
      category: 'realistic',
      title: 'Black & Grey Realism Lion Portrait',
    },
    {
      image: '/images/geometric/geometric-01.jpg',
      category: 'geometric',
      title: 'Sacred Geometry Dotwork Chest & Shoulder',
    },
    {
      image: '/images/polynesian/polynesian-01.jpg',
      category: 'polynesian',
      title: 'Traditional Polynesian Upper Arm Band',
    },
    {
      image: '/images/full-sleeve/full-sleeve-01.jpg',
      category: 'full-sleeve',
      title: 'Irezumi Koi & Peony Full Sleeve',
    },
    {
      image: '/images/half-sleeve/half-sleeve-01.jpg',
      category: 'half-sleeve',
      title: 'Neo-Japanese Dragon Half Sleeve',
    },
    {
      image: '/images/full-back/full-back-01.jpg',
      category: 'full-back',
      title: 'Hannya & Serpent Full Back Masterpiece',
    },
    {
      image: '/images/coverup/coverup-01.jpg',
      category: 'coverup',
      title: 'Raven & Botanical Blackwork Cover-Up',
    },
    {
      image: '/images/minimal/minimal-01.jpg',
      category: 'minimal',
      title: 'Single-Needle Lotus & Crescent Wrist',
    },
    {
      image: '/images/small-jobs/small-jobs-01.jpg',
      category: 'small-jobs',
      title: 'Fine-Line Compass & Wave Ankle Piece',
    },
  ],
  en: {
    nav: {
      home: 'Home',
      portfolio: 'Portfolio',
      contact: 'Contact',
      langSwitchLabel: 'TH',
      langSwitchAria: 'Switch language to Thai',
      menuOpenAria: 'Open navigation menu',
      menuCloseAria: 'Close navigation menu',
    },
    hero: {
      title: 'AOF TATTOO STUDIO PHUKET',
      subtitle:
        'Expertise in various styles including Japanese, Realism, Geometric, and authentic Sak Yant!',
      cta: 'Explore Styles',
      secondaryCta: 'Contact Us',
      imageAlt: 'Professional tattoo artist Aof working on a custom design at his studio in Phuket.',
      locationLine: 'Karon / Kata · Phuket, Thailand',
    },
    whyChooseUs: {
      heading: 'Why Choose Us?',
      cards: [
        {
          title: '✨ Custom Artworks',
          description:
            'Every tattoo is unique. We collaborate closely with you to turn your vision, references, and ideas into a lifelong masterpiece.',
        },
        {
          title: '🛡️ Strict Hygiene',
          description:
            'Your health is our priority. We use 100% sterile, single-use disposable needles and follow world-class hygiene regulations.',
        },
        {
          title: '🎋 Authentic Sak Yant',
          description:
            'Experience traditional Thai Sak Yant tattoos, handcrafted carefully using either traditional bamboo techniques or modern machines.',
        },
      ],
    },
    nailSalon: {
      title: '💅 Also Located Here: Professional Nail Salon',
      body: 'Visiting with a partner or looking for more pampering? Our studio also features a professional nail salon in the exact same location. You can get your custom tattoos and fresh, beautiful nails all in one visit!',
    },
    portfolio: {
      heading: 'Our Masterworks',
      intro:
        'Explore our expertise across a wide variety of styles. Click on contact to book your custom session.',
      allFilter: 'All',
      emptyState: 'No portfolio pieces are currently listed in this category.',
      viewFullLabel: 'View full size',
      viewBadgeLabel: 'View',
      closeLightboxLabel: 'Close gallery lightbox',
      prevImageLabel: 'Previous artwork',
      nextImageLabel: 'Next artwork',
      categories: [
        { slug: 'sak-yant', label: 'Sak Yant (Bamboo & Machine)' },
        { slug: 'realistic', label: 'Realistic Style Tattoos' },
        { slug: 'geometric', label: 'Geometric Style Tattoos' },
        { slug: 'polynesian', label: 'Polynesian Style Tattoos' },
        { slug: 'full-sleeve', label: 'Full Sleeve Tattoos' },
        { slug: 'half-sleeve', label: 'Half Sleeve Tattoos' },
        { slug: 'full-back', label: 'Full Back Tattoos' },
        { slug: 'coverup', label: 'Cover-up Tattoos' },
        { slug: 'minimal', label: 'Minimal Tattoos' },
        { slug: 'small-jobs', label: 'Small Job Tattoos' },
      ],
    },
    contact: {
      heading: 'Contact & Location',
      intro: 'Have questions, want to book a session, or find the studio?',
      formHeading: 'Book a Session',
      nameLabel: 'Name',
      namePlaceholder: 'John Doe',
      emailLabel: 'Email',
      emailPlaceholder: 'email@example.com',
      messageLabel: 'Message',
      messagePlaceholder: 'Tell me about your tattoo idea, size, and placement...',
      submitLabel: 'Send Message',
      sentTitle: 'Inquiry Prepared',
      sentMessage:
        'Your booking details have been prepared for your email app. You can also message us directly via email or WhatsApp below.',
      openMailClientLabel: 'Open Email App Again',
      resetFormLabel: 'Send Another Inquiry',
      validation: {
        nameRequired: 'Please enter your name.',
        emailInvalid: 'Please enter a valid email address.',
        messageRequired: 'Please describe your tattoo idea, size, and placement.',
      },
      infoHeading: 'Studio Info',
      emailLabelInfo: 'Email',
      phoneLabelInfo: 'Phone / WhatsApp',
      addressLabelInfo: 'Address',
      nailHeading: 'Nail Salon Enquiries',
      nailBody:
        'Want to book a nail appointment at the same location? Feel free to ask about nail salon availability and services when contacting us!',
      mapHeading: 'Where I Work',
      mapTitle: 'Map showing Aof Tattoo Studio Phuket at 98 Kata Rd, Karon, Phuket',
      faqHeading: 'Frequently Asked Questions',
      faqs: [
        {
          question: 'How much does a tattoo cost?',
          answer:
            'The price depends on the size, detail, and technique (bamboo or machine). Contact me with your design idea for a personal price estimate.',
        },
        {
          question: 'Do you help with the design/sketch?',
          answer:
            'Yes, absolutely! Every tattoo is custom-made. We will work together on the design and adjustments to make sure it is exactly what you want.',
        },
        {
          question: 'Does getting a tattoo hurt?',
          answer:
            'Pain is personal and depends on the body placement. Generally, traditional bamboo tattoos hurt less and heal significantly faster than machine tattoos.',
        },
        {
          question: 'How should I prepare for my session?',
          answer:
            "Get a good night's sleep, eat a proper meal before coming, and stay hydrated. Do not drink alcohol 24 hours before your appointment.",
        },
        {
          question: 'How do I take care of my new tattoo?',
          answer:
            'Keep the tattoo clean, avoid swimming, saunas, and direct sunlight for the first 2 weeks. Apply the aftercare cream provided or recommended by the studio.',
        },
        {
          question: 'Is it safe and hygienic?',
          answer:
            'Your safety is my highest priority. I use 100% sterile, single-use disposable needles and follow strict professional hygiene standards.',
        },
      ],
    },
    footer: {
      copyright: '© 2026 Aof Tattoo Studio Phuket. All rights reserved.',
      instagramLabel: 'Instagram',
      facebookLabel: 'Facebook',
    },
  },
  th: {
    nav: {
      home: 'หน้าแรก',
      portfolio: 'ผลงาน',
      contact: 'ติดต่อ',
      langSwitchLabel: 'EN',
      langSwitchAria: 'Switch language to English',
      menuOpenAria: 'เปิดเมนูนำทาง',
      menuCloseAria: 'ปิดเมนูนำทาง',
    },
    hero: {
      title: 'AOF TATTOO STUDIO PHUKET',
      subtitle:
        'เชี่ยวชาญการสักหลากหลายสไตล์ เช่น ลายสักญี่ปุ่น, งานเรียลลิสติก, แนวเรขาคณิต และลายสักยันต์ไทยดั้งเดิม!',
      cta: 'ดูสไตล์ลายสัก',
      secondaryCta: 'ติดต่อเรา',
      imageAlt: 'Professional tattoo artist Aof working on a custom design at his studio in Phuket.',
      locationLine: 'กะรน / กะตะ · ภูเก็ต ประเทศไทย',
    },
    whyChooseUs: {
      heading: 'ทำไมต้องเลือกเรา?',
      cards: [
        {
          title: '✨ งานออกแบบเฉพาะบุคคล',
          description:
            'รอยสักทุกชิ้นได้รับการออกแบบขึ้นมาโดยเฉพาะ เราทำงานร่วมกับคุณอย่างใกล้ชิดเพื่อเปลี่ยนไอเดียและแรงบันดาลใจของคุณให้กลายเป็นผลงานศิลปะชิ้นเอกชั่วชีวิต',
        },
        {
          title: '🛡️ ความสะอาดและสุขอนามัย',
          description:
            'ความปลอดภัยของคุณคือสิ่งสำคัญที่สุดของเรา เราใช้เข็มสักแบบใช้ครั้งเดียวทิ้งที่ผ่านการฆ่าเชื้อ 100% และปฏิบัติตามมาตรฐานสุขอนามัยระดับโลกอย่างเคร่งครัด',
        },
        {
          title: '🎋 สักยันต์ไทยดั้งเดิม',
          description:
            'สัมผัสประสบการณ์การสักยันต์ไทยดั้งเดิมที่รังสรรค์อย่างพิถีพิถัน โดยมีให้เลือกทั้งเทคนิคการสักด้วยไม้ไผ่แบบโบราณหรือการใช้เครื่องสักทันสมัย',
        },
      ],
    },
    nailSalon: {
      title: '💅 บริการร้านทำเล็บมืออาชีพในสถานที่เดียวกัน',
      body: 'กำลังมาใช้บริการพร้อมกับแฟนหรือต้องการการดูแลเป็นพิเศษอยู่ใช่ไหม? สตูดิโอของเรายังมีบริการร้านทำเล็บมืออาชีพในตั้งอยู่ในพื้นที่เดียวกัน คุณสามารถรับบริการสักลายและทำเล็บสวยๆ ได้ครบจบในที่เดียว!',
    },
    portfolio: {
      heading: 'ผลงานของเรา',
      intro:
        'สำรวจความเชี่ยวชาญของเราในหลากหลายสไตล์ สามารถคลิกที่หน้าติดต่อเพื่อจองคิวสักของคุณ',
      allFilter: 'ทั้งหมด',
      emptyState: 'ยังไม่มีผลงานในหมวดหมู่นี้ในขณะนี้',
      viewFullLabel: 'ดูภาพขนาดเต็ม',
      viewBadgeLabel: 'ดูภาพขยาย',
      closeLightboxLabel: 'ปิดหน้าต่างแสดงภาพ',
      prevImageLabel: 'ภาพก่อนหน้า',
      nextImageLabel: 'ภาพถัดไป',
      categories: [
        { slug: 'sak-yant', label: 'สักยันต์ (ไม้ไผ่ & เครื่องสัก)' },
        { slug: 'realistic', label: 'ลายสักสไตล์เรียลลิสติก' },
        { slug: 'geometric', label: 'ลายสักแนวเรขาคณิต' },
        { slug: 'polynesian', label: 'ลายสักสไตล์โพลินีเซียน' },
        { slug: 'full-sleeve', label: 'งานสักเต็มแขน (Full Sleeve)' },
        { slug: 'half-sleeve', label: 'งานสักครึ่งแขน (Half Sleeve)' },
        { slug: 'full-back', label: 'งานสักเต็มหลัง (Full Back)' },
        { slug: 'coverup', label: 'งานสักทับรอยเดิม (Cover-up)' },
        { slug: 'minimal', label: 'ลายสักสไตล์มินิมอล' },
        { slug: 'small-jobs', label: 'งานสักขนาดเล็ก (Small Jobs)' },
      ],
    },
    contact: {
      heading: 'ติดต่อ & สถานที่ตั้ง',
      intro: 'มีคำถาม ต้องการจองคิว หรือค้นหาที่ตั้งของสตูดิโอใช่ไหม?',
      formHeading: 'จองคิวสัก',
      nameLabel: 'ชื่อ',
      namePlaceholder: 'John Doe',
      emailLabel: 'อีเมล',
      emailPlaceholder: 'email@example.com',
      messageLabel: 'ข้อความ',
      messagePlaceholder: 'บอกเราเกี่ยวกับไอเดียลายสัก ขนาด และตำแหน่งที่ต้องการ...',
      submitLabel: 'ส่งข้อความ',
      sentTitle: 'เตรียมข้อมูลส่งอีเมลเรียบร้อยแล้ว',
      sentMessage:
        'ระบบได้เตรียมข้อความการจองของคุณสำหรับแอปอีเมลเรียบร้อยแล้ว หรือคุณสามารถติดต่อเราโดยตรงผ่านอีเมลและ WhatsApp ด้านล่างได้ทันที',
      openMailClientLabel: 'เปิดแอปอีเมลอีกครั้ง',
      resetFormLabel: 'ส่งข้อความใหม่อีกครั้ง',
      validation: {
        nameRequired: 'กรุณากรอกชื่อของคุณ',
        emailInvalid: 'กรุณากรอกอีเมลให้ถูกต้อง',
        messageRequired: 'กรุณาระบุไอเดียลายสัก ขนาด และตำแหน่งที่ต้องการ',
      },
      infoHeading: 'ข้อมูลสตูดิโอ',
      emailLabelInfo: 'อีเมล',
      phoneLabelInfo: 'โทรศัพท์ / WhatsApp',
      addressLabelInfo: 'ที่อยู่',
      nailHeading: 'สอบถามข้อมูลร้านทำเล็บ',
      nailBody:
        'ต้องการจองคิวทำเล็บในสถานที่เดียวกันใช่ไหม? สามารถสอบถามคิวว่างและบริการของร้านทำเล็บได้เมื่อติดต่อเรา!',
      mapHeading: 'สถานที่ทำงานของฉัน',
      mapTitle: 'แผนที่แสดงที่ตั้ง Aof Tattoo Studio Phuket ถนนกะตะ กะรน ภูเก็ต',
      faqHeading: 'คำถามที่พบบ่อย (FAQ)',
      faqs: [
        {
          question: 'รอยสักราคาเท่าไหร่?',
          answer:
            'ราคาขึ้นอยู่กับขนาด รายละเอียด และเทคนิคที่ใช้ (ไม้ไผ่หรือเครื่องสัก) สามารถส่งไอเดียลายสักมาให้เราเพื่อประเมินราคาเบื้องต้นได้ครับ',
        },
        {
          question: 'มีบริการช่วยออกแบบหรือวาดแบบให้ไหม?',
          answer:
            'มีครับแน่นอน! รอยสักทุกชิ้นเป็นงานออกแบบพิเศษ เราจะทำงานร่วมกันในการออกแบบและปรับแก้เพื่อให้มั่นใจว่าคุณจะได้ลายที่ต้องการอย่างแท้จริง',
        },
        {
          question: 'สักเจ็บไหม?',
          answer:
            'ความเจ็บเป็นเรื่องส่วนบุคคลและขึ้นอยู่กับตำแหน่งบนร่างกาย โดยทั่วไปแล้ว การสักยันต์ด้วยไม้ไผ่แบบดั้งเดิมจะเจ็บน้อยกว่าและแผลหายเร็วกว่าการสักด้วยเครื่องอย่างเห็นได้ชัด',
        },
        {
          question: 'ควรเตรียมตัวอย่างไรก่อนมาสัก?',
          answer:
            'นอนหลับพักผ่อนให้เพียงพอ ทานอาหารมื้อหลักมาให้เรียบร้อยก่อนเริ่มสัก และดื่มน้ำเยอะๆ งดดื่มแอลกอฮอล์ 24 ชั่วโมงก่อนถึงเวลานัดหมาย',
        },
        {
          question: 'วิธีดูแลรักษารอยสักใหม่ทำอย่างไร?',
          answer:
            'ดูแลรอยสักให้สะอาด หลีกเลี่ยงการว่ายน้ำ เข้าซาวน่า และโดนแสงแดดโดยตรงในช่วง 2 สัปดาห์แรก ทาครีมบำรุงตามที่สตูดิโอแนะนำ',
        },
        {
          question: 'ปลอดภัยและสะอาดถูกสุขอนามัยไหม?',
          answer:
            'ความปลอดภัยของคุณคือสิ่งสำคัญที่สุดของเรา เราใช้เข็มสักแบบใช้ครั้งเดียวทิ้งที่ผ่านการฆ่าเชื้อ 100% และปฏิบัติตามมาตรฐานสุขอนามัยระดับมืออาชีพอย่างเคร่งครัด',
        },
      ],
    },
    footer: {
      copyright: '© 2026 Aof Tattoo Studio Phuket. All rights reserved.',
      instagramLabel: 'Instagram',
      facebookLabel: 'Facebook',
    },
  },
};

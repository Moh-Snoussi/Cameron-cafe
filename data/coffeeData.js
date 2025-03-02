// Base coffee data with multilingual support
const coffeeDataBase = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    price: 4.50,
    category: "hot",
    translations: {
      en: {
        name: "Ethiopian Yirgacheffe",
        origin: "Ethiopia",
        description: "Bright, fruity notes with a floral aroma. Medium body with hints of citrus and berries."
      },
      th: {
        name: "เอธิโอเปียน เยอร์กาเชฟเฟ่",
        origin: "เอธิโอเปีย",
        description: "รสชาติสดชื่น มีกลิ่นหอมของดอกไม้ เนื้อกาแฟปานกลางพร้อมกลิ่นรสของผลไม้ตระกูลส้มและเบอร์รี่"
      },
      ar: {
        name: "إثيوبيا يرغاشيفي",
        origin: "إثيوبيا",
        description: "نكهات فاكهية مشرقة مع رائحة زهرية. جسم متوسط مع لمحات من الحمضيات والتوت."
      }
    }
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    price: 3.75,
    category: "hot",
    translations: {
      en: {
        name: "Colombian Supremo",
        origin: "Colombia",
        description: "Well-balanced with a smooth, rich flavor. Notes of caramel and nuts with medium acidity."
      },
      th: {
        name: "โคลอมเบียน ซูพรีโม",
        origin: "โคลอมเบีย",
        description: "รสชาติสมดุล นุ่มนวล และเข้มข้น มีกลิ่นรสของคาราเมลและถั่ว พร้อมความเปรี้ยวปานกลาง"
      },
      ar: {
        name: "كولومبيا سوبريمو",
        origin: "كولومبيا",
        description: "متوازن جيدًا مع نكهة سلسة وغنية. نكهات الكراميل والمكسرات مع حموضة متوسطة."
      }
    }
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1572286258217-215cf8e8e48e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    price: 4.25,
    category: "hot",
    translations: {
      en: {
        name: "Sumatra Mandheling",
        origin: "Indonesia",
        description: "Full-bodied with low acidity. Earthy, herbal notes with a spicy finish."
      },
      th: {
        name: "สุมาตรา มันเดลิง",
        origin: "อินโดนีเซีย",
        description: "เนื้อกาแฟเข้มข้น ความเปรี้ยวต่ำ มีกลิ่นรสของดิน สมุนไพร และจบด้วยความเผ็ดร้อน"
      },
      ar: {
        name: "سومطرة ماندهيلينج",
        origin: "إندونيسيا",
        description: "كامل الجسم مع حموضة منخفضة. نكهات ترابية وعشبية مع لمسة نهائية متبلة."
      }
    }
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    price: 5.50,
    category: "cold",
    translations: {
      en: {
        name: "Iced Caramel Macchiato",
        origin: "House Blend",
        description: "Espresso with vanilla syrup, milk, and caramel drizzle over ice."
      },
      th: {
        name: "ไอซ์ คาราเมล มัคคิอาโต้",
        origin: "เฮาส์เบลนด์",
        description: "เอสเปรสโซ่ผสมกับไซรัปวานิลลา นม และราดด้วยคาราเมลบนน้ำแข็ง"
      },
      ar: {
        name: "ماكياتو كراميل مثلج",
        origin: "مزيج المنزل",
        description: "إسبريسو مع شراب الفانيليا والحليب ورذاذ الكراميل على الثلج."
      }
    }
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    price: 4.75,
    category: "cold",
    translations: {
      en: {
        name: "Cold Brew",
        origin: "House Blend",
        description: "Smooth, low-acid coffee brewed with cold water for 12+ hours."
      },
      th: {
        name: "โคลด์บรู",
        origin: "เฮาส์เบลนด์",
        description: "กาแฟนุ่มนวล ความเปรี้ยวต่ำ ชงด้วยน้ำเย็นเป็นเวลามากกว่า 12 ชั่วโมง"
      },
      ar: {
        name: "القهوة المخمرة الباردة",
        origin: "مزيج المنزل",
        description: "قهوة سلسة منخفضة الحموضة مخمرة بالماء البارد لأكثر من 12 ساعة."
      }
    }
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1550624499-a6b679aad84f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    price: 5.25,
    category: "cold",
    translations: {
      en: {
        name: "Vietnamese Iced Coffee",
        origin: "Vietnam",
        description: "Strong coffee with sweetened condensed milk over ice."
      },
      th: {
        name: "กาแฟเย็นเวียดนาม",
        origin: "เวียดนาม",
        description: "กาแฟเข้มข้นผสมนมข้นหวานเสิร์ฟกับน้ำแข็ง"
      },
      ar: {
        name: "القهوة الفيتنامية المثلجة",
        origin: "فيتنام",
        description: "قهوة قوية مع حليب مكثف محلى على الثلج."
      }
    }
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    price: 7.50,
    category: "specialty",
    translations: {
      en: {
        name: "Jamaican Blue Mountain",
        origin: "Jamaica",
        description: "Mild, clean taste with no bitterness. Sweet herbal and nutty flavors."
      },
      th: {
        name: "จาเมกัน บลู เมาน์เทน",
        origin: "จาเมกา",
        description: "รสชาติอ่อนนุ่ม สะอาด ไม่มีความขม มีกลิ่นรสหวานของสมุนไพรและถั่ว"
      },
      ar: {
        name: "جامايكا بلو ماونتن",
        origin: "جامايكا",
        description: "طعم خفيف ونظيف بدون مرارة. نكهات عشبية حلوة وجوزية."
      }
    }
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    price: 12.00,
    category: "specialty",
    translations: {
      en: {
        name: "Kopi Luwak",
        origin: "Indonesia",
        description: "Exotic coffee known for its unique production process. Smooth with chocolate undertones."
      },
      th: {
        name: "กาแฟขี้ชะมด",
        origin: "อินโดนีเซีย",
        description: "กาแฟแปลกที่มีชื่อเสียงจากกระบวนการผลิตที่เป็นเอกลักษณ์ นุ่มนวลพร้อมกลิ่นรสช็อกโกแลต"
      },
      ar: {
        name: "كوبي لواك",
        origin: "إندونيسيا",
        description: "قهوة غريبة معروفة بعملية إنتاجها الفريدة. سلسة مع نغمات الشوكولاتة."
      }
    }
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1565600583458-6ba3dc5a7c2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    price: 8.25,
    category: "specialty",
    translations: {
      en: {
        name: "Hawaiian Kona",
        origin: "Hawaii, USA",
        description: "Delicate, medium-bodied with a complex aroma. Notes of honey, fruit, and nuts."
      },
      th: {
        name: "ฮาวายเอี้ยน โคนา",
        origin: "ฮาวาย, สหรัฐอเมริกา",
        description: "นุ่มนวล เนื้อกาแฟปานกลาง พร้อมกลิ่นที่ซับซ้อน มีกลิ่นรสของน้ำผึ้ง ผลไม้ และถั่ว"
      },
      ar: {
        name: "هاواي كونا",
        origin: "هاواي، الولايات المتحدة",
        description: "رقيقة، متوسطة الجسم مع رائحة معقدة. نكهات العسل والفواكه والمكسرات."
      }
    }
  }
];

// Filter buttons translations
const filterTranslations = {
  en: {
    all: "All",
    hot: "Hot Coffee",
    cold: "Cold Coffee",
    specialty: "Specialty"
  },
  th: {
    all: "ทั้งหมด",
    hot: "กาแฟร้อน",
    cold: "กาแฟเย็น",
    specialty: "กาแฟพิเศษ"
  },
  ar: {
    all: "الكل",
    hot: "قهوة ساخنة",
    cold: "قهوة باردة",
    specialty: "قهوة متخصصة"
  }
};

// Function to get coffee data in the specified language
function getCoffeeData(language = 'en') {
  return coffeeDataBase.map(coffee => {
    const translation = coffee.translations[language] || coffee.translations.en;
    return {
      id: coffee.id,
      name: translation.name,
      origin: translation.origin,
      description: translation.description,
      price: coffee.price,
      category: coffee.category,
      image: coffee.image
    };
  });
}

// Function to get filter button translations
function getFilterTranslations(language = 'en') {
  return filterTranslations[language] || filterTranslations.en;
}

// Export both the data and the language-specific getter function
export const coffeeData = getCoffeeData('en');
export { getCoffeeData, getFilterTranslations };
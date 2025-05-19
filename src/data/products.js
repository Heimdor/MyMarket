import swordShield from "src/assets/items/sword_shield.png";
import armor from "src/assets/items/armor.png";
import potion from "src/assets/items/potion.png";
import magicBook from "src/assets/items/magic_book.png";

const categoryImages = {
  weapon: swordShield,
  armor: armor,
  potion: potion,
  artifact: magicBook,
  // добавьте другие категории при необходимости
};

const imageMap = {
  "weapon.svg": swordShield,
  "armor.svg": armor,
  "potion.svg": potion,
  "book.svg": magicBook,
  // ... другие варианты
};

export default [
  {
    id: 1,
    name: "Меч Драконоборца",
    price: 15000,
    category: "Оружие",
    image: categoryImages["weapon"],
    description:
      "Легендарный меч, выкованный в драконьем пламени. Наносит дополнительный урон драконам и другим чешуйчатым существам.",
  },
  {
    id: 2,
    name: "Эликсир Исцеления",
    price: 750,
    category: "Зелья",
    image: categoryImages["potion"],
    description:
      "Восстанавливает 50 очков здоровья при употреблении. Изготовлен лучшими алхимиками королевства.",
  },
  {
    id: 3,
    name: "Амулет Защиты",
    price: 3200,
    category: "Артефакты",
    image: categoryImages["artifact"],
    description:
      "Древний амулет, отражающий слабые заклинания и повышающий сопротивляемость магии.",
  },
  {
    id: 4,
    name: "Гримуар Стихий",
    price: 9000,
    category: "Книги",
    image: categoryImages["artifact"],
    description:
      "Старинная книга заклинаний, содержащая знания о магии четырех стихий: огня, воды, земли и воздуха.",
  },
  {
    id: 5,
    name: "Эльфийский Лук",
    price: 8990,
    category: "Оружие",
    image: categoryImages["weapon"],
    description:
      "Изящный лук из древесины серебряного дерева, созданный мастерами-эльфами. Увеличивает точность стрельбы.",
  },
  {
    id: 6,
    name: "Плащ Невидимости",
    price: 12500,
    category: "Одежда",
    image: categoryImages["armor"],
    description:
      "Волшебный плащ, делающий своего носителя невидимым на короткое время.",
  },
  {
    id: 7,
    name: "Доспех Рыцаря Дракона",
    price: 32000,
    category: "Броня",
    image: categoryImages["armor"],
    description:
      "Полный комплект тяжелых доспехов из драконьей чешуи. Обеспечивает защиту от огня и кислоты.",
  },
  {
    id: 8,
    name: "Посох Архимага",
    price: 25800,
    category: "Оружие",
    image: categoryImages["weapon"],
    description:
      "Могущественный посох, усиливающий магические способности своего владельца. Увеличивает урон от заклинаний на 30%.",
  },
  {
    id: 9,
    name: "Зелье Невидимости",
    price: 1200,
    category: "Зелья",
    image: categoryImages["potion"],
    description:
      "Делает выпившего невидимым на 5 минут. Действие прекращается при атаке или использовании заклинаний.",
  },
  {
    id: 10,
    name: "Кинжал Убийцы",
    price: 4500,
    category: "Оружие",
    image: categoryImages["weapon"],
    description:
      "Отравленный кинжал с зазубринами. Гарантирует критический удар при атаке из скрытности.",
  },
  {
    id: 11,
    name: "Кольцо Силы",
    price: 7800,
    category: "Артефакты",
    image: categoryImages["artifact"],
    description:
      "Магическое кольцо, увеличивающее физическую силу носителя. Полезно для воинов и паладинов.",
  },
  {
    id: 12,
    name: "Свиток Воскрешения",
    price: 18000,
    category: "Свитки",
    image: categoryImages["artifact"],
    description:
      "Редкий магический свиток, способный воскресить павшего союзника. Одноразового использования.",
  },
];

function getProductImage(product) {
  // Удаляем ведущий слэш, если он есть
  const imageKey = product.image ? product.image.replace(/^\//, "") : "";
  if (imageKey && imageMap[imageKey]) {
    return imageMap[imageKey];
  }
  // Если image — это абсолютный путь, пробуем вернуть его (работает только если файл реально лежит в public)
  if (product.image && product.image.startsWith("/")) {
    return product.image;
  }
  return swordShield;
}

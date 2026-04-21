import { StaticImageData } from "next/image";
import pic1 from "./photos/Angkor-Wat.jpg";
import pic2 from "./photos/Phnom-Kraom.jpg";
import pic3 from "./photos/Preah-Vihear.jpg";
import pic4 from "./photos/Preah-Khan.jpeg";
import pic5 from "./photos/Phnom-Bakheng.jpeg";
import pic6 from "./photos/Banteay-Srei.jpeg";
import pic7 from "./photos/Bayon-Temple.jpeg";

export type WonderImage = {
  id: string;
  name: string;
  src: StaticImageData;
  description: string;
  location: string;
};

const wondersImages: WonderImage[] = [
    {
        id: "1",
        name: "Angkor Wat Temple",
        src: pic1,
        description: "Angkor Wat is a temple complex in Cambodia and the largest religious monument in the world.",
        location: "Siem Reap, Cambodia",
    },
    {
        id: "2",
        name: "Phnom Kraom Temple",
        src: pic2,
        description: "Phnom Kraom is a historical site in Cambodia, known for its ancient temples and stunning views.",
        location: "Siem Reap, Cambodia",
    },
    {
        id: "3",
        name: "Preah Vihear Temple",
        src: pic3,
        description: "Preah Vihear is an ancient Hindu temple located on a 525-meter cliff in the Dângrêk Mountains.",
        location: "Preah Vihear Province, Cambodia",
    },
    {
        id: "4",
        name: "Preah Khan Temple",
        src: pic4,
        description: "Preah Khan is a temple at Angkor, built in the 12th century by King Jayavarman VII.",
        location: "Siem Reap, Cambodia",
    },
    {
        id: "5",
        name: "Phnom Bakheng Temple",
        src: pic5,
        description: "Phnom Bakheng is a temple located on a hilltop, offering panoramic views of the surrounding area.",
        location: "Siem Reap, Cambodia",
    },
    {
        id: "6",
        name: "Banteay Srei Temple",
        src: pic6,
        description: "Banteay Srei is a 10th-century Cambodian temple dedicated to the Hindu god Shiva.",
        location: "Siem Reap, Cambodia",
    },
    {
        id: "7",
        name: "Bayon Temple",
        src: pic7,
        description: "Bayon is a well-known Khmer temple at Angkor, famous for its 216 smiling stone faces.",
        location: "Siem Reap, Cambodia",
    }
]


export default wondersImages;
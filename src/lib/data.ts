
import type { Site, Artifact } from '@/types';

const allArtifacts: Artifact[] = [
  {
    id: 'art-1',
    siteId: 'site-1',
    title: {
      en: 'Mughal Miniature Painting',
      hi: 'मुगल लघु चित्रकला',
      kn: 'ಮೊಘಲ್ ಚಿಕಣಿ ಚಿತ್ರಕಲೆ',
    },
    description: {
      en: 'A detailed miniature painting characteristic of the Mughal era, often depicting courtly scenes, historical events, or portraits. These paintings are known for their intricate details and vibrant colors.',
      hi: 'मुगल काल की एक विस्तृत लघु चित्रकला, जिसमें अक्सर दरबारी दृश्य, ऐतिहासिक घटनाएं या चित्र दर्शाए जाते हैं। ये पेंटिंग अपने जटिल विवरण और जीवंत रंगों के लिए जानी जाती हैं।',
      kn: 'ಮೊಘಲ್ ಯುಗದ ವಿಶಿಷ್ಟವಾದ ವಿವರವಾದ ಚಿಕಣಿ ಚಿತ್ರಕಲೆ, ಸಾಮಾನ್ಯವಾಗಿ ಆಸ್ಥಾನದ ದೃಶ್ಯಗಳು, ಐತಿಹಾಸಿಕ ಘಟನೆಗಳು, ಅಥವಾ ಭಾವಚಿತ್ರಗಳನ್ನು ಚಿತ್ರಿಸುತ್ತದೆ. ಈ ವರ್ಣಚಿತ್ರಗಳು ತಮ್ಮ ಸಂಕೀರ್ಣ ವಿವರಗಳು ಮತ್ತು ರೋಮಾಂಚಕ ಬಣ್ಣಗಳಿಗೆ ಹೆಸರುವಾಸಿಯಾಗಿದೆ.',
    },
    imageUrlId: 'mughal-painting-artifact',
    modelFileUrl: '/models/mughal_painting.glb',
    fallbackImageUrlId: 'mughal-painting-artifact',
    audioNarrationUrl: '/audio/mughal_painting_en.mp3',
  },
  {
    id: 'art-2',
    siteId: 'site-2',
    title: {
      en: 'Vijayanagara Coin',
      hi: 'विजयनगर सिक्का',
      kn: 'ವಿಜಯನಗರ ನಾಣ್ಯ',
    },
    description: {
      en: 'A gold coin from the Vijayanagara Empire, often featuring deities, royal emblems, or animals. These coins are a testament to the wealth and artistry of the period.',
      hi: 'विजayanagara साम्राज्य का एक सोने का सिक्का, जिसमें अक्सर देवता, शाही प्रतीक या जानवर होते हैं। ये सिक्के उस अवधि की संपत्ति और कलात्मकता का प्रमाण हैं।',
      kn: 'ವಿಜಯನಗರ ಸಾಮ್ರಾಜ್ಯದ ಚಿನ್ನದ ನಾಣ್ಯವು ಸಾಮಾನ್ಯವಾಗಿ ದೇವತೆಗಳು, ರಾಜರ ಲಾಂಛನಗಳು ಅಥವಾ ಪ್ರಾಣಿಗಳ ಚಿತ್ರಗಳನ್ನು ಹೊಂದಿರುತ್ತದೆ. ಈ ನಾಣ್ಯಗಳು ಆ ಅವಧಿಯ ಸಂಪತ್ತು ಮತ್ತು ಕಲಾತ್ಮಕತೆಯ ಸಾಕ್ಷ್ಯವಾಗಿವೆ.',
    },
    imageUrlId: 'vijayanagara-coin-artifact',
    modelFileUrl: '/models/vijayanagara_coin.glb',
    fallbackImageUrlId: 'vijayanagara-coin-artifact',
    audioNarrationUrl: '/audio/vijayanagara_coin_en.mp3',
  },
  {
    id: 'art-3',
    siteId: 'site-3',
    title: {
      en: 'Iron Pillar Inscription',
      hi: 'लौह स्तंभ शिलालेख',
      kn: 'ಕಬ್ಬಿಣದ ಸ್ತಂಭದ ಶಾಸನ',
    },
    description: {
      en: 'A close-up view of the Sanskrit inscriptions on the Iron Pillar of Delhi, located in the Qutub complex. The inscription is a marvel of ancient metallurgy, having resisted rust for over 1600 years.',
      hi: 'दिल्ली के लौह स्तंभ पर संस्कृत शिलालेखों का एक करीबी दृश्य, जो कुतुब परिसर में स्थित है। यह शिलालेख प्राचीन धातु विज्ञान का एक चमत्कार है, जिसने 1600 से अधिक वर्षों तक जंग का विरोध किया है।',
      kn: 'ದೆಹಲಿಯ ಕಬ್ಬಿಣದ ಸ್ತಂಭದ ಮೇಲಿರುವ ಸಂಸ್ಕೃತ ಶಾಸನಗಳ ಸಮೀಪದ ನೋಟ, ಇದು ಕುತುಬ್ ಸಂಕೀರ್ಣದಲ್ಲಿದೆ. ಈ ಸ್ತಂಭವು ಪ್ರಾಚೀನ ಲೋಹಶಾಸ್ತ್ರದ ಅದ್ಭುತವಾಗಿದ್ದು, 1600 ವರ್ಷಗಳಿಂದ ತುಕ್ಕು ಹಿಡಿಯದೆ ಉಳಿದಿದೆ.',
    },
    imageUrlId: 'iron-pillar-artifact',
    modelFileUrl: '/models/iron_pillar_inscription.glb',
    fallbackImageUrlId: 'iron-pillar-artifact',
    audioNarrationUrl: '/audio/iron_pillar_en.mp3',
  },
  {
    id: 'art-4',
    siteId: 'site-2',
    title: {
      en: 'Lakshmi Narasimha Statue',
      hi: 'लक्ष्मी नरसिम्हा प्रतिमा',
      kn: 'ಲಕ್ಷ್ಮಿ ನರಸಿಂಹ ಪ್ರತಿಮೆ',
    },
    description: {
      en: 'A colossal monolithic statue of Lakshmi Narasimha, the fourth incarnation of Lord Vishnu. This masterpiece of Vijayanagara art is located in Hampi.',
      hi: 'भगवान विष्णु के चौथे अवतार लक्ष्मी नरसिम्हा की एक विशाल अखंड मूर्ति। विजयनगर कला की यह उत्कृष्ट कृति हम्पी में स्थित है।',
      kn: 'ವಿಷ್ಣುವಿನ ನಾಲ್ಕನೇ ಅವತಾರವಾದ ಲಕ್ಷ್ಮಿ ನರಸಿಂಹನ ಬೃಹತ್ ಏಕಶಿಲಾ ಪ್ರತಿಮೆ. ವಿಜಯನಗರ ಕಲೆಯ ಈ ಮೇರುಕೃತಿ ಹಂಪಿಯಲ್ಲಿದೆ.',
    },
    imageUrlId: 'lakshmi-narasimha-artifact',
    modelFileUrl: '/models/lakshmi_narasimha.glb',
    fallbackImageUrlId: 'lakshmi-narasimha-artifact',
    audioNarrationUrl: '/audio/lakshmi_narasimha_en.mp3',
  },
  {
    id: 'art-5',
    siteId: 'site-2',
    title: {
      en: 'Harihara Statue',
      hi: 'हरिहर प्रतिमा',
      kn: 'ಹರಿಹರ ಪ್ರತಿಮೆ',
    },
    description: {
      en: 'A statue representing Harihara, a fused deity form of Vishnu (Hari) and Shiva (Hara) from Hindu mythology. This represents the synthesis of two major Hindu traditions.',
      hi: 'हिंदू पौराणिक कथाओं से विष्णु (हरि) और शिव (हर) के एक जुड़े हुए देवता रूप हरिहर का प्रतिनिधित्व करने वाली एक मूर्ति। यह दो प्रमुख हिंदू परंपराओं के संश्लेषण का प्रतिनिधित्व करता है।',
      kn: 'ಹಿಂದೂ ಪುರಾಣಗಳಲ್ಲಿ ವಿಷ್ಣು (ಹರಿ) ಮತ್ತು ಶಿವ (ಹರ) ಇವರ ಸಂಯೋಜಿತ ದೇವರೂಪವಾದ ಹರಿಹರನನ್ನು ಪ್ರತಿನಿಧಿಸುವ ಪ್ರತಿಮೆ. ಇದು ಎರಡು ಪ್ರಮುಖ ಹಿಂದೂ ಸಂಪ್ರದಾಯಗಳ ಸಂಶ್ಲೇಷಣೆಯನ್ನು ಪ್ರತಿನಿಧಿಸುತ್ತದೆ.',
    },
    imageUrlId: 'harihara-artifact',
    modelFileUrl: '/models/harihara_statue.glb',
    fallbackImageUrlId: 'harihara-artifact',
    audioNarrationUrl: '/audio/harihara_en.mp3',
  },
  {
    id: 'art-6',
    siteId: 'site-8',
    title: {
      en: 'Chhau Mask',
      hi: 'छऊ मुखौटा',
      kn: 'ಛೌ ಮುಖೋಟೆ',
    },
    description: {
      en: 'A traditional cultural heritage of Purulia, West Bengal, the Chhau mask is used in the Chhau dance, a semi-classical Indian dance with martial, tribal, and folk origins.',
      hi: 'पश्चिम बंगाल के पुरुलिया की एक पारंपरिक सांस्कृतिक विरासत, छऊ मुखौटा का उपयोग छऊ नृत्य में किया जाता है, जो मार्शल, आदिवासी और लोक मूल के साथ एक अर्ध-शास्त्रीय भारतीय नृत्य है।',
      kn: 'ಪಶ್ಚಿಮ ಬಂಗಾಳದ ಪುರುಲಿಯ ಸಾಂಪ್ರದಾಯಿಕ ಸಾಂಸ್ಕೃತಿಕ ಪರंपರೆಯಾದ ಛೌ ಮುಖೋಟೆಯನ್ನು ಛೌ ನೃತ್ಯದಲ್ಲಿ ಬಳಸಲಾಗುತ್ತದೆ. ಯುದ್ಧ, ಗಿರಿಜನ ಮತ್ತು ಜಾನಪದ ಮೂಲಗಳನ್ನು ಹೊಂದಿರುವ ಇದು ಅರ್ಧ-ಶಾಸ್ತ್ರೀಯ ಭಾರತೀಯ ನೃತ್ಯವಾಗಿದೆ.',
    },
    imageUrlId: 'chhau-mask-artifact',
    modelFileUrl: '/models/chhau_mask.glb',
    fallbackImageUrlId: 'chhau-mask-artifact',
    audioNarrationUrl: '/audio/chhau_mask_en.mp3',
  },
  {
    id: 'art-7',
    siteId: 'site-4',
    title: {
      en: 'Konark Wheel',
      hi: 'कोणार्क चक्र',
      kn: 'ಕೋನಾರ್ಕ್ ಚಕ್ರ',
    },
    description: {
      en: "One of the 24 intricately carved stone wheels of the Konark Sun Temple's chariot structure. These wheels are not just decorative but also function as sundials.",
      hi: "कोणार्क सूर्य मंदिर की रथ संरचना के 24 जटिल रूप से नक्काशीदार पत्थर के पहियों में से एक। ये पहिये न केवल सजावटी हैं बल्कि सूर्य घड़ी के रूप में भी कार्य करते हैं।",
      kn: "ಕೊಣಾರ್ಕ್ ಸೂರ್ಯ ದೇವಾಲಯದ ರಥ ರಚನೆಯಲ್ಲಿರುವ ಸಂಕೀರ್ಣವಾಗಿ ಕೆತ್ತಿದ 24 ಕಲ್ಲಿನ ಚಕ್ರಗಳಲ್ಲಿ ಒಂದಾಗಿದೆ. ಈ ಚಕ್ರಗಳು ಕೇವಲ ಅಲಂಕಾರಿಕವಾಗಿರದೆ ಸೂರ್ಯಗಡಿಯಾರಗಳಾಗಿಯೂ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತವೆ.",
    },
    imageUrlId: 'konark-wheel-artifact',
    modelFileUrl: '/models/konark_wheel.glb',
    fallbackImageUrlId: 'konark-wheel-artifact',
    audioNarrationUrl: '/audio/konark_wheel_en.mp3',
  },
];

const allSites: Site[] = [
  {
    id: 'site-1',
    title: {
      en: 'Taj Mahal',
      hi: 'ताज महल',
      kn: 'ತಾಜ್ ಮಹಲ್',
    },
    shortDescription: {
      en: 'An ivory-white marble mausoleum on the south bank of the Yamuna river.',
      hi: 'यमुना नदी के दक्षिणी तट पर एक हाथीदांत-सफेद संगमरमर का मकबरा।',
      kn: 'ಯಮುನಾ ನದಿಯ ದಕ್ಷಿಣ ದಂಡೆಯಲ್ಲಿರುವ ಬಿಳಿ ಅಮೃತಶಿಲೆಯ ಸಮಾధి.',
    },
    longDescription: {
      en: 'The Taj Mahal is an immense mausoleum of white marble, built in Agra between 1631 and 1648 by order of the Mughal emperor Shah Jahan in memory of his favourite wife. The Taj Mahal is the jewel of Muslim art in India and one of the universally admired masterpieces of the world\'s heritage.',
      hi: 'ताजमहल सफेद संगमरमर का एक विशाल मकबरा है, जिसे आगरा में 1631 और 1648 के बीच मुगल सम्राट शाहजहाँ के आदेश पर उनकी पसंदीदा पत्नी की याद में बनाया गया था। ताजमहल भारत में मुस्लिम कला का गहना है और दुनिया की विरासत के सार्वभौमिक रूप से प्रशंसित उत्कृष्ट कृतियों में से एक है।',
      kn: 'ತಾಜ್ ಮಹಲ್ ಬಿಳಿ ಅಮೃತಶಿಲೆಯಿಂದ ನಿರ್ಮಿಸಲಾದ ಒಂದು ಭವ್ಯ ಸಮಾಧಿಯಾಗಿದ್ದು, 1631ರಿಂದ 1648ರ ನಡುವೆ ಮೊಘಲ್ ಸಾಮ್ರಾಟ್ ಶಾಹಜಹಾನ್ ಅವರ ಪ್ರಿಯ ಪತ್ನಿಯ ಸ್ಮರಣಾರ್ಥವಾಗಿ ಆಗ್ರಾದಲ್ಲಿ ನಿರ್ಮಿಸಲಾಯಿತು. ತಾಜ್ ಮಹಲ್ ಭಾರತದಲ್ಲಿನ ಇಸ್ಲಾಮಿಕ್ ಕಲೆಯ ಆಭರಣವಾಗಿದ್ದು, ವಿಶ್ವ ಪರಂಪರೆಯ ಅತ್ಯಂತ ಮೆಚ್ಚುಗೆ ಪಡೆದ ಅಮರ ಕೃತಿಗಳಲ್ಲಿ ಒಂದಾಗಿದೆ.',
    },
    thumbnailUrlId: 'taj-mahal-thumb',
    coverImageUrlId: 'taj-mahal-cover',
    lowPolyModelUrl: '/models/taj_low.glb',
    highPolyModelUrl: '/models/taj_mahal_3d_model.glb',
    fallback360UrlId: 'fallback-360-taj',
    audioNarrationUrl: '/audio/taj_mahal_en.mp3',
    artifacts: allArtifacts.filter((a) => a.siteId === 'site-1'),
  },
  {
    id: 'site-2',
    title: {
        en: "Hampi Chariot",
        kn: "ಹಂಪಿ ರಥ",
        hi: "हम्पी रथ"
    },
    shortDescription: {
      en: 'The ruined city of Vijayanagara, the former capital of the Vijayanagara Empire.',
      hi: 'विजयनगर का खंडहर शहर, विजयनगर साम्राज्य की पूर्व राजधानी।',
      kn: 'ವಿಜಯನಗರದ ಹಾಳಾದ ನಗರ, ವಿಜಯನಗರ ಸಾಮ್ರಾಜ್ಯದ ಹಿಂದಿನ ರಾಜಧಾನಿ.',
    },
    longDescription: {
      en: 'Hampi, the seat of the famed Vijayanagara empire was the capital of the largest empire in post-mughal India, covering several states. The ruins of Hampi of the 14th Century lies scattered in about 26 sq. km area, amidst giant boulders and vegetation. The stone chariot is the flagship tourist attraction of Hampi.',
      hi: 'हम्पी, प्रसिद्ध विजयनगर साम्राज्य की सीट, मुगल के बाद के भारत में सबसे बड़े साम्राज्य की राजधानी थी, जिसमें कई राज्य शामिल थे। 14 वीं शताब्दी के हम्पी के खंडहर लगभग 26 वर्ग किलोमीटर क्षेत्र में विशाल शिलाखंडों और वनस्पतियों के बीच बिखरे हुए हैं। पत्थर का रथ हम्पी का प्रमुख पर्यटक आकर्षण है।',
      kn: 'ಹಂಪಿ, ಪ್ರಸಿದ್ಧ ವಿಜಯನಗರ ಸಾಮ್ರಾಜ್ಯದ ಸ್ಥಳವಾಗಿದ್ದು, ಮೊಘಲ್ ನಂತರ ಭಾರತದ ಅತಿದೊಡ್ಡ ಸಾಮ್ರಾಜ್ಯದ ರಾಜಧಾನಿಯಾಗಿತ್ತು ಮತ್ತು ಅನೇಕ ರಾಜ್ಯಗಳು ಇದರಲ್ಲಿದ್ದವು. 14ನೇ ಶತಮಾನದ ಹಂಪಿಯ ಅವಶೇಷಗಳು ಸುಮಾರು 26 ಚದರ കിലೋಮೀಟರ್ ಪ್ರದೇಶದಲ್ಲಿ ವಿಶಾಲ ಬಂಡೆಗಳು ಮತ್ತು ಸಸ್ಯವರ್ಗದ ನಡುವೆ ಹರಡಿಕೊಂಡಿವೆ. ಕಲ್ಲಿನ ರಥವು ಹಂಪಿಯ ಪ್ರಮುಖ ಪ್ರವಾಸಿ ಆಕರ್ಷಣೆಯಾಗಿದೆ.',
    },
    thumbnailUrlId: 'hampi-thumb',
    coverImageUrlId: 'hampi-cover',
    lowPolyModelUrl: '/models/hampi_low.glb',
    highPolyModelUrl: '/models/stone_chariot_in_hampi.glb',
    fallback360UrlId: 'fallback-360-hampi',
    audioNarrationUrl: '/audio/hampi_en.mp3',
    artifacts: allArtifacts.filter((a) => a.siteId === 'site-2'),
  },
  {
    id: 'site-3',
    title: {
      en: 'Qutub Minar',
      hi: 'कुतुब मीनार',
      kn: 'ಕುತುಬ್ ಮಿನಾರ್',
    },
    shortDescription: {
      en: 'A minaret and "victory tower" that forms part of the Qutb complex.',
      hi: 'एक मीनार और "विजय टॉवर" जो कुतुब परिसर का हिस्सा है।',
      kn: 'ಕುತುಬ್ ಸಂಕೀರ್ಣದ ಭಾಗವಾಗಿರುವ ಒಂದು ಮಿನಾರೆಟ್ ಮತ್ತು ‘ವಿಜಯ ಗೋಪುರ`.',
    },
    longDescription: {
      en: 'The Qutub Minar is a towering 73-meter high tower built by Qutub-ud-Din Aibak in 1193. The tower was built to celebrate Muslim dominance in Delhi after the defeat of Delhi’s last Hindu ruler. This tower is the highest tower in India, complete with five storeys and a projecting balcony.',
      hi: 'कुतुब मीनार 1193 में कुतुब-उद-दीन ऐबक द्वारा निर्मित एक 73-मीटर ऊंचा टॉवर है। यह टॉवर दिल्ली के अंतिम हिंदू शासक की हार के बाद दिल्ली में मुस्लिम प्रभुत्व का جشن منانے के लिए बनाया गया था। यह टॉवर भारत का सबसे ऊंचा टॉवर है, जिसमें पांच मंजिलें और एक प्रक्षेपित बालकनी है।',
      kn: 'ಕುತುಬ್ ಮಿನಾರ್ 1193ರಲ್ಲಿ ಕುತುಬ್-ಉದ್-ದೀನ್ ಐಬಕ್ ನಿರ್ಮಿಸಿದ 73 ಮೀಟರ್ ಎತ್ತರದ ಗೋಪುರವಾಗಿದೆ. ದೆಹಲಿಯ ಕೊನೆಯ ಹಿಂದೂ ಶಾಸಕರ ಸೋಲಿನ ನಂತರ ದೆಹಲಿಯಲ್ಲಿ ಮುಸ್ಲಿಂ ಪ್ರಭುತ್ವವನ್ನು ಆಚರಿಸಲು ಈ ಗೋಪುರವನ್ನು ನಿರ್ಮಿಸಲಾಯಿತು. ಈ ಗೋಪುರವು ಭಾರತದ ಅತಿ ಎತ್ತರದ ಗೋಪುರವಾಗಿದ್ದು, ಐದು ಮಹಡಿಗಳು ಮತ್ತು ಒಂದು ಹೊರಚಾಚಿದ ಬಾಲ್ಕನಿಯನ್ನು ಹೊಂದಿದೆ.',
    },
    thumbnailUrlId: 'qutub-minar-thumb',
    coverImageUrlId: 'qutub-minar-cover',
    lowPolyModelUrl: '/models/qutub_low.glb',
    highPolyModelUrl: '/models/qutub_minar.glb',
    fallback360UrlId: 'fallback-360-qutub',
    audioNarrationUrl: '/audio/qutub_minar_en.mp3',
    artifacts: allArtifacts.filter((a) => a.siteId === 'site-3'),
  },
  {
    id: 'site-4',
    title: {
      en: 'Konark Sun Temple',
      hi: 'कोणार्क सूर्य मंदिर',
      kn: 'ಕೋನಾರ್ಕ್ ಸೂರ್ಯ ದೇವಾಲಯ',
    },
    shortDescription: {
      en: 'A 13th-century CE sun temple at Konark in Odisha, India.',
      hi: 'भारत के ओडिशा में कोणार्क में 13 वीं शताब्दी का सूर्य मंदिर।',
      kn: 'ಭಾರತದ ಒಡಿಶಾದ ಕೊಣಾರ್ಕ್‌ನಲ್ಲಿ ಇರುವ 13ನೇ ಶತಮಾನದ ಸೂರ್ಯ ದೇವಾಲಯ.',
    },
    longDescription: {
      en: 'The Konark Sun Temple is a 13th-century temple dedicated to the Hindu sun god Surya. Shaped like a giant chariot, the temple is known for its exquisite stone carvings that cover the entire structure. It is a classic example of Kalinga architecture.',
      hi: 'कोणार्क सूर्य मंदिर 13 वीं शताब्दी का मंदिर है जो हिंदू सूर्य देव सूर्य को समर्पित है। एक विशाल रथ के आकार का, यह मंदिर अपनी उत्तम पत्थर की नक्काशी के लिए जाना जाता है जो पूरी संरचना को कवर करती है। यह कलिंग वास्तुकला का एक उत्कृष्ट उदाहरण है।',
      kn: 'ಕೊಣಾರ್ಕ್ ಸೂರ್ಯ ದೇವಾಲಯವು 13ನೇ ಶತಮಾನದ ಹಿಂದೂ ಸೂರ್ಯ ದೇವರಾದ ಸೂರ್ಯನಿಗೆ ಸಮರ್ಪಿತವಾದ ದೇವಾಲಯವಾಗಿದೆ. ಒಂದು ವಿಶಾಲ ರಥದ ಆಕಾರದಲ್ಲಿರುವ ಈ ದೇವಾಲಯವು ಇಡೀ ರಚನೆಯನ್ನು ಆವರಿಸಿರುವ ಸೂಕ್ಷ್ಮವಾದ ಕಲ್ಲಿನ ಕೆತ್ತನೆಗಳಿಗೆ ಪ್ರಸಿದ್ಧವಾಗಿದೆ. ಇದು ಕಲಿಂಗ ವಾಸ್ತುಶೈಲಿಯ ಉತ್ತಮ ಉದಾಹರಣೆಯಾಗಿದೆ.',
    },
    thumbnailUrlId: 'konark-sun-temple-thumb',
    coverImageUrlId: 'konark-sun-temple-cover',
    lowPolyModelUrl: '/models/konark_low.glb',
    highPolyModelUrl: '/models/sun_temple.glb',
    fallback360UrlId: 'fallback-360-konark',
    audioNarrationUrl: '/audio/konark_en.mp3',
    artifacts: allArtifacts.filter((a) => a.siteId === 'site-4'),
  },
  {
    id: 'site-6',
    title: {
      en: 'Rani-ki-Vav',
      hi: 'रानी की वाव',
      kn: 'ರಾಣಿ-ಕಿ-ವಾವ್',
    },
    shortDescription: {
      en: 'An intricately constructed stepwell situated in the town of Patan in Gujarat.',
      hi: 'गुजरात के पाटन शहर में स्थित एक जटिल रूप से निर्मित बावड़ी।',
      kn: 'ಗುಜರಾತಿನ ಪಾಟಣ ಪಟ್ಟಣದಲ್ಲಿರುವ ಸಂಕೀರ್ಣವಾಗಿ ನಿರ್ಮಿಸಲಾದ ಒಂದು ಮೆಟ್ಟಿಲುಬಾವಿ.',
    },
    longDescription: {
      en: 'Rani-ki-Vav is an exceptional example of a distinctive form of subterranean water architecture of the Indian subcontinent, the stepwell. It was built in the 11th century AD, and is a memorial to a king. It is designed as an inverted temple highlighting the sanctity of water.',
      hi: 'रानी की वाव भारतीय उपमहाद्वीप के भूमिगत जल वास्तुकला کے एक विशिष्ट रूप, बावड़ी का एक असाधारण उदाहरण है। इसे 11 वीं शताब्दी ईस्वी में बनाया गया था, और यह एक राजा का स्मारक है। इसे एक उल्टे मंदिर के रूप में डिजाइन किया गया है जो पानी की पवित्रता को उजागर करता है।',
      kn: 'ರಾಣಿ-ಕಿ-ವಾವ್ ಭಾರತೀಯ ಉಪಖಂಡದ ಭೂಗರ್ಭ ಜಲ ವಾಸ್ತುಶಿಲ್ಪದ ವಿಶಿಷ್ಟ ರೂಪವಾದ ಮೆಟ್ಟಿಲುಬಾವಿಯ ಅತ್ಯುತ್ತಮ ಉದಾಹರಣೆಯಾಗಿದೆ. ಇದನ್ನು 11ನೇ ಶತಮಾನದ ವೇಳೆ ನಿರ್ಮಿಸಲಾಯಿತು ಮತ್ತು ಇದು ಒಬ್ಬ ರಾಜನ ಸ್ಮಾರಕವಾಗಿದೆ. ಇದನ್ನು ನೀರಿನ ಪವಿತ್ರತೆಯನ್ನು ಹೈಲೈಟ್ ಮಾಡುವ ತಲೆಕೆಳಗಿನ ದೇವಾಲಯವಾಗಿ ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ.',
    },
    thumbnailUrlId: 'rani-ki-vav-thumb',
    coverImageUrlId: 'rani-ki-vav-cover',
    lowPolyModelUrl: '/models/rani_ki_vav_low.glb',
    highPolyModelUrl: '/models/rani-ki-vav.glb',
    fallback360UrlId: 'fallback-360-rani-ki-vav',
    audioNarrationUrl: '/audio/rani_ki_vav_en.mp3',
    artifacts: allArtifacts.filter((a) => a.siteId === 'site-6'),
  },
  {
    id: 'site-7',
    title: {
      en: 'Charminar',
      hi: 'चारमीनार',
      kn: 'ಚಾರ್ಮಿನಾರ್',
    },
    shortDescription: {
      en: 'A monument and mosque located in Hyderabad, Telangana, India.',
      hi: 'भारत के तेलंगाना के हैदराबाद में स्थित एक स्मारक और मस्जिद।',
      kn: 'ಭಾರತದ ತೆಲಂಗಾಣದ ಹೈದರಾಬಾದ್‌ನಲ್ಲಿರುವ ಒಂದು ಸ್ಮಾರಕ ಮತ್ತು ಮಸೀದಿ.',
    },
    longDescription: {
      en: 'The Charminar, constructed in 1591, is a monument and mosque located in Hyderabad. The landmark has become a global icon of Hyderabad, listed among the most recognized structures of India. It is a brilliant example of Indo-Islamic architecture.',
      hi: 'चारमीनार, 1591 में निर्मित, हैदराबाद में स्थित एक स्मारक और मस्जिद है। यह landmark हैदराबाद का عالمی प्रतीक बन गया है, जिसे भारत की सबसे मान्यता प्राप्त संरचनाओं में सूचीबद्ध किया गया है। यह इंडो-इस्लामिक वास्तुकला का एक शानदार उदाहरण है।',
      kn: 'ಚಾರ್ಮಿನಾರ್, 1591ರಲ್ಲಿ ನಿರ್ಮಿಸಲ್ಪಟ್ಟ, ಹೈದರಾಬಾದ್‌ನಲ್ಲಿರುವ ಒಂದು ಸ್ಮಾರಕ ಮತ್ತು ಮಸೀದಿಯಾಗಿದೆ. ಈ ಸಂಕೇತವು ಹೈದರಾಬಾದ್‌ನ ಜಾಗತಿಕ ಗುರುತಿನ ಚಿಹ್ನೆಯಾಗಿ ಮಾರ್ಪಟ್ಟಿದ್ದು, ಭಾರತದ ಅತ್ಯಂತ ಗುರುತಿಸಿಕೊಂಡ ರಚನೆಗಳಲ್ಲಿ ಒಂದಾಗಿ ಪರಿಗಣಿಸಲಾಗಿದೆ. ಇದು ಇಂಡೋ-ಇಸ್ಲಾಮಿಕ್ ವಾಸ್ತುಶೈಲಿಯ ಒಂದು ಅದ್ಭುತ ಉದಾಹರಣೆಯಾಗಿದೆ.',
    },
thumbnailUrlId: 'charminar-thumb',
    coverImageUrlId: 'charminar-cover',
    lowPolyModelUrl: '/models/charminar_low.glb',
    highPolyModelUrl: '/models/charminar_hyderabad.glb',
    fallback360UrlId: 'fallback-360-charminar',
    audioNarrationUrl: '/audio/charminar_en.mp3',
    artifacts: allArtifacts.filter((a) => a.siteId === 'site-7'),
  },
  {
    id: 'site-8',
    title: {
      en: 'Jagannath Puri Temple',
      hi: 'जगन्नाथ पुरी मंदिर',
      kn: 'ಜಗನ್ನಾಥ ಪುರಿ ದೇವಾಲಯ',
    },
    shortDescription: {
      en: 'An important Hindu temple dedicated to Jagannath, a form of Vishnu.',
      hi: 'विष्णु के một रूप जगन्नाथ को समर्पित एक महत्वपूर्ण हिंदू मंदिर।',
      kn: 'ವಿಷ್ಣುವಿನ ಒಂದು ರೂಪವಾದ ಜಗನ್ನಾಥನಿಗೆ ಸಮರ್ಪಿತವಾದ ಪ್ರಮುಖ ಹಿಂದೂ ದೇವಾಲಯ.',
    },
    longDescription: {
      en: 'The Shri Jagannath Temple of Puri is an important Hindu temple dedicated to Jagannath. The present temple was rebuilt from the 10th century onwards, on the site of an earlier temple, and begun by King Anantavarman Chodaganga Deva, first of the Eastern Ganga dynasty.',
      hi: 'पुरी का श्री जगन्नाथ मंदिर जगन्नाथ को समर्पित एक महत्वपूर्ण हिंदू मंदिर है। वर्तमान मंदिर 10 वीं शताब्दी से पहले के मंदिर की जगह पर बनाया गया था, और पूर्वी गंगा राजवंश के पहले राजा अनंतवर्मन चोडगંગ deva द्वारा शुरू किया गया था।',
      kn: 'ಪುರಿಯಲ್ಲಿರುವ ಶ್ರೀ ಜಗನ್ನಾಥ ದೇವಾಲಯವು ಜಗನ್ನಾಥನಿಗೆ ಸಮರ್ಪಿತವಾದ ಪ್ರಮುಖ ಹಿಂದೂ ದೇವಾಲಯವಾಗಿದೆ. ಪ್ರಸ್ತುತ ದೇವಾಲಯವನ್ನು 10ನೇ ಶತಮಾನದ ಪೂರ್ವದ ದೇವಾಲಯದ ಸ್ಥಳದಲ್ಲೇ ಪುನರ್ನಿರ್ಮಿಸಲಾಯಿತು ಮತ್ತು ಪೂರ್ವ ಗಂಗ ರಾಜವಂಶದ ಮೊದಲ ರಾಜನಾದ ಅನಂತವರ್ಮನ್ ಚೋಡಗಂಗ ದೇವರಿಂದ ಇದರ ನಿರ್ಮಾಣ ಆರಂಭಿಸಲಾಯಿತು.',
    },
    thumbnailUrlId: 'jagannath-puri-thumb',
    coverImageUrlId: 'jagannath-puri-cover',
    lowPolyModelUrl: '/models/jagannath_puri_low.glb',
    highPolyModelUrl: '/models/jagannath_puri_temple_model.glb',
    fallback360UrlId: 'fallback-360-jagannath-puri',
    audioNarrationUrl: '/audio/jagannath_puri_en.mp3',
    artifacts: allArtifacts.filter((a) => a.siteId === 'site-8'),
  },
  {
    id: 'site-9',
    title: {
      en: 'Ellora Caves',
      hi: 'एलोरा गुफाएं',
      kn: 'ಎಲ್ಲೋರಾ ಗುಹೆಗಳು',
    },
    shortDescription: {
      en: 'A UNESCO World Heritage Site located in the Aurangabad district of Maharashtra.',
      hi: 'महाराष्ट्र के औरंगाबाद जिले में स्थित एक यूनेस्को विश्व धरोहर स्थल।',
      kn: 'ಮಹಾರಾಷ್ಟ್ರದ ಔರಂಗಾಬಾದ್ ಜಿಲ್ಲೆಯಲ್ಲಿರುವ ಯುನೆಸ್ಕೋ ವಿಶ್ವ ಪರಂಪರೆಯ ತಾಣ.',
    },
    longDescription: {
      en: 'Ellora is one of the largest rock-cut monastery-temple cave complexes in the world, featuring Hindu, Buddhist and Jain monuments, and artwork, dating from the 600–1000 CE period. Cave 16, in particular, features the largest single monolithic rock excavation in the world, the Kailasha temple.',
      hi: 'एलोरा दुनिया के सबसे बड़े रॉक-कट मठ-मंदिर गुफा परिसरों में से एक है, जिसमें 600-1000 ईस्वी की अवधि के हिंदू, बौद्ध और जैन स्मारक और कलाकृतियां हैं। विशेष रूप से, गुफा 16 में दुनिया की सबसे बड़ी एकल अखंड रॉक खुदाई, कैलाश मंदिर है।',
      kn: 'ಎಲ್ಲೋರಾ ವಿಶ್ವದ ಅತಿದೊಡ್ಡ ಶಿಲೆಯಲ್ಲಿ ಕೊರೆದ ಮಠ–ಮಂದಿರ ಗುಹಾ ಸಂಕೀರ್ಣಗಳಲ್ಲಿ ಒಂದಾಗಿದ್ದು, 600–1000 ಕ್ರಿ.ಶ. ಅವಧಿಯ ಹಿಂದೂ, ಬೌದ್ದ ಮತ್ತು ಜೈನ ಸ್ಮಾರಕಗಳು ಹಾಗೂ ಕಲಾಕೃತಿಗಳನ್ನು ಹೊಂದಿದೆ. ವಿಶೇಷವಾಗಿ, ಗುಹೆ 16ರಲ್ಲಿ ವಿಶ್ವದ ಅತಿದೊಡ್ಡ ಏಕಶಿಲಾ ಶಿಲಾ ಸಂರಚನೆಯಾದ ಕೈಲಾಶ ದೇವಾಲಯವಿದೆ.',
    },
    thumbnailUrlId: 'ellora-caves-thumb',
    coverImageUrlId: 'ellora-caves-cover',
    lowPolyModelUrl: '/models/ellora_caves_low.glb',
    highPolyModelUrl: '/models/ellora_caves__india.glb',
    fallback360UrlId: 'fallback-360-ellora-caves',
    audioNarrationUrl: '/audio/ellora_caves_en.mp3',
    artifacts: allArtifacts.filter((a) => a.siteId === 'site-9'),
  },
  {
    id: 'site-10',
    title: {
      en: 'Sanchi Stupa',
      hi: 'सांची स्तूप',
      kn: 'ಸಾಂಚಿ ಸ್ತೂಪ',
    },
    shortDescription: {
      en: 'A Buddhist complex, famous for its Great Stupa, on a hilltop at Sanchi Town in Madhya Pradesh.',
      hi: 'मध्य प्रदेश के सांची टाउन में एक पहाड़ी पर स्थित एक बौद्ध परिसर, जो अपने महान स्तूप के लिए प्रसिद्ध है।',
      kn: 'ಮಧ್ಯಪ್ರದೇಶದ ಸಾಂಚಿ ಪಟ್ಟಣದಲ್ಲಿರುವ ಒಂದು ಗುಡ್ಡದ ಮೇಲಿರುವ ಬೌದ್ಧ ಸಂಕೀರ್ಣ, ಇದು ತನ್ನ ಮಹಾಸ್ತೂಪಕ್ಕಾಗಿ ಪ್ರಸಿದ್ಧವಾಗಿದೆ.',
    },
    longDescription: {
      en: 'The Great Stupa at Sanchi is one of the oldest stone structures in India and was originally commissioned by the emperor Ashoka in the 3rd century BCE. Its nucleus was a simple hemispherical brick structure built over the relics of the Buddha. It is an important monument of Indian Architecture.',
      hi: 'सांची का महान स्तूप भारत की सबसे पुरानी पत्थर की संरचनाओं में से एक है और मूल रूप से सम्राट अशोक द्वारा तीसरी शताब्दी ईसा पूर्व में कमीशन किया गया था। इसका केंद्र बुद्ध के अवशेषों पर बनी एक साधारण गोलार्द्ध ईंट संरचना थी। यह भारतीय वास्तुकला का एक महत्वपूर्ण स्मारक है।',
      kn: 'ಸಾಂಚಿಯ ಮಹಾಸ್ತೂಪವು ಭಾರತದ ಅತ್ಯಂತ ಹಳೆಯ ಕಲ್ಲಿನ ರಚನೆಗಳಲ್ಲಿ ಒಂದಾಗಿದ್ದು, ಇದನ್ನು ಮೂಲತಃ ಸಾಮ್ರಾಟ್ ಅಶೋಕನು ಕ್ರಿ.ಪೂ. 3ನೇ ಶತಮಾನದಲ್ಲಿ ನಿರ್ಮಿಸಲು ಆದೇಶಿಸಿದ್ದನು. ಇದರ ಕೇಂದ್ರ ಭಾಗದಲ್ಲಿ ಬುದ್ಧನ ಅವಶೇಷಗಳ ಮೇಲಿನ ಸರಳ ಅರ್ಧಗೋಳಾಕಾರದ ಇಟ್ಟಿಗೆ ರಚನಾ ಭಾಗವಿತ್ತು. ಇದು ಭಾರತೀಯ ವಾಸ್ತುಶಿಲ್ಪದ ಒಂದು ಪ್ರಮುಖ ಸ್ಮಾರಕವಾಗಿದೆ.',
    },
thumbnailUrlId: 'sanchi-stupa-thumb',
    coverImageUrlId: 'sanchi-stupa-cover',
    lowPolyModelUrl: '/models/sanchi_stupa_low.glb',
    highPolyModelUrl: '/models/great_stupa_in_sanchi.glb',
    fallback360UrlId: 'fallback-360-sanchi-stupa',
    audioNarrationUrl: '/audio/sanchi_stupa_en.mp3',
    artifacts: allArtifacts.filter((a) => a.siteId === 'site-10'),
  },
];

export const getSites = (): Site[] => allSites;

export const getSiteById = (id: string): Site | undefined => allSites.find((site) => site.id === id);

export const getArtifacts = (): Artifact[] => allArtifacts;

export const getArtifactById = (id: string): Artifact | undefined => allArtifacts.find((artifact) => artifact.id === id);

    
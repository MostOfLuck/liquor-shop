import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
	resources: {
		English: {
			translations: {
				/* ваш перевод на английский язык */
			},
		},
		Русский: {
			translations: {
				'Learn More': 'Узнать больше',
				'Discover the Finest Alcoholic Beverages at R.I.L.L Collection':
					'Откройте для себя лучшие алкогольные напитки в R.I.L.L Collection',
				'Best Alcohol from all over the world': 'Лучший алкоголь со всего мира',
				'Open Catalog': 'Открыть Каталог',
				Catalog: 'Каталог',
				"Get In Touch": "Свяжитесь с нами",
				"We are in Facebook, Tiktok, & Instagram. You can also contact us via Email.": "Мы есть в Facebook, Tiktok и Instagram. Вы также можете связаться с нами по электронной почте.",
				"Page Not Found": "Страница не найдена",
				"Go Back Home": "Вернутся назад",
				"Contact Us": "Свяжитесь с нами",
				"Contact": "Связаться",
				"Reviews": "Отзывы",
				"Insights": "Идеи",
				"Permalinks": "Постоянные ссылки",
				"Blog": "Блог",
				"Communities": "Сообщество",
				"Our Socials and contacts.": "Наши социальные сети и контакты.",
				'Explore the world of Portugal, Spain, and France with our diverse selection of wines and cognacs. Indulge in the exquisite flavors and aromas presented in our bottles, and discover the true gems of winemaking.':
					'Откройте для себя мир Португалии, Испании и Франции с нашим разнообразным выбором вин и коньяков. Насладитесь изысканными вкусами и ароматами, представленными в наших бутылках, и откройте для себя настоящие жемчужины виноделия.',
				'Our Catalog': 'Наш Каталог',
				'Savor the Chardonnay and Arinto blend of Fiuza 2017. Tropical fruit, vanilla hints, and citrus finish make it perfect for any occasion.':
					'Насладитесь купажом Шардоне и Аринто из Фиузы 2017 года. Тропические фрукты, ванильные оттенки и цитрусовое послевкусие делают его идеальным для любого случая.',
				'Experience the vibrant allure of Porto Cabraco Ruby. Rich red fruit, subtle spices, and a velvety finish create the perfect celebration companion.':
					'Почувствуйте яркое очарование Порто Кабрако Руби. Насыщенные красные фрукты, тонкие специи и бархатистое послевкусие создают идеального компаньона для торжества.',
				'Experience the delightful fusion of Porto Cabaco White. With crisp citrus notes, hints of tropical fruit, and a refreshing finish, its perfect for any occasion.':
					'Испытайте восхитительный фьюжн Porto Cabaco White. С хрустящими цитрусовыми нотами, оттенками тропических фруктов и освежающим послевкусием, он идеально подходит для любого случая.',
				'Experience the enchanting charm of Porto Cabraco Rosé. Bursting with vibrant red berry flavors, delicate floral aromas, and a crisp, refreshing finish, its the ideal choice for any occasion.':
					'Почувствуйте чарующее очарование Porto Cabraco Rosé. Наполненный яркими ароматами красных ягод, нежными цветочными ароматами и свежим, освежающим послевкусием, он является идеальным выбором для любого случая.',
				'Savor the refined richness of Maxime Trijol Cognac. Crafted with expertise, it offers a smooth, luxurious taste of dried fruits, oak, and spices. Perfect for elevating any occasion.':
					'Насладитесь изысканным богатством коньяка Maxime Trijol. Созданный с мастерством, он предлагает мягкий, роскошный вкус сухофруктов, дуба и специй. Идеально подходит для украшения любого случая.',
				'Discover sophistication in every sip. Rich fruit, subtle florals, and a velvety finish define this French classic.':
					'Откройте для себя изысканность в каждом глотке. Богатые фрукты, тонкие цветочные ноты и бархатистое послевкусие определяют эту французскую классику.',
				'Embrace the essence of Portugal with Fiuza Native Reserva 2018. This captivating blend unveils bold flavors of ripe berries, hints of spice, and a smooth, lingering finish. Perfect for those seeking an authentic taste of Portuguese terroir.':
					'Почувствуйте сущность Португалии с Fiuza Native Reserva 2018. Эта завораживающая смесь раскрывает смелый вкус спелых ягод, нотки специй и гладкое, продолжительное послевкусие. Идеально подходит для тех, кто ищет аутентичный вкус португальского терруара.',
				'Experience Portugals essence with Oceanius 2019. Its vibrant fruit flavors and subtle herbal notes lead to a refreshing, harmonious finish, reminiscent of the Portuguese coast.':
					'Почувствуйте сущность Португалии с Oceanius 2019. Его яркие фруктовые ароматы и тонкие травяные ноты приводят к освежающему, гармоничному послевкусию, напоминающему португальское побережье.',
				'Elevate your palate with Fiuza Cabernet Sauvignon. This robust wine delights with intense blackberry and cassis flavors, complemented by hints of spice and a velvety texture. Perfect for moments of indulgence and celebration.':
					'Поднимите свой вкус с Фиуза Каберне Совиньон. Это крепкое вино восхищает интенсивным ароматом ежевики и черной смородины, дополненным оттенками специй и бархатистой текстурой. Идеально подходит для моментов наслаждения и праздника.',
				'Immerse yourself in the heritage of Portugal with Adega de Borba. This esteemed winery crafts wines of exceptional quality, showcasing the rich flavors of the Alentejo region. Experience elegance and tradition in every sip.':
					'Погрузитесь в наследие Португалии вместе с Adega de Borba. Эта уважаемая винодельня производит вина исключительного качества, демонстрирующие богатые вкусы региона Алентежу. Почувствуйте элегантность и традиции в каждом глотке.',
				'Indulge in the rich heritage of Fiuza Merilot 2015. This exquisite blend harmoniously combines Merlot and Cabernet Sauvignon, offering a symphony of ripe berry flavors, subtle spice notes, and a velvety texture. Perfect for moments of refined enjoyment.':
					'Побалуйте себя богатым наследием Fiuza Merilot 2015. Этот изысканный купаж гармонично сочетает в себе Мерло и Каберне Совиньон, предлагая симфонию вкусов спелых ягод, тонких пряных нот и бархатистой текстуры. Идеально подходит для моментов утонченного наслаждения.',
				'Discover Portugal essence with Montes Carlos DOC Alentejo Tinto 2016. This captivating red wine offers rich flavors of dark fruits, hints of spice, and a smooth finish, perfect for pure enjoyment.':
					'Откройте для себя сущность Португалии с Montes Carlos DOC Alentejo Tinto 2016. Это пленительное красное вино обладает богатым вкусом темных фруктов, оттенками специй и мягким послевкусием, идеально подходящим для чистого наслаждения.',
				'Savor Bianco C Chardonnay from the All Seasons Collection 2020. With vibrant fruit aromas and a creamy texture, its perfect for any occasion.':
					'Насладитесь Шардоне Bianco C из коллекции All Seasons 2020. С ярким фруктовым ароматом и кремовой текстурой, он идеально подходит для любого случая.',
				'An adventurous Spanish blend, Velas Corsarias offers bold flavors of dark fruits and spice with a hint of oak.':
					'Авантюрная испанская смесь Velas Corsarias предлагает смелый вкус темных фруктов и специй с оттенком дуба.',
				'Transport yourself to a summers day with Summer Merlot from the All Seasons Collection 2020. Bursting with ripe berry flavors and a touch of warmth, this wine embodies the essence of the season.':
					'Перенеситесь в летний день с Summer Merlot из коллекции All Seasons 2020. Наполненное ароматом спелых ягод и оттенком тепла, это вино воплощает в себе сущность сезона.',
					"Experience a symphony of flavors with this blend. Cabernet Sauvignon and Touriga Nacional unite to create a rich, balanced wine.": "Испытайте симфонию вкусов с этой смесью. Каберне Совиньон и Touriga Nacional объединяются, чтобы создать богатое, сбалансированное вино."
			},
		},
		עברית: {
			translations: {
				'Learn More': 'קרא עוד',
				'Discover the Finest Alcoholic Beverages at R.I.L.L Collection':
					'גלו את המשקאות האלכוהוליים הטובים ביותר ב-R.I.L.L Collection',
					"Best Alcohol from all over the world": "האלכוהול הטוב ביותר מכל רחבי העולם",
					"Open Catalog": "פתח קטלוג",
					Catalog: 'קטלוג',
					"Get In Touch": "צור קשר",
					"We are in Facebook, Tiktok, & Instagram. You can also contact us via Email.": 'אנחנו בפייסבוק, בטיקטוק ובאינסטגרם. ניתן גם ליצור איתנו קשר באמצעות דוא"ל.',
				"Page Not Found": "Страница не найдена",
				"Go Back Home": "הדף לא נמצא",
				"Contact Us": "צור קשר",
				"Contact": "איש קשר",
				"Reviews": "הדעת",
				"Insights": "תובנות",
				"Permalinks": "קישורים קבועים",
				"Blog": "בלוג",
				"Communities": "קהילות",
				"Our Socials and contacts.": "הרשתות החברתיות ואנשי הקשר שלנו.",
				'Explore the world of Portugal, Spain, and France with our diverse selection of wines and cognacs. Indulge in the exquisite flavors and aromas presented in our bottles, and discover the true gems of winemaking.':
					'גלו את העולם של פורטוגל, ספרד וצרפת עם מבחר היינות והקוניאק המגוון שלנו. התענגו על הטעמים והניחוחות המעולים המוצגים בבקבוקים שלנו, וגלו את אבני החן האמיתיות של ייצור יין.',
				'Our Catalog': 'הקטלוג שלנו',
				'Savor the Chardonnay and Arinto blend of Fiuza 2017. Tropical fruit, vanilla hints, and citrus finish make it perfect for any occasion.':
					'התענגו על תערובת השרדונה והאריטו של פיוזה 2017. פירות טרופיים, רמזי וניל וסיומת הדרים הופכים אותו למושלם לכל אירוע.',
				'Experience the vibrant allure of Porto Cabraco Ruby. Rich red fruit, subtle spices, and a velvety finish create the perfect celebration companion.':
					'בואו לחוות את הקסם התוסס של Porto Cabraco Ruby. פירות אדומים עשירים, תבלינים עדינים וסיומת קטיפתית יוצרים את בן הלוויה המושלם לחגיגה.',
				'Experience the delightful fusion of Porto Cabraco White. With crisp citrus notes, hints of tropical fruit, and a refreshing finish, its perfect for any occasion.':
					'בואו לחוות את המיזוג המענג של Porto Cabraco White. עם תווים פריכים של פירות הדר, רמזים לפירות טרופיים וסיומת מרעננת, הוא מושלם לכל אירוע.',
				'Experience the enchanting charm of Porto Cabraco Rosé. Bursting with vibrant red berry flavors, delicate floral aromas, and a crisp, refreshing finish, its the ideal choice for any occasion.':
					'בואו לחוות את הקסם של פורטו קברקו רוזה (Porto Cabraco Rosé). עם טעמי פירות יער אדומים עזים, ניחוחות פרחוניים עדינים וסיומת פריכה ומרעננת, זוהי הבחירה האידיאלית לכל אירוע.',
				'Savor the refined richness of Maxime Trijol Cognac. Crafted with expertise, it offers a smooth, luxurious taste of dried fruits, oak, and spices. Perfect for elevating any occasion.':
					"התענגו על העושר המעודן של קוניאק מקסים טריז'ול. מיוצר במומחיות, הוא מציע טעם חלק ויוקרתי של פירות יבשים, אלון ותבלינים. מושלם לרומם כל אירוע.",
				'Discover sophistication in every sip. Rich fruit, subtle florals, and a velvety finish define this French classic.':
					'גלו תחכום בכל לגימה. פרי עשיר, פרחים עדינים וסיומת קטיפתית מגדירים את הקלאסיקה הצרפתית הזו.',
				'Embrace the essence of Portugal with Fiuza Native Reserva 2018. This captivating blend unveils bold flavors of ripe berries, hints of spice, and a smooth, lingering finish. Perfect for those seeking an authentic taste of Portuguese terroir.':
					'אמצו את המהות של פורטוגל עם Fiuza Native Reserva 2018. תערובת שובת לב זו חושפת טעמים נועזים של פירות יער בשלים, רמזים לתבלין וסיומת חלקה ומתמשכת. מושלם למי שמחפש טעם אותנטי של טרואר פורטוגזי.',
				'Experience Portugals essence with Oceanius 2019. Its vibrant fruit flavors and subtle herbal notes lead to a refreshing, harmonious finish, reminiscent of the Portuguese coast.':
					'בואו לחוות את המהות של פורטוגל עם Oceanius 2019. טעמי הפרי התוססים ותווי הצמחים העדינים מובילים לגימור מרענן והרמוני, המזכיר את החוף הפורטוגזי.',
				'Elevate your palate with Fiuza Cabernet Sauvignon. This robust wine delights with intense blackberry and cassis flavors, complemented by hints of spice and a velvety texture. Perfect for moments of indulgence and celebration.':
					'שדרגו את החך עם פיוזה קברנה סוביניון. יין חזק זה מענג עם טעמי פטל שחור וקסיס עזים, בתוספת רמזים של תבלינים ומרקם קטיפתי. מושלם לרגעים של פינוק וחגיגה.',
				'Immerse yourself in the heritage of Portugal with Adega de Borba. This esteemed winery crafts wines of exceptional quality, showcasing the rich flavors of the Alentejo region. Experience elegance and tradition in every sip.':
					"בואו לטבול את עצמכם במורשת של פורטוגל עם Adega de Borba. יקב מוערך זה מייצר יינות באיכות יוצאת דופן, המציגים לראווה את הטעמים העשירים של אזור אלנטז'ו. בואו לחוות אלגנטיות ומסורת בכל לגימה.",
				'Indulge in the rich heritage of Fiuza Merilot 2015. This exquisite blend harmoniously combines Merlot and Cabernet Sauvignon, offering a symphony of ripe berry flavors, subtle spice notes, and a velvety texture. Perfect for moments of refined enjoyment.':
					'התפנקו במורשת העשירה של פיוזה מרילוט 2015. הבלנד המשובח הזה משלב בהרמוניה מרלו וקברנה סוביניון, ומציע סימפוניה של טעמי פירות יער בשלים, תווי תבלינים עדינים ומרקם קטיפתי. מושלם לרגעים של הנאה מעודנת.',
				'Discover Portugal essence with Montes Carlos DOC Alentejo Tinto 2016. This captivating red wine offers rich flavors of dark fruits, hints of spice, and a smooth finish, perfect for pure enjoyment.':
					'גלו את תמצית פורטוגל עם Montes Carlos DOC Alentejo Tinto 2016. יין אדום שובה לב זה מציע טעמים עשירים של פירות כהים, רמזים לתבלין וסיומת חלקה, מושלמת להנאה צרופה.',
				'Savor Bianco C Chardonnay from the All Seasons Collection 2020. With vibrant fruit aromas and a creamy texture, its perfect for any occasion.':
					'התענגו על ביאנקו סי שרדונה מקולקציית All Seasons 2020. עם ארומות פרי תוססות ומרקם קרמי, מושלם לכל אירוע.',
				'An adventurous Spanish blend, Velas Corsarias offers bold flavors of dark fruits and spice with a hint of oak.':
					'Velas Corsarias הוא תערובת ספרדית הרפתקנית, המציעה טעמים נועזים של פירות כהים ותבלין עם נגיעות של עץ אלון.',
				'Transport yourself to a summers day with Summer Merlot from the All Seasons Collection 2020. Bursting with ripe berry flavors and a touch of warmth, this wine embodies the essence of the season.':
					'העבירו את עצמכם ליום קיץ עם מרלו קיץ מקולקציית All Seasons 2020. מפוצץ בטעמי פירות יער בשלים ונגיעה של חמימות, היין הזה מגלם את תמצית העונה.',
					"Experience a symphony of flavors with this blend. Cabernet Sauvignon and Touriga Nacional unite to create a rich, balanced wine.": "בואו לחוות סימפוניה של טעמים עם תערובת זו. קברנה סוביניון וטוריגה נסיונל מתאחדים ליצירת יין עשיר ומאוזן."

			},
		},
	},
	lng: 'English',
	fallbackLng: 'English',
	ns: ['translations'],
	defaultNS: 'translations',
	keySeparator: false,
	interpolation: {
		escapeValue: false,
		formatSeparator: ',',
	},
	react: {
		wait: true,
	},
})

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(<App />)

import i18n from 'i18next'
import ReactDOM from 'react-dom/client'
import { initReactI18next } from 'react-i18next'
import App from './App'
import './index.css'

i18n.use(initReactI18next).init({
	resources: {
		English: {
			translations: {
				"Vodkino": "Vodka Flavors"
			},
		},
		Русский: {
			translations: {
				"spirits": "Водка с ароматами",
				"Wine Fiuza Chardonnay Arinto": "Вино Fiuza Chardonnay Arinto",
				'Port wine Cabraco Ruby': 'Портвейн Cabraco Ruby',
				'Port wine Cabraco White': 'Портвейн Cabraco White',
				'Port wine Cabraco Rose': 'Портвейн Cabraco Rose',
				'Cognac Maxime Trijol': 'Коньяк Maxime Trijol',
				'Cognac Maxime Trijol Vsop': 'Коньяк Maxime Trijol Vsop',
				'Cognac Maxime Trijol Small': 'Коньяк Maxime Trijol Small',
				'Wine Fiuza Native Reserva 2018': 'Вино Fiuza Native Reserva 2018',
				'Wine Oceanius Produto De Portugal 2019': 'Вино Oceanius Produto De Portugal 2019',
				'Wine Fiuza Cabernet Sauvignon': 'Вино Fiuza Cabernet Sauvignon',
				'Wine Adega De Borba': 'Вино Adega De Borba',
				'Wine Fiuza Merilot 2015': 'Вино Fiuza Merilot 2015',
				'Wine Montes Carlos DOCA lentejo Tinto2016': 'Вино Montes Carlos DOCA lentejo Tinto2016',
				'Wine Bianco Chardonnay AllSeasons Collection 2020': 'Вино Bianco Chardonnay AllSeasons Collection 2020',
				'Wine Spain Velas Corsarias': 'Вино Spain Velas Corsarias',
				'Wine Summer Merlot AllSeasons Collection 2020': 'Вино Summer Merlot AllSeasons Collection 2020',
				'Cognac Maxime Trijol 3L': 'Коньяк Maxime Trijol 3L',
			
				'Learn More': 'Узнать больше',
				Search: 'Поиск',
				'Discover the Finest Alcoholic Beverages at R.I.L.L Collection':
					'Откройте для себя лучшие алкогольные напитки в R.I.L.L Collection',
				'Best Alcohol from all over the world': 'Лучший алкоголь со всего мира',
				'Open Catalog': 'Открыть Каталог',
				Catalog: 'Каталог',
				'Get In Touch': 'Свяжитесь с нами',
				'We are in Facebook, Tiktok, & Instagram. You can also contact us via Email.':
					'Мы есть в Facebook, Tiktok и Instagram. Вы также можете связаться с нами по электронной почте.',
				'Page Not Found': 'Страница не найдена',
				'Go Back Home': 'Вернутся назад',
				'Contact Us': 'Свяжитесь с нами',
				Contact: 'Связаться',
				Reviews: 'Отзывы',
				Insights: 'Идеи',
				Permalinks: 'Постоянные ссылки',
				Blog: 'Блог',
				Beer: 'Пиво',
				'Port wine': 'Портвейн',
				Wine: 'Вино',
				Cognac: 'Коньяк',
				'Popular product categories': 'Популярные категории товаров',
				Communities: 'Сообщество',
				'Our Socials and contacts.': 'Наши социальные сети и контакты.',
				'Explore the world of Portugal, Spain, and France with our diverse selection of wines and cognacs. Indulge in the exquisite flavors and aromas presented in our bottles, and discover the true gems of winemaking.':
					'Откройте для себя мир Португалии, Испании и Франции с нашим разнообразным выбором вин и коньяков. Насладитесь изысканными вкусами и ароматами, представленными в наших бутылках, и откройте для себя настоящие жемчужины виноделия.',
				'Our Catalog': 'Наш Каталог',
				'Savor the Chardonnay and Arinto blend of Fiuza 2017. Tropical fruit, vanilla hints, and citrus finish make it perfect for any occasion.':
					'Насладитесь купажом Шардоне и Аринто из Фиузы 2017 года. Тропические фрукты, ванильные оттенки и цитрусовое послевкусие делают его идеальным для любого случая.',
				'Experience the vibrant allure of Porto Cabraco Ruby. Rich red fruit, subtle spices, and a velvety finish create the perfect celebration companion.':
					'Почувствуйте яркое очарование Порто Кабрако Руби. Насыщенные красные фрукты, тонкие специи и бархатистое послевкусие создают идеального компаньона для торжества.',
				"Leonardo Da Vinci Vodka Pineapple is a premium vodka with a vibrant, tropical twist. Crafted with the finest ingredients, this vodka offers a smooth and refreshing taste, infused with the sweet and tangy essence of ripe pineapples. Each bottle contains 700 ml of pure, distilled perfection, making it the ideal choice for cocktails, mixed drinks, or enjoying neat. Whether you're hosting a party or relaxing at home, Leonardo Da Vinci Vodka Pineapple adds a touch of elegance and flavor to any occasion.":
					'Водка Leonardo Da Vinci Pineapple - это премиальная водка с ярким тропическим оттенком. Изготовленная из лучших ингредиентов, эта водка предлагает мягкий и освежающий вкус с сладким и кислым ароматом спелых ананасов. Каждая бутылка содержит 700 мл чистого дистиллята, что делает ее идеальным выбором для коктейлей, смешанных напитков или употребления в чистом виде. Независимо от того, устраиваете ли вы вечеринку или отдыхаете дома, водка Leonardo Da Vinci Pineapple добавляет нотку элегантности и вкуса любому событию.',
				'Experience the delightful fusion of Porto Cabaco White. With crisp citrus notes, hints of tropical fruit, and a refreshing finish, its perfect for any occasion.':
					'Испытайте восхитительный фьюжн Porto Cabaco White. С хрустящими цитрусовыми нотами, оттенками тропических фруктов и освежающим послевкусием, он идеально подходит для любого случая.',
				'Experience the enchanting charm of Porto Cabraco Rosé. Bursting with vibrant red berry flavors, delicate floral aromas, and a crisp, refreshing finish, its the ideal choice for any occasion.':
					'Почувствуйте чарующее очарование Porto Cabraco Rosé. Наполненный яркими ароматами красных ягод, нежными цветочными ароматами и свежим, освежающим послевкусием, он является идеальным выбором для любого случая.',
				'Experience the delightful fusion of Porto Cabraco White. With crisp citrus notes, hints of tropical fruit, and a refreshing finish, its perfect for any occasion.':
					'Ощутите восхитительное слияние Porto Cabraco White. С хрустящими цитрусовыми нотами, оттенками тропических фруктов и освежающим финишем оно идеально подходит для любого случая.',
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
				"Leonardo Da Vinci Vodkino Mango is a premium vodka with an exotic mango twist. Crafted with the finest ingredients, this vodka delivers a smooth and refreshing taste, infused with the rich, fruity essence of ripe mangoes. Each 700 ml bottle is a testament to pure, distilled excellence, making it perfect for creating vibrant cocktails, mixed drinks, or enjoying straight. Whether you're hosting a gathering or unwinding at home, Leonardo Da Vinci Vodkino Mango adds a tropical touch and a burst of flavor to any occasion.":
					'Водка Leonardo Da Vinci Vodkino Mango - это премиальная водка с экзотическим вкусом манго. Изготовленная из лучших ингредиентов, эта водка предлагает мягкий и освежающий вкус, насыщенный богатым фруктовым ароматом спелых манго. Каждая бутылка объемом 700 мл является воплощением чистого дистиллированного совершенства, что делает её идеальной для создания ярких коктейлей, смешанных напитков или употребления в чистом виде. Независимо от того, устраиваете ли вы встречу или отдыхаете дома, водка Leonardo Da Vinci Vodkino Mango добавляет тропический оттенок и взрыв вкуса к любому событию.',
				'Discover Portugal essence with Montes Carlos DOC Alentejo Tinto 2016. This captivating red wine offers rich flavors of dark fruits, hints of spice, and a smooth finish, perfect for pure enjoyment.':
					'Откройте для себя сущность Португалии с Montes Carlos DOC Alentejo Tinto 2016. Это пленительное красное вино обладает богатым вкусом темных фруктов, оттенками специй и мягким послевкусием, идеально подходящим для чистого наслаждения.',
				'Savor Bianco C Chardonnay from the All Seasons Collection 2020. With vibrant fruit aromas and a creamy texture, its perfect for any occasion.':
					'Насладитесь Шардоне Bianco C из коллекции All Seasons 2020. С ярким фруктовым ароматом и кремовой текстурой, он идеально подходит для любого случая.',
				"Leonardo Da Vinci Vodkino Peach is a premium vodka with a delightful peach infusion. Made with the finest ingredients, this vodka offers a smooth and refreshing taste, enriched with the juicy and sweet essence of ripe peaches. Each 700 ml bottle embodies pure, distilled excellence, making it ideal for crafting exquisite cocktails, mixed drinks, or enjoying straight. Whether you're celebrating with friends or relaxing at home, Leonardo Da Vinci Vodkino Peach adds a touch of fruity elegance and a burst of flavor to any occasion.":
					'Водка Leonardo Da Vinci Vodkino Peach - это премиальная водка с восхитительной инфузией персика. Изготовленная из лучших ингредиентов, эта водка предлагает мягкий и освежающий вкус, насыщенный сочным и сладким ароматом спелых персиков. Каждая бутылка объемом 700 мл представляет собой чистое, дистиллированное совершенство, что делает её идеальной для создания изысканных коктейлей, смешанных напитков или для употребления в чистом виде. Независимо от того, празднуете ли вы с друзьями или отдыхаете дома, водка Leonardo Da Vinci Vodkino Peach добавляет нотку фруктовой элегантности и взрыв вкуса к любому событию.',
					"Leonardo Da Vinci Vodkino Orange is a premium vodka infused with the vibrant essence of juicy oranges. Crafted from the finest ingredients, this vodka delivers a smooth and invigorating taste, highlighted by the fresh, tangy notes of sun-ripened oranges. Each 700 ml bottle embodies distilled perfection, making it ideal for creating refreshing cocktails, mixed drinks, or enjoying neat. Whether you're celebrating a special occasion or relaxing at home, Leonardo Da Vinci Vodkino Orange adds a burst of citrus flavor and a touch of elegance to any gathering.": "Водка Leonardo Da Vinci Vodkino Orange - это премиальная водка, настоянная на яркой эссенции сочных апельсинов. Изготовленная из лучших ингредиентов, эта водка предлагает мягкий и бодрящий вкус, подчеркнутый свежими, кисловатыми нотами спелых апельсинов. Каждая бутылка объемом 700 мл представляет собой воплощение дистиллированного совершенства, что делает её идеальной для создания освежающих коктейлей, смешанных напитков или употребления в чистом виде. Независимо от того, отмечаете ли вы особое событие или отдыхаете дома, водка Leonardo Da Vinci Vodkino Orange добавляет всплеск цитрусового вкуса и нотку элегантности в любое собрание.",
					"Leonardo Da Vinci Vodkino Lemon is a premium vodka with a zesty lemon infusion. Crafted with high-quality ingredients, this vodka offers a crisp and refreshing taste, enhanced with the bright, tangy essence of fresh lemons. Each 700 ml bottle represents pure, distilled excellence, making it perfect for creating invigorating cocktails, mixed drinks, or enjoying on its own. Whether you're hosting a celebration or relaxing at home, Leonardo Da Vinci Vodkino Lemon adds a splash of citrus elegance and a burst of flavor to any occasion.": "Водка Leonardo Da Vinci Vodkino Lemon - это премиальная водка с пикантной лимонной инфузией. Изготовленная из высококачественных ингредиентов, эта водка предлагает чистый и освежающий вкус, обогащенный ярким, терпким ароматом свежих лимонов. Каждая бутылка объемом 700 мл представляет собой воплощение чистого дистиллированного совершенства, что делает её идеальной для создания бодрящих коктейлей, смешанных напитков или употребления в чистом виде. Независимо от того, празднуете ли вы событие или отдыхаете дома, водка Leonardo Da Vinci Vodkino Lemon добавляет нотку цитрусовой элегантности и взрыв вкуса к любому случаю.",
				'An adventurous Spanish blend, Velas Corsarias offers bold flavors of dark fruits and spice with a hint of oak.':
					'Авантюрная испанская смесь Velas Corsarias предлагает смелый вкус темных фруктов и специй с оттенком дуба.',
				'Transport yourself to a summers day with Summer Merlot from the All Seasons Collection 2020. Bursting with ripe berry flavors and a touch of warmth, this wine embodies the essence of the season.':
					'Перенеситесь в летний день с Summer Merlot из коллекции All Seasons 2020. Наполненное ароматом спелых ягод и оттенком тепла, это вино воплощает в себе сущность сезона.',
				'Experience a symphony of flavors with this blend. Cabernet Sauvignon and Touriga Nacional unite to create a rich, balanced wine.':
					'Испытайте симфонию вкусов с этой смесью. Каберне Совиньон и Touriga Nacional объединяются, чтобы создать богатое, сбалансированное вино.',
				'Import and marketing of quality products.':
					'Импорт и реализация качественной продукции.',
				'Street 8 Azur': 'Улица 8 Азур',
				'Postal code 5802920, Israel': 'Почтовый индекс 5802920, Израиль',
				'Phone ☎: 03-6542200 Mobile 📱: 052-4448940':
					'Телефон ☎: 03-6542200 Мобильный 📱: 052-4448940',
				'Email: rillcollection2023@gmail.com':
					'Электронная почта: rillcollection2023@gmail.com',
				Home: 'Главная',
				'Welcome!': 'Добро пожаловать!',
				'Verify that you are legal age.':
					'Убедитесь, что вы достигли совершеннолетия.',
				"I'm above 18": 'Мне больше 18',
				"I'm under 18": 'Мне меньше 18',
				'All Categories': 'Все Категории',
				arak: 'Арак',
				'Warning: contains alcohol, it is recommended to avoid excessive drinking':
					'Внимание: содержит алкоголь, рекомендуется избегать чрезмерного употребления.',
				'Warning! Excessive consumption of alcohol is life-threatening and harmful to health':
					'Предупреждение! Чрезмерное употребление алкоголя опасно для жизни и вредно для здоровья',
				wine: 'Вино',
				'portWine': 'Портвейн',
				producttitlefiuzaChardonnayArinto: 'Fiuza Chardonnay Arinto',
				cognac: 'Коньяк',
				productarticlfiuzaChardonnayArinto: 'Это сливочное вино с преобладанием Шардоне и долей Аринто отличается спелостью и мягкостью. Привлекательная кислотность уравновешивает открытую текстуру и теплое послевкусие. '
			},
		},
		עברית: {
			translations: {
				'Learn More': 'קרא עוד',
				'Discover the Finest Alcoholic Beverages at R.I.L.L Collection':
					'גלו את המשקאות האלכוהוליים הטובים ביותר ב-R.I.L.L Collection',
				'Best Alcohol from all over the world':
					'האלכוהול הטוב ביותר מכל רחבי העולם',
				'Open Catalog': 'פתח קטלוג',
				Catalog: 'קטלוג',
				'Get In Touch': 'צור קשר',
				'We are in Facebook, Tiktok, & Instagram. You can also contact us via Email.':
					'אנחנו בפייסבוק, בטיקטוק ובאינסטגרם. ניתן גם ליצור איתנו קשר באמצעות דוא"ל.',
				'Page Not Found': 'Страница не найдена',
				'Go Back Home': 'הדף לא נמצא',
				'Contact Us': 'צור קשר',
				Contact: 'צור קשר',
				Reviews: 'הדעת',
				Arak: 'ערק',
				Insights: 'תובנות',
				Permalinks: 'קישורים קבועים',
				Blog: 'בלוג',
				Search: 'לחפש',
				Communities: 'קהילות',
				Vodkino: 'וודקה בטעמים',
				'Our Socials and contacts.': 'הרשתות החברתיות ואנשי הקשר שלנו.',
				'Explore the world of Portugal, Spain, and France with our diverse selection of wines and cognacs. Indulge in the exquisite flavors and aromas presented in our bottles, and discover the true gems of winemaking.':
					'גלו את העולם של פורטוגל, ספרד וצרפת עם מבחר היינות והקוניאק המגוון שלנו. התענגו על הטעמים והניחוחות המעולים המוצגים בבקבוקים שלנו, וגלו את אבני החן האמיתיות של ייצור יין.',
				'Our Catalog': 'הקטלוג שלנו',
				"Leonardo Da Vinci Vodka Pineapple is a premium vodka with a vibrant, tropical twist. Crafted with the finest ingredients, this vodka offers a smooth and refreshing taste, infused with the sweet and tangy essence of ripe pineapples. Each bottle contains 700 ml of pure, distilled perfection, making it the ideal choice for cocktails, mixed drinks, or enjoying neat. Whether you're hosting a party or relaxing at home, Leonardo Da Vinci Vodka Pineapple adds a touch of elegance and flavor to any occasion.":
					"וודקה ליאונרדו דה וינצ'י אננס היא וודקה פרימיום עם טוויסט טרופי מלהיב, מיוצרת מרכיבים משובחים ביותר, הוודקה מציעה טעם חלק ומרענן, עם תמצית מתוקה וחמוצה של אננס בשל. כל בקבוק מכיל 700 מ\"ל של זיקוק טהור ומושלם, מה שהופך אותה לבחירה אידיאלית לקוקטיילים, משקאות מעורבים, או ליהנות ממנה נקייה. בין אם אתם מארחים מסיבה או נרגעים בבית, וודקה ליאונרדו דה וינצ'י אננס מוסיפה נופך של אלגנטיות וטעם לכל אירוע.",
				"Leonardo Da Vinci Vodkino Mango is a premium vodka with an exotic mango twist. Crafted with the finest ingredients, this vodka delivers a smooth and refreshing taste, infused with the rich, fruity essence of ripe mangoes. Each 700 ml bottle is a testament to pure, distilled excellence, making it perfect for creating vibrant cocktails, mixed drinks, or enjoying straight. Whether you're hosting a gathering or unwinding at home, Leonardo Da Vinci Vodkino Mango adds a tropical touch and a burst of flavor to any occasion.":
					"וודקה ליאונרדו דה וינצ'י וודקינו מנגו היא וודקה פרימיום עם טוויסט מנגואי אקזוטי. מיוצרת מרכיבים משובחים ביותר, הוודקה מציעה טעם חלק ומרענן, עם תמצית פירותית עשירה של מנגו בשל. כל בקבוק של 700 מ\"ל הוא עדות למצוינות מזוקקת טהורה, מה שהופך אותה למושלמת להכנת קוקטיילים חיים, משקאות מעורבים, או ליהנות ממנה נקייה. בין אם אתם מארחים אירוע או נרגעים בבית, וודקה ליאונרדו דה וינצ'י וודקינו מנגו מוסיפה נופך טרופי ומפץ טעם לכל הזדמנות.",
					"Leonardo Da Vinci Vodkino Orange is a premium vodka infused with the vibrant essence of juicy oranges. Crafted from the finest ingredients, this vodka delivers a smooth and invigorating taste, highlighted by the fresh, tangy notes of sun-ripened oranges. Each 700 ml bottle embodies distilled perfection, making it ideal for creating refreshing cocktails, mixed drinks, or enjoying neat. Whether you're celebrating a special occasion or relaxing at home, Leonardo Da Vinci Vodkino Orange adds a burst of citrus flavor and a touch of elegance to any gathering.": "ליאונרדו דה וינצ'י וודקינו תפוז היא וודקה פרימיום עם אינפוזיה של תמצית תפוזים עסיסיים ומלאי חיים. מיוצרת מהחומרים האיכותיים ביותר, הוודקה מציעה טעם חלק ומרענן, עם נגיעות חמצמצות של תפוזים בשלים שמשתלבות בצורה מושלמת. כל בקבוק של 700 מ\"ל מגלם מצוינות מזוקקת, מה שהופך אותה לאידיאלית להכנת קוקטיילים מרעננים, משקאות מעורבים או ליהנות ממנה נקייה. בין אם אתם חוגגים אירוע מיוחד או נרגעים בבית, ליאונרדו דה וינצ'י וודקינו תפוז מוסיפה נגיעה של טעם צהוב ומפץ של אלגנטיות לכל התכנסות.",
					"Leonardo Da Vinci Vodkino Lemon is a premium vodka with a zesty lemon infusion. Crafted with high-quality ingredients, this vodka offers a crisp and refreshing taste, enhanced with the bright, tangy essence of fresh lemons. Each 700 ml bottle represents pure, distilled excellence, making it perfect for creating invigorating cocktails, mixed drinks, or enjoying on its own. Whether you're hosting a celebration or relaxing at home, Leonardo Da Vinci Vodkino Lemon adds a splash of citrus elegance and a burst of flavor to any occasion.": "ליאונרדו דה וינצ'י וודקינו לימון היא וודקה פרימיום עם אינפוזיה חמצמצה של לימון. מיוצרת מרכיבים באיכות גבוהה, הוודקה מציעה טעם פריך ומרענן, עם תמצית לימון טרי וזוהרת. כל בקבוק של 700 מ\"ל מייצג מצוינות מזוקקת טהורה, מה שהופך אותה למושלמת להכנת קוקטיילים מרעננים, משקאות מעורבים או ליהנות ממנה נקייה. בין אם אתם חוגגים או נרגעים בבית, ליאונרדו דה וינצ'י וודקינו לימון מוסיפה נגיעה של אלגנטיות חמצמצה ומפץ של טעם לכל הזדמנות.",
				"Leonardo Da Vinci Vodkino Peach is a premium vodka with a delightful peach infusion. Made with the finest ingredients, this vodka offers a smooth and refreshing taste, enriched with the juicy and sweet essence of ripe peaches. Each 700 ml bottle embodies pure, distilled excellence, making it ideal for crafting exquisite cocktails, mixed drinks, or enjoying straight. Whether you're celebrating with friends or relaxing at home, Leonardo Da Vinci Vodkino Peach adds a touch of fruity elegance and a burst of flavor to any occasion.":
					"ליאונרדו דה וינצ'י וודקינו אפרסק היא וודקה פרימיום עם אינפוזיה נעימה של אפרסק. מיוצרת מרכיבים משובחים ביותר, הוודקה מציעה טעם חלק ומרענן, מעושר עם תמצית מתוקה ומזינה של אפרסקים בשלים. כל בקבוק של 700 מ\"ל מגלם מצוינות מזוקקת טהורה, מה שהופך אותה לאידיאלית להכנת קוקטיילים מהודרים, משקאות מעורבים, או ליהנות ממנה נקייה. בין אם אתם חוגגים עם חברים או נרגעים בבית, ליאונרדו דה וינצ'י וודקינו אפרסק מוסיפה נופך פרותי של אלגנטיות ומפץ טעם לכל הזדמנות.",
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
				'Experience the delightful fusion of Porto Cabraco White. With crisp citrus notes, hints of tropical fruit, and a refreshing finish, its perfect for any occasion.':
					"חווה את הפיוז'ן המענג של פורטו קברקו ווייט. עם תווים פריכים של הדרים, רמזים של פרי טרופי וסיומת מרעננת, זה מושלם לכל אירוע.",
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
				'Experience a symphony of flavors with this blend. Cabernet Sauvignon and Touriga Nacional unite to create a rich, balanced wine.':
					'בואו לחוות סימפוניה של טעמים עם תערובת זו. קברנה סוביניון וטוריגה נסיונל מתאחדים ליצירת יין עשיר ומאוזן.',
				'Import and marketing of quality products.':
					'יבוא ושיווק מוצרים איכותיים.',
				'Street 8 Azur': 'החצב 8 אזור',
				'Postal code 5802920, Israel': 'מיקוד 5802920, ישראל',
				'Phone ☎: 03-6542200 Mobile 📱: 052-4448940':
					'טלפון ☎: 03-6542200 נייד 📱: 052-4448940',
				'Email: rillcollection2023@gmail.com':
					'מייל: rillcollection2023@gmail.com',
				'Page Not Found': 'הדף לא נמצא',
				Home: 'בית',
				'Welcome!': 'ברוך הבא!',
				'Verify that you are legal age.': 'ודא שאתה בגיל החוקי',
				"I'm above 18": 'אני מעל 18',
				"I'm under 18": 'אני מתחת ל 18',
				'All Categories': 'כל הקטגוריות',
				'Warning: contains alcohol, it is recommended to avoid excessive drinking':
					'אזהרה: מכיל אלכוהול מומלץ להימנע משתיה מופרזת',
				'Warning! Excessive consumption of alcohol is life-threatening and harmful to health':
					'אזהרה! צריכה מופרזת של אלכוהול מסכנת חיים ומזיקה לבריאות',
				Wine: 'יַיִן',
				'Port wine': 'יַיִן פּוֹרט',
				Cognac: 'קוניאק',
			},
		},
	},
	lng: 'he',
	fallbackLng: 'he',
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

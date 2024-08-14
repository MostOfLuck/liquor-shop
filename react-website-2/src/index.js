import i18n from 'i18next'
import ReactDOM from 'react-dom/client'
import { initReactI18next } from 'react-i18next'
import App from './App'
import './index.css'

i18n.use(initReactI18next).init({
	resources: {
		English: {
			translations: {
				Vodkino: 'Vodka Flavors',
				Port: 'Port 🍇',
				Arak: 'Arak 🌿',
				Beer: 'Beer 🍺',
				Vodka: 'Vodka ❄️',
				spirits: 'Vodka with flavors 🍒',
				'product.article.oceaniusProdutoDePortugal2019': 'This is an exquisite wine, combining fresh fruit notes and softness characteristic of Portuguese wines',
				'Warning about alcohol': 'Alcohol is harmful to your health!',
				Wine: 'Wine 🍷',
				Cognac: 'Cognac 🥂',
				'product.article.portoCabracoRose': 'It is a refreshing pink port wine with fruity aromas and the bottle volume is 750 ml.',
				'product.article.portoCabracoWhite': 'It is a white port wine with a mild and sweet flavor and the bottle volume is 750 ml.',
				productarticlfiuzaChardonnayArinto:
					'This creamy wine, dominated by Chardonnay and a fraction of Arinto.',
					'product.article.fiuzaNativeReserva2018': 'This is an elegant wine with a rich taste, where the notes of the cartoon dominate, complemented by the exquisite freshness of Arinto.',
				warning:
					'Warning: Excessive alcohol consumption can be harmful to your health. Please drink responsibly.',
					'product.article.portoCabracoRuby': 'It is a rich red port wine with bright fruit notes, the bottle volume is 750 ml.'
			},
		},
		Русский: {
			translations: {
				Description: 'Описание',
				HOME: 'ГЛАВНАЯ',
				CATALOG: 'КАТАЛОГ',
				CONTACT: 'КОНТАКТ',
				'ALL PRODUCTS': 'ВСЕ ПРОДУКТЫ',
				'More Details': 'Подробнее',
				'Bottle Volume': 'Объем бутылки',
				Origin: 'Страна',
				'Alcohol Strength': 'Содержание алкоголя',
				'Alcohol 🍾': 'Алкоголь 🍾',
				Portugal: 'Португалия',
				'Show All Results': 'ВСЕ РЕЗУЛЬТАТЫ',
				spirits: 'Водка со вкусами 🍒',
				Search: 'Поиск',
				Port: 'Портвейн 🍇',
				'product.article.oceaniusProdutoDePortugal2019': 'Это изысканное вино, сочетающее в себе свежие фруктовые ноты и мягкость, характерную для португальских вин',
				'product.article.fiuzaNativeReserva2018': 'Это элегантное вино с насыщенным вкусом, где доминируют ноты Шардоне, дополненные изысканной свежестью Аринто.',
				'Warning about alcohol': 'Алкоголь вреден для вашего здоровья!',
				'Wine Fiuza Chardonnay Arinto Native Reserva 2017': 'Вино Fiuza Chardonnay Arinto Native Reserva 2017',
				'productdetailsfiuzaChardonnayArinto': 'dda',
				'Port wine Cabraco Ruby': 'Портвейн Cabraco Ruby',
				'Port wine Cabraco White': 'Портвейн Cabraco White',
				'Port wine Cabraco Rose': 'Портвейн Cabraco Rose',
				'Cognac Maxime Trijol': 'Коньяк Maxime Trijol',
				'Cognac Maxime Trijol Vsop': 'Коньяк Maxime Trijol Vsop',
				'Cognac Maxime Trijol Small': 'Коньяк Maxime Trijol Small',
				'Wine Fiuza Native Reserva 2018': 'Вино Fiuza Native Reserva 2018',
				'Wine Oceanius Produto De Portugal 2019':
					'Вино Oceanius Produto De Portugal 2019',
				'Wine Fiuza Cabernet Sauvignon': 'Вино Fiuza Cabernet Sauvignon',
				'Wine Adega De Borba': 'Вино Adega De Borba',
				'Wine Fiuza Merilot 2015': 'Вино Fiuza Merilot 2015',
				'Wine Montes Carlos DOCA lentejo Tinto2016':
					'Вино Montes Carlos DOCA lentejo Tinto2016',
				'Wine Bianco Chardonnay AllSeasons Collection 2020':
					'Вино Bianco Chardonnay AllSeasons Collection 2020',
				'Wine Spain Velas Corsarias': 'Вино Spain Velas Corsarias',
				'Wine Summer Merlot AllSeasons Collection 2020':
					'Вино Summer Merlot AllSeasons Collection 2020',
				'Cognac Maxime Trijol 3L': 'Коньяк Maxime Trijol 3L',

				'Learn More': 'Узнать больше',
				Search: 'Поиск',
				'Cognac Maxime Trijol Eiffel Tower': 'Коньяк Maxime Trijol Eiffel Tower',
				'Discover the Finest Alcoholic Beverages at R.I.L.L Collection':
					'Откройте для себя лучшие алкогольные напитки в R.I.L.L Collection',
				'Best Alcohol from all over the world': 'Лучший алкоголь со всего мира',
				'Open Catalog': 'ВЕСЬ КАТАЛОГ',
				Catalog: 'Каталог',
				'Get In Touch': 'Свяжитесь с нами',
				'We are in Facebook, Tiktok, & Instagram. You can also contact us via Email.':
					'Мы есть в Facebook, Tiktok и Instagram. Вы также можете связаться с нами по электронной почте.',
				'Page Not Found': 'Страница не найдена',
				'Go Back Home': 'Вернутся назад',
				'Contact Us': 'Свяжитесь с нами',
				Contact: 'Контакты',
				Reviews: 'Отзывы',
				Insights: 'Идеи',
				Permalinks: 'Постоянные ссылки',
				Blog: 'Блог',
				Beer: 'Пиво 🍺',
				Vodka: 'Водка ❄️',
				'Port wine': 'Портвейн',
				Wine: 'Вино 🍷',
				Arak: 'Арак 🌿',
				'product.article.portoCabracoRose': 'Это освежающий розовый портвейн с фруктовыми ароматами, объем бутылки составляет 750 мл.',
				'product.article.portoCabracoWhite': 'Это белый портвейн с мягким и сладким вкусом, объем бутылки составляет 750 мл.',
				warning:
					'Внимание: Чрезмерное употребление алкоголя вредит вашему здоровью.',
				Cognac: 'Коньяк 🥂',
				'Popular product categories': 'Популярные категории товаров',
				Communities: 'Сообщество',
				'product.article.portoCabracoRuby': 'Это насыщенный красный портвейн с яркими фруктовыми нотами, объем бутылки составляет 750 мл.',
				'Our Socials and contacts.': 'Наши социальные сети и контакты.',
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
				portWine: 'Портвейн',
				producttitlefiuzaChardonnayArinto: 'Fiuza Chardonnay Arinto',
				cognac: 'Коньяк',
				productarticlfiuzaChardonnayArinto:
					'Это сливочное вино с преобладанием Шардоне и долей Аринто. ',
			},
		},
		עברית: {
			translations: {
				Beer: 'בִּירָה 🍺',
				Vodka: 'ווֹדקָה ❄️',
				Wine: 'יַיִן 🍷',
				Arak: 'ערק 🌿',
				Port: 'יַיִן פּוֹרט 🍇',
				Description: 'תֵאוּר',
				'More Details': 'פרטים נוספים',
				'Alcohol Strength': 'כוח אלכוהול',
				Origin: 'מָקוֹר',
				'Bottle Volume': 'נפח בקבוקים',
				'Wine Fiuza Native Reserva 2018': 'יין פיוזה רזרבת 2018',
				'Wine Oceanius Produto De Portugal 2019': 'מוצר יין אושניוס מפורטוגל 2019',
				'product.article.oceaniusProdutoDePortugal2019': 'זהו יין נהדר, המשלב תווי פירות טריים ורכות מאפיינים של יינות פורטוגזים',
				productarticlfiuzaChardonnayArinto:
				'זהו יין שמנת עם דומיננטיות של שרדונטה ומניותיו של ארינטו. ',
				'product.article.fiuzaNativeReserva2018': 'זהו יין אלגנטי עם טעם עשיר, בו תווים של הקריקטורה שולטים, המשלימים את הרעננות המעודנת של ארינטו.',
				'Warning about alcohol': 'אלכוהול מזיק לבריאותך!',
				'product.article.portoCabracoRose': 'זהו פורט ורוד מרענן עם ניחוחות פירותיים, נפח הבקבוק 750 מ"ל.',
				'product.article.portoCabracoWhite': 'זהו יין פורט אדום עשיר עם תווי פרי בהירים, נפח הבקבוק הוא 750 מ"ל.',
				'product.article.portoCabracoRuby': 'זהו יין פורט אדום עשיר עם תווי פרי בהירים, נפח הבקבוק הוא 750 מ"ל.',
				warning:
					'אזהרה: צריכת אלכוהול מופרזת עלולה להזיק לבריאותך. אנא שתה באחריות',
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
				'Wine Fiuza Chardonnay Arinto Native Reserva 2017': 'יין פיוזה שרדונה ארינטו יליד רזרבה 2017 ',
				'Alcohol 🍾': 'אלכוהול 🍾',
				Insights: 'תובנות',
				'Popular product categories': 'קטגוריות מוצרים פופולריות',
				Permalinks: 'קישורים קבועים',
				Blog: 'בלוג',
				Search: 'לחפש',
				Communities: 'קהילות',
				Vodkino: 'וודקה בטעמים',
				'Our Socials and contacts.': 'הרשתות החברתיות ואנשי הקשר שלנו.',
				'Our Catalog': 'הקטלוג שלנו',
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
				'Welcome!': 'ברוכים הבאים!',
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

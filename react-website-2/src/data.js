import { SiOpenaigym } from 'react-icons/si'
import '../src/index.css'

export const links = [
	{
		name: 'Home',
		path: '/',
	},
	{
		name: 'Catalog',
		path: '/catalog',
	},
    {
		name: 'Contact',
		path: '/contact',
	},
]
/* You can change cards here*/
export const products = [
	{
		id: 1,
		icon: <SiOpenaigym />,
		title: 'Wine',
		info: 'This is the day that the lord has made. We will rejoice!',
		path: '/catalog',
        imageSrc: "../src/images/wine1.png"
	},
	{
		id: 2,
		icon: <SiOpenaigym />,
		title: 'Cognac',
		info: 'This is the day that the lord has made. We will rejoice!',
		path: '/catalog',
        imageSrc: "../src/images/wine1.png"
	},
	{
		id: 3,
		icon: <SiOpenaigym />,
		title: 'Port',
		info: 'This is the day that the lord has made. We will rejoice!',
		path: '/catalog',
        imageSrc: '/images/src/wine1.png' 
	},
]
export const testimonials = [
	{
		id: 1,
		name: 'Alexander',
		quote:
'אני מאוד מרוצה משיתוף הפעולה עם החנות. מיד התקשרנו והבהרנו. קיבלתי את ההזמנה שלי למחרת.  האריזה סופר. הצלחה ושגשוג.',
		avatar: require('./images/avatar1.png'),
	},
	{
		id: 2,
		name: 'Daniel',
		quote:
			"תודה רבה לצוות החנות. הם תמיד יתקשרו אליך בחזרה ויסכימו על ההזמנה. השיגור מהיר. זו לא הפעם הראשונה שאני מבצע הזמנה, ואני מקווה לשיתוף פעולה נוסף",
		avatar: require('./images/avatar1.png'),
	},
	{
		id: 3,
		name: 'Eden',
		quote:
			'שירות מעולה! הזמנתי מוצרים כבר כמה פעמים, ובכל פעם החשיפות חיוביות בלבד. משוב מיידי, משלוח מיידי של ההזמנה. תודה על המקצועיות והשירות האיכותי',
		avatar: require('./images/avatar1.png'),
	},
	{
		id: 4,
		name: 'Boris',
		quote:
			'מאוד מרוצה מחוויית הקנייה בחנות זו. הצוות הקשוב מוכן תמיד לעזור ולייעץ. ההזמנה מגיעה במהירות ובמצב מצוין. אני שמח שבחרתי בחנות הזו, ואני ממליץ עליה בביטחון לכל החברים שלי',
		avatar: require('./images/avatar1.png'),
	},
	{
		id: 5,
		name: 'Noa',
		quote:
			'תודה רבה לצוות החנות על רמת השירות הגבוהה! הזמנתי מוצרים שונים שוב ושוב, ובכל פעם הייתי מרוצה. ייעוץ מקצועי, משלוח מהיר וסחורה איכותית. אני מקווה לשיתוף פעולה ארוך טווח וממליץ על חנות זו לכל מי שמעריך אמינות ואיכות',
		avatar: require('./images/avatar1.png'),
	},
]
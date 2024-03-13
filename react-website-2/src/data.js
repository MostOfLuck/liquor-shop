import { SiOpenaigym } from 'react-icons/si'
import '../src/index.css'
import fiuza from '../src/productImages2/774A7541.jpg'
import fuza from '../src/productImages2/774A7547.jpg'
import tequilaImage from '../src/images/Tequila.png'
import wineImage from '../src/images/wine1.png'

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
export const Items = [
	{
		id: 1,
		name: 'Vine',
		category: 'Vine',
		image: fiuza,
		images: [fuza],
		title: <h1 className='product__title'>Fiuza</h1>,
		article: (
			<p className='product__article'>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
				provident laboriosam vitae quibusdam magni libero natus suscipit minima
				accusantium deserunt harum distinctio commodi placeat voluptate
				cupiditate asperiores eveniet, iste eos!
			</p>
		),
	},

	{
		id: 2,
		name: 'Vodka',
		category: 'Vodka',
		image: wineImage,
		images: [wineImage],
		title: <h1 className='product__title'>Vine</h1>,
		article: (
			<p className='product__article'>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
				provident laboriosam vitae quibusdam magni libero natus suscipit minima
				accusantium deserunt harum distinctio commodi placeat voluptate
				cupiditate asperiores eveniet, iste eos!
			</p>
		),
	},
	{ id: 3, name: 'Tequila', image: wineImage },
	{ id: 4, name: 'Martini', image: tequilaImage },
	{ id: 5, name: 'Спортивные шорты', image: wineImage },
	{ id: 6, name: 'Спортивные шорты', image: tequilaImage },
	{ id: 7, name: 'Спортивные шорты', image: wineImage },
	{ id: 8, name: 'Спортивные шорты', image: tequilaImage },
	// Add other products here
]

/* You can change cards here*/
export const products = [
	{
		id: 1,
		icon: <SiOpenaigym />,
		title: 'Vine',
		info: 'This is the day that the lord has made. We will rejoice!',
		path: '/catalog',
        imageSrc: "../src/images/wine1.png"
	},
	{
		id: 2,
		icon: <SiOpenaigym />,
		title: 'Tequila',
		info: 'This is the day that the lord has made. We will rejoice!',
		path: '/catalog',
        imageSrc: '/images/src/wine1.png' 
	},
	{
		id: 3,
		icon: <SiOpenaigym />,
		title: 'Vodka',
		info: 'This is the day that the lord has made. We will rejoice!',
		path: '/catalog',
        imageSrc: '/images/src/wine1.png' 
	},
	{
		id: 4,
		icon: <SiOpenaigym />,
		title: 'Beer',
		info: 'This is the day that the lord has made. We will rejoice!',
		path: '/catalog',
        imageSrc: '/images/src/wine1.png' 
	},
    {
		id: 5,
		icon: <SiOpenaigym />,
		title: 'Vine',
		info: 'This is the day that the lord has made. We will rejoice!',
		path: '/catalog',
        imageSrc: "../src/images/wine1.png"
	},
    
    {
		id: 6,
		icon: <SiOpenaigym />,
		title: 'Vine',
		info: 'This is the day that the lord has made. We will rejoice!',
		path: '/catalog',
        imageSrc: "../src/images/wine1.png"
	},

    {
		id: 7,
		icon: <SiOpenaigym />,
		title: 'Vine',
		info: 'This is the day that the lord has made. We will rejoice!',
		path: '/catalog',
        imageSrc: "../src/images/wine1.png"
	},

    {
		id: 8,
		icon: <SiOpenaigym />,
		title: 'Vine',
		info: 'This is the day that the lord has made. We will rejoice!',
		path: '/catalog',
        imageSrc: "../src/images/wine1.png"
	},
]
export const testimonials = [
	{
		id: 1,
		name: 'Alexander',
		quote:
'		Очень доволен сотрудничеством с магазином. Оперативно созвонились, уточнили. Заказ получил на следующий день.  Упаковка супер. Успехов и процветания.',
		avatar: require('./images/avatar1.jpg'),
	},
	{
		id: 2,
		name: 'Daniel Vinyo',
		quote:
			'Harum quaerat hic consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum this and that odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.',
		job: 'Software Egineer',
		avatar: require('./images/avatar2.jpg'),
	},
	{
		id: 3,
		name: 'Edem Quist',
		quote:
			'Quaerat hic praesentium consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.',
		job: 'University Lecturer',
		avatar: require('./images/avatar3.jpg'),
	},
	{
		id: 4,
		name: 'Grace Lavoe',
		quote:
			'Cupiditate deleniti sint consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.',
		job: 'Talking Parrot',
		avatar: require('./images/avatar4.jpg'),
	},
	{
		id: 5,
		name: 'Nana Yaa Dankwa',
		quote:
			'Maxime minima cumque sit amet consectetur adipisicing elit. Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates a! Maxime minima cumque aut? In expedita numquam consectetur non officia iusto.',
		job: 'Pharmacist',
		avatar: require('./images/avatar5.jpg'),
	},
]
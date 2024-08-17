import fiuza from '../../productImages2/774A7547 (1).webp'
import PortoCabracoRuby1 from '../../productImages2/774A7547 (1).webp'
import PortoCabracoRuby2 from '../../productImages2/774A7575.png'
import PortoCabacoWhite from '../../productImages2/774A7617 (1).webp'
import PortoCabacoRose from '../../productImages2/774A7663 (1).webp'
import MaximeTrijolCognac from '../../productImages2/774A7698.webp'
import MaximeTrijolCognac2 from '../../productImages2/774A7765 (1).webp'
import MaximeTrijolCognacVsop2 from '../../productImages2/774A7823 (1).webp'
import MaximeTrijolCognacSmall2 from '../../productImages2/774A7896 (1).webp'
import FiuzaNativeReserva2018 from '../../productImages2/774A7991 (1).webp'
import Oceanius from '../../productImages2/774A8055 (3).webp'
import FiuzaCabernetSauvignon from '../../productImages2/774A8093 (1).webp'
import AdegaDeBorba from '../../productImages2/774A8127 (1).webp'
import FiuzaMerilot2015 from '../../productImages2/774A8163 (1).webp'
import MontesCarlos from '../../productImages2/774A8202 (1).webp'
import BiancoCChadronay from '../../productImages2/774A8344 (1).webp'
import VelasCorsarias from '../../productImages2/774A8374 (1).webp'
import SummerMerlotAllSeasonsCollection from '../../productImages2/774A8402 (1).webp'
import MaximeTrijolCognac3litr2 from '../../productImages2/774A8501 (1).webp'
import ArakOrange from '../../productImages2/ArakOrange (1).webp'
import ArakLime from '../../productImages2/araklimon.png'
import ArakLemon from '../../productImages2/araklemon.png'
import VodkinaMango2 from '../../productImages2/VodinoMagno2 (1).webp'
import VodkinaYellow from '../../productImages2/Vodkino yellow (1).webp'
import VodkinoLemon from '../../productImages2/VodkinoLemon.png'
import VodkinoOrange from '../../productImages2/VodkinoOrange (1).webp'
import VodkinoPeach from '../../productImages2/VodkinoPeach (1).webp'
import EichbaumBeer from '../../productImages2/EichbaumBeer.webp'
import EichbaumBeerHelles from '../../productImages2/EichbaumBeerHelles.webp'
import EichbaumBeerPilsener from '../../productImages2/EichbaumPilsener.webp'
import SuperiotStout from '../../productImages2/SuperiorBeerStout.webp'
import Chernigivske from '../../productImages2/Chernigivske.webp'
import KrauzerBrau from '../../productImages2/KrauzerBrau.webp'
import Taller from '../../productImages2/Taller.webp'
import CognacSikvaruli from  '../../productImages2/CognacSikvaruli.webp'
import CognacSikvaruli5 from  '../../productImages2/CognacSikvaruli5.webp'
import VodkaRusStandart from '../../productImages2/VodkaRusStandart1896.webp'
import fiuzaHover from '../../productImages2/fiuza-chardonnay-white-2022.jpg'
import hoverSauvignon from '../../productImages2/hOVERSAUVOURGN.png'
import VodkaNepoborna from '../../productImages2/Nepoborna.png'
import VodkaIcePalace from '../../productImages2/ICEPalaceVodka.png'
import VodkaPrimeNoir from '../../productImages2/VodkaPrimeNoir.png'
import VodkaPrimeBlanche from '../../productImages2/PrimeBlanche.png'
import VodkaIcePalace500ml from '../../productImages2/VodkaIcePalace500nl.png'
import VodkaManhattan from '../../productImages2/VodkaManhattan.png'
import VodkaMoskva from '../../productImages2/VodkaMoskva.png'
import './catalog.css'
import './rtl.css'

export const items = [
	{
		id: 1,
		name: 'Wine Fiuza Chardonnay Arinto Native Reserva 2017',
		category: 'Wine',
		image: fiuza, // основное изображение
		hoverImage: fiuzaHover, // изображение при наведении
		images: [fiuza, fiuzaHover], // массив изображений
		titleKey: 'producttitlefiuzaChardonnayArinto',
		articleKey: 'productarticlfiuzaChardonnayArinto',
		detailsKey: 'productdetailsfiuzaChardonnayArinto',
		alcoholStrength: '13.5%',
		origin: 'Portugal',
		bottleVolume: '750ml', 
	  },
	  {
		id: 2,
		name: 'Port wine Cabraco Ruby',
		category: 'Port',
		image: PortoCabracoRuby2,
		images: [PortoCabracoRuby1],
		titleKey: 'product.title.portoCabracoRuby',
		articleKey: 'product.article.portoCabracoRuby',
		alcoholStrength: '20%',
		origin: 'Portugal',
		bottleVolume: '750ml',
	  },
	  {
		id: 3,
		name: 'Port wine Cabraco White',
		category: 'Port',
		image: PortoCabacoWhite,
		images: [PortoCabacoWhite],
		titleKey: 'product.title.portoCabracoWhite',
		articleKey: 'product.article.portoCabracoWhite',
		alcoholStrength: '19%',
		origin: 'Portugal',
		bottleVolume: '750ml',
	  },
	  {
		id: 4,
		name: 'Port wine Cabraco Rose',
		category: 'Port',
		image: PortoCabacoRose,
		images: [PortoCabacoRose],
		titleKey: 'product.title.portoCabracoRose',
		articleKey: 'product.article.portoCabracoRose',
		alcoholStrength: '19.5%',
		origin: 'Portugal',
		bottleVolume: '750ml',
	  },
	  {
		id: 5,
		name: 'Cognac Maxime Trijol Eiffel Tower',
		category: 'Cognac',
		image: MaximeTrijolCognac2,
		images: [MaximeTrijolCognac],
		titleKey: 'product.title.maximeTrijolCognac',
		articleKey: 'product.article.maximeTrijolCognac',
		alcoholStrength: '40%',
		origin: 'France',
		bottleVolume: '700ml',
	  },
	  {
		id: 6,
		name: 'Cognac Maxime Trijol Vsop',
		category: 'Cognac',
		image: MaximeTrijolCognacVsop2,
		images: [MaximeTrijolCognacVsop2],
		titleKey: 'product.title.maximeTrijolCognacVsop',
		articleKey: 'product.article.maximeTrijolCognacVsop',
		alcoholStrength: '40%',
		origin: 'France',
		bottleVolume: '700ml',
	  },
	  {
		id: 7,
		name: 'Cognac Maxime Trijol Small',
		category: 'Cognac',
		image: MaximeTrijolCognacSmall2,
		images: [MaximeTrijolCognacSmall2],
		titleKey: 'product.title.maximeTrijolCognacSmall',
		articleKey: 'product.article.maximeTrijolCognacSmall',
		alcoholStrength: '40%',
		origin: 'France',
		bottleVolume: '350ml',
	  },
	  {
		id: 8,
		name: 'Wine Fiuza Native Reserva 2018',
		category: 'Wine',
		image: FiuzaNativeReserva2018,
		images: [FiuzaNativeReserva2018],
		titleKey: 'producttitlefiuzaNativeReserva2018',
		articleKey: 'product.article.fiuzaNativeReserva2018',
		alcoholStrength: '13%',
		origin: 'Portugal',
		bottleVolume: '750ml',
	  },
	  {
		id: 9,
		name: 'Wine Oceanius Produto De Portugal 2019',
		category: 'Wine',
		image: Oceanius,
		images: [Oceanius],
		titleKey: 'product.title.oceaniusProdutoDePortugal2019',
		articleKey: 'product.article.oceaniusProdutoDePortugal2019',
		alcoholStrength: '12.5%',
		origin: 'Portugal',
		bottleVolume: '750ml',
	  },
	  {
		id: 10,
		name: 'Wine Fiuza Cabernet Sauvignon',
		category: 'Wine',
		image: FiuzaCabernetSauvignon,
		images: [FiuzaCabernetSauvignon],
		hoverImage: hoverSauvignon, // изображение при наведении
		images: [FiuzaCabernetSauvignon, hoverSauvignon], // массив изображений
		titleKey: 'product.title.fiuzaCabernetSauvignon',
		articleKey: 'product.article.fiuzaCabernetSauvignon',
		alcoholStrength: '13%',
		origin: 'Portugal',
		bottleVolume: '750ml',
	  },
	  {
		id: 11,
		name: 'Wine Adega De Borba',
		category: 'Wine',
		image: AdegaDeBorba,
		images: [AdegaDeBorba],
		titleKey: 'product.title.adegaDeBorba',
		articleKey: 'product.article.adegaDeBorba',
		alcoholStrength: '13%',
		origin: 'Portugal',
		bottleVolume: '750ml',
	  },
	  {
		id: 12,
		name: 'Wine Fiuza Merilot 2015',
		category: 'Wine',
		image: FiuzaMerilot2015,
		images: [FiuzaMerilot2015],
		titleKey: 'product.title.fiuzaMerilot2015',
		articleKey: 'product.article.fiuzaMerilot2015',
		alcoholStrength: '13%',
		origin: 'Portugal',
		bottleVolume: '750ml',
	  },
	  {
		id: 13,
		name: 'Wine Montes Carlos DOCA lentejo Tinto 2016',
		category: 'Wine',
		image: MontesCarlos,
		images: [MontesCarlos],
		titleKey: 'product.title.montesCarlosDOCAlentejoTinto2016',
		articleKey: 'product.article.montesCarlosDOCAlentejoTinto2016',
		alcoholStrength: '13.5%',
		origin: 'Portugal',
		bottleVolume: '750ml',
	  },
	  {
		id: 14,
		name: 'Wine Bianco Chardonnay AllSeasons Collection 2020',
		category: 'Wine',
		image: BiancoCChadronay,
		images: [BiancoCChadronay],
		titleKey: 'product.title.biancoCChardonnayAllSeasonsCollection2020',
		articleKey: 'product.article.biancoCChardonnayAllSeasonsCollection2020',
		alcoholStrength: '12.5%',
		origin: 'Italy',
		bottleVolume: '750ml',
	  },
	  {
		id: 15,
		name: 'Wine Spain Velas Corsarias',
		category: 'Wine',
		image: VelasCorsarias,
		images: [VelasCorsarias],
		titleKey: 'product.title.spainVelasCorsarias',
		articleKey: 'product.article.spainVelasCorsarias',
		alcoholStrength: '13%',
		origin: 'Spain',
		bottleVolume: '750ml',
	  },
	  {
		id: 16,
		name: 'Wine Summer Merlot AllSeasons Collection 2020',
		category: 'Wine',
		image: SummerMerlotAllSeasonsCollection,
		images: [SummerMerlotAllSeasonsCollection],
		titleKey: 'product.title.summerMerlotAllSeasonsCollection2020',
		articleKey: 'product.article.summerMerlotAllSeasonsCollection2020',
		alcoholStrength: '13%',
		origin: 'France',
		bottleVolume: '750ml',
	  },
	  {
		id: 17,
		name: 'Cognac Maxime Trijol 3L',
		category: 'Cognac',
		image: MaximeTrijolCognac3litr2,
		images: [MaximeTrijolCognac3litr2],
		titleKey: 'product.title.maximeTrijolCognac3L',
		articleKey: 'product.article.maximeTrijolCognac3L',
		alcoholStrength: '40%',
		origin: 'France',
		bottleVolume: '3000ml',
	  },
	  {
		id: 18,
		name: 'arakOrange',
		category: 'Arak',
		image: ArakOrange,
		images: [ArakOrange],
		titleKey: 'product.title.arakOrange',
		articleKey: 'product.article.arakOrange',
		alcoholStrength: '50%',
		origin: 'Lebanon',
		bottleVolume: '750ml',
	  },
	  {
		id: 19,
		name: 'vodkinaMango',
		category: 'spirits',
		image: VodkinaMango2,
		images: [VodkinaMango2],
		titleKey: 'product.title.vodkinaMango',
		articleKey: 'product.article.vodkinaMango',
		alcoholStrength: '40%',
		origin: 'Russia',
		bottleVolume: '700ml',
	  },
	  {
		id: 20,
		name: 'vodkinaYellow',
		category: 'spirits',
		image: VodkinaYellow,
		images: [VodkinaYellow],
		titleKey: 'product.title.vodkinaYellow',
		articleKey: 'product.article.vodkinaYellow',
		alcoholStrength: '40%',
		origin: 'Russia',
		bottleVolume: '700ml',
	  },
	  {
		id: 21,
		name: 'vodkinaLemon',
		category: 'spirits',
		image: VodkinoLemon,
		images: [VodkinoLemon],
		titleKey: 'product.title.vodkinaLemon',
		articleKey: 'product.article.vodkinaLemon',
		alcoholStrength: '40%',
		origin: 'Russia',
		bottleVolume: '700ml',
	  },
	  {
		id: 22,
		name: 'vodkinaOrange',
		category: 'spirits',
		image: VodkinoOrange,
		images: [VodkinoOrange],
		titleKey: 'product.title.vodkinaOrange',
		articleKey: 'product.article.vodkinaOrange',
		alcoholStrength: '40%',
		origin: 'Russia',
		bottleVolume: '700ml',
	  },
	  {
		id: 23,
		name: 'vodkinaPeach',
		category: 'spirits',
		image: VodkinoPeach,
		images: [VodkinoPeach],
		titleKey: 'product.title.vodkinaPeach',
		articleKey: 'product.article.vodkinaPeach',
		alcoholStrength: '40%',
		origin: 'Russia',
		bottleVolume: '700ml',
	  },
	  {
		id: 24,
		name: 'ArakLime',
		category: 'Arak',
		image: ArakLime,
		images: [ArakLime],
		titleKey: 'product.title.arakOrange',
		articleKey: 'product.article.arakOrange',
		alcoholStrength: '50%',
		origin: 'Lebanon',
		bottleVolume: '750ml',
	  },
	  {
		id: 25,
		name: 'ArakLemon',
		category: 'Arak',
		image: ArakLemon,
		images: [ArakLemon],
		titleKey: 'product.title.arakOrange',
		articleKey: 'product.article.arakOrange',
		alcoholStrength: '50%',
		origin: 'Lebanon',
		bottleVolume: '750ml',
	  },
	  {
		id: 26,
		name: 'Beer Eichbaum Hefeweizen Hell',
		category: 'Beer',
		image: EichbaumBeer,
		images: [EichbaumBeer],
		titleKey: 'product.title.Eichbaum',
		articleKey: 'product.article.Eichbaum',
		alcoholStrength: '5.3%',
		origin: 'Germany',
		bottleVolume: '500ml',
	  },
	  {
		id: 27,
		name: 'Beer Eichbaum Helles Large Hell',
		category: 'Beer',
		image: EichbaumBeerHelles,
		images: [EichbaumBeerHelles],
		titleKey: 'product.title.EichbaumHell',
		articleKey: 'product.article.EichbaumHell',
		alcoholStrength: '5.3%',
		origin: 'Germany',
		bottleVolume: '500ml',
	  },
	  {
		id: 28,
		name: 'Beer Eichbaum Pilsener',
		category: 'Beer',
		image: EichbaumBeerPilsener,
		images: [EichbaumBeerPilsener],
		titleKey: 'product.title.EichbaumPilsener',
		articleKey: 'product.article.EichbaumPilsener',
		alcoholStrength: '4.9%',
		origin: 'Germany',
		bottleVolume: '500ml',
	  },
	  {
		id: 29,
		name: 'Beer Superior Stout',
		category: 'Beer',
		image: SuperiotStout,
		images: [SuperiotStout],
		titleKey: 'product.title.Superior',
		articleKey: 'product.article.Superior',
		alcoholStrength: '6%',
		origin: 'Ireland',
		bottleVolume: '500ml',
	  },

	{
		id: 30,
		name: 'Beer Chernigivske',
		category: 'Beer',
		image: Chernigivske,
		images: [Chernigivske],
		titleKey: 'product.title.Chernigivske',
		articleKey: 'product.article.Chernigivske',
	},

	{
		id: 31,
		name: 'Beer Krauzer Brau',
		category: 'Beer',
		image: KrauzerBrau,
		images: [KrauzerBrau],
		titleKey: 'product.title.KrauzerBrau',
		articleKey: 'product.article.KrauzerBrau',
	},

	{
		id: 32,
		name: 'Beer Taller',
		category: 'Beer',
		image: Taller,
		images: [Taller],
		titleKey: 'product.title.Taller',
		articleKey: 'product.article.Taller',
	},

	{
		id: 33,
		name: 'Cognac Sikvaruli 3',
		category: 'Cognac',
		image: CognacSikvaruli,
		images: [CognacSikvaruli],
		titleKey: 'product.title.CognacSikvaruli',
		articleKey: 'product.article.CognacSikvaruli',
	},

	{
		id: 34,
		name: 'Cognac Sikvaruli 5',
		category: 'Cognac',
		image: CognacSikvaruli5,
		images: [CognacSikvaruli5],
		titleKey: 'product.title.CognacSikvaruli5',
		articleKey: 'product.article.CognacSikvaruli5',
	},

	{
		id: 35,
		name: 'Vodka Russian Standart 1894',
		category: 'Vodka',
		image: VodkaRusStandart,
		images: [VodkaRusStandart],
		titleKey: 'product.title.VodkaRusStandart',
		articleKey: 'product.article.VodkaRusStandart',
	},

	{
		id: 36,
		name: 'Vodka Nepoborna',
		category: 'Vodka',
		image: VodkaNepoborna,
		images: [VodkaNepoborna],
		titleKey: 'product.title.VodkaNepoborna',
		articleKey: 'product.article.VodkaNepoborna',
		origin: 'Ukraine',
		alcoholStrength: '40%',
		bottleVolume: '700ml'
	},

	{
		id: 37,
		name: 'Vodka Ice Palace 1l',
		category: 'Vodka',
		image: VodkaIcePalace,
		images: [VodkaIcePalace],
		titleKey: 'product.title.VodkaIcePalace',
		articleKey: 'product.article.VodkaIcePalace',
		origin: 'Ukraine',
		alcoholStrength: '40%',
		bottleVolume: '1l'
	},

	{
		id: 38,
		name: 'Vodka Prime Noir',
		category: 'Vodka',
		image: VodkaPrimeNoir,
		images: [VodkaPrimeNoir],
		titleKey: 'product.title.VodkaPrimeNoir',
		articleKey: 'product.article.VodkaPrimeNoir',
		origin: 'Ukraine',
		alcoholStrength: '40%',
		bottleVolume: '500ml'
	},

	{
		id: 39,
		name: 'Vodka Prime Blanche',
		category: 'Vodka',
		image: VodkaPrimeBlanche,
		images: [VodkaPrimeBlanche],
		titleKey: 'product.title.VodkaPrimeBlanche',
		articleKey: 'product.article.VodkaPrimeBlanche',
		origin: 'Ukraine',
		alcoholStrength: '40%',
		bottleVolume: '500ml'
	},

	{
		id: 40,
		name: 'Vodka Ice Palace 500ml',
		category: 'Vodka',
		image: VodkaIcePalace500ml,
		images: [VodkaIcePalace500ml],
		titleKey: 'product.title.VodkaIcePalace500',
		articleKey: 'product.article.VodkaIcePalace500',
		origin: 'Ukraine',
		alcoholStrength: '40%',
		bottleVolume: '500ml'
	},

	{
		id: 41,
		name: 'Vodka Manhattan',
		category: 'Vodka',
		image: VodkaManhattan,
		images: [VodkaManhattan],
		titleKey: 'product.title.VodkaManhattan',
		articleKey: 'product.article.VodkaManhattan',
		origin: 'Israel',
		alcoholStrength: '37.5%',
		bottleVolume: '700ml'
	},

	{
		id: 42,
		name: 'Vodka Moskva',
		category: 'Vodka',
		image: VodkaMoskva,
		images: [VodkaMoskva],
		titleKey: 'product.title.VodkaMoskva',
		articleKey: 'product.article.VodkaMoskva',
		origin: 'Israel',
		alcoholStrength: '35%',
		bottleVolume: '175ml'
	},
]

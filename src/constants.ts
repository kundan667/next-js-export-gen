import { v4 as uuid } from "uuid";

interface HeaderItem {
    id: string;
    name: string;
    details: [];
}
const HEADER_DATA: HeaderItem[] = [
    {
        id: uuid(),
        name: 'solutions',
        details: []
    },
    {
        id: uuid(),
        name: 'product',
        details: []
    },
    {
        id: uuid(),
        name: 'data',
        details: []
    },
    {
        id: uuid(),
        name: 'plan',
        details: []
    },
    {
        id: uuid(),
        name: 'research & insights',
        details: []
    }
]

interface CardItem {
    id: string;
    name: string;
    icon: any[];
    details: string;
}
const CARD_DATA: CardItem[] = [
    {
        id: uuid(),
        name: 'platform',
        icon: [],
        details: 'lLorem qui cillum reprehenderit labore velit nulla tempor aliquip irure nisi eu voluptate. Irure nisi elit ut sint excepteur tempor. Magna enim tempor culpa nostrud eu sunt dolore commodo eiusmod labore sint ad qui. Non quis cillum nulla enim ipsum sunt.'
    },
    {
        id: uuid(),
        name: 'api',
        icon: [],
        details: 'Aliqua nulla do enim esse non ad consequat ex cupidatat ad. Reprehenderit dolore non anim nulla consectetur et consectetur aliqua est. Nostrud est pariatur et ad occaecat esse sunt incididunt. Aliqua dolore adipisicing dolore nostrud veniam sunt duis occaecat irure. Elit sunt amet exercitation minim fugiat veniam labore reprehenderit minim adipisicing enim tempor mollit. Excepteur incididunt enim id magna. Enim ad excepteur magna occaecat irure commodo velit.'
    },
    {
        id: uuid(),
        name: 'data license',
        icon: [],
        details: 'Eu enim amet ullamco in mollit reprehenderit voluptate ullamco. Nisi ullamco adipisicing enim labore ad aute ad amet sit ipsum. Elit quis ipsum ad proident ipsum pariatur Lorem ipsum. Mollit nulla Lorem commodo eu commodo eiusmod nostrud cupidatat in est. Ea ad officia amet ipsum occaecat quis est. Consequat enim in excepteur consequat.'
    },
]

interface CarouselItem {
    id: string;
    image: string;
}
const CAROUSEL_DATA: CarouselItem[] = [
    {
        id: uuid(),
        image: '/assets/c-1.png'
    },
    {
        id: uuid(),
        image: '/assets/c-2.png'
    },
    {
        id: uuid(),
        image: '/assets/c-3.png'
    },
    {
        id: uuid(),
        image: '/assets/c-4.png'
    },
    {
        id: uuid(),
        image: '/assets/c-1.png'
    },
]

interface CountriesItem {
    id: string;
    name: string;
    active: boolean;
    data: any[];
}
const COUNTRIES_DATA: CountriesItem[] = [
    {
        id: 'country-data-1',
        name: 'ALL DATA',
        active: true,
        data: [
            '195+ Countries Trade Data',
            '29 Exclusive Countries',
            '54 Detailed Countries',
            '33 Statistical Countries',
            '184 Mirror Countries',
            '2 Bill of Lading Countries',
            '109 Suez Canal BL Countries',
            '190 Transit Countries',
            '190+ Cargo BL Countries'
        ]
    },
    {
        id: 'country-data-2',
        name: 'DETAILED DATA',
        active: false,
        data: []
    },
    {
        id: 'country-data-3',
        name: 'STATISTICAL DATA',
        active: false,
        data: []
    },
    {
        id: 'country-data-4',
        name: 'MIRROR DATA',
        active: false,
        data: []
    },
    {
        id: 'country-data-5',
        name: 'BILL OF LADING',
        active: false,
        data: []
    },
    {
        id: 'country-data-6',
        name: 'SC BILL OF LADING',
        active: false,
        data: []
    },
    {
        id: 'country-data-7',
        name: 'TRANSIT DATA',
        active: false,
        data: []
    },
    {
        id: 'country-data-8',
        name: 'CARGO BL DATA',
        active: false,
        data: []
    }
]

interface ServicesItem {
    id: string;
    name: string;
    details: string;
    img: string;
}
const SERVICES_DATA: ServicesItem[] = [
    {
        id: uuid(),
        name: 'IMPORTER',
        details: 'Discover sources of buying products by connecting with potential suppliers while keeping an eye on the shipments through the global trade intelligence platform online.',
        img: '/assets/services_image.png'
    },
    {
        id: uuid(),
        name: 'EXPORTER',
        details: 'Aliquip laboris ad pariatur aliquip do commodo dolor. Enim adipisicing veniam irure pariatur aliqua ut aute occaecat exercitation aliqua nulla non aute. Ex esse irure est culpa. Dolor enim dolore proident fugiat.',
        img: '/assets/services_image.png'
    },
    {
        id: uuid(),
        name: 'LOGISTICS',
        details: 'Ea aliqua fugiat excepteur sunt. In aute irure ut tempor incididunt voluptate cillum sint officia. Nostrud non proident officia sit eu qui. Nulla aliquip eiusmod eiusmod sit tempor eu consequat in incididunt aliqua cupidatat ut cillum sint.',
        img: '/assets/services_image.png'
    },
    {
        id: uuid(),
        name: 'LAW FIRMS',
        details: 'Ad reprehenderit laborum deserunt mollit. Deserunt nostrud nulla in sunt nostrud eu labore aute laborum magna eiusmod ad et est. Occaecat tempor veniam proident qui veniam aute consectetur pariatur. Non occaecat mollit esse magna officia ullamco eiusmod aliquip. Enim do duis qui officia ex irure et tempor deserunt tempor elit.',
        img: '/assets/services_image.png'
    },
    {
        id: uuid(),
        name: 'CORPORATION',
        details: 'Aliquip laboris ad pariatur aliquip do commodo dolor. Enim adipisicing veniam irure pariatur aliqua ut aute occaecat exercitation aliqua nulla non aute. Ex esse irure est culpa. Dolor enim dolore proident fugiat.',
        img: '/assets/services_image.png'
    },
    {
        id: uuid(),
        name: 'INSURANCE COMPANIES',
        details: 'Aliquip laboris ad pariatur aliquip do commodo dolor. Enim adipisicing veniam irure pariatur aliqua ut aute occaecat exercitation aliqua nulla non aute. Ex esse irure est culpa. Dolor enim dolore proident fugiat.',
        img: '/assets/services_image.png'
    },
    {
        id: uuid(),
        name: 'RESEARCH & CONSULTING',
        details: 'Aliquip laboris ad pariatur aliquip do commodo dolor. Enim adipisicing veniam irure pariatur aliqua ut aute occaecat exercitation aliqua nulla non aute. Ex esse irure est culpa. Dolor enim dolore proident fugiat.',
        img: '/assets/services_image.png'
    }
]

interface ProductsItem {
    id: string;
    productName: string;
    header: string;
    tabs: any[];
}
const PRODUCTS_DATA: ProductsItem[] = [
    {
        id: 'product-1',
        productName: 'PLATFORM',
        header: 'Technological advancements provide a competitive edge',
        tabs: [
            {
                id: 'tabs-1',
                tabName: 'Visualise view',
                desc: 'Gather information on international trade in a visually appealing way. Learn about the market trends easily and get all the essential information on the import and export of a country in the form of interactive graphics.',
                img: '/assets/products_1.png'
            },
            {
                id: 'tabs-2',
                tabName: 'view profile',
                desc: 'Ea tempor Lorem excepteur eu aute qui ipsum est cupidatat labore consectetur cillum magna. Pariatur dolor veniam eiusmod veniam quis officia do minim dolor laborum in fugiat. Et tempor Lorem incididunt esse fugiat proident eiusmod magna elit excepteur in aliquip. Eu id enim mollit amet cupidatat consequat dolor et cupidatat in qui consequat deserunt. Est minim id eiusmod laboris culpa cillum mollit commodo fugiat duis dolor.',
                img: '/assets/products_1.png'
            },
            {
                id: 'tabs-3',
                tabName: 'quick view',
                desc: 'Exercitation dolore qui non qui ad minim tempor voluptate ut nostrud consequat magna Lorem quis. Enim tempor sit reprehenderit consectetur anim ea labore labore. Amet non amet id culpa amet deserunt duis eiusmod in eiusmod consequat officia.',
                img: '/assets/products_1.png'
            }
        ]
    },
    {
        id: 'product-2',
        productName: 'API',
        header: 'Aliqua sint aliquip ea exercitation id culpa mollit dolor anim.',
        tabs: [
            {
                id: 'tabs-4',
                tabName: 'Visualise view',
                desc: 'Gather information on international trade in a visually appealing way. Learn about the market trends easily and get all the essential information on the import and export of a country in the form of interactive graphics.',
                img: '/assets/products_1.png'
            },
            {
                id: 'tabs-5',
                tabName: 'view profile',
                desc: 'Duis adipisicing cupidatat voluptate qui commodo consequat sint excepteur pariatur consequat eu et. Labore tempor ut incididunt est ullamco do esse in velit id culpa ut elit non. Qui Lorem pariatur cillum sint occaecat. Elit eu do exercitation proident. Occaecat in minim ea ullamco cupidatat aliquip. Culpa officia magna labore quis elit et elit exercitation enim eu. Labore ex voluptate est commodo exercitation aute mollit fugiat occaecat.',
                img: '/assets/products_1.png'
            },
            {
                id: 'tabs-6',
                tabName: 'quick view',
                desc: 'Dolore consectetur tempor consequat esse cupidatat. Consequat excepteur enim duis reprehenderit ea consectetur incididunt nostrud ea incididunt anim labore nisi ullamco. Do adipisicing consequat elit cupidatat proident et aliqua quis excepteur consectetur. Excepteur eu ad nulla consequat Lorem esse enim ad nisi eiusmod consequat.',
                img: '/assets/products_1.png'
            }
        ]
    },
    {
        id: 'product-3',
        productName: 'DATA',
        header: 'Consequat excepteur enim duis reprehenderit ea consectetur',
        tabs: [
            {
                id: 'tabs-7',
                tabName: 'Visualise view',
                desc: 'Quis nulla nostrud sint eu. Eu mollit reprehenderit eu quis cillum anim magna consequat non Lorem quis. Sint incididunt tempor nulla in deserunt. Est sint deserunt cillum ipsum adipisicing ex occaecat laborum. Duis cillum commodo esse eiusmod sunt minim magna. Aliqua est amet incididunt veniam magna dolor id reprehenderit dolore exercitation id.',
                img: '/assets/products_1.png'
            },
            {
                id: 'tabs-8',
                tabName: 'view profile',
                desc: 'Laboris laboris aute nostrud laborum cillum commodo exercitation nisi elit fugiat excepteur. Qui esse aute consectetur et proident elit amet adipisicing cillum. Sit enim adipisicing mollit laborum amet occaecat excepteur deserunt enim. Culpa officia ut labore nisi duis nisi aliqua ad consectetur. Aliquip laborum eiusmod Lorem culpa ut velit non officia reprehenderit occaecat.',
                img: '/assets/products_1.png'
            },
            {
                id: 'tabs-9',
                tabName: 'quick view',
                desc: 'Eu ex pariatur laborum reprehenderit adipisicing culpa velit enim anim labore eu. Labore officia enim et ex officia quis proident. Occaecat ad velit esse velit reprehenderit velit minim mollit amet officia ullamco. Elit pariatur sunt et deserunt exercitation dolor.',
                img: '/assets/products_1.png'
            }
        ]
    }
]

interface FooerItem {
    id: string;
    name: string;
    tabs: any[];
}
const FOOTER_DATA: FooerItem[] = [
    {
        id: uuid(),
        name: 'MARKET INSIDE',
        tabs: [
            'About us',
            'Platform',
            'Data',
            'Plans',
            'Research & Insight',
            'Privacy Policy',
            'Terms & Conditions'
        ]
    },
    {
        id: uuid(),
        name: 'SOLUTIONS',
        tabs: [
            'Importers',
            'Exporters',
            'Logistics',
            'Corporation',
            'Financial Institutions',
            'IT and Consulting',
            'Law Firms'
        ]
    },
    {
        id: uuid(),
        name: 'SOLUTIONS',
        tabs: [
            'Insurance',
            'Consulting and Research',
            'Sales and Marketing',
            'Asset Management Companies',
            'Academic Institutions',
            'Government Agencies',
        ]
    }
]

export default {
    HEADER_DATA,
    CARD_DATA,
    CAROUSEL_DATA,
    COUNTRIES_DATA,
    SERVICES_DATA,
    PRODUCTS_DATA,
    FOOTER_DATA
}
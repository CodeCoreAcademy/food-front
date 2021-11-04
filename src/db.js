const foods = [
	{
		id:1,
		type:'chinese',
		name:'Fried Rice',
		price: 200,
		desc:'sdfdfgfgdfg',
		rating:5
	},
]

const restaurants = [
	{
		id:1,
		name:'Hung Chow',
		addr:'iuhuihasdfju',
		open: '11AM',
		close: '9PM',
		rating:4,
	}
	
]

const customers = [
	{
		id:1,
		name:'safdsffgd',
		addr:'asdasdasdasd',
		contact:'234234234',
		email:'asdasdasd'
	}
	
]

const orders = [
	{
		id:1,
		restID:1,
		cusID:1,
		items: [
				{
					foodID:1,
					quantity:4
				},
				{
					foodID:2,
					quantity:4
				},
			],
		discountID:1,
		paymentType:'COD',
		
	}

]

const discounts = [
	{
		id:1,
		title:'122dfdf',
		validity:['startdate', 'enddate'],
		percent:10
	},
	
]
export {restaurants, customers, orders, discounts};
export default foods;

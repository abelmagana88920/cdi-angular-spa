var DUMMY = {
	names: [
        {first_name: 'Abel', last_name: 'Magana', gender: 'M'},
        {first_name: 'Mark Lester', last_name: 'Dequina', gender: 'M'},
        {first_name: 'Rjill Ham', last_name: 'Manuel', gender: 'M'},
        {first_name: 'Allen', last_name: 'Roberto', gender: 'M'},
        {first_name: 'Christan', last_name: 'Tecson', gender: 'M'},
        {first_name: 'Marvin', last_name: 'Zabala', gender: 'M'},
        {first_name: 'Gabriel', last_name: 'Diamante', gender: 'M'}
    ],
	categories : [
		{
			id:'C-001',
			category_name:"MEN'S FASHION",
			parent_id: null,  
			sub_categories : [
				{
					id : 'C-019',
					category_name : 'CLOTHING',
					parent_id: 'C-001',
					sub_categories: [ 
						{
							id : 'C-125',
							category_name : 'BLUE CORNER',
							parent_id: 'C-019',
							sub_categories: [
								{
									id : 'C-126',
									category_name : 'AVON',
									parent_id: 'C-125',
									sub_categories: [ 
									]
								},
							]
						},
						{
							id : 'C-129',
							category_name : 'NOVO',
							parent_id: 'C-019',
							sub_categories: []
						},
					]
				},
				{
					id : 'C-020',
					category_name : 'BAGS',
					parent_id: 'C-001',
					sub_categories: []
				},
				{
					id : 'C-021',
					category_name : 'WALLETS & ACCESSORIES',
					parent_id: 'C-001',
					sub_categories: []
				},
				{
					id : 'C-022',
					category_name : 'SHOES',
					parent_id: 'C-001',
					sub_categories: []
				},
				{
					id : 'C-023',
					category_name : 'ACCESSORIES',
					parent_id: 'C-001',
					sub_categories: []
				}
			]
		},
		{
			id:'C-002',
			category_name:"WOMEN'S FASHION", 
			parent_id: null,
			sub_categories : [
				{
					id : 'C-024',
					category_name : 'CLOTHING',
					parent_id: 'C-002',
					sub_categories: []
				},
				{
					id : 'C-025',
					category_name : 'BAGS',
					parent_id: 'C-002',
					sub_categories: []
				},
				{
					id : 'C-026',
					category_name : 'SHOES',
					parent_id: 'C-002',
					sub_categories: []
				},
				{
					id : 'C-027',
					category_name : 'WATCHES',
					parent_id: 'C-002',
					sub_categories: []
				},
				{
					id : 'C-028',
					category_name : 'SUNGLASSES',
					parent_id: 'C-002',
					sub_categories: []
				},
				{
					id : 'C-029',
					category_name : 'JEWELLERY',
					parent_id: 'C-002',
					sub_categories: []
				}
			]
		}, 
		{
			id:'C-003',
			category_name:'HEALTH & BEAUTY', 
			parent_id: null,
			sub_categories : [
				{
					id : 'C-030',
					category_name : 'SKIN CARE',
					parent_id: 'C-003',
					sub_categories: []
				},
				{
					id : 'C-031',
					category_name : 'MAKEUP',
					parent_id: 'C-003',
					sub_categories: []
				},
				{
					id : 'C-032',
					category_name : 'BEAUTY TOOLS',
					parent_id: 'C-003',
					sub_categories: []
				},
				{
					id : 'C-033',
					category_name : 'FRAGRANCES',
					parent_id: 'C-003',
					sub_categories: []
				},
				{
					id : 'C-034',
					category_name : 'FOOD SUPPLEMENTS',
					parent_id: 'C-003',
					sub_categories: []
				},
				{
					id : 'C-035',
					category_name : 'MEDICAL SUPPPLIES',
					parent_id: 'C-003',
					sub_categories: []
				}
			]
		}, 
		{
			id:'C-004',
			category_name:'BABY & TODDLER', 
			parent_id: null,
			sub_categories : [
				{
					id : 'C-036',
					category_name : 'FEEDING',
					parent_id: 'C-004',
					sub_categories: []
				},
				{
					id : 'C-037',
					category_name : 'DIAPERING & POTTY',
					parent_id: 'C-004',
					sub_categories: []
				},
				{
					id : 'C-038',
					category_name : 'BABY GEAR',
					parent_id: 'C-004',
					sub_categories: []
				},
				{
					id : 'C-039',
					category_name : 'HEALTH & SAFETY',
					parent_id: 'C-004',
					sub_categories: []
				},
				{
					id : 'C-040',
					category_name : 'CLOTHING & ACCESSORIES',
					parent_id: 'C-004',
					sub_categories: []
				},
				{
					id : 'C-041',
					category_name : 'NURSERY',
					parent_id: 'C-004',
					sub_categories: []
				}
			]
		}, 
		{
			id:'C-005',
			category_name:'HOME & LIVING',
			parent_id: null, 
			sub_categories : [
				{
					id : 'C-042',
					category_name : 'KITCHEN & DINING',
					parent_id: 'C-005',
					sub_categories: []
				},
				{
					id : 'C-043',
					category_name : 'FURNITURE',
					parent_id: 'C-005',
					sub_categories: []
				},
				{
					id : 'C-044',
					category_name : 'BEDDING',
					parent_id: 'C-005',
					sub_categories: []
				},
				{
					id : 'C-045',
					category_name : 'HOME IMPROVEMENT',
					parent_id: 'C-005',
					sub_categories: []
				},
				{
					id : 'C-046',
					category_name : 'HOME DECOR',
					parent_id: 'C-005',
					sub_categories: []
				} 
			]
		}, 
		{
			id:'C-006',
			category_name:'HOME APPLIANCES', 
			parent_id: null,
			sub_categories : [
				{
					id : 'C-047',
					category_name : 'SMALL KITCHEN APPLIANCES',
					parent_id: 'C-006',
					sub_categories: []
				},
				{
					id : 'C-048',
					category_name : 'COOLING & HEATING',
					parent_id: 'C-006',
					sub_categories: []
				},
				{
					id : 'C-049',
					category_name : 'LARGE APPLIANCES',
					parent_id: 'C-006',
					sub_categories: []
				},
				{
					id : 'C-050',
					category_name : 'GARMENT CARE',
					parent_id: 'C-006',
					sub_categories: []
				},
				{
					id : 'C-051',
					category_name : 'HOUSEKEEPING',
					parent_id: 'C-006',
					sub_categories: []
				},
				{
					id : 'C-052',
					category_name : 'ACCESSORIES',
					parent_id: 'C-006',
					sub_categories: []
				}
			]
		}, 
		{
			id:'C-007',
			category_name:'MOBILES & TABLETS', 
			parent_id: null,
			sub_categories : [
				{
					id : 'C-053',
					category_name : 'MOBILES',
					parent_id: 'C-007',
					sub_categories: []
				},
				{
					id : 'C-054',
					category_name : 'TABLETS',
					parent_id: 'C-007',
					sub_categories: []
				},
				{
					id : 'C-055',
					category_name : 'POWER BANKS',
					parent_id: 'C-007',
					sub_categories: []
				},
				{
					id : 'C-056',
					category_name : 'PHONE CASES',
					parent_id: 'C-007',
					sub_categories: []
				},
				{
					id : 'C-057',
					category_name : 'BATTERIES & CHARGERS',
					parent_id: 'C-007',
					sub_categories: []
				},
				{
					id : 'C-058',
					category_name : 'ALL ACCESSORIES',
					parent_id: 'C-007',
					sub_categories: []
				}
			]
		}, 
		{
			id:'C-008',
			category_name:'COMPUTERS & LAPTOPS', 
			parent_id: null,
			sub_categories : [
				{
					id : 'C-059',
					category_name : 'LAPTOPS',
					parent_id: 'C-008',
					sub_categories: []
				},
				{
					id : 'C-060',
					category_name : 'COMPUTERS',
					parent_id: 'C-008',
					sub_categories: []
				},
				{
					id : 'C-061',
					category_name : 'PC GAMING',
					parent_id: 'C-008',
					sub_categories: []
				},
				{
					id : 'C-062',
					category_name : 'STORAGE',
					parent_id: 'C-008',
					sub_categories: []
				},
				{
					id : 'C-063',
					category_name : 'PRINTERS & INKS',
					parent_id: 'C-008',
					sub_categories: []
				},
				{
					id : 'C-064',
					category_name : 'ALL ACCESSORIES',
					parent_id: 'C-008',
					sub_categories: []
				}
			]
		}, 
		{
			id:'C-009',
			category_name:'CAMERAS', 
			parent_id: null,
			sub_categories : [
				{
					id : 'C-065',
					category_name : 'SPORTS & ACTION CAMERAS',
					parent_id: 'C-009',
					sub_categories: []
				},
				{
					id : 'C-066',
					category_name : 'POINT & SHOOT CAMERAS',
					parent_id: 'C-009',
					sub_categories: []
				},
				{
					id : 'C-067',
					category_name : 'DSLRS',
					parent_id: 'C-009',
					sub_categories: []
				},
				{
					id : 'C-068',
					category_name : 'MIRRORLESS CAMERAS',
					parent_id: 'C-009',
					sub_categories: []
				},
				{
					id : 'C-069',
					category_name : 'DRONES',
					parent_id: 'C-009',
					sub_categories: []
				},
				{
					id : 'C-070',
					category_name : 'ALL ACCESSORIES',
					parent_id: 'C-009',
					sub_categories: []
				}
			]
		}, 
		{
			id:'C-010',
			category_name:'TV, A/V, GAMING & WEARABLES', 
			parent_id: null,
			sub_categories : [
				{
					id : 'C-071',
					category_name : 'TELEVISIONS',
					parent_id: 'C-010',
					sub_categories: []
				},
				{
					id : 'C-072',
					category_name : 'AUDIO',
					parent_id: 'C-010',
					sub_categories: []
				},
				{
					id : 'C-073',
					category_name : 'VIDEOS',
					parent_id: 'C-010',
					sub_categories: []
				},
				{
					id : 'C-074',
					category_name : 'LAZADA GAMING ZONE',
					parent_id: 'C-010',
					sub_categories: []
				},
				{
					id : 'C-075',
					category_name : 'WEARABLE TECH',
					parent_id: 'C-010',
					sub_categories: []
				},
				{
					id : 'C-076',
					category_name : 'ALL ACCESSORIES',
					parent_id: 'C-010',
					sub_categories: []
				}
			]
		}, 
		{
			id:'C-011',
			category_name:'WATCHES & ACCESSORIES', 
			parent_id: null,
			sub_categories : [
				{
					id : 'C-077',
					category_name : "WOMEN'S WATCHES",
					parent_id: 'C-011',
					sub_categories: []
				},
				{
					id : 'C-078',
					category_name : "MEN'S WATCHES",
					parent_id: 'C-011',
					sub_categories: []
				},
				{
					id : 'C-079',
					category_name : "WOMEN'S JEWELLERY",
					parent_id: 'C-011',
					sub_categories: []
				},
				{
					id : 'C-080',
					category_name : "MEN'S JEWELLERY",
					parent_id: 'C-011',
					sub_categories: []
				},
				{
					id : 'C-081',
					category_name : "WOMEN'S EYEWEAR",
					parent_id: 'C-011',
					sub_categories: []
				},
				{
					id : 'C-082',
					category_name : "MEN'S EYEWEAR",
					parent_id: 'C-011',
					sub_categories: []
				}
			]
		}, 
		{
			id:'C-012',
			category_name:'MEDIA, MUSIC & BOOKS', 
			parent_id: null,
			sub_categories : [
				{
					id : 'C-083',
					category_name : "MUSICAL INSTRUMENTS",
					parent_id: 'C-012',
					sub_categories: []
				},
				{
					id : 'C-084',
					category_name : "GUITARS",
					parent_id: 'C-012',
					sub_categories: []
				},
				{
					id : 'C-085',
					category_name : "KEYBOARDS",
					parent_id: 'C-012',
					sub_categories: []
				},
				{
					id : 'C-086',
					category_name : "DRUMS & PERCUSSION",
					parent_id: 'C-012',
					sub_categories: []
				},
				{
					id : 'C-087',
					category_name : "INSTRUMENT ACCESSORIES",
					parent_id: 'C-012',
					sub_categories: []
				},
				{
					id : 'C-088',
					category_name : "BOOKS",
					parent_id: 'C-012',
					sub_categories: []
				}
			]
		}, 
		{
			id:'C-013',
			category_name:'SPORTS & OUTDOORS', 
			parent_id: null,
			sub_categories : [
				{
					id : 'C-089',
					category_name : "EXERCISE & FITNESS",
					parent_id: 'C-013',
					sub_categories: []
				},
				{
					id : 'C-090',
					category_name : "OUTDOOR REACREATION",
					parent_id: 'C-013',
					sub_categories: []
				},
				{
					id : 'C-091',
					category_name : "MEN'S SHOES & CLOTHING",
					parent_id: 'C-013',
					sub_categories: []
				},
				{
					id : 'C-092',
					category_name : "WOMEN'S SHOES & CLOTHING",
					parent_id: 'C-013',
					sub_categories: []
				},
				{
					id : 'C-093',
					category_name : "TEAM SPORTS",
					parent_id: 'C-013',
					sub_categories: []
				},
				{
					id : 'C-094',
					category_name : "RACQUET SPORTS",
					parent_id: 'C-013',
					sub_categories: []
				}
			]
		}, 
		{
			id:'C-014',
			category_name:'TOYS & GAMES', 
			parent_id: null,
			sub_categories : [
				{
					id : 'C-095',
					category_name : "LEARNING & EDUCATION",
					parent_id: 'C-014',
					sub_categories: []
				},
				{
					id : 'C-096',
					category_name : "SPORTS & OUTDOOR PLAY",
					parent_id: 'C-014',
					sub_categories: []
				},
				{
					id : 'C-097',
					category_name : "BABY & TODDLER TOYS",
					parent_id: 'C-014',
					sub_categories: []
				},
				{
					id : 'C-098',
					category_name : "REMOTE CONTROL & PLAY VEHICLES",
					parent_id: 'C-014',
					sub_categories: []
				},
				{
					id : 'C-099',
					category_name : "ACTION FIGURES & COLLECTIBLES",
					parent_id: 'C-014',
					sub_categories: []
				},
				{
					id : 'C-100',
					category_name : "DOLLS & ACCESSORIES",
					parent_id: 'C-014',
					sub_categories: []
				}
			]
		}, 
		{
			id:'C-015',
			category_name:'TRAVEL & LUGGAGE', 
			parent_id: null,
			sub_categories : [
				{
					id : 'C-101',
					category_name : "LUGGAGE",
					parent_id: 'C-015',
					sub_categories: []
				},
				{
					id : 'C-102',
					category_name : "BACKPACKS",
					parent_id: 'C-015',
					sub_categories: []
				},
				{
					id : 'C-103',
					category_name : "LAPTOP BAGS & CASES",
					parent_id: 'C-015',
					sub_categories: []
				},
				{
					id : 'C-104',
					category_name : "TRAVEL ACCESSORIES",
					parent_id: 'C-015',
					sub_categories: []
				},
				{
					id : 'C-105',
					category_name : "PACKING ORGANIZERS",
					parent_id: 'C-015',
					sub_categories: []
				},
				{
					id : 'C-106',
					category_name : "BAGS",
					parent_id: 'C-015',
					sub_categories: []
				}
			]
		}, 
		{
			id:'C-016',
			category_name:'MOTORS', 
			parent_id: null,
			sub_categories : [
				{
					id : 'C-107',
					category_name : "MOTORCYCLE & ATV",
					parent_id: 'C-016',
					sub_categories: []
				},
				{
					id : 'C-108',
					category_name : "AUTO ELECTRONICS",
					parent_id: 'C-016',
					sub_categories: []
				},
				{
					id : 'C-109',
					category_name : "EXTERIOR ACCESSORIES",
					parent_id: 'C-016',
					sub_categories: []
				},
				{
					id : 'C-110',
					category_name : "INTERIOR ACCESSORIES",
					parent_id: 'C-016',
					sub_categories: []
				},
				{
					id : 'C-111',
					category_name : "TOOLS & EQUIPMENT",
					parent_id: 'C-016',
					sub_categories: []
				},
				{
					id : 'C-112',
					category_name : "CAR CARE",
					parent_id: 'C-016',
					sub_categories: []
				}
			]
		}, 
		{
			id:'C-017',
			category_name:'GROCERIES', 
			parent_id: null,
			sub_categories : [
				{
					id : 'C-113',
					category_name : "BEVERAGES",
					parent_id: 'C-017',
					sub_categories: []
				},
				{
					id : 'C-114',
					category_name : "BAKING & COOKING",
					parent_id: 'C-017',
					sub_categories: []
				},
				{
					id : 'C-115',
					category_name : "CANNED FOODS",
					parent_id: 'C-017',
					sub_categories: []
				},
				{
					id : 'C-116',
					category_name : "WINES, BEERS & SPIRITS",
					parent_id: 'C-017',
					sub_categories: []
				},
				{
					id : 'C-117',
					category_name : "CANDY & CHOCOLATE",
					parent_id: 'C-017',
					sub_categories: []
				},
				{
					id : 'C-118',
					category_name : "BREAKFAST",
					parent_id: 'C-017',
					sub_categories: []
				}
			]
		}, 
		{
			id:'C-018',
			category_name:'PET SUPPLIES',
			parent_id: null,
			sub_categories : [
				{
					id : 'C-119',
					category_name : "DOG GROOMING SUPPLIES",
					parent_id: 'C-018',
					sub_categories: []
				},
				{
					id : 'C-120',
					category_name : "DOG BED & FEEDING",
					parent_id: 'C-018',
					sub_categories: []
				},
				{
					id : 'C-121',
					category_name : "DOG FOOD",
					parent_id: 'C-018',
					sub_categories: []
				},
				{
					id : 'C-122',
					category_name : "CAT FOOD",
					parent_id: 'C-018',
					sub_categories: []
				},
				{
					id : 'C-123',
					category_name : "CAT GED & FEEDING",
					parent_id: 'C-018',
					sub_categories: []
				},
				{
					id : 'C-124',
					category_name : "CAT LITTER & TOILET",
					parent_id: 'C-018',
					sub_categories: []
				}
			]
		},
	]

}


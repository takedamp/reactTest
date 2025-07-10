export const mcategories = [
	'2016年 3月期',
	'2017年 3月期',
  '2018年 3月期',
  '2019年 3月期',
  '2020年 3月期',
];

export const source = {
	gyouseki: {
		unit: "百万円",
		unit2: "％",
		title: "業績状況",
		note: "",
		note2: "",
		decimal:0,
//		min: -2500,
//		max: 12500,
//		span: 2500,
//		min2: -10.0,
//		max2: 50.0,
//		span2: 10.0,
		height: 450,
		master: [
			[296393, 243618, 320711, 123456, 132415],
			[18178, 17211, 21416, 12346, 28971],
			[19768, 18839, 22128, 23241, 31923],
			[13340, 13691, 16118, 18329, 12375],
			[6.1, 7.1, 6.7, 8.4, 9.2]
    	],
		indexes: [
			{ type: 'column', name: '売上高', color: '#50b848', visible: true, dp: 0},
			{ type: 'column', name: '営業利益', color: '#9ee54c', visible: true, dp: 0},
      { type: 'column', name: '経常利益', color: '#4cc5ae', visible: true, dp: 0},
			{ type: 'column', name: '親会社株主に帰属する当期純利益', color: '#b2dcfb', visible: true, dp: 0},
			{ type: 'line', name: '営業利益率', color: '#5f777f', visible: true, dp: 1}
		]
	}
// 	zaisei: {
// 		unit: "百万円",
// 		title: "財政状態",
// 		unit2: "％",
// 		note: "",
// 		note2: "",
// 		decimal:0,
// //		min: -2500,
// //		max: 12500,
// //		span: 2500,
// //		min2: -10.0,
// //		max2: 50.0,
// //		span2: 10.0
// 		height: 450,
// 		master: [
// 			[214526, 204813, 252682, 264996, 235897, 226568, 237811, 249164, 264525, 274315],
// 			[54238, 66380, 79175, 92981, 101703, 103509, 93064, 96020, 100789, 102667],
// 			[54002, 66151, 78949, 92633, 101215, 102963, 92490, 95248, 99966, 101634],
// 			[27.0, 22.8, 22.2, 18.1, 15.4, 2.6, -7.6, 5.6, 7.4, 6.6],
// 			[9.7, "9.0", 9.7, 8.9, 8.8, 2.1, -2.2, 2.1, 3.8, 3.6],
// 			[25.2, 32.3, 31.2, "35.0", 42.9, 45.4, 38.9, 38.2, 37.8, 37.1]
//     	],
// 		indexes: [
// 			{ type: 'column', name: '総資産', color: '#50b848', visible: true, dp: 0},
// 			{ type: 'column', name: '純資産', color: '#9ee54c', visible: true, dp: 0},
// 			{ type: 'column', name: '自己資本', color: '#4cc5ae', visible: true, dp: 0},
// 			{ type: 'line', name: '自己資本当期純利益率', color: '#fdaccb', visible: true, dp: 1},
// 			{ type: 'line', name: '総資産経常利益率', color: '#a78578', visible: true, dp: 1},
// 			{ type: 'line', name: '自己資本比率', color: '#5f777f', visible: true, dp: 1}
// 		]
// 	},
// 	cashflow: {
// 		unit: "百万円",
// 		title: "キャッシュ・フロー",
// 		unit2: "",
// 		note: "",
// 		note2: "",
// 		decimal:0,
// //		min: -2500,
// //		max: 12500,
// //		span: 2500,
// //		min2: -10.0,
// //		max2: 50.0,
// //		span2: 10.0
// 		height: 450,
// 		master: [
// 			[39003, -23545, 16226, 29694, -33439, 11629, 12201, 20392, -54023, 40719],
// 			[-334, -1717, -3383, -5786, -7488, -3753, -476, 2398, -1399, -1595],
// 			[-6035, -2788, -6457, -3575, 21604, -3308, -7531, -2762, 28523, -31878],
// 			[50674, 22582, 28865, 49145, 29549, 34173, 38648, 58714, 31942, 39666]
//     	],
// 		indexes: [
// 			{ type: 'column', name: '営業活動によるCF', color: '#50b848', visible: true, dp: 0},
// 			{ type: 'column', name: '投資活動によるCF', color: '#9ee54c', visible: true, dp: 0},
// 			{ type: 'column', name: '財務活動によるCF', color: '#4cc5ae', visible: true, dp: 0},
// 			{ type: 'column', name: '現金及び現金同等物の期末残高', color: '#f9db00', visible: true, dp: 0}
// 		]
// 	},
// 	hitokabu: {
// 		unit: "円",
// 		unit2: "％",
// 		title: "1株当たり指標",
// 		note: "",
// 		note2: "",
// 		decimal:2,
// //		min: -2500,
// //		max: 12500,
// //		span: 2500,
// 		min2: -100.0,
// //		max2: 50.0,
// //		span2: 10.0
// 		height: 450,
// 		master: [
// 			["25.00", "26.00", "31.00", "30.00", "30.00", "10.00", "25.00", "36.00", "37.00", "38.00"],
// 			[506.04, 619.91, 739.87, 868.87, 949.39, "983.90", 883.11, 905.99, 947.39, 959.28],
//             ["125.00", "128.30", 151.05, 145.37, 139.79, 24.95, -71.26, 49.99, 68.99, 62.72],
// 			["20.0", 20.3, 20.5, 20.6, 21.5, 40.1, "-", "72.0", 53.6, 60.6]
//     	],
// 		indexes: [
// 			{ type: 'column', name: '1株当たり配当金', color: '#50b848', visible: true, dp: 2},
// 			{ type: 'column', name: '1株当たり純資産額', color: '#9ee54c', visible: true, dp: 2},
//       { type: 'column', name: '1株当たり当期純利益', color: '#4cc5ae', visible: true, dp: 2},
// 			{ type: 'line', name: '配当性向', color: '#fdaccb', visible: true, dp: 1}
// 		]
// 	}
};



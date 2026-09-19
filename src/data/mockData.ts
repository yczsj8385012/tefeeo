import { CorporateInfo, ProductItem, DistributionChannel, RetailStorePresence } from '../types';

export const corporateRegistrationData: CorporateInfo = {
  companyName: '北京特菲奥国际贸易有限公司',
  shortName: '特菲奥 (Tefeeo)',
  legalRepresentative: '高李军',
  establishedDate: '2017年12月01日',
  unifiedSocialCreditCode: '91110105MA0194NR5A',
  organizationCode: 'MA0194NR5',
  registrationNumber: '110105024528309',
  registeredAddress: '北京市朝阳区王四营乡王四营村村南西区1层-A010',
  officeAddress: '北京市经济技术开发区经海七路22号',
  customerServiceHotline: '+86-010-89801090',
  nationalTollFree: '+86 400 166 1090',
  email: '1325928939@qq.com',
  registeredCapital: '200万 (人民币)',
  operatingPeriod: '2017年12月01日 至 2047年11月30日 (30年稳定存续)',
  registrationAuthority: '北京市朝阳区市场监督管理局',
  status: '开幕 / 正常存续 (Active Compliant)',
  businessScope:
    '一般项目：食品销售（仅销售预包装食品）；食品互联网销售（仅销售预包装食品）；保健食品（预包装）销售；货物进出口；技术进出口；代理进出口；粮食收购；汽车销售；食品进出口；食用农产品批发；新鲜水果批发；新鲜蔬菜零售；日用品销售等。',
};

// Real supermarket on-site verified presence data from user uploaded photos
export const retailPresenceData: RetailStorePresence[] = [
  {
    id: 'gz-grandbuy',
    storeName: '广州市 · 广百广场 (天河中怡店)',
    location: '广东省广州市天河区天河路200号',
    date: '实拍存证：2024.01.04 20:43',
    type: '大型精品百货超市端头礼盒大堆头',
    highlight: 'IMPERIAL 皇家丹麦曲奇礼盒大堆头、高端进口食品专柜全品类铺市，节庆礼盒重点展区',
    channelCategory: 'KA核心百货商超',
    shelfTag: '百货精品超市端头',
    imageUrl: '/images/store-guangzhou-grandbuy.jpg'
  },
  {
    id: 'handan-melody',
    storeName: '邯郸市 · 美乐城超市 (美好之家 MY HOME · 进口世界商品专区)',
    location: '河北省邯郸市丛台区人民东路美乐城 (美好之家 03 04)',
    date: '实拍存证：2026.03.20 18:35 (邯郸市·美乐城 水印相机)',
    type: '“世界商品 WORLD GOODS” 进口专区 & 特菲奥爆米花陈列',
    highlight: '特菲奥美式球形爆米花三层货架饱满排面实拍，与IMPERIAL经典蓝罐曲奇黄金展位并列热销',
    channelCategory: '大型综合购物中心超市',
    shelfTag: '特菲奥爆米花 & 世界商品',
    imageUrl: '/images/store-handan-melody.jpg'
  },
  {
    id: 'quyang-xinyulou',
    storeName: '保定市 · 信誉楼百货 (曲阳店)',
    location: '河北省保定市曲阳县商业步行街',
    date: '实拍存证：2026.01.01 09:01',
    type: '中岛环形红色蓝色铁盒双立柱节日堆头',
    highlight: '现场专业理货团队督导巡展，整箱陈列与礼盒展销，日均动销突破数千盒',
    channelCategory: '区域龙头连锁百货',
    shelfTag: '中岛双立柱大堆头',
    imageUrl: '/images/store-quyang-xinyulou.jpg'
  },
  {
    id: 'national-boutique',
    storeName: '全国高端精品超市 (Ole\' / BLT / 盒马X会员)',
    location: '北京 / 上海 / 深圳 / 广州 / 杭州',
    date: '常态化在架销售',
    type: '国际烘焙及健康零食标杆货架',
    highlight: '涵盖苏格兰 Nairn\'s 无麸质燕麦、英国 McVitie\'s 麦维他、欧洲烘焙精品全系排面',
    channelCategory: '高端会员制与精品零售',
    shelfTag: '进口烘焙精品货架',
    imageUrl: '/images/store-national-boutique.jpg'
  }
];

export const productsCatalog: ProductItem[] = [
  // Tefeeo Proprietary Brand Products (特菲奥自有品牌)
  {
    id: 'tefeeo-shrimp-chips-blue',
    name: '特菲奥大虾片 (原虾味 240g)',
    nameEn: 'Tefeeo Shrimp Slices Chips (Original 240g)',
    brand: '特菲奥 Tefeeo',
    brandType: 'proprietary_brand',
    category: '大虾片系列',
    origin: '中国 (China)',
    specification: '240g / 大包装含油型膨化食品',
    ingredientsHighlight: '虾肉含量 ≥ 30%！真实深海鲜虾研磨，饱满虾香，酥脆爽口',
    highlight: '低油膨化工艺，鲜脆难挡，印有韩语 저민 새우 요리，适合全年龄段与聚会场景',
    channels: ['全国大中型超市', 'CVS便利店', '跨境出口专供'],
    targetMarkets: ['中国全渠道', '东南亚 (越南/泰国/印尼)', '南亚', '中东', '非洲'],
    badge: '真虾肉 ≥30%',
    colorScheme: 'blue',
    imageUrl: '/images/tefeeo-shrimp-chips-blue.jpg'
  },
  {
    id: 'tefeeo-shrimp-chips-red',
    name: '特菲奥大虾片 (经典番茄味 240g)',
    nameEn: 'Tefeeo Shrimp Slices Chips (Tomato Flavor 240g)',
    brand: '特菲奥 Tefeeo',
    brandType: 'proprietary_brand',
    category: '大虾片系列',
    origin: '中国 (China)',
    specification: '240g / 独立充气锁鲜大袋',
    ingredientsHighlight: '虾肉含量 ≥ 30%！精选成熟番茄果粉，酸甜诱人与鲜虾交融',
    highlight: '经典番茄调味，浓郁可口，深受年轻家庭与儿童消费群喜爱',
    channels: ['KA卖场', '零食量贩店', '海外出口专柜'],
    targetMarkets: ['中国全渠道', '东南亚', '南亚', '中东', '非洲'],
    badge: '浓郁番茄味',
    colorScheme: 'red',
    imageUrl: '/images/tefeeo-shrimp-chips-red.jpg'
  },
  {
    id: 'tefeeo-egg-yolk-rice-crisps',
    name: '特菲奥蟹香蛋黄味糯米锅巴 (225g)',
    nameEn: 'Tefeeo Crab-Flavored Egg Yolk Glutinous Rice Crisps (225g)',
    brand: '特菲奥 Tefeeo',
    brandType: 'proprietary_brand',
    category: '糯米锅巴系列',
    origin: '中国 (China)',
    specification: '225g / 蜂窝金装密封拉链袋',
    ingredientsHighlight: '双面厚涂！整粒糯米压制，真实添加咸鸭蛋黄，非碎米下脚料',
    highlight: '米香浓郁、片片香脆，金黄诱人，外贸出口与国内零食渠道极高复购爆款',
    channels: ['山姆/Costco同标', '精品商超', '东南亚及中东商超'],
    targetMarkets: ['中国全渠道', '东南亚', '南亚', '中东', '非洲'],
    badge: '真咸蛋黄双面厚涂',
    colorScheme: 'amber',
    imageUrl: '/images/tefeeo-egg-yolk-rice-crisps.jpg'
  },
  {
    id: 'tefeeo-hazelnut-cocoa-wafer',
    name: '特菲奥榛子可可威化饼干 (238g)',
    nameEn: 'Tefeeo Hazelnut Cocoa Wafer Biscuits (238g)',
    brand: '特菲奥 Tefeeo',
    brandType: 'proprietary_brand',
    category: '威化系列',
    origin: '中国 (China)',
    specification: '238g / 典雅素雅袋装',
    ingredientsHighlight: '可可粉含量 ≥ 7%，新西兰进口乳粉含量 ≥ 8%，精制榛子酱 ≥ 5%',
    highlight: '四层酥脆薄饼夹心三层醇正榛子可可酱，口感丝滑细腻，不甜不腻',
    channels: ['精品超市', '便利店系统', '跨境出海'],
    targetMarkets: ['中国全渠道', '东南亚', '南亚', '中东', '非洲'],
    badge: '新西兰奶源+7%可可',
    colorScheme: 'gold',
    imageUrl: '/images/tefeeo-hazelnut-cocoa-wafer.jpg'
  },
  {
    id: 'tefeeo-jasmine-tea-wafer',
    name: '特菲奥茉莉绝弦威化饼干 (238g)',
    nameEn: 'Tefeeo Jasmine Green Tea Wafer Biscuits (238g)',
    brand: '特菲奥 Tefeeo',
    brandType: 'proprietary_brand',
    category: '威化系列',
    origin: '中国 (China)',
    specification: '238g / 清新茉莉抹茶包装',
    ingredientsHighlight: '茉莉花茶粉含量 ≥ 2%，新西兰乳粉含量 ≥ 8%，天然抹茶粉 ≥ 2%',
    highlight: '东方花香新中式茶点，清幽茉莉茶韵融入乳香，清甜酥脆',
    channels: ['新零售商超', '咖啡茶饮配套', '海外亚超'],
    targetMarkets: ['中国全渠道', '东南亚 (越南/泰/新/马)', '中东'],
    badge: '新中式东方花香',
    colorScheme: 'emerald',
    imageUrl: '/images/tefeeo-jasmine-tea-wafer.jpg'
  },
  {
    id: 'tefeeo-popcorn',
    name: '特菲奥美式球形爆米花双罐实物 (焦糖/奶油味 各280g)',
    nameEn: 'Tefeeo American Spherical Popcorn Double Tin (Caramel & Butter 280g*2)',
    brand: '特菲奥 Tefeeo',
    brandType: 'proprietary_brand',
    category: '休闲膨化',
    origin: '中国 (China)',
    specification: '280g*2罐 / 经典透明密封保鲜双桶装',
    ingredientsHighlight: '非转基因优质进口玉米粒，天然椰子油爆制，粒粒浑圆饱满，双重经典口味',
    highlight: '焦糖浓郁与海盐芝士双重口味，邯郸美乐城等全国主流商超在架热销款，影院级品质体验',
    channels: ['全国连锁商超', '美乐城美好之家', '影院连锁', '便利店', '跨境出海专供'],
    targetMarkets: ['中国全渠道', '东南亚', '南亚', '中东', '非洲'],
    badge: '双桶双味·爆款实物',
    colorScheme: 'amber',
    imageUrl: '/images/tefeeo-popcorn-double-tin.jpg'
  },
  {
    id: 'tefeeo-milk-soda-crackers',
    name: '特菲奥海盐鲜乳苏打饼干 (750g 鲜牛乳含量≥7%)',
    nameEn: 'Tefeeo Sea Salt Fresh Milk Soda Crackers (750g Fresh Milk ≥7%)',
    brand: '特菲奥 Tefeeo',
    brandType: 'proprietary_brand',
    category: '烘焙饼干',
    origin: '中国 (China)',
    specification: '750g / 大容量全家分享装 (内含多袋独立小包)',
    ingredientsHighlight: '鲜牛乳含量 ≥ 7%！精选天然海盐调味，0反式脂肪酸，多次天然发酵，酥脆麦香',
    highlight: '清淡醇香、养胃低糖，大容量家庭及办公室常备健康点心，老少皆宜的高频复购单品',
    channels: ['大中型KA商超', '社区精品超市', '零食量贩店', '外贸出口'],
    targetMarkets: ['中国全渠道', '东南亚', '南亚', '中东', '非洲'],
    badge: '鲜牛乳≥7%·海盐配方',
    colorScheme: 'blue',
    imageUrl: '/images/tefeeo-milk-soda-750g.jpg'
  },
  {
    id: 'tefeeo-sweet-potato-chips',
    name: '特菲奥原切红薯片/地瓜片 (168g 戴墨镜潮酷版)',
    nameEn: 'Tefeeo Natural Crispy Sweet Potato Chips (168g)',
    brand: '特菲奥 Tefeeo',
    brandType: 'proprietary_brand',
    category: '果蔬脆片',
    origin: '中国 (China)',
    specification: '168g / 充气锁鲜铝箔袋',
    ingredientsHighlight: '精选优质红心沙地蜜薯整只原切，VF低温真空脱水工艺，保留原始红薯甜香',
    highlight: '保留丰富膳食纤维与β-胡萝卜素，0反式脂肪酸，香脆不油腻，深受年轻潮流群体追捧',
    channels: ['全国精品超市', '便利店系统', '零食量贩店', '海外出口专柜'],
    targetMarkets: ['中国全渠道', '东南亚', '南亚', '中东', '非洲'],
    badge: '原薯整只切片·VF低温',
    colorScheme: 'amber',
    imageUrl: '/images/tefeeo-sweet-potato-168g.png'
  },
  {
    id: 'tefeeo-yam-chips',
    name: '特菲奥五黑山药片 (花椒味 318g)',
    nameEn: 'Tefeeo Five-Black Chinese Yam Chips (Sichuan Pepper 318g)',
    brand: '特菲奥 Tefeeo',
    brandType: 'proprietary_brand',
    category: '养生休闲',
    origin: '中国 (China)',
    specification: '318g / 牛皮纸国潮大包装',
    ingredientsHighlight: '焦作铁棍山药 + 黑芝麻/黑豆/黑米/黑枸杞/黑桑葚五黑滋养配比，添加汉源贡椒微麻鲜香',
    highlight: '药食同源新中式养生零食，薄脆清香、微麻醇厚，兼顾传统国潮滋补与休闲解馋',
    channels: ['精品KA商超', '养生零食专柜', '电商全平台', '出口健康食品通道'],
    targetMarkets: ['中国全渠道', '东南亚 (越南/泰国/印尼)', '中东', '欧洲亚超'],
    badge: '五黑滋养·汉源贡椒',
    colorScheme: 'purple',
    imageUrl: '/images/tefeeo-five-black-yam-318g.jpg'
  },
  {
    id: 'tefeeo-organic-chestnuts',
    name: '特菲奥燕山有机板栗仁 (350g 大容量开袋即食)',
    nameEn: 'Tefeeo Organic Peeled Roasted Chestnuts (350g)',
    brand: '特菲奥 Tefeeo',
    brandType: 'proprietary_brand',
    category: '有机坚果',
    origin: '中国河北燕山山脉 (Yanshan Mountains)',
    specification: '350g / 铝箔锁鲜大包装 (内含独立分享小袋)',
    ingredientsHighlight: '100% 燕山高山有机生板栗，国家有机认证，0添加香精、色素与防腐剂',
    highlight: '高温无菌蒸制熟化，粉糯香甜，富含天然膳食纤维，高端健康免剥即食零食标杆',
    channels: ['高端精品商超 (Ole/BLT)', '母婴健康店', '出口日本/中东/东南亚'],
    targetMarkets: ['中国全渠道', '日本', '中东', '东南亚', '欧洲'],
    badge: '中国有机认证·免剥即食',
    colorScheme: 'emerald',
    imageUrl: '/images/tefeeo-organic-chestnuts-350g.jpg'
  },
  {
    id: 'tefeeo-hawthorn-burger',
    name: '特菲奥山楂汉堡 (108g 夹心小食)',
    nameEn: 'Tefeeo Hawthorn Burger Slices (108g)',
    brand: '特菲奥 Tefeeo',
    brandType: 'proprietary_brand',
    category: '山楂制品',
    origin: '中国 (China)',
    specification: '108g / 独立小包装袋装',
    ingredientsHighlight: '100% 优质鲜山楂打浆成型，多层山楂饼夹心工艺，酸甜开胃，天然果胶丰富',
    highlight: '可爱迷你汉堡造型，口感软糯有嚼劲，独立小包装方便随身携带与儿童健康零食',
    channels: ['全国KA商超', '便利店系统', '零食连锁', '外贸出口'],
    targetMarkets: ['中国全渠道', '东南亚', '中东', '南亚'],
    badge: '鲜果打浆·造型趣萌',
    colorScheme: 'red',
    imageUrl: '/images/tefeeo-hawthorn-burger-108g.jpg'
  },
  {
    id: 'tefeeo-hawthorn-rolls',
    name: '特菲奥山楂卷 (108g 经典果味卷)',
    nameEn: 'Tefeeo Pure Hawthorn Fruit Rolls (108g)',
    brand: '特菲奥 Tefeeo',
    brandType: 'proprietary_brand',
    category: '山楂制品',
    origin: '中国 (China)',
    specification: '108g / 独立锁鲜小卷包',
    ingredientsHighlight: '天然鲜红山楂直采打浆，0添加人工防腐剂，保留山楂天然果酸与维C',
    highlight: '经典传统空心小卷造型，层层撕着吃更有趣，消食解腻、酸甜适口，老少皆宜',
    channels: ['全国商超卖场', '精品超市', '社区零售店', '出口亚超'],
    targetMarkets: ['中国全渠道', '东南亚', '中东', '非洲'],
    badge: '传统果味·消食解腻',
    colorScheme: 'red',
    imageUrl: '/images/tefeeo-hawthorn-rolls-108g.jpg'
  },
  {
    id: 'tefeeo-hawthorn-slices',
    name: '特菲奥传统山楂片/山楂锭 (108g 怀旧原味)',
    nameEn: 'Tefeeo Traditional Hawthorn Slices (108g)',
    brand: '特菲奥 Tefeeo',
    brandType: 'proprietary_brand',
    category: '山楂制品',
    origin: '中国 (China)',
    specification: '108g / 精装袋装',
    ingredientsHighlight: '严选承德优质大红山楂原果，传统古法切片烘干工艺，果香浓郁',
    highlight: '经典国民怀旧风味，薄片酸甜适口，健脾开胃，老幼皆喜爱的经典日常零食',
    channels: ['传统分销网络', 'KA卖场', '药膳保健食品专柜', '出海直供'],
    targetMarkets: ['中国全渠道', '东南亚', '中东', '南亚'],
    badge: '古法切片·经典怀旧',
    colorScheme: 'red',
    imageUrl: '/images/tefeeo-hawthorn-slices-108g.jpg'
  },
  {
    id: 'tefeeo-hawthorn-strips',
    name: '特菲奥原味山楂条 (200g 鲜果厚切)',
    nameEn: 'Tefeeo Natural Hawthorn Strips (Original 200g)',
    brand: '特菲奥 Tefeeo',
    brandType: 'proprietary_brand',
    category: '山楂制品',
    origin: '中国 (China)',
    specification: '200g / 纯净立袋装',
    ingredientsHighlight: '鲜果打浆原浆厚切，配料纯净，0色素0香精，天然果香醇厚',
    highlight: '条状厚切软糯多汁，果香浓郁酸甜爆汁，下午茶办公解馋与儿童天然果肉零食佳品',
    channels: ['精品超市', '零食量贩店', '生鲜新零售', '外贸出口'],
    targetMarkets: ['中国全渠道', '东南亚', '中东', '欧洲'],
    badge: '原浆厚切·配料纯净',
    colorScheme: 'red',
    imageUrl: '/images/tefeeo-hawthorn-strips-200g.jpg'
  },

  // Imported Brand Agency (国外知名品牌进口代理)
  {
    id: 'imperial-danish-blue-tin',
    name: 'IMPERIAL (因贝利) 丹麦风味黄油曲奇 (500g 经典蓝罐)',
    nameEn: 'IMPERIAL Danish Style Butter Cookies (Blue Tin 500g)',
    brand: 'IMPERIAL 帝国',
    brandType: 'imported_agency',
    category: '进口品牌代理 · 国际烘焙',
    origin: '泰国 (Thailand) / 丹麦传统工艺传承',
    specification: '500g / 马口铁皇家经典圆形礼盒',
    ingredientsHighlight: '进口天然优质黄油，纯正丹麦皇家工艺，拥有 Halal 清真权威认证',
    highlight: '内含5种经典丹麦曲奇造型（香草圈、糖粒蝴蝶结、芬兰面包型、香脆椒盐卷），中国商超节庆礼盒常年销量冠军',
    channels: ['广百广场', '信誉楼百货', '美乐城世界商品', '山姆/Costco', '全国商超'],
    targetMarkets: ['中国大中型商超', '礼品团购渠道', '电商旗舰店'],
    badge: '泰国制造·清真认证',
    colorScheme: 'blue',
    imageUrl: '/images/imperial-danish-blue-tin.jpg'
  },
  {
    id: 'imperial-danish-red-tin',
    name: 'IMPERIAL (因贝利) 丹麦风味黄油曲奇 (500g 喜庆红罐)',
    nameEn: 'IMPERIAL Danish Style Butter Cookies (Red Tin 500g)',
    brand: 'IMPERIAL 帝国',
    brandType: 'imported_agency',
    category: '进口品牌代理 · 国际烘焙',
    origin: '泰国 (Thailand)',
    specification: '500g / 红色喜庆节庆礼盒铁罐',
    ingredientsHighlight: '高比例天然黄油，香浓酥化，金黄诱人',
    highlight: '专门迎合中国年节庆典、中秋及婚庆送礼的大气红金包装，全渠道堆头核心走量单品',
    channels: ['全国KA端头堆头', '年货专柜', '企业福利采购'],
    targetMarkets: ['中国全渠道'],
    badge: '年节礼盒走量王',
    colorScheme: 'red',
    imageUrl: '/images/imperial-danish-red-tin.jpg'
  },
  {
    id: 'imperial-gold-chocolate-box',
    name: 'IMPERIAL Gold Selection 瑞士进口巧克力曲奇 (90g)',
    nameEn: 'IMPERIAL Gold Selection Swiss Imported Chocolate Cookies (90g)',
    brand: 'IMPERIAL 帝国',
    brandType: 'imported_agency',
    category: '进口品牌代理 · 奢华黑金',
    origin: '泰国制造 (原料: 瑞士进口纯正巧克力)',
    specification: '90g / 典雅烫金开窗纸盒',
    ingredientsHighlight: 'Imported Chocolate from Switzerland，瑞士高纯度可可脂与纯正浓香巧克力粒',
    highlight: '欧式复古雕花礼盒设计，浓醇巧克力曲奇与可可曲奇双重享受，精品超市热销款',
    channels: ['精品进口超市', '高铁及机场精品店', '高端会员店'],
    targetMarkets: ['中国一二线核心商圈'],
    badge: '瑞士进口巧克力原材',
    colorScheme: 'gold',
    imageUrl: '/images/imperial-gold-chocolate-box.jpg'
  },
  {
    id: 'imperial-gold-hokkaido-butter',
    name: 'IMPERIAL Gold Selection 北海道牛油曲奇 (85g)',
    nameEn: 'IMPERIAL Gold Selection Hokkaido Butter Cookies (85g)',
    brand: 'IMPERIAL 帝国',
    brandType: 'imported_agency',
    category: '进口品牌代理 · 奢华黑金',
    origin: '泰国制造 (原料: 日本北海道进口牛油)',
    specification: '85g / 烫金贵族蓝包装',
    ingredientsHighlight: 'Imported Butter from Hokkaido，日本北海道纯净牧场浓香牛油，奶香扑鼻',
    highlight: '精巧烘烤焦糖斑点，酥脆可口，下午茶轻奢首选',
    channels: ['进口商品专柜', '高端CVS便利店', '美乐城世界商品'],
    targetMarkets: ['中国全渠道'],
    badge: '北海道黄油奶香浓郁',
    colorScheme: 'blue',
    imageUrl: '/images/imperial-gold-hokkaido-butter.jpg'
  },
  {
    id: 'imperial-blueberry-topping',
    name: 'IMPERIAL 蓝莓果酱淋浆曲奇 (100g 盒装)',
    nameEn: 'IMPERIAL Butter Cookies with Blueberry Topping (100g)',
    brand: 'IMPERIAL 帝国',
    brandType: 'imported_agency',
    category: '进口品牌代理 · 果酱曲奇',
    origin: '泰国 (Thailand)',
    specification: '100g / 紫色典雅立盒',
    ingredientsHighlight: '中心浇筑真实浓郁蓝莓果酱，纯正黄油曲奇托底',
    highlight: '果香与浓郁奶香碰撞，深受年轻白领与下午茶爱好者好评，终端动销迅速',
    channels: ['大中型商超', '进口食品专卖店', '天猫/京东旗舰店'],
    targetMarkets: ['中国全渠道'],
    badge: '真实果酱流心',
    colorScheme: 'purple',
    imageUrl: '/images/imperial-blueberry-topping.jpg'
  },
  {
    id: 'imperial-pillow-pack',
    name: 'IMPERIAL 丹麦风味黄油曲奇便携袋装 (50g / 60g 香草环)',
    nameEn: 'IMPERIAL Danish Butter Cookies Flow Pack (50g / 60g)',
    brand: 'IMPERIAL 帝国',
    brandType: 'imported_agency',
    category: '进口品牌代理 · 便捷小食',
    origin: '泰国 (Thailand)',
    specification: '50g~60g / 单袋即享充氮包',
    ingredientsHighlight: '泰国进口，经典皇家丹麦风味，清爽便携',
    highlight: '商超收银台前黄金排面、CVS便利店9.9元冲动消费核心款，单月铺货数十万包',
    channels: ['7-Eleven', '罗森', '全家', '美宜佳', '各大商超收银线'],
    targetMarkets: ['全国便利零售网络'],
    badge: '收银排面高频爆款',
    colorScheme: 'red',
    imageUrl: '/images/imperial-pillow-blue-60g.jpg'
  }
];

export const distributionChannelsData: DistributionChannel[] = [
  {
    id: 'national-ka-supermarkets',
    name: '全国大型KA商超与会员大卖场',
    category: '现代重点零售体系',
    reach: '覆盖全国31个省市自治区 · 1,200+ 核心门店',
    partners: ['广百广场', '信誉楼百货', '美乐城', '山姆会员店 (Sam\'s Club)', '开市客 (Costco)', '大润发', '永辉超市', '华润万家'],
    description: '特菲奥拥有成熟的大型KA直供与全国供货资质，直签总部采购合同，常年维持大型中岛堆头、端头专区与整箱陈列。',
    growth: '年出货量稳步增长28%'
  },
  {
    id: 'cvs-convenience-stores',
    name: '全国连锁CVS便利店系统',
    category: '高频即时消费网络',
    reach: '2,500+ 精准高流量网点',
    partners: ['7-Eleven', '罗森 (Lawson)', '全家 (FamilyMart)', '美宜佳', '便利蜂'],
    description: '抢占一线及新一线城市白领办公圈、交通枢纽与高校周边，针对小包装威化、便携曲奇与大虾片实现收银线快速动销。',
    growth: '一二线城市即时零售转化率超45%'
  },
  {
    id: 'boutique-import-stores',
    name: '高端精品与进口食品集合店',
    category: '品质中产与礼品零售',
    reach: '600+ 高端百货超市与跨境体验店',
    partners: ['Ole\' 精品超市', 'BLT', '盒马鲜生 (Freshippo)', '王府井百货', '久光百货'],
    description: '专门打造“世界商品”与“品质中国造”双展区，重点陈列瑞士巧克力曲奇、北海道牛油曲奇礼盒及特菲奥有机甘栗仁。',
    growth: '客单价与毛利表现极佳'
  },
  {
    id: 'global-export-network',
    name: '全球海外出口与国际分销网络 (出海专线)',
    category: '特菲奥品牌国际贸易出口',
    reach: '直达东南亚、南亚、中东、非洲四大战略目标市场',
    partners: ['东南亚主流商超 (越南/泰国/印尼/马/新)', '中东海湾六国进出口商 (阿联酋/沙特等)', '南亚及非洲大宗批发市场', '全球华人亚超集采商'],
    description: '提供正规原产地证（CO / FORM E）、全套出入境检验检疫商检合规、多语言清真Halal符合性标签与集装箱海运拼箱直供。',
    growth: '特菲奥出海咨询增长率超60%'
  },
  {
    id: 'online-omnichannel',
    name: '全网全域电商与直播矩阵',
    category: '数字化零售引擎',
    reach: '亿级线上曝光与官方直营',
    partners: ['天猫官方旗舰店', '京东自营', '抖音头部达人带货专场', '快手大原产地直播', '唯品会'],
    description: '多仓联动一键代发，达人溯源直播，实现从线上种草到线下商超全域联动的强大品牌闭环。',
    growth: '线上品牌声量季度翻倍'
  }
];

export interface MarketEstimatePlan {
  category: string;
  timeline: string;
  recommendedChannels: string[];
  complianceRequirements: string[];
  projectedAnnualReach: string;
  initialMoqBatch: string;
}

export const marketEntryEstimates: Record<string, MarketEstimatePlan> = {
  food_beverage: {
    category: '休闲食品与进口烘焙 (Food & Snacks)',
    timeline: '30 - 45 个工作日 (含标签审核与海关商检)',
    recommendedChannels: ['大型KA重点商超 (山姆/广百/大润发)', '全国连锁CVS便利店 (7-11/罗森)', '天猫国际与京东自营'],
    complianceRequirements: ['中国海关总署 GACC 境外生产企业注册', 'CIQ 卫生证书与原产地证明', '符合 GB 7718 中文标签加贴合规'],
    projectedAnnualReach: '1,500 万+ 核心消费者',
    initialMoqBatch: '首批试单: 1个标准高柜 (40HQ) 或 500 - 1,000 箱拼箱测试'
  },
  beauty_care: {
    category: '健康轻食与有机农副 (Organic & Health)',
    timeline: '25 - 35 个工作日',
    recommendedChannels: ['高端精品超市 (Ole\'/BLT/盒马)', '品质生鲜连锁', '跨境电商保税仓前置直发'],
    complianceRequirements: ['有机产品认证 / 产地溯源标准', '预包装食品标签备案', '食品流通与仓储温湿度温控'],
    projectedAnnualReach: '800 万+ 中高端品质消费人群',
    initialMoqBatch: '首批试销: 300 - 500 标准箱'
  },
  stationery_office: {
    category: '特菲奥自有品牌出海 (Export to SE Asia / ME / Africa)',
    timeline: '15 - 20 个工作日 (海运集装箱出港直航)',
    recommendedChannels: ['东南亚各商超系统 (越南/泰国等)', '中东及南亚食品大宗批发', '国际海运FOB/CIF港口直供'],
    complianceRequirements: ['原产地证 CO / FORM E 关税优惠', '出入境检验检疫卫生证书', '国际清真 Halal 符合性保障'],
    projectedAnnualReach: '覆盖 4 大核心出海新兴市场',
    initialMoqBatch: '集装箱 1x20GP 或 1x40HQ 整柜，支持多SKU混拼'
  },
  household_goods: {
    category: '国际品牌大中华区独家代理深耕 (Exclusive Master Agency)',
    timeline: '45 - 60 个工作日 (全渠道铺设与全国商超进场)',
    recommendedChannels: ['全国 3,000+ 线下实体商超及便利网点', '全国各大区物流仓储协同', '企业大宗采购及礼品定制通道'],
    complianceRequirements: ['大中华区独家品牌授权书公证', '海关知识产权备案与商标授权', '全国增值税对公合规开票结算'],
    projectedAnnualReach: '2,500 万+ 全渠道高频采购受众',
    initialMoqBatch: '战略启动批次: 2-3 个 40HQ 集装箱'
  }
};


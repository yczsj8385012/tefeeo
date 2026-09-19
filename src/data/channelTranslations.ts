import { Language, DistributionChannel } from '../types';

export interface WarehousingHub {
  city: string;
  role: string;
  warehouse: string;
}

export const localizedChannels: Record<Language, DistributionChannel[]> = {
  zh: [
    {
      id: 'national-ka-supermarkets',
      name: '全国大型KA商超与会员大卖场',
      category: '现代重点零售体系',
      reach: '覆盖全国31个省市自治区 · 1,200+ 核心门店',
      partners: ['广百广场', '信誉楼百货', '美乐城', '山姆会员店 (Sam\'s Club)', '开市客 (Costco)', '大润发', '永辉超市', '华润万家'],
      description: '特菲奥拥有成熟的大型KA直供与全国供货资质，直签总部采购合同，常年维持大型中岛堆头、端头专区与整箱陈列。',
      growth: '年出货量稳步增长 28%'
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
  ],
  en: [
    {
      id: 'national-ka-supermarkets',
      name: 'National KA Hypermarkets & Membership Clubs',
      category: 'Modern Key Accounts',
      reach: '31 Provinces · 1,200+ Core Stores',
      partners: ['Grandbuy Plaza', 'Xinyulou', 'Melody City', "Sam's Club", 'Costco', 'RT-Mart', 'Yonghui', 'CR Vanguard'],
      description: 'Tefeeo maintains headquarter-level direct procurement contracts with major hypermarket chains, managing prominent island pallet displays and year-round full-box endcaps.',
      growth: 'Annual shipment volume up 28%'
    },
    {
      id: 'cvs-convenience-stores',
      name: 'National CVS Convenience Store Chains',
      category: 'High-Frequency Impulse Retail',
      reach: '2,500+ Prime Foot-Traffic Stores',
      partners: ['7-Eleven', 'Lawson', 'FamilyMart', 'Meiyijia', 'Bianlifeng'],
      description: 'Targeting CBD white-collar hubs, transit terminals, and university campuses with grab-and-go wafers, single-serve cookies, and shrimp chips at cash register racks.',
      growth: 'Impulse checkout conversion over 45%'
    },
    {
      id: 'boutique-import-stores',
      name: 'High-End Boutique & Imported Food Centers',
      category: 'Premium Lifestyle & Gift Retail',
      reach: '600+ Luxury Department Stores & Experience Centers',
      partners: ["Ole' Supermarket", 'BLT', 'Freshippo (Hema)', 'Wangfujing', 'Jiuguang'],
      description: 'Curating dedicated "World Goods" aisles featuring Swiss chocolates, butter cookie gift tins, and Tefeeo organic roasted chestnuts.',
      growth: 'Exceptional basket size and gross margin'
    },
    {
      id: 'global-export-network',
      name: 'Global Export & International Distribution Lines',
      category: 'Tefeeo Brand Export Corridors',
      reach: 'SE Asia, South Asia, Middle East & Africa Corridors',
      partners: ['SE Asian Supermarket Chains', 'Gulf GCC Importers (UAE, Saudi Arabia)', 'South Asia & African Wholesalers', 'Global Asian Supermarkets'],
      description: 'Providing Certificates of Origin (CO / Form E), CIQ border clearance certificates, multilingual Halal compliance labels, and containerized FCL/LCL ocean shipping.',
      growth: 'Export inquiry growth exceeds 60%'
    },
    {
      id: 'online-omnichannel',
      name: 'E-Commerce Platforms & Live Stream Matrix',
      category: 'Digital Omnichannel Commerce',
      reach: 'Hundreds of Millions of Digital Impressions',
      partners: ['Tmall Flagship Store', 'JD.com Direct', 'Douyin Top Influencer Shows', 'Kuaishou Origin Streams', 'Vipshop'],
      description: 'Multi-warehouse automated drop-shipping combined with live influencer streaming, completing the closed-loop synergy between online discovery and offline retail sales.',
      growth: 'Quarterly brand search volume doubled'
    }
  ],
  ja: [
    {
      id: 'national-ka-supermarkets',
      name: '全国大型KAスーパー・会員制大型倉庫店',
      category: '現代重点小売システム',
      reach: '全国31省市・自治区を網羅 · 1,200+の中核店舗',
      partners: ['広百広場 (Grandbuy)', '信誉楼百貨', '美楽城 (Melody City)', 'サムズクラブ (Sam\'s Club)', 'コストコ (Costco)', 'RTマート (大潤発)', '永輝スーパー', '華潤万家'],
      description: '特菲奥（Tefeeo）は主要KAチェーンへの直販・全国供給資格を有し、本部直接購買契約を締結。大型アイランド陳列やエンド展開を常時維持しています。',
      growth: '年間出荷量 28% 安定伸長'
    },
    {
      id: 'cvs-convenience-stores',
      name: '全国チェーンCVSコンビニエンスストア網',
      category: '高頻度・即時消費ネットワーク',
      reach: '2,500+ 高トラフィック特化店舗',
      partners: ['セブン-イレブン (7-Eleven)', 'ローソン (Lawson)', 'ファミリーマート (FamilyMart)', '美宜佳 (Meiyijia)', '便利蜂 (Bianlifeng)'],
      description: '主要都市のビジネス街、交通結節点、大学キャンパス周辺をカバー。個包装ウエハース、携帯クッキー、シュリンプチップス等のレジ前即時購入を促進します。',
      growth: '都市部即時リテール転換率 45%超'
    },
    {
      id: 'boutique-import-stores',
      name: '高級ブティック＆輸入食品セレクトストア',
      category: '高品質ライフスタイル＆ギフト小売',
      reach: '600+ 高級百貨店スーパー＆体験型店舗',
      partners: ['Ole\' 精品スーパー', 'BLT', '盒馬鮮生 (Freshippo)', '王府井百貨', '久光百貨'],
      description: '「世界の逸品」と「中国発の高品質」の2大特設ゾーンを展開。スイスチョコレートクッキー、バタークッキーギフト缶、特菲奥有機甘栗などを重点陳列。',
      growth: '客単価および粗利率が極めて優秀'
    },
    {
      id: 'global-export-network',
      name: 'グローバル海外輸出＆国際ディストリビューション網（海外展開専用ライン）',
      category: '特菲奥（Tefeeo）ブランド国際貿易・輸出',
      reach: '東南アジア・南アジア・中東・アフリカの4大戦略市場に直通',
      partners: ['東南アジア主要スーパー（ベトナム/タイ等）', '中東GCC湾岸諸国輸入商社（UAE/サウジ等）', '南アジア・アフリカ大口卸売市場', '世界各地のアジア系スーパー調達商社'],
      description: '正規原産地証明書（CO / FORM E）、出入境検査検疫（CIQ）適合証明、多言語ハラール（Halal）認証ラベル、海上コンテナ（FCL/LCL）一貫輸送を提供。',
      growth: '特菲奥海外進出の相談件数が 60%超 増加'
    },
    {
      id: 'online-omnichannel',
      name: 'オムニチャネルEC＆ライブコマース・マトリクス',
      category: 'デジタルリテール・エンジン',
      reach: '億単位のオンライン露出＆公式直営展開',
      partners: ['Tmall天猫公式旗艦店', 'JD.com京東直営', 'Douyin抖音トップKOL特別ライブ', 'Kuaishou産地直送ライブ', '唯品会 (Vipshop)'],
      description: '複数倉庫連携によるドロップシッピングとトップKOLによる産地中継ライブ配信を組み合わせ、オンライン認知から実店舗購入への強力なシナジーを創出します。',
      growth: '四半期オンラインブランド露出が倍増'
    }
  ],
  ko: [
    {
      id: 'national-ka-supermarkets',
      name: '전국 대형 KA 마트 및 회원제 창고형 매장',
      category: '현대 핵심 리테일 체계',
      reach: '전국 31개 성·시·자치구 커버 · 1,200+ 핵심 매장',
      partners: ['광바이 광장 (Grandbuy)', '신위로우 백화점', '멜로디 시티', '샘스클럽 (Sam\'s Club)', '코스트코 (Costco)', '대윤발 (RT-Mart)', '영휘마트 (Yonghui)', '화룬완가 (CR Vanguard)'],
      description: '테피오(Tefeeo)는 대형 KA 본사 직납 및 전국 공급 라이선스를 완비하여, 본부 직계약을 통한 대형 아일랜드 매대 및 박스 단위 진열을 상시 운영합니다.',
      growth: '연간 출하량 28% 안정적 성장'
    },
    {
      id: 'cvs-convenience-stores',
      name: '전국 체인 CVS 편의점 네트워크',
      category: '고빈도 즉시 소비 네트워크',
      reach: '2,500+ 유동인구 집중 핵심 매장',
      partners: ['세븐일레븐 (7-Eleven)', '로손 (Lawson)', '패밀리마트 (FamilyMart)', '메이이지아 (Meiyijia)', '볜리펑 (Bianlifeng)'],
      description: '1선 및 신흥 1선 도시 오피스 상권, 교통 요충지, 대학가를 집중 공략하여 소포장 웨이퍼, 미니 쿠키, 새우칩의 계산대 인근 빠른 회전율을 달성합니다.',
      growth: '주요 도시 퀵커머스 전환율 45% 초과'
    },
    {
      id: 'boutique-import-stores',
      name: '프리미엄 부티크 및 수입 식품 편집숍',
      category: '고품질 라이프스타일 & 기프트 리테일',
      reach: '600+ 최고급 백화점 마트 및 크로스보더 체험관',
      partners: ['Ole\' 프리미엄 마트', 'BLT', '허마셴셩 (Freshippo)', '왕푸징 백화점', '지우광 백화점'],
      description: '‘세계의 명품’ 및 ‘프리미엄 메이드 인 차이나’ 기획존을 조성하여 스위스 초콜릿 쿠키, 버터 쿠키 선물세트, 테피오 유기농 맛밤을 집중 전시합니다.',
      growth: '객단가 및 마진율 최상위권 달성'
    },
    {
      id: 'global-export-network',
      name: '글로벌 해외 수출 및 국제 유통망 (해외 진출 전용 라인)',
      category: '테피오(Tefeeo) 브랜드 국제무역 수출',
      reach: '동남아·남아시아·중동·아프리카 4대 전략 시장 직통',
      partners: ['동남아 주요 대형마트 (베트남/태국/인니 등)', '중동 걸프 GCC 수입상 (UAE/사우디 등)', '남아시아 및 아프리카 대량 도매시장', '글로벌 아시안 마트 연합'],
      description: '정식 원산지증명서(CO / FORM E), 출입경 검역 위생증명서, 다국어 할랄(Halal) 인증 라벨 및 FCL/LCL 컨테이너 해상 직배송 서비스를 제공합니다.',
      growth: '테피오 해외 진출 문의 증가율 60% 상회'
    },
    {
      id: 'online-omnichannel',
      name: '전방위 이커머스 & 라이브 커머스 매트릭스',
      category: '디지털 리테일 엔진',
      reach: '수억 회 이상의 온라인 노출 및 공식 직영몰 운영',
      partners: ['티몰(Tmall) 공식 플래그십 스토어', '징둥(JD.com) 직영', '도우인(Douyin) 탑 왕홍 라이브', '콰이쇼우(Kuaishou) 산지 라이브', 'VIP.com'],
      description: '전국 다중 물류센터 자동 연동 배송과 유명 왕홍의 산지 라이브 방송을 결합하여, 온라인 인지도 확보에서 오프라인 매장 구매로 이어지는 풀퍼널 시너지를 완성합니다.',
      growth: '분기별 온라인 브랜드 검색량 2배 증가'
    }
  ],
  vi: [
    {
      id: 'national-ka-supermarkets',
      name: 'Hệ thống đại siêu thị KA & Siêu thị hội viên toàn quốc',
      category: 'Hệ thống bán lẻ trọng điểm hiện đại',
      reach: 'Phủ sóng 31 tỉnh thành · 1.200+ Cửa hàng nòng cốt',
      partners: ['Grandbuy Plaza', 'Bách hóa Xinyulou', 'Melody City', "Sam's Club", 'Costco', 'RT-Mart', 'Siêu thị Yonghui', 'CR Vanguard'],
      description: 'Tefeeo sở hữu tư cách cung ứng trực tiếp cấp tập đoàn cho các đại siêu thị lớn, duy trì đảo trưng bày trung tâm và ụ hàng nguyên thùng quanh năm.',
      growth: 'Sản lượng xuất kho tăng trưởng 28%/năm'
    },
    {
      id: 'cvs-convenience-stores',
      name: 'Hệ thống chuỗi cửa hàng tiện lợi CVS toàn quốc',
      category: 'Mạng lưới tiêu dùng tức thì tần suất cao',
      reach: '2.500+ Điểm bán lưu lượng cao',
      partners: ['7-Eleven', 'Lawson', 'FamilyMart', 'Meiyijia', 'Bianlifeng'],
      description: 'Chiếm lĩnh khu văn phòng, đầu mối giao thông và trường đại học tại các đô thị lớn, đẩy mạnh tiêu thụ bánh xốp, bánh quy gói nhỏ tại quầy thu ngân.',
      growth: 'Tỷ lệ chuyển đổi bán lẻ tức thì vượt 45%'
    },
    {
      id: 'boutique-import-stores',
      name: 'Cửa hàng boutique cao cấp & Thực phẩm nhập khẩu',
      category: 'Bán lẻ quà tặng & Lối sống chất lượng cao',
      reach: '600+ Siêu thị bách hóa cao cấp & Showroom trải nghiệm',
      partners: ["Ole' Supermarket", 'BLT', 'Freshippo (Hema)', 'Bách hóa Wangfujing', 'Jiuguang'],
      description: 'Thiết kế khu trưng bày "Hàng hóa thế giới" với bánh quy sô-cô-la Thụy Sĩ, hộp quà bánh quy bơ và hạt dẻ nướng hữu cơ Tefeeo.',
      growth: 'Giá trị đơn hàng và biên lợi nhuận vượt trội'
    },
    {
      id: 'global-export-network',
      name: 'Mạng lưới xuất khẩu quốc tế & Phân phối toàn cầu',
      category: 'Xuất khẩu thương mại quốc tế thương hiệu Tefeeo',
      reach: 'Đến thẳng ĐNÁ, Nam Á, Trung Đông và Châu Phi',
      partners: ['Siêu thị ĐNÁ (Việt Nam/Thái Lan...)', 'Nhà nhập khẩu GCC Trung Đông (UAE/Saudi...)', 'Chợ đầu mối Nam Á & Châu Phi', 'Hệ thống siêu thị Á Châu toàn cầu'],
      description: 'Cung cấp C/O (Form E), chứng nhận kiểm dịch xuất nhập khẩu, nhãn tuân thủ Halal đa ngôn ngữ và vận chuyển container đường biển nguyên cont FCL/LCL.',
      growth: 'Tăng trưởng tư vấn xuất khẩu vượt 60%'
    },
    {
      id: 'online-omnichannel',
      name: 'Hệ thống Thương mại Điện tử Đa kênh & Livestream',
      category: 'Động cơ bán lẻ kỹ thuật số',
      reach: 'Hàng trăm triệu lượt tiếp cận trực tuyến & Gian hàng chính hãng',
      partners: ['Gian hàng Tmall chính hãng', 'JD.com Direct', 'Livestream Douyin Top KOL', 'Kuaishou Origin Streams', 'Vipshop'],
      description: 'Liên kết đa kho giao hàng tức thì kết hợp livestream cùng các KOL hàng đầu, tạo vòng tròn khép kín từ nhận biết online đến tiêu thụ tại siêu thị offline.',
      growth: 'Độ phủ sóng thương hiệu tăng gấp đôi mỗi quý'
    }
  ],
  th: [
    {
      id: 'national-ka-supermarkets',
      name: 'ไฮเปอร์มาร์เก็ต KA ระดับประเทศและสโตร์ค้าส่งระบบสมาชิก',
      category: 'ระบบค้าปลีกสมัยใหม่ระดับคีย์แอคเคานต์',
      reach: 'ครอบคลุม 31 มณฑลและเขตการปกครอง · กว่า 1,200+ สาขาหลัก',
      partners: ['Grandbuy Plaza', 'ห้างสรรพสินค้า Xinyulou', 'Melody City', "Sam's Club", 'Costco', 'RT-Mart', 'Yonghui Supermarket', 'CR Vanguard'],
      description: 'Tefeeo มีสิทธิ์และใบอนุญาตกระจายสินค้าตรงสู่สำนักงานใหญ่ของไฮเปอร์มาร์เก็ตชั้นนำ จัดทำเกาะจัดวางสินค้าและแท่นโชว์เต็มรูปแบบตลอดทั้งปี',
      growth: 'ยอดการจัดส่งเติบโตต่อเนื่อง 28% ต่อปี'
    },
    {
      id: 'cvs-convenience-stores',
      name: 'เครือข่ายร้านสะดวกซื้อ CVS ชั้นนำทั่วประเทศ',
      category: 'เครือข่ายการบริโภคด่วนความถี่สูง',
      reach: 'กว่า 2,500+ จุดจำหน่ายที่มีทราฟฟิกหนาแน่น',
      partners: ['7-Eleven', 'Lawson', 'FamilyMart', 'Meiyijia', 'Bianlifeng'],
      description: 'เจาะกลุ่มพนักงานออฟฟิศ ย่านธุรกิจ ศูนย์กลางคมนาคม และมหาวิทยาลัย เน้นขนมเวเฟอร์ คุกกี้ซองพกพา และข้าวเกรียบกุ้งบริเวณแคชเชียร์',
      growth: 'อัตราการเปลี่ยนเป็นการซื้อทันทีสูงกว่า 45%'
    },
    {
      id: 'boutique-import-stores',
      name: 'บูทีกสโตร์ระดับพรีเมียมและศูนย์รวมสินค้านำเข้า',
      category: 'ค้าปลีกไลฟ์สไตล์คุณภาพและของขวัญ',
      reach: 'กว่า 600+ ซูเปอร์มาร์เก็ตในห้างหรูและศูนย์ประสบการณ์',
      partners: ["Ole' Supermarket", 'BLT', 'Freshippo (Hema)', 'ห้างสรรพสินค้า Wangfujing', 'Jiuguang'],
      description: 'จัดพื้นที่พิเศษ "สินค้ายอดนิยมระดับโลก" สำหรับคุกกี้ช็อกโกแลตสวิส คุกกี้เนยกล่องของขวัญ และเกาลัดคั่วอินทรีย์ Tefeeo',
      growth: 'มูลค่าต่อบิลและอัตรากำไรขั้นต้นยอดเยี่ยม'
    },
    {
      id: 'global-export-network',
      name: 'เครือข่ายส่งออกระหว่างประเทศและการจัดจำหน่ายทั่วโลก',
      category: 'การค้าและการส่งออกระหว่างประเทศของแบรนด์ Tefeeo',
      reach: 'ครอบคลุม 4 ตลาดเป้าหมาย: เอเชียตะวันออกเฉียงใต้ เอเชียใต้ ตะวันออกกลาง และแอฟริกา',
      partners: ['ซูเปอร์มาร์เก็ตชั้นนำในอาเซียน (ไทย/เวียดนาม/อินโดฯ)', 'ผู้นำเข้าในกลุ่มประเทศอ่าวอาหรับ (UAE/ซาอุดีฯ)', 'ตลาดค้าส่งรายใหญ่ในเอเชียใต้และแอฟริกา', 'ซูเปอร์มาร์เก็ตเอเชียทั่วโลก'],
      description: 'บริการหนังสือรับรองถิ่นกำเนิดสินค้า (CO / FORM E) ใบรับรองการกักกันโรค CIQ ฉลากฮาลาล (Halal) หลายภาษา และการขนส่งตู้คอนเทนเนอร์ทางเรือ FCL/LCL',
      growth: 'ยอดการสอบถามบริการส่งออกเติบโตกว่า 60%'
    },
    {
      id: 'online-omnichannel',
      name: 'แพลตฟอร์มอีคอมเมิร์ซครบวงจรและเครือข่ายไลฟ์สตรีม',
      category: 'เครื่องยนต์ค้าปลีกดิจิทัล',
      reach: 'ยอดการมองเห็นระดับร้อยล้านครั้งและร้านค้าทางการ',
      partners: ['ร้านค้าทางการ Tmall', 'JD.com Direct', 'ไลฟ์สด Douyin Top KOL', 'Kuaishou Live', 'Vipshop'],
      description: 'การจัดส่งตรงจากคลังสินค้าหลายแห่งควบคู่กับการไลฟ์สดโดยอินฟลูเอนเซอร์แถวหน้า สร้างการรับรู้ออนไลน์สู่การซื้อจริงที่หน้าร้านอย่างสมบูรณ์แบบ',
      growth: 'ยอดการค้นหาแบรนด์ออนไลน์เพิ่มขึ้นเท่าตัวทุกไตรมาส'
    }
  ],
  ar: [
    {
      id: 'national-ka-supermarkets',
      name: 'هايبر ماركت KA الوطنية والمتاجر الكبرى للأعضاء',
      category: 'منظومة التجزئة الحديثة الكبرى',
      reach: 'تغطية 31 مقاطعة صينية · أكثر من 1,200 متجر رئيسي',
      partners: ['جراند باي بلازا', 'متجر شينيولو', 'ميلودي سيتي', "سامز كلوب (Sam's Club)", 'كوستكو (Costco)', 'آر تي مارت', 'يونغهوي سوبرماركت', 'سي آر فانغارد'],
      description: 'تمتلك تيفيو مؤهلات التوريد المباشر لكبرى سلاسل الهايبر ماركت بعقود مباشرة مع المقرات الرئيسية، مع منصات عرض مركزية وعروض كرتونية طوال العام.',
      growth: 'نمو مستقر في حجم الشحنات السنوية بنسبة 28%'
    },
    {
      id: 'cvs-convenience-stores',
      name: 'سلسلة متاجر السوبرماركت الصغيرة CVS على مستوى الصين',
      category: 'شبكة الاستهلاك الفوري عالي الوتيرة',
      reach: 'أكثر من 2,500 نقطة بيع عالية الكثافة',
      partners: ['سفن إلفن (7-Eleven)', 'لوسون (Lawson)', 'فاميلي مارت (FamilyMart)', 'مي يي جيا', 'بيان لي فنغ'],
      description: 'استهداف الأبراج التجارية ومحطات النقل والجامعات، للبيع السريع للبسكويت المحشو والويفر ورقائق الروبيان عند منصات الدفع.',
      growth: 'معدل تحويل التجزئة الفورية يتجاوز 45%'
    },
    {
      id: 'boutique-import-stores',
      name: 'متاجر البوتيك الفاخرة ومراكز الأغذية المستوردة',
      category: 'تجزئة الهدايا ونمط الحياة الراقي',
      reach: 'أكثر من 600 متجر ومول فخم ومراكز تجارب',
      partners: ["أوليه (Ole')", 'بي إل تي (BLT)', 'فريشيبو (هيمـا)', 'وانغ فو جينغ', 'جيو غوانغ'],
      description: 'أقسام مخصصة لـ "بضائع العالم" تضم بسكويت الشوكولاتة السويسرية، علب هدايا بسكويت الزبدة، وكستناء تيفيو العضوية المحمصة.',
      growth: 'قيمة سلة تسوق وهوامش ربح ممتازة للغاية'
    },
    {
      id: 'global-export-network',
      name: 'شبكة التصدير الخارجي والتوزيع الدولي للعلامة التجارية',
      category: 'التجارة الدولية وتصدير منتجات تيفيو',
      reach: 'خطوط مباشرة إلى جنوب شرق آسيا، جنوب آسيا، الشرق الأوسط، وإفريقيا',
      partners: ['سلاسل السوبرماركت في جنوب شرق آسيا', 'مستوردو دول الخليج (الإمارات والسعودية)', 'أسواق الجملة الكبرى في إفريقيا وجنوب آسيا', 'سلاسل السوبرماركت الآسيوية حول العالم'],
      description: 'توفير شهادات المنشأ الرسمية (CO / FORM E)، فحص الحجر الصحي CIQ، ملصقات الحلال المعتمدة متعددة اللغات، وشحن الحاويات الكاملة والمجمعة بحراً.',
      growth: 'معدل نمو استفسارات التصدير يتجاوز 60%'
    },
    {
      id: 'online-omnichannel',
      name: 'منصات التجارة الإلكترونية الشاملة ومصفوفة البث المباشر',
      category: 'محرك التجزئة الرقمية',
      reach: 'مئات الملايين من المشاهدات الرقمية والمتاجر الرسمية',
      partners: ['متجر تي مول الرسمي', 'جينغ دونغ (JD) المباشر', 'عروض دوين (تيك توك) للمؤثرين', 'بث كوايشو المباشر', 'فيب شوب'],
      description: 'شحن آلي مباشر من مستودعات متعددة مدمج مع بث مباشر مع كبار المؤثرين، لإكمال التكامل بين الشهرة الرقمية والمبيعات في المتاجر الواقعية.',
      growth: 'تضاعف حجم البحث الرقمي عن العلامة التجارية فصلياً'
    }
  ]
};

export const localizedHubs: Record<Language, WarehousingHub[]> = {
  zh: [
    {
      city: '北京总枢纽 (HQ)',
      role: '北方大区综合总枢纽',
      warehouse: '25,000㎡ 恒温保税物流中心'
    },
    {
      city: '上海枢纽 (Shanghai)',
      role: '华东自贸区与港口枢纽',
      warehouse: '30,000㎡ 现代化冷链高标仓'
    },
    {
      city: '广州/深圳枢纽 (GBA)',
      role: '大湾区与跨境进出口基地',
      warehouse: '20,000㎡ 跨境电商前置保税仓'
    },
    {
      city: '成都枢纽 (Chengdu)',
      role: '西南成渝经济圈分拨仓',
      warehouse: '15,000㎡ 区域干线集散中心'
    }
  ],
  en: [
    {
      city: 'Beijing (HQ)',
      role: 'Northern Regional Logistics Hub',
      warehouse: '25,000㎡ Bonded Climate-Controlled Hub'
    },
    {
      city: 'Shanghai Hub',
      role: 'East China FTZ & Port Center',
      warehouse: '30,000㎡ Cold-Chain Modern Warehouse'
    },
    {
      city: 'Guangzhou/Shenzhen Hub',
      role: 'Greater Bay Area Import & Export Base',
      warehouse: '20,000㎡ Cross-Border Bonded Center'
    },
    {
      city: 'Chengdu Hub',
      role: 'Southwest Distribution Hub',
      warehouse: '15,000㎡ Trunk Line Logistics Center'
    }
  ],
  ja: [
    {
      city: '北京総本部 (HQ)',
      role: '華北エリア総合ロジスティクスハブ',
      warehouse: '25,000㎡ 定温・保税物流センター'
    },
    {
      city: '上海ハブ (Shanghai)',
      role: '華東自由貿易区＆港湾ゲートウェイ',
      warehouse: '30,000㎡ 最新型コールドチェーン高規格倉庫'
    },
    {
      city: '広州・深センハブ (GBA)',
      role: 'グレーターベイエリア越境輸出入基地',
      warehouse: '20,000㎡ 越境EC先行保税倉庫'
    },
    {
      city: '成都ハブ (Chengdu)',
      role: '西南成渝経済圏ディストリビューション拠点',
      warehouse: '15,000㎡ 地域幹線集散センター'
    }
  ],
  ko: [
    {
      city: '베이징 본부 (HQ)',
      role: '화베이 권역 종합 물류 총괄 허브',
      warehouse: '25,000㎡ 정온 보세 물류 센터'
    },
    {
      city: '상하이 허브 (Shanghai)',
      role: '화둥 자유무역구 및 항만 관문',
      warehouse: '30,000㎡ 최신 콜드체인 고규격 물류창고'
    },
    {
      city: '광저우/선전 허브 (GBA)',
      role: '대만구(GBA) 크로스보더 수출입 거점',
      warehouse: '20,000㎡ 크로스보더 전자상거래 전진 보세창고'
    },
    {
      city: '청두 허브 (Chengdu)',
      role: '서남 청위 경제권 중앙 배송 허브',
      warehouse: '15,000㎡ 권역 간선 집산 센터'
    }
  ],
  vi: [
    {
      city: 'Tổng bộ Bắc Kinh (HQ)',
      role: 'Trung tâm Logistics Tổng hợp Miền Bắc',
      warehouse: '25.000㎡ Trung tâm ngoại quan kiểm soát nhiệt độ'
    },
    {
      city: 'Hub Thượng Hải (Shanghai)',
      role: 'Cửa ngõ Cảng biển & Khu mậu dịch tự do Miền Đông',
      warehouse: '30.000㎡ Kho lạnh tiêu chuẩn cao hiện đại'
    },
    {
      city: 'Hub Quảng Châu/Thâm Quyến (GBA)',
      role: 'Căn cứ Xuất nhập khẩu Vùng Vịnh Lớn',
      warehouse: '20.000㎡ Kho ngoại quan thương mại điện tử'
    },
    {
      city: 'Hub Thành Đô (Chengdu)',
      role: 'Kho phân phối Vành đai Kinh tế Tây Nam',
      warehouse: '15.000㎡ Trung tâm trung chuyển logistics liên tỉnh'
    }
  ],
  th: [
    {
      city: 'สำนักงานใหญ่ปักกิ่ง (HQ)',
      role: 'ศูนย์กลางโลจิสติกส์ครอบคลุมภาคเหนือ',
      warehouse: 'คลังสินค้าทัณฑ์บนควบคุมอุณหภูมิ 25,000 ตร.ม.'
    },
    {
      city: 'ศูนย์เซี่ยงไฮ้ (Shanghai)',
      role: 'เขตการค้าเสรีและศูนย์กลางท่าเรือภาคตะวันออก',
      warehouse: 'คลังสินค้าห้องเย็นมาตรฐานสูงทันสมัย 30,000 ตร.ม.'
    },
    {
      city: 'ศูนย์กวางโจว/เซินเจิ้น (GBA)',
      role: 'ฐานนำเข้าและส่งออกข้ามพรมแดนเกรตเตอร์เบย์',
      warehouse: 'คลังสินค้าทัณฑ์บนอีคอมเมิร์ซข้ามพรมแดน 20,000 ตร.ม.'
    },
    {
      city: 'ศูนย์เฉิงตู (Chengdu)',
      role: 'ศูนย์กระจายสินค้าเศรษฐกิจภาคตะวันตกเฉียงใต้',
      warehouse: 'ศูนย์รวมการกระจายสินค้าสายหลัก 15,000 ตร.ม.'
    }
  ],
  ar: [
    {
      city: 'المقر الرئيسي ببكين (HQ)',
      role: 'المحور اللوجستي الشامل للمنطقة الشمالية',
      warehouse: '25,000 متر مربع مستودع جمركي متحكم بحرارته'
    },
    {
      city: 'محور شنغهاي (Shanghai)',
      role: 'منطقة التجارة الحرة والميناء لشرق الصين',
      warehouse: '30,000 متر مربع مستودع تبريد حديث عالي المواصفات'
    },
    {
      city: 'محور قوانغتشو / شنتشن (GBA)',
      role: 'قاعدة الاستيراد والتصدير لمنطقة الخليج الكبرى',
      warehouse: '20,000 متر مربع مستودع جمركي للتجارة الإلكترونية'
    },
    {
      city: 'محور تشنغدو (Chengdu)',
      role: 'مركز التوزيع لجنوب غرب الصين',
      warehouse: '15,000 متر مربع مركز شحن ولوجستيات إقليمي'
    }
  ]
};

export function getLocalizedChannels(lang: Language): DistributionChannel[] {
  return localizedChannels[lang] || localizedChannels.en;
}

export function getLocalizedHubs(lang: Language): WarehousingHub[] {
  return localizedHubs[lang] || localizedHubs.en;
}

import { Language } from '../types';
import { MarketEstimatePlan } from './mockData';

export const localizedMarketEstimates: Record<Language, Record<string, MarketEstimatePlan>> = {
  zh: {
    food_beverage: {
      category: '休闲食品与高端酒水 (Food & Beverages)',
      timeline: '30 - 45 个工作日 (含标签审核与海关商检)',
      recommendedChannels: ['大型KA重点商超 (山姆/广百/大润发)', '全国连锁CVS便利店 (7-11/罗森)', '天猫国际与京东自营'],
      complianceRequirements: ['中国海关总署 GACC 境外生产企业注册', 'CIQ 卫生证书与原产地证明', '符合 GB 7718 中文标签加贴合规'],
      projectedAnnualReach: '1,500 万+ 核心消费者',
      initialMoqBatch: '首批试单: 1个标准高柜 (40HQ) 或 500 - 1,000 箱拼柜'
    },
    beauty_care: {
      category: '美妆护肤与个人护理 (Beauty & Personal Care)',
      timeline: '25 - 35 个工作日',
      recommendedChannels: ['高端精品超市 (Ole\'/BLT/盒马)', '品质美妆连锁', '跨境电商保税仓前置直发'],
      complianceRequirements: ['NMPA进口非特备案 / 安全评估', '原产地证明与成份合规', '温湿度恒温保税仓配'],
      projectedAnnualReach: '800 万+ 中高端品质消费人群',
      initialMoqBatch: '首批试销: 300 - 500 标准箱'
    },
    stationery_office: {
      category: '文具办公与文创礼品 (Stationery & Gifts)',
      timeline: '15 - 20 个工作日 (出海直航 / 快捷通关)',
      recommendedChannels: ['东南亚主流商超 (越南/泰国等)', '文创集合店与书店连锁', '国际海运 FOB/CIF 港口直供'],
      complianceRequirements: ['原产地证 CO / FORM E 关税优惠', '质检出具商检符合性证书', '双语标签加贴与环保认证'],
      projectedAnnualReach: '覆盖 4 大核心出海新兴市场',
      initialMoqBatch: '集装箱 1x20GP 或 1x40HQ 整柜，支持多SKU拼柜'
    },
    household_goods: {
      category: '品质日用百货与家居 (Home & Daily Necessities)',
      timeline: '45 - 60 个工作日 (全渠道铺设与全国商超进场)',
      recommendedChannels: ['全国 3,000+ 实体商超及生活馆', '区域物流分拨枢纽直供', '企业大宗采购及礼品定制通道'],
      complianceRequirements: ['海关知识产权备案与品牌授权', 'GB国标检测报告与条码备案', '全国增值税对公合规开票结算'],
      projectedAnnualReach: '2,500 万+ 全渠道高频采购受众',
      initialMoqBatch: '战略启动批次: 2-3 个 40HQ 集装箱'
    }
  },
  en: {
    food_beverage: {
      category: 'Food & Premium Beverages',
      timeline: '30 - 45 Business Days (CIQ Inspection & Labeling)',
      recommendedChannels: ['KA Hypermarkets (Sam\'s / Grandbuy / RT-Mart)', 'CVS Chains (7-Eleven / Lawson)', 'Tmall Global & JD Direct'],
      complianceRequirements: ['China GACC Overseas Manufacturer Registration', 'CIQ Sanitary Certificate & Certificate of Origin', 'GB 7718 Chinese Compliant Labeling'],
      projectedAnnualReach: '15M+ Prime Target Consumers',
      initialMoqBatch: 'Trial Order: 1x40HQ Container or 500 - 1,000 Cartons LCL'
    },
    beauty_care: {
      category: 'Beauty & Personal Care',
      timeline: '25 - 35 Business Days',
      recommendedChannels: ['Premium Supermarkets (Ole\' / BLT / Freshippo)', 'Cosmetic Boutique Chains', 'Bonded Cross-Border Fulfillment'],
      complianceRequirements: ['NMPA Import Registration / Safety Assessment', 'Certificate of Origin & Ingredient Audit', 'Climate-Controlled Warehousing'],
      projectedAnnualReach: '8M+ Affluent Lifestyle Shoppers',
      initialMoqBatch: 'Initial Test Batch: 300 - 500 Standard Cartons'
    },
    stationery_office: {
      category: 'Stationery & Creative Gifts',
      timeline: '15 - 20 Business Days (Direct Vessel / Express Clearance)',
      recommendedChannels: ['SE Asian Supermarket Chains (Vietnam / Thailand)', 'Creative Lifestyle Bookstores', 'International FOB / CIF Ocean Shipping'],
      complianceRequirements: ['Certificate of Origin CO / Form E Tariff Benefits', 'Export Inspection Compliance Certificate', 'Bilingual Compliance Packaging'],
      projectedAnnualReach: 'Cross-Border Reach in 4 Strategic Corridors',
      initialMoqBatch: '1x20GP or 1x40HQ Container with Mixed SKU Support'
    },
    household_goods: {
      category: 'Daily Necessities & Home Living',
      timeline: '45 - 60 Business Days (Nationwide Omnichannel Rollout)',
      recommendedChannels: ['3,000+ Nationwide Retail Outlets & Department Stores', 'Regional Logistic Distribution Hubs', 'Corporate Procurement & Gift Channels'],
      complianceRequirements: ['Trademark & IP Customs Recordation', 'GB National Standards Testing Reports', 'Nationwide VAT Invoice & Corporate Settlement'],
      projectedAnnualReach: '25M+ High-Frequency Omnichannel Shoppers',
      initialMoqBatch: 'Strategic Launch Batch: 2-3 x 40HQ Containers'
    }
  },
  ja: {
    food_beverage: {
      category: '食品＆高級酒類 (Food & Beverages)',
      timeline: '30〜45 営業日 (ラベル審査・税関検査含む)',
      recommendedChannels: ['大型KAスーパー (Sam\'s/Grandbuy/RTマート)', '全国チェーンCVS (セブン/ローソン)', '天猫国際＆京東自営'],
      complianceRequirements: ['中国税関総署 (GACC) 海外製造企業登録', 'CIQ衛生証明書＆原産地証明書', 'GB 7718中国語法定表示ラベル貼付'],
      projectedAnnualReach: '1,500万人+ コア消費者',
      initialMoqBatch: '初回テスト発注: 40HQコンテナ1本 または 500〜1,000箱混載'
    },
    beauty_care: {
      category: 'スキンケア＆パーソナルケア (Beauty & Care)',
      timeline: '25〜35 営業日',
      recommendedChannels: ['高級セレクトスーパー (Ole\'/BLT/盒馬)', '高品質コスメチェーン', '越境EC保税倉庫ダイレクト配送'],
      complianceRequirements: ['NMPA輸入化粧品届出・安全性評価', '成分適合性審査および原産地証明', '定温保税倉庫管理・即時出荷'],
      projectedAnnualReach: '800万人+ 高所得ライフスタイル層',
      initialMoqBatch: '初回テスト販売: 300〜500標準カートン'
    },
    stationery_office: {
      category: '文具オフィス＆クリエイティブギフト (Stationery & Gifts)',
      timeline: '15〜20 営業日 (輸出直行便・迅速通関)',
      recommendedChannels: ['東南アジア主要スーパー (ベトナム/タイ等)', 'ライフスタイル書店・雑貨チェーン', '国際海上FOB/CIF港湾直行便'],
      complianceRequirements: ['原産地証明書 (CO / Form E) 関税減免', '出入境検査検疫適合証明書', '多言語ラベル対応＆環境安全認証'],
      projectedAnnualReach: '4大海外戦略市場をダイレクト網羅',
      initialMoqBatch: '20GPまたは40HQコンテナ1本 (複数SKU混載対応)'
    },
    household_goods: {
      category: '高品質日用品＆インテリア雑貨 (Home Living)',
      timeline: '45〜60 営業日 (全国オムニチャネル配荷・スーパー導入)',
      recommendedChannels: ['全国3,000+実店舗スーパー＆ライフスタイル館', '地域物流ハブ直結供給網', '法人大口調達＆ギフト専用ルート'],
      complianceRequirements: ['中国税関知的財産権登録・商標ライセンス', 'GB国家基準検査報告書＆バーコード登録', '増値税法規準拠の対公請求・決済'],
      projectedAnnualReach: '2,500万人+ オムニチャネル購買層',
      initialMoqBatch: '戦略ローンチ発注: 40HQコンテナ 2〜3本'
    }
  },
  ko: {
    food_beverage: {
      category: '가공식품 및 고급 주류 (Food & Beverages)',
      timeline: '30 - 45 영업일 (라벨 심사 및 통관 검역 포함)',
      recommendedChannels: ['대형 KA 마트 (샘스클럽/광바이/RT마트)', '전국 체인 편의점 (세븐일레븐/로손)', '티몰국제 및 징둥 직영'],
      complianceRequirements: ['중국 세관총서 (GACC) 해외 제조업체 등록', 'CIQ 위생증명서 및 원산지증명서', 'GB 7718 중국어 라벨 부착 규정 준수'],
      projectedAnnualReach: '1,500만+ 핵심 타겟 소비자',
      initialMoqBatch: '초도 발주: 40HQ 컨테이너 1대 또는 500~1,000박스 혼적 테스트'
    },
    beauty_care: {
      category: '뷰티·스킨케어 및 퍼스널케어 (Beauty & Care)',
      timeline: '25 - 35 영업일',
      recommendedChannels: ['프리미엄 수입 마트 (Ole\'/BLT/허마)', '뷰티 편집숍 체인', '보세구역 크로스보더 전자상거래 직송'],
      complianceRequirements: ['NMPA 수입 화장품 등록 및 안전성 평가', '성분 배합 심사 및 원산지 증빙', '항온 항습 보세창고 보관 및 풀필먼트'],
      projectedAnnualReach: '800만+ 프리미엄 라이프스타일 소비층',
      initialMoqBatch: '초도 테스트 물량: 300 - 500 표준 박스'
    },
    stationery_office: {
      category: '문구·오피스 및 문화상품 (Stationery & Gifts)',
      timeline: '15 - 20 영업일 (해외 직항로 및 쾌속 통관)',
      recommendedChannels: ['동남아 주요 대형마트 (베트남/태국 등)', '디자인 서점 및 라이프스타일 숍', '국제 해상운송 FOB/CIF 항구 직항'],
      complianceRequirements: ['원산지증명서 (CO / Form E) 관세 혜택', '출입경 검사검역 적합증명서', '다국어 라벨링 및 환경 안전 인증'],
      projectedAnnualReach: '4대 핵심 해외 진출 신흥 시장 커버',
      initialMoqBatch: '1x20GP 또는 1x40HQ 컨테이너 (다품종 혼적 가능)'
    },
    household_goods: {
      category: '생활용품 및 홈리빙 (Home Living & Daily)',
      timeline: '45 - 60 영업일 (전국 옴니채널 입점 및 매장 진열)',
      recommendedChannels: ['전국 3,000+ 오프라인 마트 및 리빙관', '권역별 물류 허브 직납 체계', '기업 대량 구매 및 기프트 특판 채널'],
      complianceRequirements: ['세관 지식재산권 등록 및 상표권 라이선스', 'GB 국가표준 검사성적서 및 바코드 등록', '증치세 합법 세금계산서 발행 및 정산'],
      projectedAnnualReach: '2,500만+ 옴니채널 고빈도 구매 고객',
      initialMoqBatch: '전략 론칭 초도 물량: 40HQ 컨테이너 2-3대'
    }
  },
  vi: {
    food_beverage: {
      category: 'Thực phẩm & Đồ uống cao cấp (Food & Beverages)',
      timeline: '30 - 45 Ngày làm việc (Bao gồm kiểm dịch & nhãn phụ)',
      recommendedChannels: ['Đại siêu thị KA (Sam\'s Club / Grandbuy / RT-Mart)', 'Chuỗi CVS (7-Eleven / Lawson)', 'Tmall Global & JD Direct'],
      complianceRequirements: ['Đăng ký doanh nghiệp sản xuất GACC Hải quan Trung Quốc', 'Chứng nhận vệ sinh CIQ & Chứng nhận xuất xứ (C/O)', 'Nhãn phụ tiếng Trung đạt chuẩn GB 7718'],
      projectedAnnualReach: '15 Triệu+ Người tiêu dùng mục tiêu',
      initialMoqBatch: 'Đơn thử nghiệm: 1 Cont 40HQ hoặc 500 - 1.000 Thùng ghép'
    },
    beauty_care: {
      category: 'Mỹ phẩm & Chăm sóc cá nhân (Beauty & Care)',
      timeline: '25 - 35 Ngày làm việc',
      recommendedChannels: ['Siêu thị cao cấp (Ole\' / BLT / Freshippo)', 'Chuỗi cửa hàng mỹ phẩm chất lượng', 'Giao thẳng từ kho ngoại quan thương mại điện tử'],
      complianceRequirements: ['Hồ sơ NMPA / Đánh giá an toàn mỹ phẩm nhập khẩu', 'Kiểm tra thành phần & Chứng nhận xuất xứ', 'Hệ thống kho ngoại quan kiểm soát nhiệt độ'],
      projectedAnnualReach: '8 Triệu+ Khách hàng cao cấp',
      initialMoqBatch: 'Lô thử nghiệm: 300 - 500 Thùng tiêu chuẩn'
    },
    stationery_office: {
      category: 'Văn phòng phẩm & Quà tặng sáng tạo (Gifts)',
      timeline: '15 - 20 Ngày làm việc (Vận chuyển thẳng / Thông quan nhanh)',
      recommendedChannels: ['Hệ thống siêu thị ĐNÁ (Việt Nam / Thái Lan...)', 'Chuỗi nhà sách & Cửa hàng phong cách sống', 'Vận tải biển quốc tế FOB / CIF trực tiếp'],
      complianceRequirements: ['C/O Form E hưởng ưu đãi thuế quan', 'Chứng nhận kiểm dịch xuất nhập khẩu hợp quy', 'Dán nhãn đa ngôn ngữ & Tiêu chuẩn môi trường'],
      projectedAnnualReach: 'Bao phủ 4 hành lang xuất khẩu chiến lược',
      initialMoqBatch: '1 Cont 20GP hoặc 40HQ (Hỗ trợ ghép nhiều mã SKU)'
    },
    household_goods: {
      category: 'Hàng tiêu dùng & Đồ gia dụng (Home Living)',
      timeline: '45 - 60 Ngày làm việc (Phủ sóng toàn diện kênh siêu thị)',
      recommendedChannels: ['3.000+ Điểm bán lẻ & Siêu thị trên toàn quốc', 'Hệ thống trung tâm phân phối logistics khu vực', 'Kênh mua sắm doanh nghiệp & Quà tặng đối tác'],
      complianceRequirements: ['Đăng ký quyền sở hữu trí tuệ Hải quan & Bản quyền', 'Báo cáo kiểm định tiêu chuẩn quốc gia GB', 'Xuất hóa đơn VAT & Thanh toán doanh nghiệp chuẩn'],
      projectedAnnualReach: '25 Triệu+ Khách hàng mua sắm đa kênh',
      initialMoqBatch: 'Đợt khởi động chiến lược: 2-3 Cont 40HQ'
    }
  },
  th: {
    food_beverage: {
      category: 'อาหารว่างและเครื่องดื่มพรีเมียม (Food & Beverages)',
      timeline: '30 - 45 วันทำการ (รวมตรวจฉลากและผ่านพิธีการศุลกากร CIQ)',
      recommendedChannels: ['ไฮเปอร์มาร์เก็ตชั้นนำ (Sam\'s / Grandbuy / RT-Mart)', 'ร้านสะดวกซื้อ CVS (7-Eleven / Lawson)', 'Tmall Global และ JD Direct'],
      complianceRequirements: ['การขึ้นทะเบียนผู้ผลิตในต่างประเทศ GACC ศุลกากรจีน', 'ใบรับรองสุขอนามัย CIQ และใบรับรองถิ่นกำเนิดสินค้า C/O', 'การติดฉลากภาษาจีนตามมาตรฐาน GB 7718'],
      projectedAnnualReach: 'กว่า 15 ล้าน+ ผู้บริโภคกลุ่มเป้าหมาย',
      initialMoqBatch: 'คำสั่งซื้อทดลอง: ตู้คอนเทนเนอร์ 40HQ 1 ตู้ หรือ 500 - 1,000 ลัง (LCL)'
    },
    beauty_care: {
      category: 'ความงามและผลิตภัณฑ์ดูแลผิว (Beauty & Care)',
      timeline: '25 - 35 วันทำการ',
      recommendedChannels: ['ซูเปอร์มาร์เก็ตหรู (Ole\' / BLT / Freshippo)', 'ร้านเครื่องสำอางชั้นนำ', 'จัดส่งด่วนจากคลังสินค้าทัณฑ์บนข้ามพรมแดน'],
      complianceRequirements: ['การจดแจ้งนำเข้า NMPA และการประเมินความปลอดภัย', 'ตรวจสอบสูตรส่วนผสมและหนังสือรับรองถิ่นกำเนิด', 'คลังสินค้าทัณฑ์บนควบคุมอุณหภูมิและความชื้น'],
      projectedAnnualReach: 'กว่า 8 ล้าน+ ผู้บริโภคระดับพรีเมียม',
      initialMoqBatch: 'ล็อตทดลองรอบแรก: 300 - 500 ลังมาตรฐาน'
    },
    stationery_office: {
      category: 'เครื่องเขียน ของใช้สำนักงาน และของขวัญ (Gifts)',
      timeline: '15 - 20 วันทำการ (ส่งออกทางเรือตรง / ผ่านพิธีการรวดเร็ว)',
      recommendedChannels: ['ซูเปอร์มาร์เก็ตในอาเซียน (ไทย / เวียดนาม ฯลฯ)', 'ร้านหนังสือและกิฟต์ช็อปสร้างสรรค์', 'ขนส่งทางเรือระหว่างประเทศ FOB / CIF ตรงสู่ท่าเรือ'],
      complianceRequirements: ['หนังสือรับรองถิ่นกำเนิดสินค้า Form E ลดหย่อนภาษี', 'ใบรับรองการตรวจปล่อยและสุขอนามัย CIQ', 'ฉลากสองภาษาและมาตรฐานสิ่งแวดล้อมสากล'],
      projectedAnnualReach: 'ครอบคลุม 4 ตลาดส่งออกเกิดใหม่เชิงยุทธศาสตร์',
      initialMoqBatch: 'ตู้คอนเทนเนอร์ 20GP หรือ 40HQ (รองรับคละ SKU)'
    },
    household_goods: {
      category: 'ของใช้ในชีวิตประจำวันและของแต่งบ้าน (Home Living)',
      timeline: '45 - 60 วันทำการ (กระจายสินค้าทุกช่องทางและซูเปอร์มาร์เก็ตทั่วประเทศ)',
      recommendedChannels: ['จุดจำหน่ายและห้างสรรพสินค้ากว่า 3,000+ แห่งทั่วประเทศ', 'เครือข่ายศูนย์กระจายสินค้าตามภูมิภาค', 'ช่องทางจัดซื้อองค์กรและของขวัญพรีเมียม'],
      complianceRequirements: ['การจดทะเบียนทรัพย์สินทางปัญญากับศุลกากรและอนุญาตเครื่องหมายการค้า', 'รายงานผลการทดสอบมาตรฐานแห่งชาติ GB และบาร์โค้ด', 'การออกใบกำกับภาษี VAT และการชำระเงินทางธุรกิจ'],
      projectedAnnualReach: 'กว่า 25 ล้าน+ ผู้บริโภคซื้อสินค้าบ่อยครั้ง',
      initialMoqBatch: 'คำสั่งซื้อเปิดตัวเชิงยุทธศาสตร์: 2-3 ตู้คอนเทนเนอร์ 40HQ'
    }
  },
  ar: {
    food_beverage: {
      category: 'الأغذية الخفيفة والمشروبات الفاخرة (Food & Beverages)',
      timeline: '30 - 45 يوم عمل (شامل فحص CIQ واعتماد الملصقات)',
      recommendedChannels: ['هايبر ماركت KA الكبرى (Sam\'s / Grandbuy / RT-Mart)', 'سلاسل متاجر CVS (7-Eleven / Lawson)', 'تي مول الدولية ومتجر جينغ دونغ المباشر'],
      complianceRequirements: ['تسجيل المصنع الخارجي لدى الجمارك الصينية GACC', 'شهادة الصحة CIQ وشهادة المنشأ الرسمية', 'ملصق متوافق باللغة الصينية وفق معيار GB 7718'],
      projectedAnnualReach: 'أكثر من 15 مليون مستهلك مستهدف',
      initialMoqBatch: 'طلب تجريبي أولي: حاوية 40HQ أو 500 - 1,000 كرتونة تجميع'
    },
    beauty_care: {
      category: 'مستحضرات التجميل والعناية الشخصية (Beauty & Care)',
      timeline: '25 - 35 يوم عمل',
      recommendedChannels: ['متاجر السوبرماركت الفخمة (Ole\' / BLT / Freshippo)', 'سلاسل المتاجر التجميلية المتخصصة', 'شحن مباشر من مستودعات التجارة الإلكترونية المعفاة'],
      complianceRequirements: ['تسجيل NMPA للاستيراد وتقييم السلامة', 'فحص المكونات وشهادة المنشأ الرسمية', 'مستودعات مبردة ومتحكم بدرجة حرارتها'],
      projectedAnnualReach: 'أكثر من 8 ملايين متسوق ذوي قدرة شرائية عالية',
      initialMoqBatch: 'دفعة اختبارية أولى: 300 - 500 كرتونة معيارية'
    },
    stationery_office: {
      category: 'الأدوات المكتبية والهدايا الإبداعية (Stationery & Gifts)',
      timeline: '15 - 20 يوم عمل (شحن بحري مباشر وتخليص سريع)',
      recommendedChannels: ['سلاسل السوبرماركت في جنوب شرق آسيا', 'سلاسل المكتبات ومتاجر الهدايا العصرية', 'شحن بحري دولي مباشر فوب أو سيف (FOB/CIF)'],
      complianceRequirements: ['شهادة المنشأ CO / Form E للاستفادة من الإعفاءات الجمركية', 'شهادات الفحص الجمركي والصحي المتوافقة', 'ملصقات متعددة اللغات واعتمادات بيئية دولية'],
      projectedAnnualReach: 'تغطية 4 ممرات استراتيجية رئيسية للتصدير',
      initialMoqBatch: 'حاوية 20GP أو 40HQ كاملة، مع دعم دمج عدة أصناف'
    },
    household_goods: {
      category: 'السلع اليومية والمستلزمات المنزلية (Home Living)',
      timeline: '45 - 60 يوم عمل (توزيع شامل ودخول الأسواق الوطنية)',
      recommendedChannels: ['أكثر من 3,000 متجر ومول تجاري في كافة أرجاء الصين', 'محاور لوجستية ومراكز توزيع إقليمية', 'قنوات المشتريات المؤسسية الكبرى والهدايا'],
      complianceRequirements: ['تسجيل الملكية الفكرية والعلامة التجارية لدى الجمارك', 'تقارير فحص المواصفات الوطنية الصينية GB والباركود', 'فواتير ضريبية نظامية وتسويات بنكية تجارية'],
      projectedAnnualReach: 'أكثر من 25 مليون متسوق دائم عبر كافة القنوات',
      initialMoqBatch: 'دفعة الإطلاق الاستراتيجي: 2 - 3 حاويات 40HQ'
    }
  }
};

export function getLocalizedEstimate(categoryKey: string, lang: Language): MarketEstimatePlan {
  const langEstimates = localizedMarketEstimates[lang] || localizedMarketEstimates.en;
  return langEstimates[categoryKey] || langEstimates.food_beverage;
}

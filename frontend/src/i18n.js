import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Language resources
const resources = {
  EN: {
    translation: {
      home: "Home",
      about_us: "About Us",
      services: "Services",
      auditing: "Auditing",
      accounting: "Accounting",
      tax_services: "Tax Services",
      payroll: "Payroll",
      article: "Article",
      login: "LOGIN",
      contact_us: "Contact Us",

      accounting_home: "Accounting & Taxes",
      solutions:"Solutions to Grow",
      business:"Your Business",
      tax:"TAX • AUDIT • ACCOUNTING • LEGAL",
      description1: "Connect is an internaltional audit, tax and advisory firm. We are committed to providing exceptional and tailored services in audit, accounting, consulting and legal services for our clients.",
      contact_us_home: "Contact Us",

      about_us_home:"About us",
      when_it:"When it comes to accounts you can count on us.",
      connect:"Connect",
      des_connect: ", We are an accounting firm that is legally licensed by the Federation of Accounting Professions. Since its establishment, we committed to providing services with excellence in the accounting & taxes field, modernity, and integrity. Our company has been cooperating with the team in various fields so that we can advise and provide valued services to customers in a vast industry.",
      innovation:"INNOVATION ",
      des_innovation: "Continuously improve the skills and knowledge of the team",
      empathy:"EMPATHY ",
      des_empathy: "Understanding customers in order to deliver the right services to customer",
      excellence:"EXCELLENCE ",
      des_excellence: "We are experts in accounting and tax.",
      commitment:"COMMITMENT ",
      des_commitment: "Responsible for our job until reaching the goal set",
      description_about_us:"We are so glad that we can use our expertise in accounting and tax to maximize the benefits for our clients. We believe in supporting and empowering our clients to grow sustainably over the long term.",

      solution_for: "Solution for every business needs.",
      description2: "We provide a full range of accounting, auditing, and tax services. We serve a group of clients from small to large companies in various industries.",
      auditing_for: "Auditing Service",
      des_auditing: "We provide qualified auditing services to ensure that your financial statements have been prepared correctly.",
      accounting_for: "Accounting service",
      des_accounting: "We provide comprehensive accounting services for you so that you can maximize your time to run your business efficiently.",
      tax_for: "Tax service",
      des_tax: "Tax planning is the key to reducing your tax burden. So that you can create maximum profit for the organization.",
      read_more: "Read More",

      need: "Need a personalized solution",
      des_need: "As a one-stop professional services provider we offer the full range of accounting services to solve your problem, please contact us for any difficulties you face with.",
      how_we_can: "How we can help?",
      empowering: "Empowering you to make sound financial decisions.",
      financial_empowering: "Financial assessment reports",
      income_empowering: "Income tax planning and consulting",
      payroll_empowering: "Payroll and sales taxes",


      no_matter: "No matter who you are, we’ve got what you need.",

      accounting_firms: "Accounting Firms",
      des_accounting_firms: "We have been serving a hundred Accounting firms in Thailand for assurance service.",

      local: "Local Entrepreneurs",
      des_local: "Over 20 years of experience in accounting field, we will help you to boost your business the blast.",

      multinational: "Multinational Corporation",
      des_multinational: "A number of Large Multinational Corporation engage us for professional advisory",
    

      get: "Get a personal consultation",
      office: "Office",
      contact_home: "Contact",
      open_hours: "Open Hours",
      time: "Monday – Saturday",

      Name: "Name",
      Name: "Name",

      phone_home: "Phone",
      email_home: "Email address",

      Service: "Service interested in",
      accounting_services: "Accounting",
      tax_services: "Tax Services",
      financial_services: "Financial",
      bookkeeping: "Bookkeeping",
      payroll: "Payroll",
      outsourcing: "Outsourcing",
      

      subject:"Subject",
      personal:"Personal Tax Planning",
      how:"How can we help?",
      des_how:"I need help with the next problem",
      request_quote:"Request a Quote",


      overview: "Overview",
      business_info: "Business Info",
      services: "Services",
      empire: "Empire Tower Building, 47th Floor, Unit 4703, Sathon Tai Road, Yan Nawa Sub-district, Sathon District, Bangkok",
      who_we: "Who we are",
      article: "Article",
      privacy: "Privacy Policy",
      back_to_top: "Back to top",
    },
  },
  TH: {
    translation: {
      home: "หน้าหลัก",
      about_us: "เกี่ยวกับเรา",
      services: "บริการ",
      auditing: "การตรวจสอบ",
      accounting: "การบัญชี",
      tax_services: "บริการภาษี",
      payroll: "การจ่ายเงินเดือน",
      article: "บทความ",
      login: "เข้าสู่ระบบ",
      contact_us: "ติดต่อเรา",

      accounting_home: "Accounting & Taxes",
      solutions:"Solutions to Grow",
      business:"Your Business",
      tax:"TAX • AUDIT • ACCOUNTING • LEGAL",
      description1: "Connect is an internaltional audit, tax and advisory firm. We are committed to providing exceptional and tailored services in audit, accounting, consulting and legal services for our clients.",
      contact_us_home: "Contact Us",

      about_us_home:"About us",
      when_it:"When it comes to accounts you can count on us.",
      connect:"Connect",
      des_connect: "เป็นสำนักงานบัญชีที่ได้รับอนุญาติจากสภาวิชาชีพบัญชีถูกต้องตามกฎหมาย ตั้งแต่เริ่มก่อตั้งธุรกิจ สำนักงานยึดมั่นที่จะทำงานบนอยู่บนพื้นฐานของความเป็นเลิศในสายงาน ความทันสมัยและความซื่อสัตย์ สำนักงานของเราได้รวบรวมทีมงานที่มีความรู้ในหลากหลายด้าน เพื่อให้เราสามารถให้คำแนะนำและให้บริการแก่ลูกค้าในแต่กลุ่มอุตสาหกรรมได้",
      innovation:"INNOVATION ",
      des_innovation: "พัฒนาทักษะแลความรู้ของทีมงานอย่างต่อเนื่อง",
      empathy:"EMPATHY ",
      des_empathy: "ทำความเข้าใจลูกค้าเพื่อส่งมอบบริการที่ดีและตรงจุดแก่ลูกค้า",
      excellence:"EXCELLENCE ",
      des_excellence: "เราเป็นผู้เชี่ยวชาญในสายงานด้านบัญชีและภาษี",
      commitment:"COMMITMENT ",
      des_commitment: "รับผิดชอบต่องานที่บริการจนบรรลุเป้าหมายที่ได้วางไว้",
      description_about_us:"เรามีความภูมิใจเมื่อได้ใช้ความรู้ความเชี่ยวชาญในด้านบัญชีและภาษีเพื่อสร้างประโยชน์สูงสุดให้แก่ลูกค้าของเรา สำนักงานมีความเชื่อที่จะสนับสนุนและส่งเสริมให้ลูกค้าของเราสามารถเติบโตอย่างต่อเนื่องในระยะยาวได้",

      solution_for: "Solution for every business needs.",
      description2: "We provide a full range of accounting, auditing, and tax services. We serve a group of clients from small to large companies in various industries.",
      auditing_for: "รับตรวจสอบบัญชี",
      des_auditing: "เราให้บริการตรวจสอบ บัญชีตามมาตรฐาน เพื่อให้ท่านมั่นใจว่างบ การเงินของท่านถูกจัด ทำขึ้นอย่างถูกต้อง",
      accounting_for: "รับทำบัญชี",
      des_accounting: "บริการงานดูแลงาน ด้านบัญชีอย่างครบ วงจร เพื่อให้ท่านได้ใช้ เวลาในการประกอบ ธุรกิจอย่างมี ประสิทธิภาพ",
      tax_for: "บริการด้านภาษี",
      des_tax: "การวางแผนภาษีเป็น กุญแจสำคัญในการลด ภาระภาษี เพื่อให้ท่าน สามารถสร้างผลกำไร สูงสุดขององค์กร",
      read_more: "อ่านเพิ่มเติม",

      need: "คุณต้องการคนที่คอยให้ปรึกษาหรือไม่",
      des_need: "เราเป็นผู้ให้บริการมืออาชีพแบบครบวงจร เราพร้อมที่จะช่วยคุณแก้ไขปัญหาเรื่องบัญชีและภาษี",
      how_we_can: "ติดต่อเรา",
      empowering: "Empowering you to make sound financial decisions.",
      financial_empowering: "รายงานการประเมินทางการเงิน",
      income_empowering: "ให้คำปรึกษาและวางแผนเรื่องภาษีเงินได้",
      payroll_empowering: "เงินเดือนและภาษีขาย",


      no_matter: "ไม่ว่าคุณจะมีปัญหาใด เราพร้อมที่จะให้คำปรึกษาคุณ",

      accounting_firms: "สำนักงานบัญชี",
      des_accounting_firms: "จากบริการที่รวดเร็วและมีคุณภาพ ลูกค้าสำนักงานบัญชีหลายร้อยราย เชื่อมั่นให้เราช่วยดูแลงานด้านการตรวจสอบบัญชี",

      local: "ผู้ประกอบการในประเทศ",
      des_local: "ประสบการณ์กว่า 20 ปี ในด้านบัญชีและภาษี เราสามารถช่วยให้ธุรกิจคุณเติบโตอย่างรวดเร็วและมั่นคงได้",

      multinational: "บริษัทข้ามชาติ (MNC)",
      des_multinational: "เป็นที่ปรึกษาให้กับบริษัทข้ามชาติ ทั้งด้านการวางระบบบัญชี การควบคุมภายใน รวมถึงการให้คำปรึกษาด้านภาษีอากร",
    

      get: "Get a personal consultation",
      office: "Office",
      contact_home: "Contact",
      open_hours: "Open Hours",
      time: "Monday – Saturday",

      Name: "Name",
      Name: "Name",

      phone_home: "Phone",
      email_home: "Email address",

      Service: "Service interested in",
      accounting_services: "Accounting",
      tax_services: "Tax Services",
      financial: "Financial",
      bookkeeping: "Bookkeeping",
      payroll: "Payroll",
      outsourcing: "Outsourcing",
      

      subject:"Subject",
      personal:"Personal Tax Planning",
      how:"How can we help?",
      des_how:"I nedd help with the next problem",
      request_quote:"Request a Quote",


      overview: "Overview",
      business_info: "ที่อยู่บริษัท",
      services: "บริการของเรา",
      empire: "1 อาคารเอ็มไพร์ ทาวเวอร์ ชั้นที่ 47 ห้องเลขที่ 4703 ถนนสาทรใต้ แขวงยานนาวา เขตสาทร กรุงเทพมหานคร",
      who_we: "เกี่ยวกับเรา",
      article: "บทความ",
      privacy: "นโยบายส่วนบุคคล",
      back_to_top: "กลับด้านบน",
    },
  },
  ZH: {
    translation: {
      home: "首页",
      about_us: "关于我们",
      services: "服务",
      auditing: "审计",
      accounting: "会计",
      tax_services: "税务服务",
      payroll: "工资单",
      article: "文章",
      login: "登录",
      contact_us: "联系我们",

      accounting_home: "会计与税务 ",
      solutions:"增长解决方案",
      business:"您的业务",
      tax:"税务 • 审计 • 会计 • 法律",
      description1: "康宁是一家国际审计、税务和咨询公司。我们致力于为客户提供在审计、会计、咨询和法律服务方面的卓越和定制服务",
      contact_us_home: "联系我们",

      about_us_home:"About us",
      when_it:"在帐户方面，您可以信赖我们",
      connect:"Connect",
      des_connect: ", 我们是一家获得会计行业联合会合法许可的会计师事务所。 自成立以来，我们致力于在会计和税务领域提供卓越、现代和诚信的服务。 我们公司一直在与各个领域的团队合作，以便我们可以为广大行业的客户提供建议和有价值的服务。",
      innovation:"INNOVATION ",
      des_innovation: "不断提高团队的技能和知识",
      empathy:"EMPATHY ",
      des_empathy: "了解客户以便为客户提供正确的服务",
      excellence:"EXCELLENCE ",
      des_excellence: "我们是会计和税务方面的专家。",
      commitment:"COMMITMENT ",
      des_commitment: "对我们的工作负责，直到达到设定的目标",
      description_about_us:"我们很高兴能够利用我们在会计和税务方面的专业知识为客户带来最大的利益。 我们相信支持和授权我们的客户长期可持续发展。",

      solution_for: "Solution for every business needs.",
      description2: "我们提供全方位的会计、审计和税务服务。 我们服务于各行各业的从小型到大型公司的客户群。",
      auditing_for: "审计服务",
      des_auditing: "我们提供合格的审计服务，以确保您的财务报表已正确编制。",
      accounting_for: "会计服务",
      des_accounting: "我们为您提供全面的会计服务，使您可以最大限度地利用时间来有效地经营您的业务。",
      tax_for: "税务服务",
      des_tax: "税务筹划是减轻税务负担的关键。 这样您就可以为组织创造最大的利润。",
      read_more: "Read More",

      need: "需要个性化的解决方案",
      des_need: "作为一站式专业服务提供商，我们提供全方位的会计服务来解决您的问题，如果您遇到任何困难，请与我们联系。",
      how_we_can: "我们如何帮助 ?",
      empowering: "Empowering you to make sound financial decisions.",
      financial_empowering: "财务评估报告",
      income_empowering: "所得税筹划和咨询",
      payroll_empowering: "工资和销售税",


      no_matter: "No matter who you are, we’ve got what you need.",

      accounting_firms: "会计事务所",
      des_accounting_firms: "我们已为泰国的一百家会计事务所提供保证服务",

      local: "本地企业家",
      des_local: "在会计领域拥有超过十年的经验，我们将帮助您推动业务的爆炸性增长",

      multinational: "跨国公司",
      des_multinational: "多家大型跨国公司选择我们进行专业咨询",
    

      get: "获得个人咨询",
      office: "办公室",
      contact_home: "联系",
      open_hours: "营业时间",
      time: "星期一至星期六",

      Name: "姓名",
      Name: "姓名",

      phone_home: "电话",
      email_home: "电子邮件地址",

      Service: "对服务感兴趣",
      accounting_services: "会计",
      tax_services: "税务服务",
      financial: "财务",
      bookkeeping: "簿记",
      payroll: "工资单",
      outsourcing: "Outsourcing",
      

      subject:"主题",
      personal:"个人税务规划",
      how:"我们如何帮助 ?",
      des_how:"我需要帮助解决下一个问题",
      request_quote:"索取报价",


      overview: "概观",
      business_info: "商业信息",
      services: "服务",
      empire: "帝國大廈大樓，47樓，4703單元，薩通泰路，雁那瓦分區，雁那瓦次區，曼谷",
      who_we: "关于我们",
      article: "文章",
      privacy: "隐私政策",
      back_to_top: "返回顶部",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "EN",
  interpolation: {
    escapeValue: false,
  }
});

export default i18n;

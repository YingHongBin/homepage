// 新闻数据
export const newsData = [
  {
    id: "2025-12-16",
    image:
      "https://dataxai.oss-cn-hangzhou.aliyuncs.com/assets/img/news/2025-12-16-1.png",
    title_zh:
      "第二届CCF中国数据大会｜中国科学院外籍院士黄铭钧：数据价值如何才能真正释放？",
    title_en:
      "CCF China Data 2025 | Ooi Beng Chin, Foreign Academician of the Chinese Academy of Sciences: How Can the Value of Data Truly Be Unleashed?",
    date_zh: "2025年12月16日",
    date_en: "December 16, 2025",
    source_link:
      "https://dsj.guizhou.gov.cn/xwzx/snyw/202512/t20251216_89056046.html",
    zh_translation: "",
    en_translation: "ChatGPT 5.1",
    summary_zh:
      '12月13日，在第二届CCF中国数据大会开幕式现场，中国科学院外籍院士、浙江大学教授黄铭钧以"NeurDB数据库内分析：面向高效部署的模型选择、切片与定制化"为主题作主旨报告。',
    summary_en:
      'On December 13, at the opening ceremony of the Second CCF China Data Conference, Ooi Beng Chin, Foreign Academician of the Chinese Academy of Sciences and Professor at Zhejiang University, delivered a keynote speech titled "NeurDB In-Database Analytics: Model Selection, Slicing, and Customization for Efficient Deployment."',
    content_zh: `
      <p>"数据库是数字经济的关键基础设施，市场规模预计2028年将突破930亿元。"12月13日，在第二届CCF中国数据大会开幕式现场，中国科学院外籍院士、浙江大学教授黄铭钧以"NeurDB数据库内分析：面向高效部署的模型选择、切片与定制化"为主题作主旨报告。</p>
      <p>黄铭钧认为，各行业正推进智能化转型，智慧金融、智慧医疗等场景对数据智能化应用提出了更高要求。</p>
      <img src="https://dataxai.oss-cn-hangzhou.aliyuncs.com/assets/img/news/2025-12-16-1.png" alt="post" style="display: block; margin: 0 auto; max-width: 100%;">
      <p>然而，现有数据库系统尚未实现AI与数据库的深度融合，AI应用研发多采用跨数据库与AI两套独立系统的模式，既因数据频繁跨系统流动产生性能损耗，又存在数据暴露于外部模型的安全风险。</p>
      <p>黄铭钧院士梳理了数据驱动智能的演进脉络，从依赖人类编码知识的符号智能时代，到依托神经网络学习数据规律的统计学习时代，再到以大模型与数据生态为核心的中心化智能时代；数据库也历经关系型、NoSQL、NewSQL的迭代，到目前亟需突破"AI与数据库割裂"的技术瓶颈。</p>
      <p>"事实上，我们团队早在2016年便提出'AI与数据库能力互补'的愿景，从2014年跨模态检索研究起步，到2015年SINGA孵化器落地、2019年技术纳入Apache顶级项目，逐步搭建起AI与数据库融合的技术体系。"黄铭钧说。</p>
      <img src="https://dataxai.oss-cn-hangzhou.aliyuncs.com/assets/img/news/2025-12-16-2.png" alt="post" style="display: block; margin: 0 auto; max-width: 100%;">
      <p>黄铭钧院士详解了两大核心成果，一是以AI驱动的新型数据库系统NeurDB，能够打破数据库与AI系统的技术阻隔，实现一体化设计；二是数据库原生智能数据分析框架NeurIDA，其三大核心技术模块聚焦破解行业难题。</p>
      <p>"数据的价值，唯有通过高效管理与深度分析才能真正释放。"黄铭钧院士强调，NeurDB与NeurIDA实现了模型结构与查询意图、关系模式、任务语义的深度对齐，不仅降低了各行业应用AI技术的门槛，更代表着下一代数据库管理系统的发展。</p>
    `,
    content_en: `
      <p>"Databases are a critical infrastructure of the digital economy, and the market size is expected to exceed RMB 93 billion by 2028." On December 13, at the opening ceremony of the Second CCF China Data Conference, Huang Mingjun, Foreign Academician of the Chinese Academy of Sciences and Professor at Zhejiang University, delivered a keynote speech titled "NeurDB In-Database Analytics: Model Selection, Slicing, and Customization for Efficient Deployment."</p>
      <p>Prof. Ooi Beng Chin noted that industries across the board are advancing intelligent transformation, and scenarios such as smart finance and smart healthcare are placing higher demands on intelligent data applications.</p>
      <img src="https://dataxai.oss-cn-hangzhou.aliyuncs.com/assets/img/news/2025-12-16-1.png" alt="post" style="display: block; margin: 0 auto; max-width: 100%;">
      <p>However, existing database systems have yet to achieve deep integration between AI and databases. AI application development often adopts two separate systems—one for databases and another for AI—which not only incurs performance overhead due to frequent cross-system data movement, but also introduces security risks as data are exposed to external models.</p>
      <p>Prof. Ooi Beng Chin reviewed the evolution of data-driven intelligence—from the era of symbolic intelligence that relied on human-encoded knowledge, to the era of statistical learning powered by neural networks, and further to the current era of centralized intelligence centered on large models and data ecosystems. In parallel, databases have evolved from relational systems to NoSQL and NewSQL, and now urgently need to break through the technological bottleneck of the separation between AI and databases.</p>
      <p>"In fact, our team proposed the vision of 'complementary capabilities between AI and databases' as early as 2016," Prof. Ooi Beng Chin said. "Starting with cross-modal retrieval research in 2014, followed by the launch of the SINGA incubator in 2015 and the inclusion of related technologies into an Apache top-level project in 2019, we have gradually built a technical system that integrates AI and databases."</p>
      <img src="https://dataxai.oss-cn-hangzhou.aliyuncs.com/assets/img/news/2025-12-16-2.png" alt="post" style="display: block; margin: 0 auto; max-width: 100%;">
      <p>Prof. Ooi Beng Chin then elaborated on two core achievements. The first is NeurDB, a new AI-driven database system that breaks the technical barriers between databases and AI systems through an integrated, unified design. The second is NeurIDA, a database-native intelligent data analytics framework whose three core technical modules are designed to address key industry challenges.</p>
      <p>"The value of data can only be truly unleashed through efficient management and deep analysis," Huang emphasized. By deeply aligning model structures with query intent, relational schemas, and task semantics, NeurDB and NeurIDA not only lower the barrier to adopting AI technologies across industries, but also represent the future direction of next-generation database management systems.</p>
    `,
  },
  {
    id: "2025-11-09",
    image:
      "https://dataxai.oss-cn-hangzhou.aliyuncs.com/assets/img/news/2025-11-09.png",
    title_zh: "世界互联网大会：黄铭钧谈数据与人工智能协同",
    title_en:
      "World Internet Conference: Ooi Beng Chin Talks about Data and AI Collaboration",
    date_zh: "2025年11月9日",
    date_en: "November 09, 2025",
    source_link: "",
    zh_translation: "",
    en_translation: "",
    summary_zh:
      "在2025年11月8日举行的世界互联网大会乌镇峰会人工智能技术创新与治理论坛上，黄铭钧院士围绕数据与人工智能协同发展进行分享。",
    summary_en:
      "At the Artificial Intelligence Technology Innovation and Governance Forum held during the 2025 World Internet Conference Wuzhen Summit on November 8, Academician Ooi Beng Chin shared insights on the collaborative development of data and AI.",
    content_zh: `
      <p>11月8日，2025年世界互联网大会乌镇峰会人工智能技术创新与治理论坛在浙江乌镇举行。论坛以"擘画人工智能新时代，共谋创新治理新篇章"为主题，围绕生成式人工智能、大模型等技术热点，探讨人工智能发展趋势与全球治理路径，推动技术创新与安全治理协同并进。</p>
      <p>来自中国及多个国家和地区的政府代表、院士专家、国际组织负责人和企业代表参加论坛。与会嘉宾认为，人工智能在赋能经济社会发展的同时，也对安全、伦理和治理提出了更高要求，需要在开放合作中凝聚国际共识。</p>
      <p>中国科学院外籍院士、新加坡工程院院士、浙江大学求是讲席教授黄铭钧结合实践指出，数据系统与人工智能具有显著协同效应，通过融合数据库技术、深度学习和大语言模型，可构建高效、可信的智能系统，为人工智能在重点行业的应用奠定基础。</p>
      <img src="https://dataxai.oss-cn-hangzhou.aliyuncs.com/assets/img/news/2025-11-09.png" alt="post" style="display: block; margin: 0 auto; max-width: 100%;">
    `,
    content_en: `
      <p>On November 8th, the 2025 World Internet Conference Wuzhen Summit Artificial Intelligence Technology Innovation and Governance Forum was held in Wuzhen, Zhejiang. The forum, themed "Drawing a New Era of Artificial Intelligence, Jointly Creating a New Chapter of Innovative Governance," focused on hot topics such as generative AI and large models, discussing AI development trends and global governance paths, promoting the coordinated advancement of technological innovation and security governance.</p>
      <p>Government representatives, academicians, experts, heads of international organizations, and enterprise representatives from China and multiple countries and regions attended the forum. Participants believed that while AI empowers economic and social development, it also raises higher requirements for security, ethics, and governance, necessitating the consolidation of international consensus through open cooperation.</p>
      <p>Academician of the Chinese Academy of Sciences, Academician of the Singapore Academy of Engineering, and Qiu Shi Chair Professor at Zhejiang University, Ooi Beng Chin, pointed out based on practice that data systems and AI have significant synergy. By integrating database technology, deep learning, and large language models, efficient and trustworthy intelligent systems can be built, laying the foundation for AI applications in key industries.</p>
      <img src="https://dataxai.oss-cn-hangzhou.aliyuncs.com/assets/img/news/2025-11-09.png" alt="post" style="display: block; margin: 0 auto; max-width: 100%;">
    `,
  },
  {
    id: "2025-04-08",
    image:
      "https://dataxai.oss-cn-hangzhou.aliyuncs.com/assets/img/news/2025-04-08.jpg",
    title_zh: "APACHE SINGA 5.0.0 发布",
    title_en: "APACHE SINGA 5.0.0 released",
    date_zh: "2025年4月8日",
    date_en: "April 08, 2025",
    source_link: "",
    zh_translation: "",
    en_translation: "",
    summary_zh:
      "我们很高兴地宣布 Apache SINGA v5.0 正式发布！在本版本中，我们重点增强了医疗模型库，目前已支持包括心血管疾病、糖尿病、血液疾病等在内的多种疾病模型。",
    summary_en:
      "We are happy to announce the release of Apache SINGA v5.0! In this version, we focus on enhancing the healthcare model zoo, which now supports models for diseases such as cardiovascular disease, diabetes, hematologic disorders, etc.",
    content_zh: `
      <p>我们很高兴地宣布 Apache SINGA v5.0 正式发布！</p>
      <p>在本版本中，我们重点增强了医疗模型库，目前已支持包括心血管疾病、糖尿病、血液疾病等在内的多种疾病模型。</p>
      <p>我们于2014年启动了<a href="https://singa.apache.org/" target="_blank">Apache SINGA</a>，这是一个分布式深度学习平台；在2015年在Apache软件基金会（ASF）孵化，并于2015年10月发布了<a href="https://en.wikipedia.org/wiki/Apache_SINGA" target="_blank">第一个版本</a>。它于2019年10月毕业成为第一个ASF顶级项目（TOP），专注于分布式学习。</p>
      <img src="https://dataxai.oss-cn-hangzhou.aliyuncs.com/assets/img/news/2025-04-08.jpg" alt="post" style="display: block; margin: 0 auto; max-width: 100%;">
    `,
    content_en: `
      <p>We are happy to announce the release of Apache SINGA v5.0!</p>
      <p>In this version, we focus on enhancing the healthcare model zoo, which now supports models for diseases such as cardiovascular disease, diabetes, hematologic disorders, etc.</p>
      <p>We started <a href="https://singa.apache.org/" target="_blank">Apache SINGA</a>, a distributed deep learning platform, in 2014; incubated it at Apache Software Foundation (ASF) in 2015, and released its <a href="https://en.wikipedia.org/wiki/Apache_SINGA" target="_blank">first version</a> in October 2015. It graduated as the first ASF top-level-project (TOP) on distributed learning in Oct 2019.</p>
      <img src="https://dataxai.oss-cn-hangzhou.aliyuncs.com/assets/img/news/2025-04-08.jpg" alt="post" style="display: block; margin: 0 auto; max-width: 100%;">
    `,
  },
  {
    id: "2025-03-14",
    image:
      "https://dataxai.oss-cn-hangzhou.aliyuncs.com/assets/img/news/2025-03-14-8.png",
    title_zh: "黄铭钧院士全职加盟浙江大学软件学院",
    title_en:
      "Academician Ooi Beng Chin Joins Zhejiang University School of Software Full-time",
    date_zh: "2025年3月14日",
    date_en: "March 14, 2025",
    source_link: "http://www.cst.zju.edu.cn/2025/0325/c36202a3030789/page.htm",
    zh_translation: "",
    en_translation: "ChatGPT 5.1",
    summary_zh:
      "3月13日下午，浙江大学软件学院、宁波国际科创中心在新园区举行黄铭钧院士全职聘任仪式。",
    summary_en:
      "On the afternoon of March 13, the School of Software Technology of Zhejiang University and the Ningbo International Innovation Center jointly held the full-time appointment ceremony of Academician Ooi Beng Chin at the new campus.",
    content_zh: `
      <p>3月13日下午，浙江大学软件学院、宁波国际科创中心在新园区举行黄铭钧院士全职聘任仪式。</p>
      <p>宁波市委组织部副部长、市委人才办常务副主任、市人力社保局局长张瑞丽，鄞州区委常委、组织部部长黄健，中国工程院院士、浙江大学教授陈纯，浙江大学党委常委、副校长陈刚，浙江大学发展规划处处长、软件学院院长、浙江大学宁波国际科创中心主任尹建伟，浙江大学人才工作办公室副主任徐晓峰，以及软件学院、宁波国际科创中心班子成员出席聘任仪式。仪式由尹建伟院长主持。</p>
      <img src="https://dataxai.oss-cn-hangzhou.aliyuncs.com/assets/img/news/2025-03-14-1.png" style="margin-top:20px;margin-bottom:20px;width:100%;">
      <p>尹建伟院长在致辞中回顾了黄院士的卓越学术成就与行业贡献，并代表浙江大学软件学院及宁波国际科创中心，向黄院士致以诚挚欢迎。他强调，黄院士的加盟将带来强大的学术动能与创新势能，期待在黄院士的引领下，共同推动人工智能与数据科学领域的跨越式发展，擘画校地协同创新的新图景。</p>
      <img src="https://dataxai.oss-cn-hangzhou.aliyuncs.com/assets/img/news/2025-03-14-2.png" style="margin-top:20px;margin-bottom:20px;width:100%;">
      <p>陈刚副校长对黄院士深耕人工智能与大数据领域数十载、在学术界和工业界作出的突出贡献表示崇高敬意，对黄院士为推动新加坡国立大学与浙江大学建立长期合作关系所作出的努力表示衷心感谢。今年初，宁波市与浙江大学签署全面深化战略合作协议，有力推动了名城名校的高质量协同发展。黄院士的全职加盟将为校地融合创新发展注入强劲动能，助力打造教育科技人才产业一体化融合发展高地。</p>
      <img src="https://dataxai.oss-cn-hangzhou.aliyuncs.com/assets/img/news/2025-03-14-3.png" style="margin-top:20px;margin-bottom:20px;width:100%;">
      <p>陈纯院士在致辞中指出，宁波制造业根基深厚，近年来产业数字化转型成效显著。他强调，在宁波各级政府的大力支持下，浙江大学软件学院与宁波国际科创中心作为区域信息技术发展双引擎，将为黄院士团队搭建优质创新平台，期待双方共同为宁波经济高质量发展赋能。特别要立足长三角一体化战略，通过杭甬双城协同创新，切实将科研优势转化为产业竞争优势。</p>
      <img src="https://dataxai.oss-cn-hangzhou.aliyuncs.com/assets/img/news/2025-03-14-4.png" style="margin-top:20px;margin-bottom:20px;width:100%;">
      <p>张瑞丽副部长发表讲话。她指出，宁波始终将人才视为"第一资源"，深入实施"人才强市"战略，为顶尖人才提供"一人一策"专项支持政策，覆盖科研平台建设、团队组建、成果转化、生活保障等全方位服务。她期待黄院士团队发挥引领作用，在人工智能与大数据领域突破关键技术，助力产业升级；并以黄院士为纽带，形成"以才引才、群贤毕至"的生动局面。</p>
      <img src="https://dataxai.oss-cn-hangzhou.aliyuncs.com/assets/img/news/2025-03-14-5.png" style="margin-top:20px;margin-bottom:20px;width:100%;">
      <p>黄铭钧院士对宁波市和浙江大学的诚挚邀请表示感谢，并介绍了与浙江大学的合作渊源以及共同开展研究的情况。他指出，中国的数字经济规模已突破50万亿元，呈现蓬勃向上发展态势。他将聚焦新型数据系统，着力突破数据处理效率、分析质量及流通安全等核心问题。同时深化产学研用深度融合，为浙江大学软件学院和宁波国际科创中心的学科建设、科技创新和人才培养贡献力量，助力宁波市数字经济发展。</p>
      <img src="https://dataxai.oss-cn-hangzhou.aliyuncs.com/assets/img/news/2025-03-14-6.png" style="margin-top:20px;margin-bottom:20px;width:100%;">
      <p>尹建伟院长与黄铭钧院士签订聘任协议。</p>
      <img src="https://dataxai.oss-cn-hangzhou.aliyuncs.com/assets/img/news/2025-03-14-7.png" style="margin-top:20px;margin-bottom:20px;width:100%;">
      <p>陈刚副校长为黄院士佩戴浙江大学校徽，软件学院学生向黄院士献花。</p>
      <img src="https://dataxai.oss-cn-hangzhou.aliyuncs.com/assets/img/news/2025-03-14-8.png" style="margin-top:20px;margin-bottom:20px;width:100%;">
    `,
    content_en: `
      <p>On the afternoon of March 13, the School of Software Technology of Zhejiang University and the Ningbo International Innovation Center jointly held the full-time appointment ceremony of Academician Ooi Beng Chin at the new campus.</p>
      <p>The ceremony was attended by Zhang Ruili, Deputy Director of the Organization Department of the Ningbo Municipal Party Committee, Executive Deputy Director of the Municipal Talent Office, and Director of the Municipal Human Resources and Social Security Bureau; Huang Jian, Member of the Standing Committee of the Yinzhou District Party Committee and Director of its Organization Department; Academician Chen Chun of the Chinese Academy of Engineering and Professor at Zhejiang University; Chen Gang, Member of the Standing Committee of the CPC Zhejiang University Committee and Vice President of Zhejiang University; Yin Jianwei, Director of the Development Planning Office, Dean of the School of Software Technology, and Director of the Ningbo International Innovation Center of Zhejiang University; Xu Xiaofeng, Deputy Director of the Talent Affairs Office of Zhejiang University; as well as members of the leadership teams of the School of Software Technology and the Ningbo International Innovation Center. The ceremony was chaired by Dean Yin Jianwei.</p>
      <img src="https://dataxai.oss-cn-hangzhou.aliyuncs.com/assets/img/news/2025-03-14-1.png" style="margin-top:20px;margin-bottom:20px;width:100%;">
      <p>In his opening remarks, Dean Yin Jianwei reviewed Academician Prof Ooi's outstanding academic achievements and contributions to industry. On behalf of the School of Software Technology of Zhejiang University and the Ningbo International Innovation Center, he extended a warm welcome to Academician Ooi Beng Chin. He emphasized that Prof Ooi's appointment would bring strong academic momentum and innovative vitality, and expressed the hope that, under Prof Ooi's leadership, both sides would jointly promote leapfrog development in the fields of artificial intelligence and data science, and outline a new blueprint for university–local collaborative innovation.</p>
      <img src="https://dataxai.oss-cn-hangzhou.aliyuncs.com/assets/img/news/2025-03-14-2.png" style="margin-top:20px;margin-bottom:20px;width:100%;">
      <p>Vice President Chen Gang expressed his deep respect for Academician Ooi Beng Chin's decades-long dedication to artificial intelligence and big data, as well as his outstanding contributions to both academia and industry. He also conveyed sincere appreciation for Prof Ooi's efforts in fostering long-term cooperation between the National University of Singapore and Zhejiang University. Earlier this year, Ningbo Municipality and Zhejiang University signed a comprehensive strategic cooperation agreement, effectively advancing high-quality collaboration between a renowned city and a top university. Prof Ooi's full-time appointment will inject strong momentum into integrated university–local innovation and help build a highland for the integrated development of education, science and technology, talent, and industry.</p>
      <img src="https://dataxai.oss-cn-hangzhou.aliyuncs.com/assets/img/news/2025-03-14-3.png" style="margin-top:20px;margin-bottom:20px;width:100%;">
      <p>In his remarks, Academician Chen Chun pointed out that Ningbo has a solid manufacturing foundation and has achieved remarkable progress in industrial digital transformation in recent years. He emphasized that, with strong support from governments at all levels in Ningbo, the School of Software Technology of Zhejiang University and the Ningbo International Innovation Center, as dual engines for regional information technology development, will provide an excellent innovation platform for Academician Ooi Beng Chin's team. He expressed the hope that both sides would jointly empower Ningbo's high-quality economic development, particularly by leveraging the Yangtze River Delta integration strategy and promoting coordinated innovation between Hangzhou and Ningbo to effectively transform scientific research strengths into industrial competitiveness.</p>
      <img src="https://dataxai.oss-cn-hangzhou.aliyuncs.com/assets/img/news/2025-03-14-4.png" style="margin-top:20px;margin-bottom:20px;width:100%;">
      <p>Deputy Director Zhang Ruili delivered a speech, noting that Ningbo has always regarded talent as its "primary resource" and has deeply implemented the strategy of strengthening the city through talent. The city provides "tailor-made" support policies for top-tier talents, covering scientific research platform construction, team building, achievement transformation, and living services in an all-round manner. She expressed the expectation that Academician Ooi Beng Chin's team would play a leading role in achieving breakthroughs in key technologies in artificial intelligence and big data, driving industrial upgrading, and forming a vibrant landscape of "attracting talent through talent."</p>
      <img src="https://dataxai.oss-cn-hangzhou.aliyuncs.com/assets/img/news/2025-03-14-5.png" style="margin-top:20px;margin-bottom:20px;width:100%;">
      <p>Academician Ooi Beng Chin expressed his sincere gratitude to Ningbo Municipality and Zhejiang University for their invitation, and introduced the background of his collaboration with Zhejiang University and their joint research efforts. He noted that China's digital economy has exceeded a scale of 50 trillion yuan and continues to show strong growth momentum. He stated that he would focus on next-generation data systems, aiming to make breakthroughs in core issues such as data processing efficiency, analytical quality, and data circulation security. At the same time, he will deepen the integration of industry, academia, research, and application, contributing to discipline development, scientific innovation, and talent cultivation at the School of Software Technology of Zhejiang University and the Ningbo International Innovation Center, and supporting the development of Ningbo's digital economy.</p>
      <img src="https://dataxai.oss-cn-hangzhou.aliyuncs.com/assets/img/news/2025-03-14-6.png" style="margin-top:20px;margin-bottom:20px;width:100%;">
      <p>At the ceremony, Dean Yin Jianwei and Academician Ooi Beng Chin signed the appointment agreement.</p>
      <img src="https://dataxai.oss-cn-hangzhou.aliyuncs.com/assets/img/news/2025-03-14-7.png" style="margin-top:20px;margin-bottom:20px;width:100%;">
      <p>Vice President Chen Gang presented Academician Ooi Beng Chin with the Zhejiang University emblem, and students from the School of Software Technology presented flowers to Academician Ooi Beng Chin.</p>
      <img src="https://dataxai.oss-cn-hangzhou.aliyuncs.com/assets/img/news/2025-03-14-8.png" style="margin-top:20px;margin-bottom:20px;width:100%;">
    `,
  },
  {
    id: "2024-10-09",
    image:
      "https://dataxai.oss-cn-hangzhou.aliyuncs.com/assets/img/news/2024-10-09.png",
    title_zh: "黄铭钧教授荣获中国计算机学会会士",
    title_en:
      "Professor Ooi Beng Chin honoured Fellow of the China Computer Federation",
    date_zh: "2024年10月9日",
    date_en: "October 09, 2024",
    source_link: "",
    zh_translation: "",
    en_translation: "",
    summary_zh:
      "黄铭钧教授被选为中国计算机学会（CCF）会士。CCF会士是中国计算机学会的最高荣誉，旨在表彰在计算机科学和技术领域做出杰出贡献的学者和专业人士。",
    summary_en:
      "Professor Ooi Beng Chin has been elected as Fellow of the China Computer Federation (CCF). Awarded by CCF, this distinction represents the highest honour which supports the academic and professional advancement of computing professionals worldwide.",
    content_zh: `
      <h5>黄铭钧教授被选为中国计算机学会（CCF）会士</h5>
      <p>CCF会士是中国计算机学会的最高荣誉，旨在表彰在计算机科学和技术领域做出杰出贡献的学者和专业人士。</p>
      <img src="https://dataxai.oss-cn-hangzhou.aliyuncs.com/assets/img/news/2024-10-09.png" alt="post">
      <p>全球仅有180位中国计算机学会（CCF）会士，黄铭钧教授的当选充分体现了他在计算领域的卓越贡献。这一荣誉不仅彰显了他在推动技术前沿发展方面的执着追求，也进一步巩固了我们在全球科研与创新领域的领导地位。</p>
    `,
    content_en: `
      <h5>Professor Ooi Beng Chin has been elected as Fellow of the China Computer Federation (CCF)</h5>
      <p>Awarded by CCF, this distinction represents the highest honour which supports the academic and professional advancement of computing professionals worldwide.</p>
      <img src="https://dataxai.oss-cn-hangzhou.aliyuncs.com/assets/img/news/2024-10-09.png" alt="post">
      <p>With only 180 CCF Fellows selected globally, Professor Ooi's achievement demonstrates his outstanding contribution to the field of computing. This recognition not only reflects his dedication to pushing the frontiers of technology but also reinforces our leadership in research and innovation on the global stage.</p>
    `,
  },
  {
    id: "2024-08-23",
    image:
      "https://dataxai.oss-cn-hangzhou.aliyuncs.com/assets/img/news/2024-08-23.jpg",
    title_zh: "APACHE SINGA 4.3.0发布",
    title_en: "APACHE SINGA 4.3.0 released",
    date_zh: "2024年8月23日",
    date_en: "August 23, 2024",
    source_link: "",
    zh_translation: "",
    en_translation: "",
    summary_zh:
      "我们很高兴地宣布发布Apache SINGA v4.3，该版本包括对在PostgreSQL和其他PostgreSQL变体上运行动态模型切片的支持。",
    summary_en:
      "We are happy to announce the release of Apache SINGA v4.3, which includes support for running dynamic model slicing on PostgreSQL and other PostgreSQL variants.",
    content_zh: `
      <p>我们很高兴地宣布发布Apache SINGA v4.3，该版本包括对在PostgreSQL和其他PostgreSQL变体上运行动态模型切片的支持。</p>
      <p>它拥有一个适用于各种应用的模型库，包括医疗保健、金融和结构化数据建模。</p>
      <p>我们于2014年启动了<a href="https://singa.apache.org/" target="_blank">Apache SINGA</a>，这是一个分布式深度学习平台；在2015年在Apache软件基金会（ASF）孵化，并于2015年10月发布了<a href="https://en.wikipedia.org/wiki/Apache_SINGA" target="_blank">第一个版本</a>。它于2019年10月毕业成为第一个ASF顶级项目（TOP），专注于分布式学习。</p>
      <img src="https://dataxai.oss-cn-hangzhou.aliyuncs.com/assets/img/news/2024-08-23.jpg" alt="post" style="display: block; margin: 0 auto; max-width: 100%;">
    `,
    content_en: `
      <p>We are happy to announce the release of Apache SINGA v4.3, which includes support for running dynamic model slicing on PostgreSQL and other PostgreSQL variants.</p>
      <p>It has a model zoo for various applications, including healthcare, finance, and structured data modeling.</p>
      <p>We started <a href="https://singa.apache.org/" target="_blank">Apache SINGA</a>, a distributed deep learning platform, in 2014; incubated it at Apache Software Foundation (ASF) in 2015, and released its <a href="https://en.wikipedia.org/wiki/Apache_SINGA" target="_blank">first version</a> in October 2015. It graduated as the first ASF top-level-project (TOP) on distributed learning in Oct 2019.</p>
      <img src="https://dataxai.oss-cn-hangzhou.aliyuncs.com/assets/img/news/2024-08-23.jpg" alt="post" style="display: block; margin: 0 auto; max-width: 100%;">
    `,
  },
];

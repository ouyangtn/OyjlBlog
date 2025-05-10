/** Website 分类配置 */
const WEBSITE_SORTS: WebsiteSort[] = [
  {
    title: "自我介绍",
    sites: [
      {
        title: "OUYANG~",
        description: "我是欧阳，90后互联网从业者，专注于前端开发。喜欢用代码创造美好的用户体验，也热爱旅行和摄影。这个空间记录我的学习和工作心得，欢迎志同道合的朋友一起交流！",
        url: "",
        icon: "https://web-tlias-oyjl.oss-cn-beijing.aliyuncs.com/111.jpg",
      },
    ],
    
  },
  {
    title: "简历",
        sites: [
      {
        title: "我的简历",
        description: "持续更新中~",
        url: "https://web-tlias-oyjl.oss-cn-beijing.aliyuncs.com/2.jpg",
        icon: "https://web-tlias-oyjl.oss-cn-beijing.aliyuncs.com/111.jpg",
      },
    ],
  },
  {
    title: "博客",
        sites: [
      {
        title: "我的博客",
        description: "开发中~~",
        url: "https://main-oyjl-blog.vercel.app/",
        icon: "https://web-tlias-oyjl.oss-cn-beijing.aliyuncs.com/111.jpg",
      },
    ],
  },
  {
    title: "QQ",
        sites: [
      {
        title: "球球QQ",
        description: "点击链接添加我~欢迎交流呀",
        url: "https://qm.qq.com/q/NH9rgYruQa",
        icon: "https://web-tlias-oyjl.oss-cn-beijing.aliyuncs.com/3.jpg",
      },
    ],
  },
  {
    title: "电子邮件",
        sites: [
      {
        title: "电子邮件",
        description: "与QQ同号~~",
        url: "hhttps://qm.qq.com/q/NH9rgYruQa",
        icon: "https://web-tlias-oyjl.oss-cn-beijing.aliyuncs.com/111.jpg",
      },
    ],
  },
    {
    title: "CSDN",
        sites: [
      {
        title: "技术博客~",
        description: "不断更新中~ 分享前后端开发、编程技巧与学习心得，记录成长历程。",
        url: "https://blog.csdn.net/oyjl__",
        icon: "https://web-tlias-oyjl.oss-cn-beijing.aliyuncs.com/4.png",
      },
    ],
  },
  {
    title: "语雀",
        sites: [
      {
        title: "我的学习笔记啦啦啦~",
        description: "记录语雀相关的技术文章与实践经验",
        url: "https://www.yuque.com/u43023053",
        icon: "https://web-tlias-oyjl.oss-cn-beijing.aliyuncs.com/5.png",
      },
    ],
  },
  {
    title: "牛客",
        sites: [
      {
        title: "牛客主页",
        description: "找实习ing，冲冲冲~   分享算法、刷题经验与技术、找工作的心得，记录成长历程",
        url: "https://www.nowcoder.com/users/585047695",
        icon: "https://web-tlias-oyjl.oss-cn-beijing.aliyuncs.com/6.png",
      },
    ],
  },
];

/** Website 配置（2023.3.29 已废弃） */
const WEBSITE_ITEMS: WebsiteItem[] = [];

const GLOBAL_CONFIG = {
  /**
   * 博客名称
   */
  BLOG_NAME: "OYJL-Blog 开发中~~",
  /**
   * 个人博客链接
   */
  BLOG_URL: "https://blog.csdn.net/oyjl__",
  /**
   * 指定中心 LOGO 图片地址
   */
  LOGO_URL: null,
  /**
   * 个人 Github 链接
   */
  GITHUB_URL: "https://github.com/ouyangtn",
  /**
   * 背景图片地址
   */
  BACKGROUND_IMG_URL:
    "https://web-tlias-oyjl.oss-cn-beijing.aliyuncs.com/7.jpg",
  /**
   * ICP 备案号，留空不显示
   */
  ICP: "桂ICP备2024040897号",
  ICP_URL: "https://www.oyjlcenter.cn",
  FOOTER_INFO: true,
  /**
   * 网站欢迎标语
   */
  SLOGANS: [
    "欢迎拜访",
    "歡迎拜訪",
    "Welcome, my friend!",
    "訪問へようこそ",
    "嗨，别来无恙",
    "不忘初心，一生浪漫",
    "最近还好吗？",
    "流星，落花，萤火",
    "马车越空，晃荡越响",
  ],
  /**
   * Website 分类配置
   */
  WEBSITE_SORTS,
  /**
   * Website 配置（2023.3.29 已废弃）
   */
  WEBSITE_ITEMS,
  /**
   * 网站 Title Keywords Description 的配置，用于 SEO
   */
  TKD: {
    title: "My Blog Index",
    keywords: "Blog, Index, Index Page",
    description: "This is my personal blog index page.",
  },
};

export default GLOBAL_CONFIG;

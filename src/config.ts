/** Website 分类配置 */
const WEBSITE_SORTS: WebsiteSort[] = [
  {
    title: "示例分类1",
    sites: [
      {
        title: "主标题",
        url: "http://www.your-web-page.com/",
        icon: "",
        color: "#0171CD",
      },
      {
        title: "主标题",
        description: "网站描述",
        url: "http://www.your-web-page.com/",
        icon: "",
      },
      {
        title: "主标题",
        description: "网站描述",
        url: "http://www.your-web-page.com/",
        icon: "",
      },
    ],
  },
  {
    title: "简历",
  },
  {
    title: "博客",
  },
  {
    title: "QQ",
  },
  {
    title: "电子邮件",
  },
    {
    title: "CSDN",
  },
  {
    title: "语雀",
  },
  {
    title: "牛客",
  },
  {
    title: "友情链接",
    sites: [
      {
        title: "EsunR Blog",
        description: "EsunR 的博客",
        url: "https://blog.csdn.net/oyjl__",
        icon: "https://i0.hdslb.com/bfs/article/61dc74e1e3ebafcce8054028e95474fd731e95a6.jpg",
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
  BLOG_NAME: "OYJL-Blog",
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
    "https://i0.hdslb.com/bfs/article/61dc74e1e3ebafcce8054028e95474fd731e95a6.jpg",
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

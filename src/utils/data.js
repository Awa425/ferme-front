
const sublinks = [
  {
    page: 'home',
    links: [
      // { label: 'home',  url: '/' },
    ],
  },
  {
    page: 'about us',
    links: [
      // { label: 'about us',  url: '/about' },
    ],
  },

  {
    page: 'menu',
    links: [
      // { label: 'Global Dashboard',  url: '/globalDashboard' },
      { label: 'List of Farms', url: '/menu/farmList' },
      { label: 'List of Veterinarians', url: '/menu/veterinarianList' },
    ],
  },
  {
    page: 'collaboration',
    links: [
      { label: 'Forum', url: '/collaboration/forum' },
      { label: 'Knowledge Base', url: '/collaboration/KnowledgeBase' },
      { label: 'Membre', url: '/membre/login' },
    ],
  },
  {
    page: 'documentation',
    links: [
      { label: 'utilisation capteurs', url: '/documentation/usagesOfSensors' },
      { label: 'utilisation IA', url: '/documentation/usagesOfAI' },
      { label: 'maladie', url: '/documentation/commonDisease' },
      { label: 'Technologies pour produit laitier', url: '/documentation/TechnologiesInDailySector' },
      // { label: 'Success story', url: '/documentation/SuccessStory' },
      { label: 'docs', url: '/documentation/AccessToLiterature' },
    ],
  },
  {
    page: 'farm page',
    links: [
      { label: 'page fermier', url: '/farmPage' },
    ],
  }
];

export default sublinks;

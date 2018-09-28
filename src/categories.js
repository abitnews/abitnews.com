const categories = [
  'Tech news',
  'Programming',
  'AI',
  'Machine learning',
  'UX/UI',
  'Tweets',
  'Libraries',
  'Frameworks',
  'Cool stuff',
  'Nerd stuff',
  'Crypto',
  'Blockchain',
];

const categoriesDescription = [
  {
    key: 'techSeeker',
    hashUrl: 'tech-seeker',
    title: 'Tech Seeker',
    description: `The latest tech news, nothing too specific or complex,
     everything you need to look like a tech guru in a discussion`,
  },
  {
    key: 'skynet',
    hashUrl: 'news-from-skynet',
    title: 'News from Skynet',
    description: `Keep yourself up to date on Machine learning,
     Artificial intelligence and other cool stuff that will replace you in a couple of years`,
  },
  {
    key: 'frontend',
    hashUrl: 'frontend-wizard',
    title: 'Frontend wizard',
    description: `"I don't care, Just give me the API".
     The passwords are saved in plaintext but the UX is beautiful`,
  },
  {
    key: 'crypto',
    hashUrl: 'crypto-prophet',
    title: 'Crypto prophet',
    description: `Everything you need to know about blockchain-related stuff.
     If you want to understand Smart contracts, how Bitcoin works
     or simply learn how to become rich investing in Dogecoin`,
  },
  {
    key: 'dev',
    hashUrl: 'the-devs-den',
    title: "The dev's den",
    description: `Hardcore programmers, backend stuff, optimizations, databases, servers and
    other magic stuff nobody knew existed until everything crashed down`,
  },
];

export { categories, categoriesDescription };

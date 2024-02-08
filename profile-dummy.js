const profileData = {
  title: 'Profile',
  name: 'Jacob',
  sub_title: 'College Student',
  about: {
    intro: `Hi I'm Jacob and this is my website`,
    contact: {
      email: 'jacobearley01.com',
      phone: '+1-3129526833',
      address: 'Des Moines, IA'
    }
  },

  
  links: [
    { title: 'Google', src: 'https://www.google.com/' }
  ],
  education: [
    {
      school: 'Drake University',
      duration: '2020 - 2024',
    },
  ],
  skills: [
    {
      category: 'Language Sklls',
      topics: ['JavaScript', 'Python', 'Ruby', 'HTML/CSS']
    },
    {
      category: 'Soft SKills',
      topics: [
        'Strong Communication', 'Support skills', 'Experience in a team'
      ]
    },
    {
      category: 'Productivity Skills',
      topics: ['git', 'Microsoft Applications', 'Node.js']
    }
  ],
  projects: [
    {
      title: 'Smily Face Web Extension',
      duration: 'Dec - Dec 2023',
      link: 'https://github.com/jbearley/webExtension',
      desc: `My project`
    },
    {
      title: 'Pokemon Team Builder',
      duration: 'Dec - Dec 2023',
      link: 'https://github.com/jbearley/pokemon',
      desc: `My project`
    },
    {
      title: '2d Engine',
      duration: 'Dec - Dec 2023',
      link: 'https://github.com/jbearley/2d_engine',
      desc: `My project`
    },
    {
      title: 'Music Rec',
      duration: 'Dec - Dec 2023',
      link: 'https://github.com/jbearley/music_rec',
      desc: `My project`
    }
  ],
  experiences: [
    {
      organization: '(group build) Pokemon Team builder',
      title: `General`,
      date: '2022 - 2023',
      details: [
        `My group `
      ]
    }
  ],
  certifications: [
    {
      desc: `BS Computer Science minor Mathematics (Graduation 2024)`,
      date: 'May 2024'
    }
  ],
  events: []
};
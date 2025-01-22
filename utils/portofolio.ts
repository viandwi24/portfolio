export interface PortofolioConfigProject {
  name: string
  type: string
  description: string
  tags: string[]
  skills: string[]
  image: string
  year: string
  links: {
    preview?: string
    repository?: string
  }
}

export const getPortofolioConfig = (key: string) => {
  const AppPortofolioConfig = {
    author: {
      username: 'viandwi24',
      name: 'Alfian Dwi Nugraha',
      links: {
        github: 'https://github.com/viandwi24',
        linkedin: 'https://www.linkedin.com/in/viandwi24/',
      }
    },
    layout: {
      navbar: {
        brand: {
          main: 'v',
          secondary: 'iandwi',
          tertiary: '24',
        }
      }
    },
    section: {
      home: {
        uptitle: `Hello, I'm`,
        title: '{{author.name}}.',
        subtitle: {
          main: 'Website Engraver For Artists. ',
          secondary: 'experienced in web design, server side, blockchain and game dev.',
        },
        buttons: [
          {
            label: 'Github',
            variant: 'soft',
            size: 'lg',
            icon: 'ph:github-logo',
            href: '{{author.links.github}}',
          },
          {
            label: 'About Me',
            variant: 'soft',
            size: 'lg',
            // icon: 'ph:envelope-simple-duotone',
            'trailing-icon': 'ph:arrow-right-duotone',
            to: '/about',
          }
        ]
      }
    },
    seo: {
      home: {
        title: '{{author.name}} ({{author.username}})',
      },
      projects: {
        title: 'Projects - {{author.name}}',
      },
    },
    projects: [
      {
        "name": "Nuxt 3 Awesome Starter",
        "type": "Template",
        "description": "a Nuxt 3 starter template or boilerplate with a lot of useful features. and integrated with TailwindCSS 3",
        "tags": ["Nuxt", "Vue", "Tailwind CSS"],
        "skills": [],
        "image": "/assets/images/projects/1.png",
        "year": "2022",
        "links": {
          "preview": "https://github.com/viandwi24/nuxt3-awesome-starter",
          "repository": "https://nuxt3-awesome-starter.vercel.app"
        }
      },
      {
        "name": "Blockchain Simulator",
        "type": "Simulator",
        "description": "A Simple Blockchain Simulation with Javascript Nodejs and VueJs as Front End",
        "tags": ["Blockchain", "Simulation", "Nuxt", "Vue", "Tailwind CSS"],
        "skills": [],
        "image": "/assets/images/projects/2.gif",
        "year": "2021",
        "links": {
          "preview": "https://github.com/viandwi24/blockchain-simulation",
          "repository": "https://viandwi24.github.io/blockchain-simulation"
        }
      },
      {
        "name": "Devover Forum",
        "type": "Forum",
        "description": "a Opensource Forum Web with Tailwinds and Laravel",
        "tags": ["Laravel", "Vue", "Tailwind CSS"],
        "skills": [],
        "image": "/assets/images/projects/3.gif",
        "year": "2020",
        "links": {
          "preview": "https://github.com/devoverid/forum",
          "repository": "https://github.com/devoverid/forum"
        }
      },
      {
        "name": "Klasse IO",
        "type": "Game",
        "description": "A group video call with a mix of rpg games. Make the group atmosphere more interactive. WebRTC based Video Stream with Peer connection. Then Signaling by WebSocket. With Client Built on NuxtJS as well as NodeJS server.",
        "tags": ["Nuxt", "Vue", "WebRTC"],
        "skills": [],
        "image": "/assets/images/projects/4.png",
        "year": "2021",
        "links": {
          "preview": "https://github.com/viandwi24/klasse-io-client",
          "repository": "https://github.com/viandwi24/klasse-io-client"
        }
      },
      {
        "name": "Nokiamon",
        "type": "Information",
        "description": "a dex for digital collectible in solana blockchain",
        "tags": ["React", "Express", "MongoDB", "GraphQL", "Web3"],
        "skills": [],
        "image": "/assets/images/projects/16.png",
        "year": "2019",
        "links": {
          "preview": "https://nokiamon.com/",
          "repository": "https://nokiamon.com/"
        }
      },
      {
        "name": "Hatofit",
        "type": "Sport",
        "description": "Hatofit is a platform that helps you to be fit and healthy, help you to track and monitoring your health.",
        "tags": ["Nuxt", "MongoDB", "Express", "NodeJS", "PostgreSQL", "Flutter"],
        "skills": [],
        "image": "/assets/images/projects/23.jpeg",
        "year": "2024",
        "links": {
          "preview": null,
          "repository": null
        }
      },
      {
        "name": "Porseni MA 2023",
        "type": "Information",
        "description": "a information web app for register pekan olahraga dan seni jawa timur 2023",
        "tags": ["NextJS"],
        "skills": [],
        "image": "/assets/images/projects/25.jpeg",
        "year": "2023",
        "links": {
          "preview": null,
          "repository": null
        }
      },
      {
        "name": "Web3 Blog",
        "type": "Blog",
        "description": "a decentral blog made using nuxt and solana with web3 concept",
        "tags": ["Nuxt", "Web3"],
        "skills": [],
        "image": "/assets/images/projects/24.png",
        "year": "2024",
        "links": {
          "preview": "https://github.com/viandwi24/nuxt3-blog-web3-solana",
          "repository": "https://nuxt3-blog-web3-solana-client.vercel.app"
        }
      },
      {
        "name": "LSP SMKN 1 Mojokerto",
        "type": "School",
        "description": "a information web app for LSP SMKN 1 Mojokerto",
        "tags": ["Nuxt", "Laravel"],
        "skills": [],
        "image": "/assets/images/projects/15.png",
        "year": "2019",
        "links": {
          "preview": null,
          "repository": null
        }
      },
      {
        "name": "E-Point School",
        "type": "School",
        "description": "a system information to manage achievement points and violations in school",
        "tags": ["Laravel"],
        "skills": [],
        "image": "/assets/images/projects/22.png",
        "year": "2024",
        "links": {
          "preview": null,
          "repository": null
        }
      },
      {
        "name": "Bot Feeds",
        "type": "Automation",
        "description": "A apps to automate feeds and send to bot",
        "tags": ["Bun", "Bot", "Automation"],
        "skills": [],
        "image": "/assets/images/projects/19.png",
        "year": 2024
      },
      {
        "name": "Bootsarc",
        "type": "Template",
        "description": "BOOTSARC is a Modern Design Administration Template. Based on Bootstrap 5 and Other Libraries. Free and Open Source Project Made with Love.",
        "tags": ["Bootstrap", "Gulp", "Bower"],
        "skills": [],
        "image": "/assets/images/projects/6.gif",
        "year": "2021",
        "links": {
          "preview": "https://github.com/viandwi24/bootsarc",
          "repository": "https://bootsarc.vercel.app/pages/index.html"
        }
      },
      {
        "name": "Foody",
        "type": "Services",
        "description": "a client web app for Foody, a food ordering app based on Nuxt 3.",
        "tags": ["Tailwind CSS", "Nuxt"],
        "skills": [],
        "image": "/assets/images/projects/7.gif",
        "year": "2022",
        "links": {
          "preview": "https://github.com/viandwi24/foody-client",
          "repository": "https://foody.viandwi24.site"
        }
      },
      {
        "name": "Link D Law",
        "type": "Community & Law",
        "description": "A apps to provide law information and AI-based to search a law depends some problem",
        "tags": ["Bun", "Monorepo", "Microservices"],
        "skills": [],
        "image": "/assets/images/projects/18.png",
        "year": "2023",
        "links": {
          "preview": "https://github.com/Nakama-Capstone/link-d-law",
          "repository": "https://github.com/Nakama-Capstone/link-d-law"
        }
      },
      {
        "name": "BSOUL",
        "type": "Game",
        "description": "A simple rpg tile down pixel art.",
        "tags": ["React", "Phaser"],
        "skills": [],
        "image": "/assets/images/projects/5.png",
        "year": "2022",
        "links": {
          "preview": "https://github.com/viandwi24/bsoul",
          "repository": "https://github.com/viandwi24/bsoul"
        }
      },
      {
        "name": "Github Profile Editor",
        "type": "Tools",
        "description": "a github profile editor with drag and drop!!!",
        "tags": ["Tailwind CSS", "Nuxt"],
        "skills": [],
        "image": "/assets/images/projects/8.png",
        "year": "2022",
        "links": {
          "preview": "https://github.com/viandwi24/github-profile-editor",
          "repository": "https://github-profile-editor.vercel.app"
        }
      },
      {
        "name": "Vilacore",
        "type": "Module",
        "description": "Laravel 5.8 dengan konsep modular plugin.",
        "tags": ["Laravel", "PHP"],
        "skills": [],
        "image": "/assets/images/projects/12.png",
        "year": "2019",
        "links": {
          "preview": "https://github.com/viandwi24/vilacore",
          "repository": "https://github.com/viandwi24/vilacore"
        }
      },
      {
        "name": "Animid",
        "type": "Template",
        "description": "Redesign MyAnimeList made by me",
        "tags": ["Nuxt", "Tailwind CSS"],
        "skills": [],
        "image": "/assets/images/projects/14.png",
        "year": "2020",
        "links": {
          "preview": "https://github.com/viandwi24/asteroid-guard-java",
          "repository": "https://viandwi24.github.io/animid/"
        }
      },
      {
        "name": "Decognition",
        "type": "Error Handler",
        "description": "a Pretty Exception Handler for TypeScript Deno. Inspirated from Laravel & Flare Ignition.",
        "tags": ["Deno", "Typescript"],
        "skills": [],
        "image": "/assets/images/projects/17.png",
        "year": "2020",
        "links": {
          "preview": "https://github.com/viandwi24/decognition",
          "repository": "https://github.com/viandwi24/decognition"
        }
      },
      {
        "name": "Denova",
        "type": "Framework",
        "description": "A Typescript Framework For Deno - Framework Looks Like Laravel",
        "tags": ["Deno", "Typescript"],
        "skills": [],
        "image": "/assets/images/projects/21.png",
        "year": "2020",
        "links": {
          "preview": "https://github.com/viandwi24/denova",
          "repository": "https://github.com/viandwi24/denova"
        }
      },
      {
        "name": "Vifa Framework",
        "type": "Framework",
        "description": "Framework PHP Sederhana Yang Meringankan Perkerjaan Mu.",
        "tags": ["PHP"],
        "skills": [],
        "image": "/assets/images/projects/20.png",
        "year": "2018",
        "links": {
          "preview": "https://github.com/viandwi24/v-framework",
          "repository": "https://github.com/viandwi24/v-framework"
        }
      },
      {
        "name": "Flappy Bird AI",
        "type": "Machine Learning",
        "description": "machine learning for self play flappy bird with neural network and evolution algorithm",
        "tags": ["React", "Canvas"],
        "skills": [],
        "image": "/assets/images/projects/27.png",
        "year": "2023",
        "links": {
          "preview": "https://github.com/viandwi24/flappy-bird-evolution-neural-network",
          // "repository": null
        }
      },
      {
        "name": "Quot22",
        "type": "Fun",
        "description": "just fun website for a collection of quotes from our campus class",
        "tags": ["Nuxt"],
        "skills": [],
        "image": "/assets/images/projects/26.png",
        "year": "2023",
        "links": {
          "preview": "https://github.com/viandwi24/quot22",
          // "repository": null
        }
      },
      {
        "name": "Karaoke-chan",
        "type": "Simulator",
        "description": "Simulation of Karaoke Machine",
        "tags": ["React"],
        "skills": [],
        "image": "/assets/images/projects/13.gif",
        "year": "2019",
        "links": {
          "preview": "https://github.com/viandwi24/karaoke-chan",
          "repository": "https://github.com/viandwi24/karaoke-chan"
        }
      },
      {
        "name": "Pinned",
        "type": "Tools",
        "description": "Pin your ideas",
        "tags": ["Flutter", "Dart"],
        "skills": [],
        "image": "/assets/images/projects/9.png",
        "year": "2022",
        "links": {
          "preview": "https://github.com/viandwi24/pinned",
          "repository": "https://github.com/viandwi24/pinned"
        }
      },
      {
        "name": "Aniline",
        "type": "Tools",
        "description": "A portal app for discovery and explorer movie and anime in the world.",
        "tags": ["Flutter", "Dart"],
        "skills": [],
        "image": "/assets/images/projects/10.png",
        "year": "2022",
        "links": {
          "preview": "https://github.com/viandwi24/aniline",
          "repository": "https://github.com/viandwi24/aniline"
        }
      },
      {
        "name": "Solarium AR",
        "type": "Augmented Reality",
        "description": "a simple augmented reality app for solar system",
        "tags": ["Flutter", "Dart", "Unity 3D", "Vuforia", "C#"],
        "skills": [],
        "image": "/assets/images/projects/11.png",
        "year": "2022",
        "links": {
          "preview": "https://github.com/viandwi24/solarium-ar",
          "repository": "https://github.com/viandwi24/solarium-ar"
        }
      },
      {
        "name": "Vimedic",
        "type": "Health",
        "description": "simple app Rekam medis pasien",
        "tags": ["Laravel", "PHP"],
        "skills": [],
        "image": "/assets/images/projects/0.png",
        "year": "2019",
        "links": {
          // "preview": null,
          // "repository": null
        }
      },
      {
        "name": "QRObat",
        "type": "Health",
        "description": "simple recipe digital online with qr code",
        "tags": ["Laravel", "PHP"],
        "skills": [],
        "image": "/assets/images/projects/0.png",
        "year": "2019",
        "links": {
          "preview": null,
          "repository": null
        }
      },
      {
        "name": "ESHIP",
        "type": "Information",
        "description": "public information for harbor in gresik, indonesia",
        "tags": ["Laravel", "PHP"],
        "skills": [],
        "image": "/assets/images/projects/0.png",
        "year": "2019",
        "links": {
          "preview": null,
          "repository": null
        }
      },
      {
        "name": "Makhamr",
        "type": "Information",
        "description": "advanced search for kampus merdeka programs",
        "tags": ["Nuxt"],
        "skills": [],
        "image": "/assets/images/projects/0.png",
        "year": "2023",
        "links": {
          "preview": "https://github.com/viandwi24/makhamr",
          // "repository": null
        }
      },
      {
        "name": "Paint IO",
        "type": "Game",
        "description": "try to clone online draw game like gartic.io",
        "tags": ["Nuxt"],
        "skills": [],
        "image": "/assets/images/projects/0.png",
        "year": "2023",
        "links": {
          "preview": "https://github.com/viandwi24/paint-io",
          // "repository": null
        }
      },
      {
        "name": "ean13-tkinter-python",
        "type": "Reader",
        "description": "ean13 barcode reader with tkinter",
        "tags": ["Python", "Tkinter"],
        "skills": [],
        "image": "/assets/images/projects/0.png",
        "year": "2020",
        "links": {
          "preview": "https://github.com/viandwi24/ean13-tkinter-python",
          "repository": "https://github.com/viandwi24/ean13-tkinter-python"
        }
      },
      {
        "name": "asteroid-guard-java",
        "type": "Reader",
        "description": "asteroid data gui from nasa api",
        "tags": ["Java", "Maven"],
        "skills": [],
        "image": "/assets/images/projects/0.png",
        "year": "2020",
        "links": {
          "preview": "https://github.com/viandwi24/asteroid-guard-java",
          "repository": "https://github.com/viandwi24/asteroid-guard-java"
        }
      }
    ] as PortofolioConfigProject[],
  }

  try {
    // key is dot notation object, like: author.links.github or author.friends[0].name
    let value: any = key.split('.').reduce((acc, cur) => (acc as any)[cur], AppPortofolioConfig)
    if (value === undefined) return key
    // funcs
    const getFromString = (str: string) => {
      try {
        const templateString = str.match(/{{(.*?)}}/g)
        if (templateString) {
          // replace all template string pattern with str from AppPortofolioConfig
          templateString.forEach((_str) => {
            const key = _str.replace(/[{}]/g, '')
            str = str.replace(_str, getPortofolioConfig(key))
          })
        }
        return str
      } catch (error) {
        return str
      }
    }
    const recursiveCheckArrayOrObject = (arr: any[]|object|string|number) => {
      try {
        if (arr === null || arr === undefined) {
          return arr
        } else if (Array.isArray(arr)) {
          arr.forEach((item, i) => {
            ;(arr as any)[i] = recursiveCheckArrayOrObject(item)
          })
        } else if (typeof arr === 'object') {
          Object.keys(arr).forEach((key) => {
            ;(arr as any)[key] = recursiveCheckArrayOrObject((arr as any)[key])
          })
        } else if (typeof arr === 'string') {
          arr = getFromString(arr)
        } else {
          return arr
        }
        return arr
      } catch (error) {
        console.warn(`Key: ${key} have error when parsing recursiveCheckArrayOrObject: ${error}`, arr)
        return arr
      }
    }
    // check, because value can be template string, with pattern : {{dot.notation.object}}
    if (typeof value === 'string') {
      // get all template string pattern
      value = getFromString(value)
    } else if (Array.isArray(value)) {
      // check if value is array, or nested array, looping through array all depth
      value = recursiveCheckArrayOrObject(value)
    }
    return value
  } catch (error) {
    console.warn(`Key: ${key} not found in AppPortofolioConfig: ${error}`)
    return key
  }
}
export default defineAppConfig({
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'zinc',
    },
    icons: {
      loading: 'ph:circle-notch-duotone',
    },
    card: {
      slots: {
        root: 'border-b border-neutral-500/20 bg-neutral-900/40 backdrop-blur-xl rounded',
        header: 'bg-neutral-50/10 dark:bg-neutral-800/30 py-2 px-4 sm:px-4 border-b border-neutral-500/20',
        footer: 'py-2 px-2 sm:px-2 border-none',
        body: 'border-none px-4 sm:px-4 py-2 sm:py-2',
        // footer: 'bg-neutral-50/30 dark:bg-neutral-800/50 py-2 px-2 sm:px-2 border-t border-neutral-500/20',
      }
    },
  },
  portfolio: {
    author: {
      username: 'viandwi24',
      name: 'Alfian Dwi Nugraha',
      links: {
        github: 'https://github.com/viandwi24',
        linkedin: 'https://www.linkedin.com/in/viandwi24/',
        email: 'mailto:viandwi24@pm.me',
        linktree: 'https://linktr.ee/viandwi24',
        facebook: 'https://www.facebook.com/viandwi24',
        instagram: 'https://www.instagram.com/viandwi_24/',
        resume: 'https://drive.google.com/file/d/1SrF-vdW5XDj1IChEBWy-Sv5gKkbTb09a/view?usp=share_link',
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
            size: 'xl',
            icon: 'ph:github-logo',
            href: '{{author.links.github}}',
            target: "_blank",
            color: 'neutral',
          },
          {
            label: 'Resume',
            variant: 'soft',
            size: 'xl',
            icon: 'ph:file-text-duotone',
            href: '{{author.links.resume}}',
            target: "_blank",
            color: 'warning',
          },
          {
            label: 'About Me',
            variant: 'soft',
            size: 'xl',
            'trailing-icon': 'ph:arrow-right-duotone',
            to: '/about',
          }
        ]
      },
      contact: {
        links: [
          {
            label: 'Email',
            icon: 'ph:envelope-simple-duotone',
            href: '{{author.links.email}}',
            variant: 'outline',
            color: 'warning',
          },
          {
            label: 'Github',
            icon: 'ph:github-logo',
            href: '{{author.links.github}}',
            variant: 'outline',
            color: 'neutral',
          },
          {
            label: 'Linkedin',
            icon: 'ph:linkedin-logo',
            href: '{{author.links.linkedin}}',
            variant: 'outline',
            color: 'primary',
          },
          {
            label: 'Linktree',
            icon: 'ph:link',
            href: '{{author.links.linktree}}',
            variant: 'outline',
            color: 'success',
          },
          {
            label: 'Facebook',
            icon: 'ph:facebook-logo',
            href: '{{author.links.facebook}}',
            variant: 'outline',
            color: 'primary',
          },
          {
            label: 'Instagram',
            icon: 'ph:instagram-logo',
            href: '{{author.links.instagram}}',
            variant: 'outline',
            color: 'error',
          },
        ]
      }
    },
    seo: {
      default: {
        title: '{{author.name}} ({{author.username}})',
        description: '{{section.home.subtitle.main}}, {{section.home.subtitle.secondary}}',
        titleTemplate: `%s | {{author.name}}`,
      },
      home: {
        titleTemplate: '',
      },
      about: {
        title: 'About',
      },
      blog: {
        title: 'Blog',
      },
      contact: {
        title: 'Contact',
      },
      experiences: {
        title: 'Experiences',
      },
      projects: {
        title: 'Projects',
      },
    },
    projects: [
      {
        "name": "Nuxt 3 Awesome Starter",
        "type": "Template",
        "description": "a Nuxt 3 starter template or boilerplate with a lot of useful features. and integrated with TailwindCSS 3",
        "tags": ["Bun", "Typescript", "Nuxt", "Vue", "Tailwindcss"],
        "skills": [],
        "image": "/assets/images/projects/1.png",
        "year": "2022",
        "links": {
          "repository": "https://github.com/viandwi24/nuxt3-awesome-starter",
          "preview": "https://nuxt3-awesome-starter.vercel.app"
        }
      },
      {
        "name": "Chainkit Builder",
        "type": "Game Services",
        "description": "a Gundam Builder Like game but for Nokiamon Ecosystem in Solana Blockchain",
        "tags": ["Bun", "Typescript", "Next", "React", "Tailwindcss", "Solana"],
        "skills": [],
        "image": "/assets/images/projects/28.png",
        "year": "2022",
        "links": {
          "preview": "https://chainkitbuilder.com"
        }
      },
      {
        "name": "DibantuAI",
        "type": "Chatbot",
        "description": "a end user chat with many all in one ai models in one platform",
        "tags": ["Bun", "Typescript", "Nuxt", "Vue", "Tailwindcss"],
        "skills": [],
        "image": "/assets/images/projects/29.png",
        "year": "2022",
        "links": {
          "preview": "https://dibantuai.com"
        }
      },
      {
        "name": "Nakacita",
        "type": "Landing Pages",
        "description": "a landing pages for Nakama Cita Karya company",
        "tags": ["Bun", "Typescript", "Nuxt", "Vue", "Tailwindcss"],
        "skills": [],
        "image": "/assets/images/projects/30.png",
        "year": "2022",
        "links": {
          "preview": "https://nakacita.com"
        }
      },
      {
        "name": "Blockchain Simulator",
        "type": "Simulator",
        "description": "A Simple Blockchain Simulation with Javascript Nodejs and VueJs as Front End",
        "tags": ["Blockchain", "Simulation", "Javascript", "Nuxt", "Vue", "Tailwindcss"],
        "skills": [],
        "image": "/assets/images/projects/2.gif",
        "year": "2021",
        "links": {
          "repository": "https://github.com/viandwi24/blockchain-simulation",
          "preview": "https://viandwi24.github.io/blockchain-simulation"
        }
      },
      {
        "name": "Devover Forum",
        "type": "Forum",
        "description": "a Opensource Forum Web with Tailwinds and Laravel",
        "tags": ["PHP", "Laravel", "Vue", "Tailwindcss"],
        "skills": [],
        "image": "/assets/images/projects/3.gif",
        "year": "2020",
        "links": {
          "repository": "https://github.com/devoverid/forum",
          "preview": "https://github.com/devoverid/forum"
        }
      },
      {
        "name": "Klasse IO",
        "type": "Game",
        "description": "A group video call with a mix of rpg games. Make the group atmosphere more interactive. WebRTC based Video Stream with Peer connection. Then Signaling by WebSocket. With Client Built on NuxtJS as well as NodeJS server.",
        "tags": ["Javascript", "Nuxt", "Vue", "WebRTC"],
        "skills": [],
        "image": "/assets/images/projects/4.png",
        "year": "2021",
        "links": {
          "repository": "https://github.com/viandwi24/klasse-io-client",
          "preview": "https://github.com/viandwi24/klasse-io-client"
        }
      },
      {
        "name": "Nokiamon",
        "type": "Information",
        "description": "a dex for digital collectible in solana blockchain",
        "tags": ["Typescript", "React", "Express", "MongoDB", "GraphQL", "Solana", "Rust"],
        "skills": [],
        "image": "/assets/images/projects/16.png",
        "year": "2019",
        "links": {
          "repository": "https://nokiamon.com/",
          "preview": "https://nokiamon.com/"
        }
      },
      {
        "name": "Hatofit",
        "type": "Sport",
        "description": "Hatofit is a platform that helps you to be fit and healthy, help you to track and monitoring your health.",
        "tags": ["Typescript", "Nuxt", "MongoDB", "Express", "Bun", "PostgreSQL", "Flutter"],
        "skills": [],
        "image": "/assets/images/projects/23.jpeg",
        "year": "2024",
        "links": {
          "repository": null,
          "preview": null
        }
      },
      {
        "name": "Porseni MA 2023",
        "type": "Information",
        "description": "a information web app for register pekan olahraga dan seni jawa timur 2023",
        "tags": ["Typescript", "Next", "Tailwindcss"],
        "skills": [],
        "image": "/assets/images/projects/25.jpeg",
        "year": "2023",
        "links": {
          "repository": null,
          "preview": null
        }
      },
      {
        "name": "Solana Blog",
        "type": "Blog",
        "description": "a decentral blog made using nuxt and solana with Solana concept",
        "tags": ["Bun", "Typescript", "Nuxt", "Solana", "Rust"],
        "skills": [],
        "image": "/assets/images/projects/24.png",
        "year": "2024",
        "links": {
          "repository": "https://github.com/viandwi24/nuxt3-blog-Solana-solana",
          "preview": "https://nuxt3-blog-Solana-solana-client.vercel.app"
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
          "repository": null,
          "preview": null
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
          "repository": null,
          "preview": null
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
          "repository": "https://github.com/viandwi24/bootsarc",
          "preview": "https://bootsarc.vercel.app/pages/index.html"
        }
      },
      {
        "name": "Foody",
        "type": "Services",
        "description": "a client web app for Foody, a food ordering app based on Nuxt 3.",
        "tags": ["Tailwindcss", "Nuxt"],
        "skills": [],
        "image": "/assets/images/projects/7.gif",
        "year": "2022",
        "links": {
          "repository": "https://github.com/viandwi24/foody-client",
          "preview": "https://foody.viandwi24.site"
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
          "repository": "https://github.com/Nakama-Capstone/link-d-law",
          "preview": "https://github.com/Nakama-Capstone/link-d-law"
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
          "repository": "https://github.com/viandwi24/bsoul",
          "preview": "https://github.com/viandwi24/bsoul"
        }
      },
      {
        "name": "Github Profile Editor",
        "type": "Tools",
        "description": "a github profile editor with drag and drop!!!",
        "tags": ["Tailwindcss", "Nuxt"],
        "skills": [],
        "image": "/assets/images/projects/8.png",
        "year": "2022",
        "links": {
          "repository": "https://github.com/viandwi24/github-profile-editor",
          "preview": "https://github-profile-editor.vercel.app"
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
          "repository": "https://github.com/viandwi24/vilacore",
          "preview": "https://github.com/viandwi24/vilacore"
        }
      },
      {
        "name": "Animid",
        "type": "Template",
        "description": "Redesign MyAnimeList made by me",
        "tags": ["Nuxt", "Tailwindcss"],
        "skills": [],
        "image": "/assets/images/projects/14.png",
        "year": "2020",
        "links": {
          "repository": "https://github.com/viandwi24/asteroid-guard-java",
          "preview": "https://viandwi24.github.io/animid/"
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
          "repository": "https://github.com/viandwi24/decognition",
          "preview": "https://github.com/viandwi24/decognition"
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
          "repository": "https://github.com/viandwi24/denova",
          "preview": "https://github.com/viandwi24/denova"
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
          "repository": "https://github.com/viandwi24/v-framework",
          "preview": "https://github.com/viandwi24/v-framework"
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
          "repository": "https://github.com/viandwi24/flappy-bird-evolution-neural-network",
          // "preview": null
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
          "repository": "https://github.com/viandwi24/quot22",
          // "preview": null
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
          "repository": "https://github.com/viandwi24/karaoke-chan",
          "preview": "https://github.com/viandwi24/karaoke-chan"
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
          "repository": "https://github.com/viandwi24/pinned",
          "preview": "https://github.com/viandwi24/pinned"
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
          "repository": "https://github.com/viandwi24/aniline",
          "preview": "https://github.com/viandwi24/aniline"
        }
      },
      {
        "name": "Solarium AR",
        "type": "Augmented Reality",
        "description": "a simple augmented reality app for solar system",
        "tags": ["Flutter", "Dart", "Unity", "Vuforia", "C#"],
        "skills": [],
        "image": "/assets/images/projects/11.png",
        "year": "2022",
        "links": {
          "repository": "https://github.com/viandwi24/solarium-ar",
          "preview": "https://github.com/viandwi24/solarium-ar"
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
          // "repository": null,
          // "preview": null
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
          "repository": null,
          "preview": null
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
          "repository": null,
          "preview": null
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
          "repository": "https://github.com/viandwi24/makhamr",
          // "preview": null
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
          "repository": "https://github.com/viandwi24/paint-io",
          // "preview": null
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
          "repository": "https://github.com/viandwi24/ean13-tkinter-python",
          "preview": "https://github.com/viandwi24/ean13-tkinter-python"
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
          "repository": "https://github.com/viandwi24/asteroid-guard-java",
          "preview": "https://github.com/viandwi24/asteroid-guard-java"
        }
      }
    ] as PortfolioConfigProject[],
    skills: [
      {
        category: 'Programming Languages',
        items: [
          ['Html', 2014, 'https://seeklogo.com/images/H/html5-without-wordmark-color-logo-14D252D878-seeklogo.com.png'],
          ['Css', 2014, 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/48px-CSS3_logo.svg.png'],
          ['JavaScript', 2014, 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png'],
          ['VB6', 2015, 'https://www.vectorlogo.zone/logos/microsoft_vb/microsoft_vb-icon.svg'],
          ['.NET', 2016, 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg'],
          ['PHP', 2017, 'https://www.vectorlogo.zone/logos/php/php-icon.svg'],
          ['Java', 2018, 'https://www.vectorlogo.zone/logos/java/java-icon.svg'],
          ['C++', 2018, 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/306px-ISO_C%2B%2B_Logo.svg.png'],
          ['C#', 2018, 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Logo_C_sharp.svg'],
          ['Typescript', 2019, 'https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg'],
          ['Sass', 2024, 'https://www.vectorlogo.zone/logos/sass-lang/sass-lang-icon.svg'],
          ['Scss', 2024, 'https://www.vectorlogo.zone/logos/sass-lang/sass-lang-icon.svg'],
          ['Python', 2019, 'https://www.vectorlogo.zone/logos/python/python-icon.svg'],
          ['Golang', 2022, 'https://www.vectorlogo.zone/logos/golang/golang-icon.svg'],
          ['Rust', 2023, 'https://www.vectorlogo.zone/logos/rust-lang/rust-lang-icon.svg'],
          ['Dart', 2020, 'https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg'],
        ]
      },
      {
        category: 'Frameworks',
        items: [
          ['Codeigniter', 2017, 'https://codeigniter.com/assets/icons/44521256.png'],
          ['Bootstrap', 2017, 'https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-icon.svg'],
          ['JQuery', 2017, 'https://www.vectorlogo.zone/logos/jquery/jquery-icon.svg'],
          ['Laravel', 2018, 'https://www.vectorlogo.zone/logos/laravel/laravel-icon.svg'],
          ['Unity', 2018, 'https://www.vectorlogo.zone/logos/unity3d/unity3d-icon.svg'],
          ['Semantic UI', 2018, 'https://seeklogo.com/images/S/semantic-ui-logo-AFDC4C7E31-seeklogo.com.png'],
          ['Vue', 2019, 'https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg'],
          ['Nuxt', 2019, 'https://www.vectorlogo.zone/logos/nuxtjs/nuxtjs-icon.svg'],
          ['Tailwindcss', 2019, 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg'],
          ['Flutter', 2019, 'https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg'],
          ['Phaser', 2020, 'https://www.vectorlogo.zone/logos/phaserio/phaserio-icon.svg'],
          ['Flask', 2021, 'https://www.vectorlogo.zone/logos/palletsprojects_flask/palletsprojects_flask-icon~v2.svg'],
          ['Express', 2021, 'https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg'],
          ['React', 2021, 'https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg'],
          ['GraphQL', 2021, 'https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg'],
          ['Next', 2023, 'https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-y563b8iq.png'],
        ]
      },
      {
        category: 'Runtime',
        items: [
          ['Nodejs', 2019, 'https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg'],
          ['Deno', 2020, 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Deno_2021.svg/512px-Deno_2021.svg.png'],
          ['Bun', 2023, 'https://bun.sh/logo.svg'],
        ]
      },
      {
        category: 'Tools',
        items: [
          ['Supabase', 2025, 'https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg'],
        ]
      },
      {
        category: 'Web3 & Blockchain',
        items: [
          ['Solana', 2022, 'https://raw.githubusercontent.com/detain/svg-logos/b02ee1ac30c7ff4757278337c95588b01ed0954b/svg/s/solana.svg'],
          ['Ethereum', 2022, 'https://www.vectorlogo.zone/logos/ethereum/ethereum-icon.svg'],
        ]
      },
      {
        category: 'DevOps',
        items: [
          ['Docker', 2020, 'https://www.vectorlogo.zone/logos/docker/docker-icon.svg'],
          ['PM2', 2020, 'https://www.vectorlogo.zone/logos/pm2io/pm2io-icon.svg'],
          ['GAction', 2021, 'https://www.vectorlogo.zone/logos/github/github-icon.svg'],
          ['Kubernetes', 2023, 'https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg'],
          ['Terraform', 2023, 'https://www.vectorlogo.zone/logos/terraformio/terraformio-icon.svg'],
          ['Jenkins', 2024, 'https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg'],
        ]
      },
      {
        category: 'Database',
        items: [
          ['Mysql', 2017, 'https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg'],
          ['Postgresql', 2018, 'https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg'],
          ['Firebase', 2019, 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg'],
          ['Mongodb', 2020, 'https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg'],
          ['Redis', 2020, 'https://www.vectorlogo.zone/logos/redis/redis-icon.svg'],
          ['Sqlite', 2021, 'https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg'],
        ]
      },
      {
        category: 'Cloud',
        items: [
          ['AWS', 2020, 'https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg'],
          ['GCP', 2021, 'https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg'],
        ]
      },
      {
        category: 'Serverless',
        items: [
          ['Heroku', 2019, 'https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg'],
          ['Netlify', 2019, 'https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg'],
          ['Vercel', 2020, 'https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg'],
          ['Dokploy', 2024, 'https://avatars.githubusercontent.com/u/156882017?s=200&v=4']
        ]
      },
      {
        category: 'Operating System',
        items: [
          ['Windows', 2010, 'https://www.vectorlogo.zone/logos/microsoft/microsoft-icon.svg'],
          ['Ubuntu', 2017, 'https://www.vectorlogo.zone/logos/ubuntu/ubuntu-icon.svg'],
          ['Debian', 2018, 'https://www.vectorlogo.zone/logos/debian/debian-icon.svg'],
          ['CentOS', 2020, 'https://www.vectorlogo.zone/logos/centos/centos-icon.svg'],
          ['MacOS', 2020, 'https://www.vectorlogo.zone/logos/apple/apple-icon.svg'],
        ]
      },
    ] as PortfolioConfigSkills[]
  },
})
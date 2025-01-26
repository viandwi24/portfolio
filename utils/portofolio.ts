import merge from 'lodash.merge'

export interface PortfolioConfigProject {
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

export interface PortfolioConfigSkills {
  category: string
  items: [string, number, string][] // [name, year, icon]
}

export const getPortfolioConfig = (key: string) => {
  const $config = useAppConfig()
  const DefaultPortfolioConfig = {
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
            href: 'https://drive.google',
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
      },
      about: {
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
            href: 'https://drive.google',
            target: "_blank",
            color: 'warning',
          },
          {
            label: 'Contact Me',
            variant: 'soft',
            size: 'xl',
            'trailing-icon': 'ph:arrow-right-duotone',
            to: '/contact',
          }
        ],
      },
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
          "preview": "https://github.com/viandwi24/nuxt3-awesome-starter",
          "repository": "https://nuxt3-awesome-starter.vercel.app"
        }
      },
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
    ]
  }
  const AppPortfolioConfig = merge(DefaultPortfolioConfig, {...$config.portfolio})

  try {
    // key is dot notation object, like: author.links.github or author.friends[0].name
    let value: any = key.split('.').reduce((acc, cur) => (acc as any)[cur], AppPortfolioConfig)
    if (value === undefined) return key
    // funcs
    const getFromString = (str: string) => {
      try {
        const templateString = str.match(/{{(.*?)}}/g)
        if (templateString) {
          // replace all template string pattern with str from AppPortfolioConfig
          templateString.forEach((_str) => {
            const key = _str.replace(/[{}]/g, '')
            str = str.replace(_str, getPortfolioConfig(key))
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
    } else if (typeof value === 'object') {
      // check if value is object, or nested object, looping through object all depth
      value = recursiveCheckArrayOrObject(value)
    }
    // console.log(`Key: ${key}`, value)
    return value
  } catch (error) {
    console.warn(`Key: ${key} not found in AppPortfolioConfig: ${error}`)
    return key
  }
}
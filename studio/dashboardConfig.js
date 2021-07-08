export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60e6c8f7ed67e9c6a24a1d65',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-azqu54jj',
                  apiId: '8c70808a-9834-41d7-8b1a-ea10b10cc2c7'
                },
                {
                  buildHookId: '60e6c8f8b6fbedc0fabff39a',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-5w7ju61k',
                  apiId: '0c4e07f5-4b01-4648-9991-20350734c6d8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/andonealessandro/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-5w7ju61k.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}

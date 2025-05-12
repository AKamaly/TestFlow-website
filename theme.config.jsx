export default {
  logo: <span style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Atoms TestFlow</span>,
  project: {
    link: 'https://github.com/yourusername/atoms-testflow',
  },
  docsRepositoryBase: 'https://github.com/yourusername/atoms-testflow/tree/main',
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Atoms TestFlow Documentation'
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Atoms TestFlow: Hardware Validation Platform Documentation" />
      <meta name="og:title" content="Atoms TestFlow Documentation" />
    </>
  ),
  primaryHue: 250, // Purple-ish color to match your theme
  navigation: {
    prev: true,
    next: true
  },
  footer: {
    text: `© ${new Date().getFullYear()} Atoms TestFlow. All rights reserved.`,
  },
  feedback: {
    content: null
  },
  editLink: {
    text: null
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  }
} 
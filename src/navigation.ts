import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'Services',
      links: [
        {
          text: 'Digital Menu & Pricelists',
          href: '/services/digital-menu',
        },
        {
          text: 'Branded QR',
          href: '/services/branded-qr',
        },
      ],
    },
    {
      text: 'Showcase',
      href: '/showcase',
    },
    {
      text: 'Pricing',
      href: '/pricing',
    },
    {
      text: 'Blog',
      href: '/blog',
    },
    {
      text: 'Contact',
      href: '/contact',
    },
  ],
  actions: [{ text: 'Get Started', href: '/contact', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'FAR QR', // Cột 1
      links: [
        { text: 'Home', href: '/' },
        { text: 'Showcase', href: '/showcase' },
        { text: 'Pricing', href: '/pricing' },
      ],
    },
    {
      title: 'Services', // Cột 2
      links: [
        { text: 'Digital Menu', href: '/services/digital-menu' },
        { text: 'Branded QR', href: '/services/branded-qr' },
      ],
    },
    {
      title: 'Explore', // Cột 3 (Đổi từ Infomation)
      links: [
        { text: 'About FAR QR', href: '/about' },
        { text: 'Blog', href: '/blog' },
        { text: 'Contact', href: '/contact' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: '/terms' },
    { text: 'Privacy Policy', href: '/privacy' },
  ],
  socialLinks: [
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/FARQR' },
    { ariaLabel: 'TikTok', icon: 'tabler:brand-tiktok', href: 'https://www.tiktok.com/@farqr.com' },
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/FAR_QR' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/@FARQR' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    © 2025 FAR QR. All rights reserved.
  `,
};

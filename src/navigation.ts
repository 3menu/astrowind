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
          text: 'Smart Menu & Pricelists',
          href: '/services/smart-menu', // Trang giới thiệu dịch vụ tạo Menu
        },
        {
          text: 'Artistic & Custom QR',
          href: '/services/artistic-qr', // Trang giới thiệu dịch vụ QR nghệ thuật
        },
      ],
    },
    {
      text: 'Showcase', // Nơi khoe các mẫu QR đẹp bạn đã làm
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
      title: 'Services',
      links: [
        { text: 'Smart Menu', href: '/services/smart-menu' },
        { text: 'Artistic QR', href: '/services/artistic-qr' },
        { text: 'Custom Design', href: '/contact' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: '/about' },
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
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/FAR_QR' },
    { ariaLabel: 'TikTok', icon: 'tabler:brand-tiktok', href: 'https://www.tiktok.com/@farqr.com' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/FARQR' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/@FARQR' },
  ],
  footNote: `
    © 2025 FAR QR. All rights reserved.
  `,
};

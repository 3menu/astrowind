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
          href: '/services/digital-menu', // Trang giới thiệu dịch vụ tạo Menu
        },
        {
          text: 'Image QR',
          href: '/services/image-qr', // Trang giới thiệu dịch vụ QR nghệ thuật
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
        { text: 'Digital Menu', href: '/services/digital-menu' },
        { text: 'Image QR', href: '/services/image-qr' },
      ],
    },
    {
      title: 'Infomation',
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

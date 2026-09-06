export interface Capability {
  category: string;
  title: string;
  description: string;
  tags: string[];
}

export interface GalleryItem {
  title: string;
  videoUrl: string;
  thumbnail?: string;
  markdownContext: string;
  tag?: string;
  aspectRatio?: '16:9' | '9:16';
}

export interface PortfolioItem {
  id: number;
  title: string;
  client: string;
  videoUrl: string;
  size: 'small' | 'medium' | 'large' | 'wide' | string;
  year?: string;
  discipline?: string;
  markdownContext?: string;
  aspectRatio?: '16:9' | '9:16';
  gallery?: GalleryItem[];
}

export interface SiteConfig {
  siteTitle: string;
  siteSubtitle: string;
  navLinks: { label: string; href: string }[];
  heroStatement: string;
  heroSubtext: string;
  studioNotice: {
    status: string;
    location: string;
    coordinates: string;
    year: string;
  };
  contactTopics: string[];
  contactDetails?: {
    email: string;
    phone: string;
  };
  footerNote: string;
}

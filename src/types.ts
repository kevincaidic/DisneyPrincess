export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  liveUrl?: string;
  tags: string[];
  year: string;
  client: string;
  role: string;
  challenge: string;
  solution: string;
  metrics: { label: string; value: string }[];
  process: {
    phase: string;
    description: string;
    deliverables: string[];
  }[];
  wireframeImage?: string;
  finalDesignImage?: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
  image: string;
  idCredential?: string;
  description?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  startingPrice: string;
  features: string[];
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  feedback: string;
  avatar: string;
}

export interface Achievement {
  id: string;
  value: string;
  label: string;
  icon: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  details: string[];
  icon: string;
  color: string;
}

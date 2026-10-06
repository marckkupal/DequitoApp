export type TabKey = 'home' | 'explore' | 'boards' | 'events' | 'profile';
export type Stage = 'onboarding' | 'welcome' | 'login' | 'signup' | 'app';

export interface User {
  name: string;
  email: string;
  password: string; // plain text: mock only, use a real backend before shipping
  university: string;
  program: string;
  year: string;
  avatarUri?: string;
}
export interface Post {
  id: string; name: string; ini: string; handle: string; avatarBg: string;
  tag: string; title: string; tint: string;
  likes: number; comments: number; live?: boolean;
}
export interface Board { id: string; name: string; members: number; emoji: string }

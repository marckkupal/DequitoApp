import { C } from './theme';
import type { User, Post, Board } from './types';

export const POSTS: Post[] = [
  { id: '1', name: 'Vicinia', ini: 'VC', handle: '@vicinia', avatarBg: C.yellow, tag: 'Community', title: 'Weekend market finds', tint: '#E6EDFB', likes: 1200, comments: 48, live: true },
  { id: '2', name: 'Mika Reyes', ini: 'MR', handle: '@mikareyes', avatarBg: '#E3F0E4', tag: 'Photography', title: 'Golden hour on the rooftop', tint: '#FADFD6', likes: 61, comments: 9, live: true },
  { id: '3', name: 'Niock Silvero', ini: 'NS', handle: '@niocksilvero', avatarBg: '#E3F0E4', tag: 'Programming', title: 'Semicon Hackathon setup', tint: '#FBF0C4', likes: 48, comments: 12 },
  { id: '4', name: 'Angela Cruz', ini: 'AC', handle: '@angelacruz', avatarBg: '#E6EDFB', tag: 'Study Groups', title: 'Calculus 2 review sheets', tint: '#E3F0E4', likes: 35, comments: 27 },
];

export const BOARDS: Board[] = [
  { id: '1', name: 'Anime Club', members: 340, emoji: '🎌' },
  { id: '2', name: 'Gaming Society', members: 512, emoji: '🎮' },
  { id: '3', name: 'Programming & Tech', members: 680, emoji: '💻' },
  { id: '4', name: 'Athletic Union', members: 185, emoji: '⚽' },
  { id: '5', name: 'Music Coalition', members: 290, emoji: '🎵' },
  { id: '6', name: 'Photography Lab', members: 150, emoji: '📷' },
  { id: '7', name: 'Study Circles', members: 430, emoji: '📚' },
  { id: '8', name: 'Student Council', members: 1200, emoji: '🏛️' },
];

export const QUICK = [
  { label: 'Guidance', icon: '💛', bg: '#E3F0E4', border: '#CFE3D0' },
  { label: 'Library', icon: '📖', bg: '#FBF0C4', border: '#F0DD97' },
  { label: 'Clinic', icon: '➕', bg: '#FADFD6', border: '#EFC7BC' },
  { label: 'OSA', icon: '🎓', bg: '#E6EDFB', border: '#CBD6EE' },
];

export const SLIDES = [
  { icon: '🗺️', kicker: 'EXPLORE NEARBY', title: 'Good spots.\nJust around you.', body: 'Find your next café, food stop or study space around TIP Quezon City and Manila.' },
  { icon: '🎮', kicker: 'CAMPUS BOARDS', title: 'Your interests.\nYour people.', body: 'Into photography, gaming, music or academics? Join a board and start a conversation.' },
  { icon: '🗓️', kicker: 'CAMPUS EVENTS & WELLBEING', title: 'Be part of it.\nFeel supported.', body: 'Discover campus activities and find caring support from the Guidance Office or Clinic, whenever you need it.' },
];

export const SEED_USERS: User[] = [
  { name: 'Juan Dela Cruz', email: 'jdelacruz@tip.edu.ph', password: 'password123', university: 'Technological Institute of the Philippines Q.C.', program: 'BS Computer Science', year: '3rd year' },
];

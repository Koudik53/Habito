export type Frequency = 'daily' | 'weekly' | 'custom';

export type WeekDay = 'Sun' | 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat';

export interface JournalEntry {
  id: string;
  date: string; // ISO String
  content: string;
}

export interface HabitGoal {
  type: 'streak' | 'weekly' | 'total';
  value: number;
}

export interface Habit {
  id: string;
  name: string;
  description: string;
  emoji: string;
  color: string;
  frequency: Frequency;
  customDays: number[]; // 0 = Sunday, 1 = Monday, etc.
  completedDates: string[]; // ISO Date strings "YYYY-MM-DD"
  createdAt: string;
  
  // New Features
  category?: string; // New Category Field
  targetStreak?: number; // Legacy/Quick access Goal: e.g., Reach 30 days
  goal?: HabitGoal; // Flexible Goal System
  journal: JournalEntry[];
  archived?: boolean;
}

export interface AppSettings {
  darkMode: boolean;
  soundEnabled: boolean;
  animationsEnabled: boolean;
  customLogo?: string | null;
}

export type ViewState = 'today' | 'add' | 'progress' | 'settings' | 'habit-detail';

// For the chart
export interface WeeklyStats {
  day: string;
  completed: number;
  total: number;
}
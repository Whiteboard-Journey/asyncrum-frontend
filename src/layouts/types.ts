export type Language = {
  name: string;
};

export type AppItem = {
  name: string;
  icon: string;
  redirectTo: string;
};

export type Message = {
  id: number;
  title: string;
  time?: string;
  subText: string;
  avatar?: string;
  icon?: string;
  variant?: string;
  isRead: boolean;
};

export type NotificationItem = {
  day: string;
  messages: Message[];
};

export type SearchOption = {
  label: string;
  icon?: string;
  type: string;
  value?: string;
  userDetails?: {
    firstname: string;
    lastname: string;
    position: string;
    avatar: string;
  };
};

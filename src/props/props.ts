export interface GlobalStateProps {
  userInfo: UserProps;
  columns: ColumnProps[];
  posts: PostProps[];
}

export interface UserProps {
  isLogin: boolean;
  nickName?: string;
  userId?: number;
}

export interface ColumnProps {
  id: number;
  title: string;
  avatar?: string;
  description: string;
}

export interface PostProps {
  id: number;
  title: string;
  content: string;
  image?: string;
  createdAt: string;
  columnId: number;
}

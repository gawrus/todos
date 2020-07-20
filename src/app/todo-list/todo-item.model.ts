export interface TodoItem{
  id: string;
  name: string;
  description: string;
  date?: Date;
  state?: 'completed' | 'cancelled' | null;
}

export type Notification = {
  movie: string,
  user: number,
  type: 'review' | 'rating',
  rating?: number,
  comment?: string,
  date: string,
}

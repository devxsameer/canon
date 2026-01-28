export interface Post {
  id: string;
  title: string;
  content: string; // CRDT serializable content
  authorId: string;
  createdAt: string;
  updatedAt: string;
}

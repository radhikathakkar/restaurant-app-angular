import { Comment } from './comment';

export class Dish {
    id: number;
    name: String;
    image: String;
    category: string;
    featured: boolean;
    label: string;
    price: string;
    description: string;
    comments: Comment[];
}
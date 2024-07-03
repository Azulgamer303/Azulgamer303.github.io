import { defineStore } from 'pinia';

interface Review {
    user: string;
    isLiked: boolean;
    description: string;
}

export const useReviewStore = defineStore('reviewStore', {
    state: () => ({
        reviews: [] as Review[]
    }),
    actions: {
        addReview(review: Review) {
            // Verificar si ya existe una reseña del mismo usuario
            const existingReview = this.reviews.find(r => r.user === review.user);
            if (!existingReview) {
                this.reviews.push(review);
            } else {
                // Opcional: Manejar el caso de que ya exista una reseña, por ejemplo, mostrando un mensaje
                alert('Ya has realizado una reseña.');
            }
        }
    }
});
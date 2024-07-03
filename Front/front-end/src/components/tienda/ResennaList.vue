<script setup lang="ts">
import { useReviewStore } from '@/stores/reviewStore';
import ReviewCard from './Resenna.vue';

const reviewStore = useReviewStore();
</script>

<template>
    <div>
        <ReviewCard class="mb-5" v-for="(review, index) in reviewStore.reviews" :key="index" :user="review.user" :isLiked="review.isLiked"
            :description="review.description" />
    </div>
</template>
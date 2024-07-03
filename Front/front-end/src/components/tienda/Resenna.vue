<template>
  <div class="review-card flex items-start p-4 max-w-screen-lg rounded-lg">
    <div class="user-avatar flex-shrink-0 border">
      <img src="../../assets/ph_user.png" alt="User Avatar" class="rounded-full p-2" />
    </div>
    <div>
      <p class="pl-2 font-bold text-2xl mr-2 pr-8 min-w-[10rem]">{{ user }}</p>
    </div>
    <div class="review-content w-full">
      <div class="review-header flex items-center max-w-lg">
        <div id="recomendado" class="flex items-center gap-2">
          <svg id="like" xmlns="http://www.w3.org/2000/svg" width="34" height="32" viewBox="0 0 34 32" fill="none"
            :class="{ 'bw-filter': !isLiked }">
            <path
              d="M7.08335 12.0002V28.0002H1.41669V12.0002H7.08335ZM12.75 28.0002C11.9986 28.0002 11.2779 27.7192 10.7466 27.2191C10.2152 26.719 9.91669 26.0407 9.91669 25.3335V12.0002C9.91669 11.2668 10.2284 10.6002 10.7525 10.1202L20.0742 1.3335L21.5759 2.74683C21.9584 3.10683 22.1992 3.60016 22.1992 4.14683L22.1567 4.5735L20.8109 10.6668H29.75C30.5015 10.6668 31.2221 10.9478 31.7535 11.4479C32.2848 11.948 32.5834 12.6263 32.5834 13.3335V16.0002C32.5834 16.3468 32.5125 16.6668 32.385 16.9735L28.1067 26.3735C27.6817 27.3335 26.6759 28.0002 25.5 28.0002H12.75ZM12.75 25.3335H25.5425L29.75 16.0002V13.3335H17.2975L18.8984 6.24016L12.75 12.0402V25.3335Z"
              fill="#A5F9A3" />
          </svg>
          <svg id="line-sep" xmlns="http://www.w3.org/2000/svg" width="2" height="30" viewBox="0 0 2 30" fill="none">
            <path d="M1 0L0.999999 30" stroke="white" stroke-opacity="0.5" />
          </svg>
          <svg id="dislike" xmlns="http://www.w3.org/2000/svg" width="34" height="32" viewBox="0 0 34 32" fill="none"
            :class="{ 'bw-filter': isLiked }">
            <path
              d="M26.9167 20V4H32.5833V20H26.9167ZM21.25 4C22.0014 4 22.7221 4.28095 23.2535 4.78105C23.7848 5.28115 24.0833 5.95942 24.0833 6.66667V20C24.0833 20.7333 23.7717 21.4 23.2475 21.88L13.9258 30.6667L12.4242 29.2533C12.0417 28.8933 11.8008 28.4 11.8008 27.84L11.8433 27.4267L13.1892 21.3333H4.25C3.49855 21.3333 2.77788 21.0524 2.24653 20.5523C1.71518 20.0522 1.41666 19.3739 1.41666 18.6667V16C1.41666 15.6533 1.4875 15.3333 1.615 15.0267L5.89333 5.62667C6.31833 4.66667 7.32416 4 8.5 4H21.25ZM21.25 6.66667H8.4575L4.25 16V18.6667H16.6883L15.0875 25.76L21.25 19.96V6.66667Z"
              fill="#FFB4B4" fill-opacity="0.8" />
          </svg>
          <span class="recommendation ml-3 text-2xl font-bold">{{ isLiked ? 'recomendado' : 'no recomendado' }}</span>
        </div>
      </div>

      <div class="review-body text-white mt-2 p-2 rounded-md bg-light">
        <p>{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReviewCard',
  props: {
    user: {
      type: String,
      required: true
    },
    isLiked: {
      type: Boolean,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.review-card {
  background-color: var(--primary-darker);
  color: #ffffff;
  width: 100%;
}

.review-header {
  background-color: var(--background);
  padding: 0.5rem;
  border-radius: 0.375rem;
}

.recommendation {
  color: #ffffff;
}

.review-body {
  background-color: var(--primary);
}

.bw-filter {
  filter: grayscale(100%);
  opacity: 0.5;
}
</style>

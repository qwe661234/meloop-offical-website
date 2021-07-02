<template>
    <a :href="link">
        <img
            :src="require('~/assets/images/googlePlay.svg')"
            alt="googlePlay"
            class="storeIcon"
        />
    </a>
</template>

<script>
import { googlePlayLink } from "@/static/link/link";
export default {
    data() {
        return {
            link: googlePlayLink,
        };
    },
};
</script>

<template>
    <a :href="link">
        <img :src="require('~/assets/images/appleStore.svg')" alt="appStore" />
    </a>
</template>

<script>
import { appleStoreLink } from "@/static/link/link";
export default {
    data() {
        return {
            link: appleStoreLink,
        };
    },
};
</script>

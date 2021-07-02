<template>
    <a :href="link">
        <img :src="require('~/assets/images/igIcon.png')" />
    </a>
</template>

<script>
import { igLink } from "@/static/link/link";
export default {
    data() {
        return {
            link: igLink,
        };
    },
};
</script>

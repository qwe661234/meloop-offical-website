<template>
    <a :href="link">
        <img :src="require('~/assets/images/fbIcon.png')" />
    </a>
</template>

<script>
import { fbLink } from "@/static/link/link";
export default {
    data() {
        return {
            link: fbLink,
        };
    },
};
</script>

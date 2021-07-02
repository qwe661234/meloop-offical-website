<template>
    <div>
        <div class="section purple">
            <div class="advertise label">{{ advText.label }}</div>
            <div class="advertise plainText">
                {{ advText.plainText }}
            </div>
        </div>
        <div class="section blue">
            <AdvertisingCard
                v-for="(advertise, index) in advertises"
                :key="index"
                :advertise="advertise"
            />
        </div>
    </div>
</template>

<script>
import { ADVERTISES, ADVERTISETEXT } from "@/static/advertise/adv";
export default {
    data() {
        return {
            advertises: ADVERTISES,
            advText: ADVERTISETEXT,
        };
    },
};
</script>

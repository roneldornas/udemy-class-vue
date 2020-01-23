<template>
        <li class="list-group-item media" @click="onVideoSelect">
            <img :src="thumbnailUrl" class="mr-3"/>
            <div class="media-body">{{ video.snippet.title }}</div>
        </li>
</template>

<script>
export default {
    name: 'VideoListItem',
    props: {
        video: {
            type: Object,
        }
    },
    computed: {
        thumbnailUrl() {
            return this.video.snippet.thumbnails.default.url;
        }
    },
    methods: {
        onVideoSelect() {
            this.$emit('videoSelect', this.video);
        }
    }
}
</script>

<style scoped>
li {
    display: flex;
    cursor: pointer;
}

li:hover {
    background-color: #eee;
}
</style>
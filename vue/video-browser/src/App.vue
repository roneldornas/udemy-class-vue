<template>
    <div class="container">
        <SearchBar @term-change="onTermChange" />
        <div class="row">
            <VideoDetail :video="selectedVideo" />
            <VideoList :videos="videos" @videoSelect="onVideoSelect" />
        </div>
    </div>
</template>

<script>
/* eslint-disable */

import axios from 'axios';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const API_KEY = 'AIzaSyD05ceTsnEA-cGiDLVituVJlqz8ZztnzKY';

export default {
    name: 'App',
    components: {
        SearchBar,
        VideoList,
        VideoDetail,
    },
    data() {
        return {
            videos: [],
            selectedVideo: null,
        };
    },
    methods: {
        onTermChange: function(searchTerm) {
            axios.get('https://www.googleapis.com/youtube/v3/search', {
                params: {
                    key: API_KEY,
                    type: 'video',
                    part: 'snippet',
                    q: searchTerm,
                }
            }).then(response => this.videos = response.data.items);
        },
        onVideoSelect(video) {
            this.selectedVideo = video;
        }
    }
}
</script>
export const YOUTUBE_API_KEY="AIzaSyBmFLBv2rHPqlnxbI7DtefTM3xRZtEQV0c";


export const YOUTUBE_API="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+YOUTUBE_API_KEY;

export const YOUTUBE_VEDIO_ID="https://www.googleapis.com/youtube/v3/videos?id=VIDEO_ID&key="+YOUTUBE_API_KEY+"&part=snippet&part=statistics"

export const YOUTUBE_CATEGORIES="https://www.googleapis.com/youtube/v3/search?part=snippet?part=statistics&type=video&videoCategoryId=Your_Category_ID_Here&key="

export const YOUTUBE_SEARCH_SUGGEST="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="
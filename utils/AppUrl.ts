const LOCALHOST = '192.168.1.103:8081';
const AppUrl = {
    LOGIN : 'http://'+LOCALHOST+'/user/login',
    REGISTER : 'http://'+LOCALHOST+'/user/register',

    getAllCategories: 'http://'+LOCALHOST+'/category/',
    getAlbumByIdCategory: 'http://'+LOCALHOST+'/category/',

    getAllAlbum: 'http://'+LOCALHOST+'/album/',
    getByIdAlbum: 'http://'+LOCALHOST+'/album/',
    getFirstSong: 'http://'+LOCALHOST+'/album/getfirst',

    getByIdSong: 'http://'+LOCALHOST+'/song/',
    getAllSongs: 'http://'+LOCALHOST+'/song/',
    findByText: 'http://'+LOCALHOST+'/song/search',

    getAllTypes: 'http://'+LOCALHOST+'/type/',
    getAllArtists: 'http://'+LOCALHOST+'/artist/',
    
}
export default AppUrl;
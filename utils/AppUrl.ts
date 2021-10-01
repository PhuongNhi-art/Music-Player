const LOCALHOST = '192.168.1.103:8081';
const AppUrl = {
    // LOCALHOST: '192.168.1.103:8081',
    LOGIN : 'http://'+LOCALHOST+'/user/login',
    REGISTER : 'http://'+LOCALHOST+'/user/register',
    getAllCategories: 'http://'+LOCALHOST+'/category/',
    getAlbumByIdCategory: 'http://'+LOCALHOST+'/category/',
    getAllAlbum: 'http://'+LOCALHOST+'/album/',
    getByIdAlbum: 'http://'+LOCALHOST+'/album/',
    getByIdSong: 'http://'+LOCALHOST+'/song/',

}
export default AppUrl;
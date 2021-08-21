export default function auth({ next , store}){

    console.log('auth midd')
    if(!store.getters['auth/check']) return next('/')
    else return next();

}
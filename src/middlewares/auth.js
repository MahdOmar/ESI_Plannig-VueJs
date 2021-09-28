export default function auth({ next , store}){

    
    if(!store.getters['auth/check']) return next('/')
    else return next();

}
export default function guest({next, store}){


    
    if (store.getters['auth/token']) return next('dashboard/welcome')
    else {
       
        return next();
    }
}
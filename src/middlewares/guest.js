export default function guest({next, store}){


    console.log('runniiiiiiiiiiiiiiing')
    if (store.getters['auth/token']) return next('dashboard/users')
    else {
        console.log('elseeeeeeeee')
        return next();
    }
}
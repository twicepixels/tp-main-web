export function isLoggedin() {
    let result:any = !!localStorage.getItem('token');
    return !!localStorage.getItem('token');
}
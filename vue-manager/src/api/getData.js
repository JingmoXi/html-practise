import fetch from '@/config/fetch'

//登录
export const login = data => fetch('/post/all', data, 'POST');

export const dataStatic = data => fetch('/data/static', data, 'GET');

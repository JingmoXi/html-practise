import fetch from '@/config/fetch'

//登录
export const login = data => fetch('/post/all', data, 'POST');

export const dataStatic = data => fetch('/data/static', data, 'GET');

export const userList = data => fetch('/user/list', data, 'GET');

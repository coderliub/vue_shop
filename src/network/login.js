import { request } from '@/network/request'

export function post (loginForm) {
  return request({
    url: '/home/multidata',
    method: 'post'
  })
}

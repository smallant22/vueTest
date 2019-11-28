import request from '@/utils/axios'

export function login (params) {
  return request({
    url: '/api/login',
    method: 'post',
    data: params
  })
}

export function logout (params) {
  return request({
    url: '/user/logout',
    method: 'get',
    data: params
  })
}

export function getUserInfo (params) {
  return request({
    url: '/monitor/flexEdge/page/' + params.orgId + '/' + params.pageNum + '/' + params.pageSize,
    method: 'get',
    data: params
  })
}

export function getUserList (params) {
  return request({
    url: '/api/user/query/system',
    method: 'post',
    data: params
  })
}

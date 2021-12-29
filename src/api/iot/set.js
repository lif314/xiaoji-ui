
import request from '@/utils/request'

// 查询设备配置列表
export function listSet(query) {
  return request({
    url: '/device/set/list',
    method: 'get',
    params: query
  })
}

// 查询设备配置详细
export function getSet(deviceSetId) {
  return request({
    url: '/device/set/' + deviceSetId,
    method: 'get'
  })
}

// 查询设备最新配置
export function getNewSet(deviceId){
  return request({
    url:'device/set/new/'+deviceId,
    method:'get'
  })
}

// 新增设备配置
export function addSet(data) {
  return request({
    url: '/device/set',
    method: 'post',
    data: data
  })
}

// 修改设备配置
export function updateSet(data) {
  return request({
    url: '/device/set',
    method: 'put',
    data: data
  })
}

// 删除设备配置
export function delSet(deviceConfigId) {
  return request({
    url: '/device/set/' + deviceConfigId,
    method: 'delete'
  })
}

// 导出设备配置
export function exportSet(query) {
  return request({
    url: '/device/set/export',
    method: 'get',
    params: query
  })
}

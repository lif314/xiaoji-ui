
import request from '@/utils/request'

// 查询设备状态列表
export function listStatus(query) {
  return request({
    url: '/device/status/list',
    method: 'get',
    params: query
  })
}

// 查询设备状态详细
export function getStatus(deviceStatusId) {
  return request({
    url: '/device/status/' + deviceStatusId,
    method: 'get'
  })
}

// 查询设备最新状态
export function getNewStatus(deviceId){
  return request({
    url:'/device/status/new/'+deviceId,
    method:'get'
  })
}

// 新增设备状态
export function addStatus(data) {
  return request({
    url: '/device/status',
    method: 'post',
    data: data
  })
}

// 修改设备状态
export function updateStatus(data) {
  return request({
    url: '/device/status',
    method: 'put',
    data: data
  })
}

// 删除设备状态
export function delStatus(deviceStatusId) {
  return request({
    url: '/device/status/' + deviceStatusId,
    method: 'delete'
  })
}

// 导出设备状态
export function exportStatus(query) {
  return request({
    url: '/device/status/export',
    method: 'get',
    params: query
  })
}

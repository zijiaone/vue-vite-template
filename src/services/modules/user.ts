import http from '../http';

// 用户信息类型
interface UserInfo {
  id: number;
  name: string;
  avatar: string;
  email: string;
  phone: string;
}

/**
 * 获取用户信息
 * @returns 用户信息
 */
export function getUserInfo() {
  return http.get<UserInfo>('/api/user/info');
}

/**
 * 更新用户信息
 * @param id 用户ID
 * @param data 用户数据
 * @returns 更新结果
 */
export function updateUser(id: number, data: Partial<UserInfo>) {
  return http.put<UserInfo>(`/api/user/${id}`, data);
}

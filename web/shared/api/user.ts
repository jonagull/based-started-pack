import { UpdateUserRdto } from '@shared'
import { ApiResponse } from '@shared'
import apiClient from './client'

export const userApi = {
  updateUser: async (data: UpdateUserRdto): Promise<void> => {
    const response = await apiClient.put<ApiResponse<object>>('/api/user/update', data)
    if (!response.data.success) {
      throw new Error(response.data.message || 'Failed to update user')
    }
  },
}

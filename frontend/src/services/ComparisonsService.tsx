/* eslint-disable no-useless-catch */
import authAxios from "../utilities/AuthAxios";

class ComparisonsService {
  async getAllComparisonsById(userId: string) {
    try {
      const response = await authAxios.get(
        `/comparisons/get-comparison/${userId}`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async deleteComparison(comparisonId: string) {
    try {
      const response = await authAxios.delete(
        `/comparisons/delete-comparison/${comparisonId}`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export const comparisonsService = new ComparisonsService();

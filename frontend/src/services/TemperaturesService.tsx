import authAxios from "../utilities/AuthAxios";

class TemperaturesService {
	async getAllTemperatures() {
		try {
			const response = await authAxios.get("/temperatures/");
			// The response should contain the token and role upon successful login
			return {
				success: true,
				token: response.data.token,
				user: response.data.user,
				role: response.data.role,
				message: response.data.message,
			};
		} catch (error) {
			throw error;
		}
	}
}

export const usersService = new TemperaturesService();

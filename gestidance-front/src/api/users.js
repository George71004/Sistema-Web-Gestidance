export const getUsers = async () => {
    try {
        const response = await fetch('http://localhost:5000/api/users');
        if (!response.ok) {
            throw new Error('Error al obtener los usuarios');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
};

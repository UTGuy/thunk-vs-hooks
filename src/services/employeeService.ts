export const fetchEmployees = async () => {
    const response = await fetch('https://randomuser.me/api/?results=10');
    if (!response.ok) {
        throw new Error('Failed to fetch employees');
    }
    return response.json();
};
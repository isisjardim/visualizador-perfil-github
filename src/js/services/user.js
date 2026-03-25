import { baseUrl } from "../variables.js";

async function getUser(userName) {
    const response = await fetch(`${baseUrl}/users/${userName}`);
    return await response.json();
}

export { getUser };

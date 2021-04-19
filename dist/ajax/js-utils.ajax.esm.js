function create(axios) {
    return axios.create({
        timeout: 60 * 1000,
    });
}

export { create };

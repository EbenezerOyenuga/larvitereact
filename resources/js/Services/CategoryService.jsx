class CategoryService {
    getAll() {
        console.log(axios.get('api/categories').then(response => console.log(response.data.data )));
        return axios.get('api/categories');
    }
}

export default new CategoryService;

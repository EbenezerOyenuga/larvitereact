import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CompaniesCreate from "../Pages/Companies/Create";
import CompaniesIndex from "../Pages/Companies/Index";
import PostsIndex from "../Pages/Posts";
import PostsCreate from "../Pages/Posts/Create";
import PostsEdit from "../Pages/Posts/Edit";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PostsIndex />}></Route>
                <Route path="/posts/create" element={<PostsCreate />}></Route>
                <Route path="/posts/edit/:id" element={<PostsEdit />}></Route>
                <Route path="/companies/create" element={<CompaniesCreate />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;

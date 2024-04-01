import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAllCategories } from '../api';
import { Preloader } from '../components/Preloader';
import { CategoryList } from '../components/CategotyList';
import { Search } from '../components/Search';

function Home() {
    const [catalog, setCatalog] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [filteredCatalog, setFilteredCatalog] = useState([]);

    let { pathname, search } = useLocation();
    const navigate = useNavigate();

    const handleSearch = (str) => {
        search = `?search=${str}`;
        setFilteredCatalog(
            catalog.filter((item) =>
                item.strCategory.toLowerCase().includes(str.toLowerCase()),
            ),
        );
        navigate(`${pathname + search}`);
    };

    useEffect(() => {
        getAllCategories().then((data) => {
            setCatalog(data.categories);
            setFilteredCatalog(
                search
                    ? data.categories.filter((item) =>
                          item.strCategory
                              .toLowerCase()
                              .includes(search.split('=')[1].toLowerCase()),
                      )
                    : data.categories,
            );
            setIsLoading(false);
        });
    }, [search]);

    return (
        <>
            <Search callBack={handleSearch} />
            {isLoading ? (
                <Preloader />
            ) : (
                <CategoryList catalog={filteredCatalog} />
            )}
        </>
    );
}

export { Home };

import { AutoComplete, Button, Card, Col, Flex, Row, Table } from 'antd';
import { useEffect, useState } from 'react';
import { getAllUser } from './http/api';
import { PER_PAGE } from './constants';
import Users from './pages/Users';
import { buildQueryString } from './utils';
import toast, { Toaster } from 'react-hot-toast';

function App() {
    const [users, setUsers] = useState([]);
    const [queryParams, setQueryParams] = useState({
        perPage: PER_PAGE,
        currentPage: 1,
    });

    const getAllUserData = async (queryString = '') => {
        const response = await getAllUser(queryString);
        const usersData = response.data;

        setUsers(usersData);
    };

    useEffect(() => {
        const queryString = buildQueryString(queryParams);
        getAllUserData(queryString);
    }, [queryParams]);

    return (
        <>
            {' '}
            <Users
                users={users}
                queryParams={queryParams}
                getAllUserData={getAllUserData}
                setQueryParams={setQueryParams}
            />
            <Toaster />
        </>
    );
}

export default App;

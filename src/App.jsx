import { AutoComplete, Button, Card, Col, Flex, Row, Table } from 'antd';
import { useEffect, useState } from 'react';
import { getAllUser } from './http/api';
import { PER_PAGE } from './constants';
import Users from './pages/Users';

function buildQueryString(queryParams) {
    const filteredParams = Object.entries(queryParams).filter(
        (item) => !!item[1]
    );

    const queryString = new URLSearchParams(filteredParams).toString();
    return queryString;
}

function App() {
    const [users, setUsers] = useState([]);
    const [queryParams, setQueryParams] = useState({
        perPage: PER_PAGE,
        currentPage: 1,
    });

    const getAllUserData = async (queryString) => {
        const response = await getAllUser(queryString);
        const usersData = response.data;

        setUsers(usersData);
    };

    useEffect(() => {
        const queryString = buildQueryString(queryParams);
        getAllUserData(queryString);
    }, [queryParams]);

    return (
        <Users
            users={users}
            queryParams={queryParams}
            setQueryParams={setQueryParams}
        />
    );
}

export default App;

import React, { useCallback, useEffect } from 'react'
import { DataTable } from './DataTable'
import { AdminParentsColumns } from './AdminParentsColumns'
import ParentApi from '../../../Service/Api/ParentApi'

export default function AdminParentList() {
    const [data, setData] = React.useState([])
    const [refreshKey, setRefreshKey] = React.useState(0)

    const fetchParents = useCallback(() => {//fetch data from backend
        ParentApi.all().then(({ data }) => {
            setData(data.data)
        });
    },[]);

    useEffect(() => {
        fetchParents();
    }, [refreshKey]);
    const handleRefresh = () => {
        setRefreshKey((prevKey) => prevKey + 1);
    }

    const handleDelete = (id) => {
        ParentApi.delete(id).then(() => {
            setData(data.filter((item) => item.id !== id));
        });
    } 
    return (
        <>
            <DataTable columns={AdminParentsColumns(handleDelete, handleRefresh)} data={data} />
        </>
    )
}
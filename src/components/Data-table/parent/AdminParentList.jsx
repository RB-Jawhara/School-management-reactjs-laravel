import React, { useEffect } from 'react'
import { DataTable } from './DataTable'
import {AdminParentsColumns } from './AdminParentsColumns'
import ParentApi from '../../../Service/Api/ParentApi'
export default function AdminParentList() {
   const [data, setData] = React.useState([])
    useEffect(() => {
        ParentApi.all().then(({data}) => {
           
            setData(data.data)
        });
    }, [])

    return (

    <>
    <DataTable columns={AdminParentsColumns} data={data}/>
    </>
    )
    }
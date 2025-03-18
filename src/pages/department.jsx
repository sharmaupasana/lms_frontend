import React, { useEffect, useState } from 'react'
import PageTitle from '../components/pageTitle'
import { getRequest } from '../services/apiService'

function Department() {

    const [datas, setDatas] = useState([])

    const getData = async() => {
        var tempData = await getRequest('department')
        setDatas(tempData['departments'])
    }


    useEffect(
        () => {
            getData()
        },
        []
    )

    return (
        <div className='flex flex-col gap-5'>
            <PageTitle title={'Department'} />

            <div className='flex gap-5'>

                <table className='bg-white shadow-md rounded w-full'>
                    <thead className='border-b border-b-primary'>
                        <tr>
                            <td className="p-4 font-semibold">Name</td>
                            <td className="p-4 font-semibold">Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            datas.map((data, index) => {
                                return (
                                    <tr key={index} className='border-b border-b-primary'>
                                        <td className="p-4">{data.name}</td>
                                        <td className="p-4 flex gap-2">
                                            <button className='bg-primary text-white px-4 py-1 rounded'>Edit</button>
                                            <button className='bg-red-500 text-white px-4 py-1 rounded'>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default Department
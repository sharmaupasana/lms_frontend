import React, { useEffect, useState } from 'react'
import PageTitle from '../components/pageTitle'
import { getRequest, postRequest } from '../services/apiService'

function Department() {

    const [datas, setDatas] = useState([])
    const [inputName, setInputName] = useState('')
    const [isEdit, setIsEdit] = useState(false)
    const [editId, setEditId] = useState('')

    const getData = async () => {
        var tempData = await getRequest('department')
        setDatas(tempData['departments'])
    }

    const addData = async() => {
        await postRequest('add-department', {departmentName: inputName})
        setInputName('')
    }

    const editData = async() => {
        await postRequest(`edit-department`, {departmentId: editId, departmentName: inputName})
        setInputName('')
        setEditId('')
        setIsEdit(false)
    }

    useEffect(
        () => {
            getData()
        },
        [datas]
    )

    return (
        <div className='flex flex-col gap-5'>
            <PageTitle title={'Department'} />

            <div className='flex flex-col gap-5'>

                {/* Adding Data */}
                <div className='bg-white flex flex-col gap-2 p-4 shadow-md rounded w-full'>
                    <h2> { isEdit ? 'Edit' : 'Add' } Department</h2>
                    <input value={inputName} onInput={(e) => setInputName(e.target.value)} type="text" placeholder='Title' className='border p-2 rounded-md border-gray-300 w-full' />
                    <div className='flex flex-wrap'>
                        {
                            isEdit ?
                            <button onClick={() => editData()} className='bg-yellow-500 px-10 text-white py-2 rounded'>Edit</button>
                            :
                            <button onClick={() => addData()} className='bg-primary px-10 text-white py-2 rounded'>Add</button>
                        }
                    </div>
                </div>

                {/* Data Indexing */}
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
                                            <button onClick={() => {
                                                setEditId(data.id)
                                                setInputName(data.name)
                                                setIsEdit(true)
                                            }} className='bg-yellow-500 text-white px-4 py-1 rounded'>Edit</button>
                                            <button onClick={() => { getRequest(`delete-department/${data.id}`) }} className='bg-red-500 text-white px-4 py-1 rounded'>Delete</button>
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
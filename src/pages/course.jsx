import React, { useEffect, useState } from 'react'
import PageTitle from '../components/pageTitle'
import { getRequest, postRequest } from '../services/apiService'
import {removeItemFromList} from '../services/generalService'

function Course() {

    const [datas, setDatas] = useState([])
    const [isEdit, setIsEdit] = useState(false)

    // Important Vairables
    const [departments, setDepartments] = useState([])
    const [semesters, setSemesters] = useState([])

    // DB Fields
    const [idField, setIdField] = useState('')
    const [nameField, setNameField] = useState('')
    const [departmentIdField, setDepartmentIdField] = useState('')
    const [semesterIdsField, setSemesterIdsField] = useState([])

    const updateSemesterIds = (value) => {
        if (semesterIdsField.includes(value)) {
            var tempList = removeItemFromList(value, semesterIdsField)
            setSemesterIdsField(tempList)
        } else {
            semesterIdsField.push(value)
        }
    }  

    const getData = async () => {
        var tempData = await getRequest('course')
        setDatas(tempData['courses'])
        setDepartments(tempData['departments'])
        setSemesters(tempData['semesters'])
    }

    const addData = async() => {
        await postRequest('add-course', {name: nameField, department: departmentIdField, semesters: semesterIdsField})
        setNameField('')
        setDepartmentIdField('')
        setSemesterIdsField([])
        setSemesters([])
        getData()
    }

    const editData = async() => {
        // await postRequest(`edit-course`, {id: idField})
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
            <PageTitle title={'Course'} />

            <div className='flex flex-col gap-5'>

                {/* Adding Data */}
                <div className='bg-white flex flex-col gap-2 p-4 shadow-md rounded w-full'>
                    <h2> { isEdit ? 'Edit' : 'Add' } Course</h2>
                    <input value={nameField} onInput={(e) => setNameField(e.target.value)} type="text" placeholder='Title' className='border p-2 rounded-md border-gray-300 w-full' />
                    
                    <select value={departmentIdField} onInputCapture={(e) => {setDepartmentIdField(e.target.value)}} className='border p-2 rounded-md border-gray-300 w-full' >
                        <option>-- Select Department --</option>
                        {
                            departments.map((dp) => {
                                return (
                                    <option value={dp.id}> {dp.name} </option>
                                )
                            })
                        }
                    </select>

                    <p>Semesters</p>
                    <div className='flex gap-2'>
                    {
                        semesters.map((sm, index) => {
                            return (
                                <div className='flex flex-col bg-blue-900 p-3 rounded-md'>
                                    <input onClick={(e) => updateSemesterIds(e.target.value)} value={sm.id} id={sm.id} type='checkbox' />
                                    <label for={sm.id} className='text-white'> {sm.name} </label>
                                </div>
                            )
                        })
                    }
                    </div>

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
                            <td className="p-4 font-semibold">Department</td>
                            <td className="p-4 font-semibold">Semesters</td>
                            <td className="p-4 font-semibold">Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            datas.map((data, index) => {
                                return (
                                    <tr key={index} className='border-b border-b-primary'>
                                        <td className="p-4">{data.name}</td>
                                        <td className="p-4">{data.department.name}</td>
                                        <td className="p-4">{
                                            data.semesters.map((sm, index) => {
                                                return (
                                                    <p className='bg-green-700 text-white px-4 py-2 border-b border-white'>{sm.symbol}</p>
                                                )
                                            })
                                            }</td>
                                        <td className="p-4 flex gap-2">
                                            <button onClick={() => {
                                                setIdField(data.id)
                                                setNameField(data.name)
                                                setIsEdit(true)
                                            }} className='bg-yellow-500 text-white px-4 py-1 rounded'>Edit</button>
                                            <button onClick={() => { getRequest(`delete-course/${data.id}`) }} className='bg-red-500 text-white px-4 py-1 rounded'>Delete</button>
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

export default Course
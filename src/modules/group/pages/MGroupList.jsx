import React, { useEffect, useMemo, useState } from 'react'
import { getAll as getAllGroup } from 'common/queries-fn/groups.query'
import CLoading from 'common/components/CLoading'
import { ROLE } from 'common/constant'
import { FireIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import { Link, useNavigate } from 'react-router-dom'

function MGroupList() {
    //#region data
    const { data, isLoading } = getAllGroup({}, false, { staleTime: 0 })
    const [roleOption, setRoleOption] = useState(0)
    const navigate = useNavigate()
    //#endregion

    //#region event
    useEffect(() => {
        const user = localStorage.getItem('user')
        if (!user) {
            alert('Login to use this feature')
            navigate('/auth/login')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const groups = useMemo(() => {
        let filteredGroup = []
        if (data?.data) {
            if (roleOption === 0) {
                filteredGroup = [...data?.data]
            } else {
                filteredGroup = [...data?.data].filter((item) => item.my_role === roleOption)
            }
        }
        return filteredGroup
    }, [data, roleOption])
    //#endregion

    if (isLoading) {
        return <CLoading />
    }

    return (
        <div className="mx-2 pt-10 md:mx-10 lg:mx-20 xl:mx-40 2xl:mx-60">
            <div className="bg-white p-5">
                <div className="flex items-center justify-end">
                    <label htmlFor="my-role" className="mr-2 text-base font-medium text-gray-900">
                        Role
                    </label>
                    <select
                        id="my-role"
                        className="w-40 rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                        defaultValue="0"
                        onChange={(e) => setRoleOption(parseInt(e.target.value))}
                    >
                        <option value="0">All</option>
                        <option value="1">Owner</option>
                        <option value="2">Co-owner</option>
                        <option value="3">Member</option>
                    </select>
                </div>

                <div className="container grid grid-cols-1 gap-4 p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {groups.map((group) => {
                        if (group.hasOwnProperty('my_role')) {
                            return (
                                <Link to={`/group/${group.id}`} key={group.id}>
                                    <div
                                        className="overflow-hidden rounded border border-gray-300 bg-white"
                                        // onClick={}
                                    >
                                        <div className="px-6 py-4">
                                            <div className="mb-2 text-xl font-bold">
                                                {group.name}
                                            </div>
                                            <p className="mb-2 text-base text-gray-700">
                                                {group.description}
                                            </p>
                                            <div className="text-md mb-2 flex items-center">
                                                <div>
                                                    <FireIcon className="mr-2 h-5 w-5" />
                                                </div>
                                                You are {ROLE[group.my_role]} of this group
                                                {/* {ROLE[group.my_role]} */}
                                            </div>
                                            <div className="text-md mb-2 flex items-center">
                                                <div>
                                                    <UserGroupIcon className="mr-2 h-5 w-5" />
                                                </div>
                                                {group.group_size} participants
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )
                        } else {
                            return <div key={group.id}></div>
                        }
                    })}
                </div>
            </div>
        </div>
    )
}
// {/* <div key={group.id}>
//     <p>{group.name}</p>
//     <p>{group.description}</p>
// </div> */}

export default MGroupList

import React, { FC } from 'react'
import { useParams } from 'react-router-dom'

const Edit: FC = () => {
    const { id = "" } = useParams()

    return <p>Edit</p>
}

export default Edit
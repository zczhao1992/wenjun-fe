import React, { FC } from "react";
import useLoadQuestionData from '../../../hooks/useLoadQuestionData'

const Edit: FC = () => {
    const { loading, data } = useLoadQuestionData()

    return (
        <div>
            <p>Edit</p>
            {
                loading ? <p>loading</p> : <div>{JSON.stringify(data)}</div>
            }
        </div>
    )
};

export default Edit;

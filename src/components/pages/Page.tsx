import React from 'react';
import {PagesType} from "../../data/dataState";
import {Navigate, Route, Routes, useLocation, useNavigate, useParams} from "react-router-dom";
import {Error404} from "./Error404";

type PropsType = {
    pages: PagesType[]
}

export const Page: React.FC<PropsType> = ({pages}) => {
    const params = useParams()

    const location = useLocation()
    console.log(location)
    const navigate = useNavigate()
    const onClickBackHandler = () => {
        navigate(-1)
    }
    const onClickHomeHandler = () => {
        navigate('/page/0')
    }

    return (
        <div>
            {location.pathname === '/page/0' && <div>SECRET TEXT</div>}
            {pages[Number(params.id)]
                ? <div>
                    {pages[Number(params.id)].heading}
                    {pages[Number(params.id)].about}
                    <div>
                        <button onClick={onClickBackHandler}>Back</button>
                        <button onClick={onClickHomeHandler}>Home</button>
                    </div>
                </div>
                //: <Error404/>
                : <Navigate to={'/page/error'}/>
            }

        </div>
    );
};


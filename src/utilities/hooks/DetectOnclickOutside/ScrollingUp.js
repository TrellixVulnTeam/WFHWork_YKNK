import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { isGenerateAccessToken } from "../auth/util";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../../../redux/auth/action";

const Scroll = () => {
    const Dispatch = useDispatch();
    const { generateAccessToken_Action } = Actions;
    if (!isGenerateAccessToken()) {
        Dispatch(generateAccessToken_Action());
    }
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });

    }, [pathname]);

    return null;
}


export default Scroll;
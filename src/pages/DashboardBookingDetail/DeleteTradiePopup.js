import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { ReactComponent as Close } from "../../assets/icons/icon-cancelpopup.svg";
import * as Actions from "../../redux/directory/action";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';

const DeleteTradie = ({ setDeletePopup, tradeDeleteData }) => {
    const { id } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const { singleLead } = useSelector((state) => state.directory);
    const { single_tradie_delete_request, user_single_lead_request } = Actions;


    const handleClose = () => {

        setDeletePopup(false)
    }
    const handleDelete = () => {
        dispatch(single_tradie_delete_request(tradeDeleteData));
        dispatch(user_single_lead_request({ jobid: id }));
        setDeletePopup(false)
    }





    return (
        <div>
            <section className="user-info-modal popup">
                <form className="popup__form" >
                    <h2>
                        <img src="http://78.46.210.25/tapatradieweb/assets/images/confirmmation-icon.png"
                            alt=""
                        />
                        <span
                            onClick={(e) => {
                                setDeletePopup(false)
                                e.target.parentElement.parentElement.parentElement.style.display =
                                    "none";

                            }}
                            className="Closesvg"
                            style={{ marginBottom: "123px", marginRight: "-12px" }}
                        >
                            <Close width="30px" height="30px" />
                        </span>
                    </h2>
                    <p style={{ textAlign: "center", fontSize: "24px", fontWeight: 500, marginBottom: "10px", marginTop: "-35px" }}>Are You Sure ?</p>
                    <p style={{ textAlign: "center", fontWeight: 500, marginBottom: "14px" }}>You want to delete this job.</p>
                    <div>
                        <button type="submit" className="btn-primary" onClick={() => { handleDelete() }}
                            style={{ width: "33%" }}
                        >
                            Yes
                        </button>
                        <button type="submit" className="btn-primary" onClick={() => { handleClose() }}
                            style={{ width: "33%", float: "right" }}
                        >
                            No
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
};
export default DeleteTradie;

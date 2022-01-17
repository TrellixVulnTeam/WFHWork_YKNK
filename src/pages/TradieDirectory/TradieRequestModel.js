import React, { useState, useEffect } from 'react';

// import * as Actions from '../../redux/auth/action';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { ReactComponent as Close } from '../../assets/icons/icon-cancelpopup.svg';
import DatePicker from 'react-date-picker';
import TimePicker from 'react-time-picker';
import moment from 'moment';
import * as Actions from '../../redux/directory/action';
import { useHistory } from 'react-router-dom';

const TradieRequest = ({ tradiesIds, setModelOpenTradieRequest, modelOpenTradieRequest }) => {


    const dispatch = useDispatch();
    const history = useHistory()
    const { user_to_tradie_request } = Actions
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [selectTime, setSelectTime] = useState(false);
    const [chooseTimeDate, setChooseTimeDate] = useState(false);

    const [residential, setResidential] = useState(false);
    const [commercial, setCommercial] = useState(false);
    const [tradie_type, setTradie_type] = useState([]);
    const [selectService_type, setSelectService_type] = useState({
        service_type: "",
        time: "",
        date: ""

    });

    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState('10:00');




    const onSubmit = (data) => {
        if (selectService_type.service_type === "immediately" && tradie_type.length !== 0) {

            const tradieRequest = {
                address: data.address,
                city: "Perth",
                country: "Australia",
                date: selectService_type.date,
                detail: data.detail,
                latitude: "-31.9505269",
                longitude: "115.8604572",
                postcode: "undefined",
                search: "",
                search_type: "",
                service_id: "1",
                service_type: selectService_type.service_type,
                state: "WA",
                time: selectService_type.time,
                title: data.title,
                tradie_type: tradie_type.toString(),
                tradie_id: tradiesIds.toString()
            }


            dispatch(user_to_tradie_request(tradieRequest));
            history.push("/user-bookings")

        }

        else if (selectService_type.service_type === "later" && tradie_type.length !== 0) {

            const tradieRequest = {
                address: data.address,
                city: "Perth",
                country: "Australia",
                date: moment(date).format("YYYY-MM-DD"),
                detail: data.detail,
                latitude: "-31.9505269",
                longitude: "115.8604572",
                postcode: "undefined",
                search: "",
                search_type: "",
                service_id: "1",
                service_type: selectService_type.service_type,
                state: "WA",
                time: time,
                title: data.title,
                tradie_type: tradie_type.toString(),
                tradie_id: tradiesIds.toString()
            }

            dispatch(user_to_tradie_request(tradieRequest));
            history.push("/user-bookings")


        }


    };

    const handleSelectTime = (timeOption) => {
        if (timeOption === "immediately") {
            const currentDate = moment().format("YYYY-MM-DD");
            const currentTime = moment().format("hh:mm");

            setSelectTime(true);
            setChooseTimeDate(false);
            setSelectService_type({ service_type: timeOption, date: currentDate, time: currentTime })
        }
        else if (timeOption === "later") {
            setSelectTime(false);
            setChooseTimeDate(true);
            setSelectService_type({ service_type: timeOption, date: "", time: "" })
        }
    }


    const handleTradieType = (tradieType) => {
        if (tradieType === "residential" && residential === false) {
            setResidential(true);
            setTradie_type([...tradie_type, tradieType])

        }
        else if (tradieType === "residential" && residential === true) {
            const data = tradie_type.filter(function (item) {
                return item !== tradieType
            })
            setTradie_type(data)


            setResidential(false);

        }


        else if (tradieType === "commercial" && commercial === false) {
            setCommercial(true);
            setTradie_type([...tradie_type, tradieType])
        }
        else if (tradieType === "commercial" && commercial === true) {
            const data = tradie_type.filter(function (item) {
                return item !== tradieType
            })
            setTradie_type(data)
            setCommercial(false);


        }
    }
    if (modelOpenTradieRequest) {
        document.getElementsByTagName("html")[0].classList.add("Scroll_disable_onClick")

    }




    return (
        <div >
            <section className="user-info-modal popupTradieRequest" style={{ zIndex: 3 }}>
                <form className="popupTradieRequest__form" onSubmit={handleSubmit(onSubmit)}>
                    <h2>
                        REQUEST TRADIE
                        <span
                            onClick={(e) => {
                                setModelOpenTradieRequest(false)

                            }}
                            className="Closesvg"
                        >
                            <Close width="30px" height="30px" />
                        </span>
                    </h2>


                    <div className="input-group" style={{ marginBottom: '1rem' }}>
                        <input
                            placeholder="Job title"
                            type="text"
                            defaultValue={""}
                            {...register('title', {
                                required: { value: true, message: 'title is required' },
                                minLength: { value: 2, message: 'min value > 3' }
                            })}
                        />
                    </div>
                    {errors.title && <span style={{ color: 'red' }}>{errors.title.message}</span>}
                    <br />
                    <div className="input-group" style={{ marginBottom: '1rem' }}>
                        <textarea
                            placeholder="Job Detail"
                            type="text"
                            defaultValue={""}
                            {...register('detail', {
                                required: { value: true, message: 'detail is required' },
                                minLength: { value: 2, message: 'min value > 3' }
                            })}
                        />
                    </div>
                    {errors.detail && <span style={{ color: 'red' }}>{errors.detail.message}</span>}
                    <br />


                    <div className="input-group" style={{ marginBottom: '1rem' }}>
                        <input
                            placeholder="Job title"
                            type="text"
                            defaultValue={"Perth WA, Australia"}
                            {...register('address', {
                                required: { value: true, message: 'address is required' },
                                minLength: { value: 2, message: 'min value > 3' }
                            })}
                        />
                    </div>
                    {errors.address && <span style={{ color: 'red' }}>{errors.address.message}</span>}
                    <br />

                    <div className="popupTradieRequest__btns">
                        <button
                            type="button"
                            onClick={() => {
                                handleSelectTime("immediately")

                            }}

                            style={{
                                color: `${selectTime ? "transparent" : "#666"}`,
                            }}
                        >
                            Immediately
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                handleSelectTime("later")
                            }}
                            style={{
                                color: `${selectTime === false ? "transparent" : "#666"}`,
                            }}
                        >
                            Choose Date
                        </button>
                    </div>
                    <br />
                    {chooseTimeDate && (
                        <div className="popupTradieRequest__dateTime" >
                            <DatePicker

                                onChange={setDate}
                                value={date}
                            />

                            <TimePicker

                                onChange={setTime}
                                value={time}
                            />
                        </div>
                    )}

                    <p>Select your tradie type</p>
                    <div className="popupTradieRequest__btns">
                        <button
                            type="button"
                            onClick={() => {
                                handleTradieType("residential")

                            }}
                            style={{
                                color: `${residential ? "transparent" : "#666"}`,
                            }}
                        >
                            Residential
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                handleTradieType("commercial")

                            }}
                            style={{
                                color: `${commercial ? "transparent" : "#666"}`,
                            }}
                        >
                            Commercial
                        </button>
                    </div>


                    <br />
                    <div popupTradieRequest__save>
                        <button type="submit" className="btn-primary"
                            style={{ padding: "20px" }}
                        >
                            Save
                        </button>
                    </div>
                </form>
            </section>
        </div >
    );
};
export default TradieRequest;

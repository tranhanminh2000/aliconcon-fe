import classNames from "classnames";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../actions";
import "./modal.scss";

const Modal = () => {
    const modal = useSelector((state) => state.modal);
    const dispatch = useDispatch();

    const handleHideModal = () => {
        dispatch(actions.hideModal());
    };

    return (
        <div className={classNames("fs-modal", { show: modal.showModal })}>
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                        {modal.title}
                    </h5>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        onClick={handleHideModal}
                    ></button>
                </div>
                <div className="modal-body">{modal.content}</div>
            </div>
            <div className={"overlay"} onClick={handleHideModal}></div>
        </div>
    );
};

export default Modal;

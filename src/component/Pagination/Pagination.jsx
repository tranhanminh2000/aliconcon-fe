import classNames from "classnames";
import React from "react";
import "./pagination.scss";

function Pagination(prop) {
    const { paginateList, handlePaginate } = prop;

    const renderPaginateListItem = (list) => {
        let xhtml = [];

        xhtml = list?.map((listItem) => {
            return (
                <li
                    className={classNames("page-item", {
                        active: listItem.active === true,
                        disabled: listItem.url === null,
                    })}
                    onClick={() => handlePaginate(listItem)}
                >
                    <span
                        className="page-link"
                        href="#"
                        tabindex="-1"
                        aria-disabled="true"
                        dangerouslySetInnerHTML={{ __html: listItem.label }}
                    ></span>
                </li>
            );
        });

        return xhtml;
    };
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                {renderPaginateListItem(paginateList)}
            </ul>
        </nav>
    );
}

export default Pagination;

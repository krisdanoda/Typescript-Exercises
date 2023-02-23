
import {personType} from "./Person";
import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';

type TableViewerTypes = {
    people: personType[];
}


function TableViewer(props: TableViewerTypes) {


    return (
        <div>
            <table>
                {props.people.map((person: personType) => {
                    return (<tr>
                            <td>
                                {person.id}
                            </td>
                            <td>
                                {person.name}
                            </td>
                            <td>
                                {person.age}
                            </td>
                            <td>
                                {person.city}
                            </td>
                        </tr>
                    )
                })
                }


            </table>


        </div>

    );
}
export default TableViewer;


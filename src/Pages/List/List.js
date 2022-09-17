import { faLessThan } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import Header from "../../Components/header/Header";
import Navbar from "../../Components/navbar/Navbar";
import './List.css'
import Search from "../../Components/searchItem/Search";
import HeaderHome from "../../Components/headerHome/HeaderHome";

export default function List() {
    const location = useLocation()
    console.log(location)
    const [destination, setDestination] = useState(location.state.destination)
    const [date, setDate] = useState(location.state.date);
    const [openDate, setOpenDate] = useState(false)
    const [options, setOptions] = useState(location.state.options)

    return (
        <>
            <Navbar />
            <HeaderHome/>
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h1 className="isItem">Search</h1>
                        <div className="isItem">
                            <label>Destination</label>
                            <input placeholder={destination} type="text" />
                        </div>
                        <div className="isItem">
                            <label>Check-in Date</label>
                            <span onClick={() => setOpenDate(!openDate)}>{`${format(
                                date[0].startDate,
                                "MM/dd/yyyy"
                            )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                            {openDate && (
                                <DateRange
                                    onChange={(item) => setDate([item.selection])}
                                    minDate={new Date()}
                                    ranges={date}
                                />
                            )}
                        </div>
                        <div className="isItem">
                            <label>Options</label>
                            <div className="isOptions">
                                <div className="isOptionItem">
                                    <span className="isOptionText">
                                        Min price <small>per night</small>
                                    </span>
                                    <input type="number" className="isOptionInput" />
                                </div>
                                <div className="isOptionItem">
                                    <span className="isOptionText">
                                        Max price <small>per night</small>
                                    </span>
                                    <input type="number" className="isOptionInput" />
                                </div>
                                <div className="isOptionItem">
                                    <span className="isOptionText">
                                        Adult
                                    </span>
                                    <input type="number" min={0} className="isOptionInput" placeholder={options.adult} />
                                </div>
                                <div className="isOptionItem">
                                    <span className="isOptionText">
                                        Children
                                    </span>
                                    <input type="number" min={0} className="isOptionInput" placeholder={options.children} />

                                </div>
                                <div className="isOptionItem">
                                    <span className="isOptionText">
                                        Room
                                    </span>
                                    <input type="number" min={1} className="isOptionInput" placeholder={options.room} />
                                </div>
                            </div>
                        </div>
                        <button>Search</button>
                    </div>
                    <div className="listResult">
<Search/>

                    </div>
                </div>
            </div>
        </>
    )
}
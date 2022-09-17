import './Headerr.css'
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaBed, FaPlane, FaCar, FaBus, FaCalendarDay, FaPerson } from 'react-icons/fa';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Headerr() {
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        },
    ]);
    // Adult
    const [openOptions, setOpenOptions] = useState(false)
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    })
    const handleOption = ((name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === 'i' ? options[name] + 1 : options[name] - 1
            }
        })
    })
    const navigate = useNavigate()
    const [destination, setDestination] = useState('')
    const handleSearch = () => {
        navigate('/hotels', { state: { destination, date, options } })
    }
    return (
        <>
            <div className='headerrContainer'>
                <img className="headerImg" src='https://cdn.pixabay.com/photo/2015/01/10/11/39/hotel-595121_960_720.jpg' />
        
                <button className='bookBtn'>Bookings</button>
                <div className='headerSearch'>
                    <div className='headerSearchItem'>
                        <FaBed className='headerIcon' />
                        <input type='text' placeholder='where are u going?'
                            onChange={(e) => setDestination(e.target.value)} className='headerSearchInput' />
                    </div>
                    <div className='headerSearchItem'>
                        <FaCalendarDay className='headerIcon' />
                        <span onClick={() => setOpenDate(!openDate)}
                            className='headerSearchText'>
                            {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                        {openDate && (<DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date} className='date'
                        />)
                        }
                    </div>
                    <div className='headerSearchItem'>
                        <FontAwesomeIcon icon={faPerson} className='headerIcon' />
                        <span onClick={() => setOpenOptions(!openOptions)}
                            className='headerSearchText'>{`${options.adult} adult. ${options.children} children. ${options.room}  room `}</span>
                        {openOptions && (<div className='options'>
                            <div className='optionItem'>
                                <span className='optionText'>Adult</span>
                                <div className='optionCounter'>
                                    <button className='optionCounterButton' disabled={options.adult <= 1} onClick={() => handleOption('adult', 'd')}>-</button>

                                    <span className='optionCounterNumber'>{options.adult}</span>
                                    <button className='optionCounterButton' onClick={() => handleOption('adult', 'i')}>+</button>
                                </div>
                            </div>
                            {/* option childern  */}
                            <div className='optionItem'>
                                <span className='optionText'>children</span>
                                <div className='optionCounter'>
                                    <button className='optionCounterButton' disabled={options.children <= 0} onClick={() => handleOption('children', 'd')}>-</button>

                                    <span className='optionCounterNumber'>{options.children}</span>
                                    <button className='optionCounterButton' onClick={() => handleOption('children', 'i')}>+</button>
                                </div>
                            </div>
                            {/* option room */}
                            <div className='optionItem'>
                                <span className='optionText'>Room</span>
                                <div className='optionCounter'>
                                    <button className='optionCounterButton' disabled={options.room <= 1} onClick={() => handleOption('room', 'd')}>-</button>

                                    <span className='optionCounterNumber'>{options.room}</span>
                                    <button className='optionCounterButton' onClick={() => handleOption('room', 'i')}>+</button>
                                </div>
                            </div>
                        </div>
                        )}
                    </div>

                    <div className='headerSearchItem'>
                        <button className='headerBtn' onClick={handleSearch}>Search</button>
                    </div>
                </div>

            </div>
        </>
    )
}
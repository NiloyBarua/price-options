import PropTypes from 'prop-types';
import { IoMdCheckmarkCircle } from "react-icons/io";


const Feature = ({feature}) => {
    return (
        <div >
            <p className='flex items-center '> <IoMdCheckmarkCircle className='text-green-500 mr-2'></IoMdCheckmarkCircle>{feature}</p>
        </div>
    );
};

Feature.propTypes = {
    option : PropTypes.string
}

export default Feature;
import FormFilterInput from '../Form/Form';
import PropTypes from "prop-types";

const FormFilterSection = ({ valueDateInput, valuePickUpInput, valueCustomerInput, setDateInput, setPickUpInput, setCustomerInput, onFilterHandler, filterCar, data, search }) => {
    return (
        <div>
            <FormFilterInput
                valueDateInput={valueDateInput}
                valuePickUpInput={valuePickUpInput}
                valueCustomerInput={valueCustomerInput}
                setDateInput={setDateInput}
                setPickUpInput={setPickUpInput}
                setCustomerInput={setCustomerInput}
                onFilterHandler={onFilterHandler}
                filterCar={filterCar}
                data={data}
                search={search}
            />
        </div>
    )
}

FormFilterSection.propTypes = {
    valueDateInput: PropTypes.string,
    valuePickUpInput: PropTypes.string,
    valueCustomerInput: PropTypes.string,
    setCustomerInput: PropTypes.func,
    setDateInput: PropTypes.func,
    setPickUpInput: PropTypes.func,
    onFilterHandler: PropTypes.func,
    filterCar: PropTypes.array,
    data: PropTypes.array,
    search: PropTypes.bool
}

export default FormFilterSection
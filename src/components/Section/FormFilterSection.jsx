/* eslint-disable react/prop-types */
import FormFilterInput from '../Form/Form'

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

export default FormFilterSection
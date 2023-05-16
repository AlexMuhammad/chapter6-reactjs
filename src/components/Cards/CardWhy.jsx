import PropTypes from "prop-types"

const CardWhy = ({ title, description, image }) => {
    return (
        <div className="w-full p-5 mr-8 border shadow-sm rounded-xl border-bnr-dark-gray">
            <div className="h-full space-y-4">
                <img src={image} alt="complete" className="w-8 h-8 " />
                <h3 className="text-base font-bnr700">{title}</h3>
                <p className="text-bnr-sm">{description}</p>
            </div>
        </div>
    )
}

CardWhy.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}

export default CardWhy
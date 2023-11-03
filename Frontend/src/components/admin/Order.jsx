import PropTypes from "prop-types"

function Order({ order }) {

    return ( 
        <div>
            <div>{order.userName}</div>
            <div></div>
        </div>
     );
}

Order.propTypes = {
    order: PropTypes.object.isRequired,
  };

export default Order;
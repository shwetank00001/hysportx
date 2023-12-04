import React, { useEffect } from "react";
import PropTypes from "prop-types";
import withRouter from "components/Common/withRouter";
import { logoutUserRequest } from "../../store/actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Logout = () => {
	const history = useNavigate();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(logoutUserRequest(history));
	}, [dispatch, history]);

	return <></>;
};

Logout.propTypes = {
  history: PropTypes.object,
};
export default withRouter(Logout);
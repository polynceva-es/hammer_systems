import React, { lazy, Suspense, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';
import { getUsersRequest } from "redux/actions/Users";
import store from "redux/store";


const Clients = ({ match }) => {
	useEffect(()=> {
		store.dispatch(getUsersRequest());
	}, [])

	return (
	  <Suspense fallback={<Loading cover="content"/>}>
		<Switch>
		  <Redirect exact from={`${match.url}`} to={`${match.url}/clients`} />
		  <Route path={`${match.url}/user-list`} component={lazy(() => import(`./user-list`))} />
		</Switch>
	  </Suspense>
	)
}

export default Clients

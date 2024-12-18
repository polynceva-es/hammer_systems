import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

export const AppViews = () => {
  return (
    <Suspense fallback={<Loading cover="content"/>}>
      <Switch>
        <Route path={`${APP_PREFIX_PATH}/home`} component={lazy(() => import(`./home`))} />
        <Route path={`${APP_PREFIX_PATH}/catalog`} component={lazy(() => import(`./catalog`))} />
        <Route path={`${APP_PREFIX_PATH}/orders`} component={lazy(() => import(`./orders`))} />
        <Route path={`${APP_PREFIX_PATH}/clients`} component={lazy(() => import(`./clients`))} />
        <Route path={`${APP_PREFIX_PATH}/planer`} component={lazy(() => import(`./planer`))} />
        <Redirect from={`${APP_PREFIX_PATH}`} to={`${APP_PREFIX_PATH}/home`} />
      </Switch>
    </Suspense>
  )
}

export default React.memo(AppViews);
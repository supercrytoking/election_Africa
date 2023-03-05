import React, { Suspense, lazy } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../_metronic/layout";
import PublicView from "./pages/PubicView";
// import {MyPage} from "./pages/MyPage";
// import {DashboardPage} from "./pages/DashboardPage";

// const GoogleMaterialPage = lazy(() =>
//   import("./modules/GoogleMaterialExamples/GoogleMaterialPage")
// );
// const ReactBootstrapPage = lazy(() =>
//   import("./modules/ReactBootstrapExamples/ReactBootstrapPage")
// );
const ECommercePage = lazy(() =>
    import("./modules/ECommerce/pages/eCommercePage")
);


export default function BasePage() {
    // useEffect(() => {
    //   console.log('Base page');
    // }, []) // [] - is required if you need only one call
    // https://reactjs.org/docs/hooks-reference.html#useeffect

    return (
        <Suspense fallback={<LayoutSplashScreen />}>
            <Switch>
                {
                    /* Redirect from root URL to /dashboard. */
                    <Redirect exact from="/" to="/" />
                }
                {/* <ContentRoute path="/dashboard" component={DashboardPage} /> */}
                {/* <ContentRoute path="/my-page" component={MyPage} /> */}
                {/* <Route path="/google-material" component={GoogleMaterialPage} /> */}
                {/* <Route path="/react-bootstrap" component={ReactBootstrapPage} /> */}
                <Route path="/management" component={PublicView} />
                <Redirect to="error/error-v1" />
            </Switch>
        </Suspense>
    );
}
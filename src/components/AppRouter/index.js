import React from 'react';
import { Switch, Route } from 'react-router-dom';

import DashboardPage from '../../pages/Dashboard';
import PacksPage from '../../pages/Packs';

export default function AppRouter() {
    return (
        <Switch>
            <Route path="/" exact={true} component={DashboardPage} />
            <Route path="/packs" component={PacksPage} />
        </Switch>
    );
}

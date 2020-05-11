import React from 'react';
import { Switch, Route } from 'react-router-dom';

import DashboardPage from '../../pages/Dashboard';
import PacksPage from '../../pages/Packs';
import FlashCardsPage from '../../pages/FlashCards';

export default function AppRouter() {
    return (
        <Switch>
            <Route path="/" exact={true} component={DashboardPage} />
            <Route path="/packs" exact={true} component={PacksPage} />
            <Route path="/packs/:id/flash-cards" component={FlashCardsPage} />
        </Switch>
    );
}

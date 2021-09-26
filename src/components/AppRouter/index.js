import React from 'react';
import { Switch, Route } from 'react-router-dom';

import DashboardPage from '../../pages/Dashboard';
import DecksPage from '../../pages/Decks';
import FlashCardsPage from '../../pages/FlashCards';

export default function AppRouter() {
    return (
        <Switch>
            <Route path="/" exact={true} component={DashboardPage} />
            <Route path="/decks" exact={true} component={DecksPage} />
            <Route path="/decks/:id/flash-cards" component={FlashCardsPage} />
        </Switch>
    );
}

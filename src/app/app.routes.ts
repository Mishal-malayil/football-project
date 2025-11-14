import { Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { Teams } from './components/teams/teams';
import { AddTeam } from './components/add-team/add-team';
import { Fixtures } from './components/fixtures/fixtures';
import { AddFixtures } from './components/add-fixtures/add-fixtures';
import { Leaderboard } from './components/leaderboard/leaderboard';


export const routes: Routes = [
    {path:'',redirectTo:'/dashboard',pathMatch:'full'},
    {path:'dashboard',component:Dashboard},
    {path:'teams',component:Teams},
    {path:'add-team',component:AddTeam},
    {path:'fixtures',component:Fixtures},
    {path:'add-fixtures',component:AddFixtures},
    {path:'leaderboard',component:Leaderboard}

];

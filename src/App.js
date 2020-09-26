import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Layout from "./components/Layout/Layout";
import MainPage from "./containers/MainPage/MainPage";
import AddContact from "./containers/AddContact/AddContact";
import EditPost from "./components/EditPost/EditPost";

const App = () => (
    <Layout>
      <Switch>
        <Route path="/" exact component={MainPage}/>
        <Route path="/addContact" component={AddContact}/>
        <Route path="/contacts/:id/edit" component={EditPost}/>
        <Route render={() => <h1>404 Not Found</h1>}/>
      </Switch>
    </Layout>
);

export default App;

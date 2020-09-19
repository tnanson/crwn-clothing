import React from 'react';
import {connect} from 'react-redux';
import {fetchCollectionStart} from '../../redux/shop/shop.actions';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';
import { Route } from 'react-router-dom';


class ShopPage extends React.Component {
    
    componentDidMount(){
        this.props.fetchCollectionStart();
    }
    render(){
        const {match, isLoaded} = this.props;
        console.log('isLoaded ', isLoaded);
        
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionStart: () => dispatch(fetchCollectionStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);
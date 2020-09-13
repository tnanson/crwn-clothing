import React from 'react';
import {connect} from 'react-redux';
import CollectionOverview from '../../components/collections-overview/collections-overview.component';
import { Route } from 'react-router-dom';
import {firestore, converCollectionsSnapshotToMap} from '../../firebase/firebase.utils';
import CollectionPage from '../collection/collection.component';
import {updateCollection} from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

    state = {
        loading: true
    };

    unsubscribeFromSnapShot = null;

    componentDidMount(){
        const collectionRef = firestore.collection('collections');

        // this.unsubscribeFromSnapShot = collectionRef.onSnapshot(async snapshot => {
        //     const collectionsMap = converCollectionsSnapshotToMap(snapshot);
        //     this.props.updateCollection(collectionsMap);
        //     this.setState({loading: false});
        // })

        collectionRef.get()
            .then(snapshot => {
                const collectionsMap = converCollectionsSnapshotToMap(snapshot);
                this.props.updateCollection(collectionsMap);
                this.setState({loading: false});
            });
    }
    
    componentWillUnmount(){
        if(this.unsubscribeFromSnapShot){
            this.unsubscribeFromSnapShot()
        }
    }
    render(){
        const {match} = this.props;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={this.state.loading} {...props}/>} />
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={this.state.loading} {...props}/>} />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollection: (collectionMap) => dispatch(updateCollection(collectionMap))
})
export default connect(null, mapDispatchToProps)(ShopPage);
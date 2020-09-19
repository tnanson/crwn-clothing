import ShopActionTypes from './shop.types';
import {firestore,converCollectionsSnapshotToMap} from '../../firebase/firebase.utils';

export const fetchCollectionStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTION_START
});

export const fetchCollectionSuccess = collectionMap => ({
    type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
    payload: collectionMap
});

export const fetchCollectionFailure = errorMsg => ({
    type: ShopActionTypes.FETCH_COLLECTION_FAILURE,
    payload: errorMsg
});

export const fetchCollectionStartAsync = () => {
    return dispatch => {
        dispatch(fetchCollectionStart());
        const collectionRef = firestore.collection('collections');
        collectionRef.get().then(snapshot => {
                const collectionsMap = converCollectionsSnapshotToMap(snapshot);
                dispatch(fetchCollectionSuccess(collectionsMap));
        }).catch(error => dispatch(fetchCollectionFailure(error.message)));
    }
};


function* actionWatcher() {

}

export default function* rootSaga() {
    yield [actionWatcher()];
}
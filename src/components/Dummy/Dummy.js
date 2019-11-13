import React, {useState} from 'react';
import "./Dummy.scss";
import {getDummyText} from "../../store/selectors/dummy.selectors";
import {connect} from "react-redux";
import {editDummyText} from "../../store/actions/dummy.actions";

const Dummy = props => {

    const [tempDummyText, setTempDummyText] = useState(null);

    return (
        <div className="dummy">
            <h1>{props.dummyText}</h1>
            <input type="text" onChange={e => setTempDummyText(e.target.value)}/>
            <button onClick={() => props.editDummyText(tempDummyText)}>Change dummy text</button>
        </div>
    );
};

const mapStateToProps = state => ({
    dummyText: getDummyText(state)
});

const mapDispatchToProps = dispatch => ({
    editDummyText: payload => dispatch(editDummyText(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dummy);
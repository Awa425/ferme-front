const url = "http://localhost:4000/troupeaux"

class simpleCard extends React.Component {
    constructor(props) {
        super(props);
    }

 

    render() {

        return (
            <div className="featured">
                <div className="featuredItem">
                    <div className="featuredContainer">
                        <span className="featuredIcons">Chevres</span>
                        {/* <span className="featuredRate">15</span> */}
                    </div>
                </div>
            </div>
        )
    }

}
var SearchBox = React.createClass({
    render: function() {
        return (
            <div className="searchBox">
                <h1> Enter a phone number! </h1>
                <form className="searchBox" onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Username" value="Search for somethin'" />
                </form>
            </div>
        );
    }
});

ReactDOM.render(
    <SearchBox/>,
    document.getElementById('content')
);

const navCol = (
    <div className="navCol">
        <ul style={{
            listStyleType: 'none',
            fontWeight: 'bold'
        }}>
            <li>Dashboard</li>
            <li>Widget</li>
            <li>Reviews</li>
            <li>Customers</li>
            <li>Online Analysis</li>
            <li>Settings</li>
        </ul>
    </div>
);

const reviews = (
    <div className="reviews">
        <div className="title">
            <h1>Reviews</h1>
        </div>
        <div className="numData">
            <h1>1,281</h1>
        </div>
    </div>
);

const averageRating = (
    <div className="avgRating"> 
        <div className="title">
            <h1>Average Rating</h1>
        </div>
        <div className="numData">
            <h1>4.6</h1>
        </div>
    </div>
);

const sentimentAnalysis = (
    <div className="sentAnalysis">
        <div className="title">
            <h1>Sentiment Analysis</h1>
        </div>
        <div className="numData">
            <h1>960</h1>
            <h1>122</h1>
            <h1>321</h1>
        </div>
    </div>
);

const websiteVisitors = (
    <div className="visitors">
        <div className="title">
            <h1>Website Visitors</h1>
        </div>
        <div className="numData">
            <h1>821</h1>
        </div>
        <div className="visitorsChart">
            
        </div>
    </div>
);

class Container extends React.Component {


    render() {
        return (
            <div className="container">
                {navCol}
                {reviews}
                {averageRating}
                {sentimentAnalysis}
                {websiteVisitors} 
            </div>
        )
    }
}

ReactDOM.render(
    <Container />,
    document.querySelector('main')
);
import "./order.less"

export const Order = () => {

    return (
        <>
            <HeadingCard HeadTitle="Your Orders" />
            <div className="rectangle-copy-12">
                <div className="item-row-1">
                    <button>All</button>
                    <button className="today">Today</button>
                    <button>This Week</button>
                    <button>This Month</button>
                </div>
                <div className="item-row-2">
                    <div className="pending">
                        <div className="left-pending">
                            <h3>  <span>180</span>Pending Orders</h3>
                        </div>
                        <div className="right-pending">
                            <div className="top-right border">
                                <h3><span>12</span>Confirmed</h3>
                            </div>
                            <div className="top-right">
                                <h3><span>20</span>Completed</h3>
                            </div>
                            {/* <div ><span>12</span><h3></h3></div> */}
                            {/* <div ><span>20</span><h3></h3></div> */}
                        </div>
                    </div>
                    <div className="pending">
                        <div className="left-pending" style={{ width: '60%' }}>
                            <h3>  <span style={{ fontSize: '15px', marginRight: '2px', fontWeight: 200 }}>₹</span><span>17,836</span>Total Sales</h3>
                        </div>
                        <div className="right-pending r-head" style={{ width: '40%' }}>
                            <h3>  <span>20</span>Orders</h3>
                        </div>
                        {/* <div ><span>12</span><h3></h3></div> */}
                    </div>
                </div>
            </div>
            <ContentCard />

        </>
    );
}
const HeadingCard = (props:any) => {
    return (
        <div className="rectangle-copy-2">
            <h1 className="head-title">{props.HeadTitle}</h1>
        </div>
    )
}
const ContentCard = () => {
    return (
        <>
            <div className="bottom-container">

                <div className="color-box-row">
                    <div className="color-box yellow-box">
                        <h3>Pending Orders</h3>
                        <h4>180</h4>
                    </div>
                    <div className="color-box blue-box">
                        <h3>Accepted</h3>
                        <h4>12</h4>
                    </div>
                    <div className="color-box green-box">
                        <h3>Ready</h3>
                        <h4>15</h4>
                    </div>
                    <div className="color-box mustard-box">
                        <h3>Out of Delivery</h3>
                        <h4>30</h4>
                    </div>
                    <div className="color-box voilet-box">
                        <h3>Completed</h3>
                        <h4>200</h4>
                    </div>
                    <div className="color-box red-box">
                        <h3>Rejected</h3>
                        <h4>200</h4>
                    </div>
                </div>
                <div className="con-sec">
                    <h3>Your Order Payment Activities</h3>
                </div>
                <div className="card-row">
                    <div className="card">
                        <div className="icon"></div>
                        <div className="text">
                            <h4>Refunding Pending</h4>
                            <div className="inline"><span>14</span><h5> Rs. 2,389</h5></div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="icon"></div>
                        <div className="text">
                            <h4>Partial Payments</h4>
                            <div className="inline-green"><span>14</span><h5> Rs. 460</h5></div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="icon"></div>
                        <div className="text">
                            <h4>Fue Payments</h4>
                            <div className="inline-green"><span>14</span><h5> Rs. 8,260</h5></div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
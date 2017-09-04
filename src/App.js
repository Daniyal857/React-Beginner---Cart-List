import React from 'react';


export class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            buyItems: ['milk', 'bread', 'fruits'],
            message: ''
        }

    }

    addItem(e){
        e.preventDefault();
        const {buyItems} = this.state;
        const newItem = this.newItem.value;

        const isOnTheList = buyItems.includes(newItem);

        if(isOnTheList) {
            this.setState({
                message: 'This Item is already on the List.'
            })
        } else {
            newItem !== '' && this.setState({
                buyItems: [...this.state.buyItems, newItem],
                message: ''
            })
        }
        this.addForm.reset();
    }

    removeItem(item){
        
        const newBuyItems = this.state.buyItems.filter(buyItems => {
            return buyItems !== item;
        })

        this.setState({
            buyItems: [...newBuyItems]
        })

        if(newBuyItems.length === 0){
            this.setState({
                message: "No items on the list, add some."
            })
        }
    }

    clearAll(){
        this.setState({
            buyItems: [],
            message: "No items on the list, add some."
        })
    }

    render() {
        const { buyItems, message } = this.state;
        return (
            <div>
                <header>
                    {/* <img src="./src/images/cartIcon.jpg" /> */}
                    <h1>Shopping List</h1>

                    <form ref={input => this.addForm = input} className="form-inline" onSubmit={(e) => {this.addItem(e)}}>
                        <div className="form-group">
                            <label className="sr-only" htmlFor="newItemInput">Add New Item</label>
                            <input ref={input => this.newItem = input} type="text" placeholder="Bread" className="form-control" id="newItemInput" />
                        </div>
                        <button type="submit" className="btn btn-primary addItemBtn">Add</button>
                    </form>

                </header>
                <div className="content">
                    {
                        (message !== '' || buyItems.length === 0) && <p className="message text-danger">{message}</p>
                    }
                    {
                    buyItems.length > 0 && 
                    <table className="table">
                        <caption>Shopping List</caption>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Item</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                buyItems.map(item => {
                                    return (
                                        <tr key={item}> 
                                            <th scope="row">1</th>
                                            <td>{item}</td>
                                            <td>
                                                <button onClick={(e) => this.removeItem(item)} type="button" className="btn btn-default btn-sm">
                                                    Remove
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                            
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="2">&nbsp;</td>
                                <td className="text-right">
                                    <button onClick={(e) => this.clearAll()} className="btn btn-default btn-sm btnClear">
                                        Clear List
                                    </button>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                    }
                </div>
            </div>
            
        )
    }
}